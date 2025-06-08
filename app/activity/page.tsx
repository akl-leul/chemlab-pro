"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Search, Beaker, AtomIcon, BookOpen, Clock } from "lucide-react"

export default function ActivityPage() {
  const { data: session, status } = useSession()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [activities, setActivities] = useState({
    reactions: [],
    elements: [],
    blog: [],
  })

  useEffect(() => {
    if (status === "authenticated") {
      fetchActivities()
    }
  }, [status])

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

  const fetchActivities = async () => {
    try {
      setLoading(true)
      // Simulate fetching user activities
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock data - in a real app, this would come from the API
      setActivities({
        reactions: [
          {
            id: "1",
            type: "balance",
            equation: "H₂ + O₂ → H₂O",
            balanced: "2 H₂ + O₂ → 2 H₂O",
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          },
          {
            id: "2",
            type: "predict",
            equation: "NaOH + HCl",
            products: "NaCl + H₂O",
            timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
          },
          {
            id: "3",
            type: "balance",
            equation: "C₆H₁₂O₆ + O₂ → CO₂ + H₂O",
            balanced: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
            timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
          },
        ],
        elements: [
          {
            id: "1",
            name: "Hydrogen",
            symbol: "H",
            atomicNumber: 1,
            timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
          },
          {
            id: "2",
            name: "Carbon",
            symbol: "C",
            atomicNumber: 6,
            timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
          },
          {
            id: "3",
            name: "Oxygen",
            symbol: "O",
            atomicNumber: 8,
            timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
          },
        ],
        blog: [
          {
            id: "1",
            title: "Introduction to Chemical Bonding",
            action: "liked",
            timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
          },
          {
            id: "2",
            title: "Understanding Molecular Geometry",
            action: "commented",
            timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
          },
        ],
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch activities",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      return "Less than an hour ago"
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`
    }
  }

  const filteredReactions = activities.reactions.filter(
    (reaction) =>
      reaction.equation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reaction.balanced?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reaction.products?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredElements = activities.elements.filter(
    (element) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredBlog = activities.blog.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Activity History</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Track your learning progress and interactions</p>
        </div>
        <div className="w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search activities..."
              className="pl-8 w-full md:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
        </div>
      ) : (
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Activity</TabsTrigger>
            <TabsTrigger value="reactions">Reactions</TabsTrigger>
            <TabsTrigger value="elements">Elements</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {/* Combined activities sorted by timestamp */}
            {[
              ...filteredReactions.map((r) => ({ ...r, type: "reaction" })),
              ...filteredElements.map((e) => ({ ...e, type: "element" })),
              ...filteredBlog.map((b) => ({ ...b, type: "blog" })),
            ]
              .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
              .map((activity, index) => (
                <Card key={`${activity.type}-${activity.id}`}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900">
                        {activity.type === "reaction" && (
                          <Beaker className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        )}
                        {activity.type === "element" && (
                          <AtomIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        )}
                        {activity.type === "blog" && (
                          <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        )}
                      </div>
                      <div>
                        {activity.type === "reaction" && (
                          <>
                            <p className="font-medium">
                              {activity.type === "balance" ? "Balanced" : "Predicted"} chemical reaction
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {activity.balanced || activity.products}
                            </p>
                          </>
                        )}
                        {activity.type === "element" && (
                          <>
                            <p className="font-medium">Viewed element: {activity.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {activity.symbol} - Atomic number {activity.atomicNumber}
                            </p>
                          </>
                        )}
                        {activity.type === "blog" && (
                          <>
                            <p className="font-medium">
                              {activity.action === "liked" ? "Liked" : "Commented on"} blog post
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{activity.title}</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="capitalize">
                        {activity.type}
                      </Badge>
                      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatTimeAgo(activity.timestamp)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="reactions" className="space-y-4">
            {filteredReactions.map((reaction) => (
              <Card key={reaction.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900">
                      <Beaker className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {reaction.type === "balance" ? "Balanced" : "Predicted"} chemical reaction
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {reaction.balanced || reaction.products}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{reaction.type}</Badge>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatTimeAgo(reaction.timestamp)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="elements" className="space-y-4">
            {filteredElements.map((element) => (
              <Card key={element.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900">
                      <AtomIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-medium">Viewed element: {element.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {element.symbol} - Atomic number {element.atomicNumber}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Element</Badge>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatTimeAgo(element.timestamp)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="blog" className="space-y-4">
            {filteredBlog.map((post) => (
              <Card key={post.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900">
                      <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-medium">{post.action === "liked" ? "Liked" : "Commented on"} blog post</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{post.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{post.action}</Badge>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatTimeAgo(post.timestamp)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      )}

      {!loading && filteredReactions.length === 0 && filteredElements.length === 0 && filteredBlog.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No activities found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {searchTerm ? "Try a different search term" : "Start exploring ChemLab to see your activity here"}
          </p>
        </div>
      )}
    </div>
  )
}
