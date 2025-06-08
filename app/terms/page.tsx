import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-500 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  By accessing and using ChemLab, you accept and agree to be bound by the terms and provision of this
                  agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  ChemLab is an educational platform that provides chemistry learning tools, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>AI-powered chemical reaction balancing and prediction</li>
                  <li>Interactive periodic table with detailed element information</li>
                  <li>3D molecular visualizations and electron configurations</li>
                  <li>Educational blog content and community features</li>
                  <li>User account management and progress tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Account Creation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    To access certain features, you must create an account with accurate and complete information. You
                    are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Account Responsibility</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You are responsible for all activities that occur under your account. You must notify us immediately
                    of any unauthorized use of your account or any other breach of security.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Account Termination</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We reserve the right to terminate or suspend your account at any time for violations of these terms
                    or for any other reason we deem appropriate.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Acceptable Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Permitted Uses</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    ChemLab is intended for educational and research purposes. You may use our service to learn
                    chemistry, conduct academic research, and enhance your understanding of chemical concepts.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Prohibited Uses</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">You agree not to use ChemLab to:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful, offensive, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use the service for commercial purposes without permission</li>
                    <li>Create dangerous or illegal chemical compounds</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Educational Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Educational Purpose</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    ChemLab is designed for educational purposes only. The information provided should not be used as a
                    substitute for professional chemical analysis, laboratory procedures, or safety protocols.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Safety Responsibility</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Users are responsible for following proper safety procedures when conducting any chemical
                    experiments or handling chemical substances. Always consult with qualified professionals and follow
                    institutional safety guidelines.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Accuracy Disclaimer</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    While we strive for accuracy, ChemLab's AI-generated results should be verified through additional
                    sources and professional consultation before use in critical applications.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Our Content</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    All content on ChemLab, including text, graphics, logos, software, and design elements, is owned by
                    ChemLab or its licensors and is protected by copyright and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">User Content</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You retain ownership of any content you submit to ChemLab, but you grant us a license to use,
                    modify, and display your content in connection with our service.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">License to Use</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We grant you a limited, non-exclusive, non-transferable license to use ChemLab for personal,
                    educational, and non-commercial purposes in accordance with these terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy and Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Your privacy is important to us. Our collection and use of personal information is governed by our
                  Privacy Policy, which is incorporated into these terms by reference. By using ChemLab, you consent to
                  the collection and use of your information as described in our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disclaimers and Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Service Availability</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    ChemLab is provided "as is" without warranties of any kind. We do not guarantee that the service
                    will be uninterrupted, error-free, or completely secure.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Limitation of Liability</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    To the maximum extent permitted by law, ChemLab shall not be liable for any indirect, incidental,
                    special, or consequential damages arising from your use of the service.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Indemnification</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You agree to indemnify and hold ChemLab harmless from any claims, damages, or expenses arising from
                    your use of the service or violation of these terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modifications to Service and Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Service Changes</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We reserve the right to modify, suspend, or discontinue any part of ChemLab at any time without
                    notice. We may also impose limits on certain features or restrict access to parts of the service.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Terms Updates</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We may update these terms from time to time. We will notify users of material changes through our
                    service or by email. Continued use of ChemLab after changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  These terms shall be governed by and construed in accordance with the laws of the State of
                  Massachusetts, United States, without regard to its conflict of law provisions. Any disputes arising
                  under these terms shall be subject to the exclusive jurisdiction of the courts of Massachusetts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Email:</strong> legal@chemlab.com
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Address:</strong> 123 Science Drive, Cambridge, MA 02139, United States
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
