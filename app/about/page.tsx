import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Beaker, Users, Target, Award, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-950 py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">About ChemLab</h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
                Revolutionizing chemistry education through AI-powered tools, interactive learning experiences, and
                comprehensive educational resources.
              </p>
              <Button asChild size="lg">
                <Link href="/register">
                  Get Started Today <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                To make chemistry accessible, engaging, and understandable for students, educators, and enthusiasts
                worldwide through cutting-edge technology and innovative learning approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 rounded-full bg-emerald-100 p-4 dark:bg-emerald-900">
                    <Beaker className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Leveraging AI and modern technology to create innovative learning experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 rounded-full bg-emerald-100 p-4 dark:bg-emerald-900">
                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle>Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Making chemistry education accessible to learners of all backgrounds and skill levels.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 rounded-full bg-emerald-100 p-4 dark:bg-emerald-900">
                    <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle>Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Providing scientifically accurate information and calculations you can trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 rounded-full bg-emerald-100 p-4 dark:bg-emerald-900">
                    <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Committed to delivering the highest quality educational tools and resources.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">What Makes ChemLab Special</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Our platform combines advanced AI technology with educational best practices to create an unparalleled
                learning experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">AI-Powered Chemical Reactions</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our advanced AI system can balance chemical equations, predict reaction products, and provide
                    comprehensive safety information in real-time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Interactive Periodic Table</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Explore all 118 elements with detailed information, 3D electron configurations, and interactive
                    visualizations that bring chemistry to life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Learning Resources</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access a growing library of educational content, research articles, and expert insights to deepen
                    your understanding of chemistry.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">10,000+</div>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Students Helped</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">118</div>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Elements Available</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">99.9%</div>
                  <p className="text-gray-500 dark:text-gray-400">Accuracy Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                ChemLab is built by a team of passionate educators, chemists, and technologists dedicated to improving
                chemistry education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">DR</span>
                  </div>
                  <CardTitle>Dr. Sarah Chen</CardTitle>
                  <CardDescription>Lead Chemist & Co-Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    PhD in Organic Chemistry from MIT. 15+ years of experience in chemical research and education.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">MJ</span>
                  </div>
                  <CardTitle>Michael Johnson</CardTitle>
                  <CardDescription>CTO & Co-Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Former Google engineer specializing in AI and machine learning applications in education.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">EP</span>
                  </div>
                  <CardTitle>Emily Parker</CardTitle>
                  <CardDescription>Head of Education</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Master's in Education Technology. Former high school chemistry teacher with 10+ years of experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-50 dark:bg-emerald-950 py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Chemistry Learning?</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                Join thousands of students and educators who are already using ChemLab to enhance their chemistry
                education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/register">Start Learning Today</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
