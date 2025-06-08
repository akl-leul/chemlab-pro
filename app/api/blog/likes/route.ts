import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { postId } = await request.json()

    if (!postId) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 })
    }

    // Check if post exists
    const post = await prisma.blogPost.findUnique({
      where: { id: postId },
    })

    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    // Check if user already liked the post
    const existingLike = await prisma.like.findFirst({
      where: {
        blogPostId: postId,
        userId: session.user.id,
      },
    })

    if (existingLike) {
      // If like exists, remove it (unlike)
      await prisma.like.delete({
        where: { id: existingLike.id },
      })

      return NextResponse.json({ liked: false })
    } else {
      // If like doesn't exist, create it
      await prisma.like.create({
        data: {
          blogPostId: postId,
          userId: session.user.id,
        },
      })

      return NextResponse.json({ liked: true })
    }
  } catch (error) {
    console.error("Error toggling like:", error)
    return NextResponse.json({ error: "Failed to toggle like" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get("postId")

    if (!postId) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 })
    }

    // Get like count
    const likeCount = await prisma.like.count({
      where: { blogPostId: postId },
    })

    // Check if current user liked the post
    let userLiked = false
    if (session?.user) {
      const like = await prisma.like.findFirst({
        where: {
          blogPostId: postId,
          userId: session.user.id,
        },
      })
      userLiked = !!like
    }

    return NextResponse.json({ count: likeCount, userLiked })
  } catch (error) {
    console.error("Error fetching likes:", error)
    return NextResponse.json({ error: "Failed to fetch likes" }, { status: 500 })
  }
}
