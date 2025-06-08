"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Loader2, ThumbsUp, Share2, Calendar, User } from "lucide-react"

export default function BlogPostPage() {
  const { slug } = useParams()
  const { data: session } = useSession()
  const { toast } = useToast()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [commentContent, setCommentContent] = useState("")
  const [submittingComment, setSubmittingComment] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [userLiked, setUserLiked] = useState(false)
  const [submittingLike, setSubmittingLike] = useState(false)

  useEffect(() => {
    if (slug) {
      fetchPost()
    }
  }, [slug])

  const fetchPost = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/blog?slug=${slug}`)
      const data = await response.json()

      if (!data) {
        throw new Error("Post not found")
      }

      setPost(data)
      fetchComments(data.id)
      fetchLikes(data.id)
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to fetch blog post",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(`/api/blog/comments?postId=${postId}`)
      const data = await response.json()
      setComments(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch comments",
        variant: "destructive",
      })
    }
  }

  const fetchLikes = async (postId) => {
    try {
      const response = await fetch(`/api/blog/likes?postId=${postId}`)
      const data = await response.json()
      setLikeCount(data.count)
      setUserLiked(data.userLiked)
    } catch (error) {
      console.error("Failed to fetch likes:", error)
    }
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()

    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to comment",
        variant: "destructive",
      })
      return
    }

    if (!commentContent.trim()) {
      toast({
        title: "Empty comment",
        description: "Please enter a comment",
        variant: "destructive",
      })
      return
    }

    try {
      setSubmittingComment(true)
      const response = await fetch("/api/blog/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: commentContent,
          postId: post.id,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit comment")
      }

      const newComment = await response.json()
      setComments([newComment, ...comments])
      setCommentContent("")

      toast({
        title: "Comment added",
        description: "Your comment has been added successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit comment",
        variant: "destructive",
      })
    } finally {
      setSubmittingComment(false)
    }
  }

  const handleLikeToggle = async () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to like posts",
        variant: "destructive",
      })
      return
    }

    try {
      setSubmittingLike(true)
      const response = await fetch("/api/blog/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: post.id,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to toggle like")
      }

      const data = await response.json()
      setUserLiked(data.liked)
      setLikeCount((prev) => (data.liked ? prev + 1 : prev - 1))
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to toggle like",
        variant: "destructive",
      })
    } finally {
      setSubmittingLike(false)
    }
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied",
        description: "Post link copied to clipboard",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy link",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <p className="text-gray-500 dark:text-gray-400">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Admin
            </span>
          </div>
        </header>

        {post.image && (
          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="flex items-center gap-4 mb-8">
          <Button
            variant={userLiked ? "default" : "outline"}
            onClick={handleLikeToggle}
            disabled={submittingLike}
            className="flex items-center gap-2"
          >
            {submittingLike ? <Loader2 className="h-4 w-4 animate-spin" /> : <ThumbsUp className="h-4 w-4" />}
            {likeCount} {likeCount === 1 ? "Like" : "Likes"}
          </Button>
          <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>

        <Separator className="mb-8" />

        <section>
          <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

          {session && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Add a comment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <Textarea
                    placeholder="Write your comment..."
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    rows={4}
                  />
                  <Button type="submit" disabled={submittingComment}>
                    {submittingComment ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Comment"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.user.image || "/placeholder.svg"} />
                      <AvatarFallback>{comment.user.name?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{comment.user.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {comments.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No comments yet. Be the first to comment!</p>
            </div>
          )}
        </section>
      </article>
    </div>
  )
}
