"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Search, Beaker, AtomIcon, BookOpen, Trash2, ExternalLink } from "lucide-react"

export default function SavedPage() {
  const { data: session, status } = useSession()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [savedItems, setSavedItems] = useState({
    reactions: [],
    elements: [],
    articles: [],
  })

  useEffect(() => {
    if (status === "authenticated") {
      fetchSavedItems()
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

  const fetchSavedItems = async () => {
    try {
      setLoading(true)
      // Simulate fetching saved items
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock data - in a real app, this would come from the API
      setSavedItems({
        reactions: [
          {
            id: "1",
            equation: "2 H₂ + O₂ → 2 H₂O",
            type: "Combustion",
            description: "Hydrogen combustion reaction",
            savedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          },
          {
            id: "2",
            equation: "NaOH + HCl → NaCl + H₂O",
            type: "Neutralization",
            description: "Acid-base neutralization",
            savedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          },
          {
            id: "3",
            equation: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
            type: "Cellular Respiration",
            description: "Glucose oxidation",
            savedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        ],
        elements: [
          {
            id: "1",
            name: "Carbon",
            symbol: "C",
            atomicNumber: 6,
            category: "nonmetal",
            savedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          },
          {
            id: "2",
            name: "Iron",
            symbol: "Fe",
            atomicNumber: 26,
            category: "transition-metal",
            savedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
          },
          {
            id: "3",
            name: "Oxygen",
            symbol: "O",
            atomicNumber: 8,
            category: "nonmetal",
            savedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
          },
        ],
        articles: [
          {
            id: "1",
            title: "Introduction to Chemical Bonding",
            slug: "introduction-to-chemical-bonding",
            excerpt: "Understanding the fundamental concepts of how atoms bond together...",
            savedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          },
          {
            id: "2",
            title: "Understanding Molecular Geometry",
            slug: "understanding-molecular-geometry",
            excerpt: "Explore the three-dimensional shapes of molecules and their properties...",
            savedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          },
        ],
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch saved items",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleRemoveItem = async (type: string, id: string) => {
    try {
      // Simulate removing item
      setSavedItems((prev) => ({
        ...prev,
        [type]: prev[type].filter((item) => item.id !== id),
      }))

      toast({
        title: "Item removed",
        description: "The item has been removed from your saved list",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove item",
        variant: "destructive",
      })
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const filteredReactions = savedItems.reactions.filter(
    (reaction) =>
      reaction.equation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reaction.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredElements = savedItems.elements.filter(
    (element) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredArticles = savedItems.articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Saved Items</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Your bookmarked reactions, elements, and articles</p>
        </div>
        <div className="w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search saved items..."
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
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="reactions">Reactions</TabsTrigger>
            <TabsTrigger value="elements">Elements</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {/* Combined saved items sorted by savedAt */}
            {[
              ...filteredReactions.map((r) => ({ ...r, type: "reaction" })),
              ...filteredElements.map((e) => ({ ...e, type: "element" })),
              ...filteredArticles.map((a) => ({ ...a, type: "article" })),
            ]
              .sort((a, b) => b.savedAt.getTime() - a.savedAt.getTime())
              .map((item) => (
                <Card key={`${item.type}-${item.id}`}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900">
                        {item.type === "reaction" && (
                          <Beaker className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        )}
                        {item.type === "element" && (
                          <AtomIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        )}
                        {item.type === "article" && (
                          <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        {item.type === "reaction" && (
                          <>
                            <p className="font-medium">{item.equation}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                            <Badge variant="outline" className="mt-1">
                              {item.type}
                            </Badge>
                          </>
                        )}
                        {item.type === "element" && (
                          <>
                            <p className="font-medium">
                              {item.name} ({item.symbol})
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Atomic number: {item.atomicNumber}
                            </p>
                            <Badge variant="outline" className="mt-1 capitalize">
                              {item.category.replace("-", " ")}
                            </Badge>
                          </>
                        )}
                        {item.type === "article" && (
                          <>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.excerpt}</p>
                          </>
                        )}
                        <p className="text-xs text-gray-400 mt-1">Saved on {formatDate(item.savedAt)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.type === "article" && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/blog/${item.slug}`}>
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Read
                          </Link>
                        </Button>
                      )}
                      {item.type === "element" && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/periodic-table">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </Link>
                        </Button>
                      )}
                      {item.type === "reaction" && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/reaction-calculator">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Open
                          </Link>
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleRemoveItem(item.type === "reaction" ? "reactions" : item.type + "s", item.id)
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="reactions" className="space-y-4">
            {filteredReactions.map((reaction) => (
              <Card key={reaction.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{reaction.equation}</CardTitle>
                  <CardDescription>{reaction.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{reaction.type}</Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Saved on {formatDate(reaction.savedAt)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/reaction-calculator">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Open
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveItem("reactions", reaction.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="elements" className="space-y-4">
            {filteredElements.map((element) => (
              <Card key={element.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    {element.name} ({element.symbol})
                  </CardTitle>
                  <CardDescription>Atomic number: {element.atomicNumber}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="capitalize">
                        {element.category.replace("-", " ")}
                      </Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Saved on {formatDate(element.savedAt)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/periodic-table">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveItem("elements", element.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="articles" className="space-y-4">
            {filteredArticles.map((article) => (
              <Card key={article.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Saved on {formatDate(article.savedAt)}
                    </span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${article.slug}`}>
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Read
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveItem("articles", article.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      )}

      {!loading && filteredReactions.length === 0 && filteredElements.length === 0 && filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No saved items found</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {searchTerm
              ? "Try a different search term"
              : "Start saving reactions, elements, and articles to see them here"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/reaction-calculator">Explore Reactions</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/periodic-table">Browse Elements</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Read Articles</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
