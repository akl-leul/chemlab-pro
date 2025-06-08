"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Beaker, BookOpen, AtomIcon, History, Star } from "lucide-react"

export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    redirect("/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {session?.user?.name}!</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Explore chemistry with our interactive tools and resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Beaker className="h-5 w-5 mr-2 text-emerald-500" />
              Reaction Calculator
            </CardTitle>
            <CardDescription>Balance chemical equations and predict outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Use AI to balance chemical reactions, predict products, and get safety information.
            </p>
            <Button asChild>
              <Link href="/reaction-calculator">Open Calculator</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <AtomIcon className="h-5 w-5 mr-2 text-emerald-500" />
              Periodic Table
            </CardTitle>
            <CardDescription>Interactive periodic table with detailed information</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Explore elements with detailed information and 3D animated electron configurations.
            </p>
            <Button asChild>
              <Link href="/periodic-table">Explore Elements</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-emerald-500" />
              Chemistry Blog
            </CardTitle>
            <CardDescription>Latest articles and research in chemistry</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Read the latest chemistry news, research papers, and educational content.
            </p>
            <Button asChild>
              <Link href="/blog">Read Articles</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <History className="h-5 w-5 mr-2 text-emerald-500" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your recent interactions and saved items</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              View your recent calculations, visited elements, and saved reactions.
            </p>
            <Button asChild>
              <Link href="/activity">View Activity</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-emerald-500" />
              Saved Items
            </CardTitle>
            <CardDescription>Your bookmarked reactions and elements</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Access your saved reactions, elements, and blog articles.
            </p>
            <Button asChild>
              <Link href="/saved">View Saved</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
