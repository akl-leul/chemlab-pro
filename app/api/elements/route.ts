import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const symbol = searchParams.get("symbol")
    const atomicNumber = searchParams.get("atomicNumber")

    if (id) {
      const element = await prisma.element.findUnique({
        where: { id },
      })
      return NextResponse.json(element)
    }

    if (symbol) {
      const element = await prisma.element.findUnique({
        where: { symbol },
      })
      return NextResponse.json(element)
    }

    if (atomicNumber) {
      const element = await prisma.element.findUnique({
        where: { atomicNumber: Number.parseInt(atomicNumber) },
      })
      return NextResponse.json(element)
    }

    const elements = await prisma.element.findMany()
    return NextResponse.json(elements)
  } catch (error) {
    console.error("Error fetching elements:", error)
    return NextResponse.json({ error: "Failed to fetch elements" }, { status: 500 })
  }
}
