import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const slug = searchParams.get("slug")

    if (id) {
      const post = await prisma.blogPost.findUnique({
        where: { id },
        include: {
          _count: {
            select: {
              comments: true,
              likes: true,
            },
          },
        },
      })
      return NextResponse.json(post)
    }

    if (slug) {
      const post = await prisma.blogPost.findUnique({
        where: { slug },
        include: {
          _count: {
            select: {
              comments: true,
              likes: true,
            },
          },
        },
      })
      return NextResponse.json(post)
    }

    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { title, content, slug, image, published } = await request.json()

    if (!title || !content || !slug) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if slug already exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug },
    })

    if (existingPost) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 })
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        content,
        slug,
        image,
        published: published || false,
        authorId: session.user.id,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 })
  }
}
