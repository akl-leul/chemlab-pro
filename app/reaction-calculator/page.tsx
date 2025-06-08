"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, AlertTriangle, Save } from "lucide-react"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"

export default function ReactionCalculatorPage() {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [reactants, setReactants] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{
    balanced?: string
    products?: string
    safety?: string[]
  } | null>(null)
  const [activeTab, setActiveTab] = useState("balance")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // In a real app, this would call an API endpoint that uses AI to process the reaction
      // For demo purposes, we'll simulate the AI response
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (activeTab === "balance") {
        // Simulate balancing H2 + O2 -> H2O
        if (reactants.toLowerCase().includes("h2") && reactants.toLowerCase().includes("o2")) {
          setResult({
            balanced: "2 H₂ + O₂ → 2 H₂O",
            safety: [
              "Hydrogen gas is highly flammable",
              "Oxygen supports combustion",
              "Reaction is exothermic and may produce heat",
            ],
          })
        } else {
          setResult({
            balanced: `Balanced equation: ${reactants} → Products`,
            safety: [
              "Always wear appropriate PPE when handling chemicals",
              "Ensure proper ventilation in the laboratory",
              "Follow standard laboratory safety protocols",
            ],
          })
        }
      } else if (activeTab === "predict") {
        // Simulate predicting products for NaOH + HCl
        if (reactants.toLowerCase().includes("naoh") && reactants.toLowerCase().includes("hcl")) {
          setResult({
            products: "NaOH + HCl → NaCl + H₂O",
            safety: [
              "Sodium hydroxide is corrosive",
              "Hydrochloric acid is corrosive",
              "Neutralization reaction produces heat",
            ],
          })
        } else {
          setResult({
            products: `Predicted products for ${reactants}: Various products based on reaction type`,
            safety: [
              "Always wear appropriate PPE when handling chemicals",
              "Ensure proper ventilation in the laboratory",
              "Follow standard laboratory safety protocols",
            ],
          })
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process the reaction. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSave = () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to save reactions",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would save the reaction to the database
    toast({
      title: "Reaction saved",
      description: "The reaction has been saved to your account",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Chemical Reaction Calculator</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Reaction Tool</CardTitle>
              <CardDescription>
                Balance chemical equations, predict products, and get safety information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="balance">Balance Equation</TabsTrigger>
                  <TabsTrigger value="predict">Predict Products</TabsTrigger>
                </TabsList>
                <TabsContent value="balance" className="mt-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="reactants" className="text-sm font-medium">
                        Enter Chemical Equation (unbalanced)
                      </label>
                      <Input
                        id="reactants"
                        placeholder="e.g., H2 + O2 -> H2O"
                        value={reactants}
                        onChange={(e) => setReactants(e.target.value)}
                        required
                      />
                      <p className="text-xs text-gray-500">
                        Enter the unbalanced chemical equation using chemical formulas
                      </p>
                    </div>
                    <Button type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Balancing...
                        </>
                      ) : (
                        "Balance Equation"
                      )}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="predict" className="mt-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="reactants-predict" className="text-sm font-medium">
                        Enter Reactants
                      </label>
                      <Input
                        id="reactants-predict"
                        placeholder="e.g., NaOH + HCl"
                        value={reactants}
                        onChange={(e) => setReactants(e.target.value)}
                        required
                      />
                      <p className="text-xs text-gray-500">Enter the reactants separated by + signs</p>
                    </div>
                    <Button type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Predicting...
                        </>
                      ) : (
                        "Predict Products"
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {result && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {result.balanced && (
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <h3 className="font-medium mb-2">Balanced Equation:</h3>
                    <p className="text-lg font-mono">{result.balanced}</p>
                  </div>
                )}

                {result.products && (
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <h3 className="font-medium mb-2">Predicted Products:</h3>
                    <p className="text-lg font-mono">{result.products}</p>
                  </div>
                )}

                {result.safety && (
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Safety Information</AlertTitle>
                    <AlertDescription>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        {result.safety.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={handleSave} className="flex items-center">
                  <Save className="mr-2 h-4 w-4" />
                  Save Reaction
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Balance Equations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our AI analyzes the chemical equation and applies stoichiometric principles to balance it correctly.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Predict Products</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Based on reactants, our AI predicts the most likely products using chemical reaction rules.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Safety Information</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get important safety precautions for handling the chemicals and reactions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Example Reactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div
                className="p-2 bg-gray-50 dark:bg-gray-800 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setReactants("H2 + O2 -> H2O")}
              >
                <p className="font-mono">H₂ + O₂ → H₂O</p>
                <p className="text-xs text-gray-500">Hydrogen combustion</p>
              </div>

              <div
                className="p-2 bg-gray-50 dark:bg-gray-800 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setReactants("NaOH + HCl")}
              >
                <p className="font-mono">NaOH + HCl</p>
                <p className="text-xs text-gray-500">Acid-base neutralization</p>
              </div>

              <div
                className="p-2 bg-gray-50 dark:bg-gray-800 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setReactants("C6H12O6 + O2 -> CO2 + H2O")}
              >
                <p className="font-mono">C₆H₁₂O₆ + O₂ → CO₂ + H₂O</p>
                <p className="text-xs text-gray-500">Glucose combustion</p>
              </div>

              <div
                className="p-2 bg-gray-50 dark:bg-gray-800 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setReactants("Fe + O2 -> Fe2O3")}
              >
                <p className="font-mono">Fe + O₂ → Fe₂O₃</p>
                <p className="text-xs text-gray-500">Iron oxidation (rusting)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
