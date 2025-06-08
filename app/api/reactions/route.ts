import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (id) {
      const reaction = await prisma.reaction.findUnique({
        where: { id },
      })

      if (!reaction || reaction.userId !== session.user.id) {
        return NextResponse.json({ error: "Reaction not found" }, { status: 404 })
      }

      return NextResponse.json(reaction)
    }

    const reactions = await prisma.reaction.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(reactions)
  } catch (error) {
    console.error("Error fetching reactions:", error)
    return NextResponse.json({ error: "Failed to fetch reactions" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { reactants, products, balanced, safety, description } = await request.json()

    if (!reactants || !products || !balanced) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const reaction = await prisma.reaction.create({
      data: {
        userId: session.user.id,
        reactants,
        products,
        balanced,
        safety,
        description,
      },
    })

    return NextResponse.json(reaction, { status: 201 })
  } catch (error) {
    console.error("Error creating reaction:", error)
    return NextResponse.json({ error: "Failed to create reaction" }, { status: 500 })
  }
}
