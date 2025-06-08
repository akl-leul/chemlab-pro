import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-gray-500 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Cookies are small text files that are stored on your device when you visit a website. They help
                  websites remember information about your visit, such as your preferences and login status, which can
                  make your next visit easier and the site more useful to you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  ChemLab uses cookies to enhance your experience and provide essential functionality. Here's how we use
                  different types of cookies:
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2 text-emerald-600 dark:text-emerald-400">Essential Cookies</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>
                      <strong>Authentication:</strong> Keep you logged in and maintain your session
                    </li>
                    <li>
                      <strong>Security:</strong> Protect against cross-site request forgery and other security threats
                    </li>
                    <li>
                      <strong>Preferences:</strong> Remember your theme preference (light/dark mode)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2 text-blue-600 dark:text-blue-400">Functional Cookies</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    These cookies enhance functionality and personalization but are not essential.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>
                      <strong>User Preferences:</strong> Remember your settings and preferences
                    </li>
                    <li>
                      <strong>Language:</strong> Store your preferred language settings
                    </li>
                    <li>
                      <strong>Recent Activity:</strong> Keep track of recently viewed elements and reactions
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2 text-purple-600 dark:text-purple-400">Analytics Cookies</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>
                      <strong>Usage Analytics:</strong> Track which features are most popular
                    </li>
                    <li>
                      <strong>Performance:</strong> Monitor website performance and loading times
                    </li>
                    <li>
                      <strong>Error Tracking:</strong> Help us identify and fix technical issues
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  We may use third-party services that set their own cookies. These services include:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Authentication Providers</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      When you sign in with Google or GitHub, these services may set their own cookies to manage your
                      authentication session.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Content Delivery Networks</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We use CDNs to deliver content faster, which may set performance-related cookies.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Analytics Services</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We may use analytics services to understand user behavior and improve our service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Browser Settings</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-500 dark:text-gray-400 mt-2">
                    <li>View and delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block third-party cookies</li>
                    <li>Clear all cookies when you close the browser</li>
                    <li>Set up notifications when cookies are being set</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Browser-Specific Instructions</h3>
                  <div className="space-y-2 text-gray-500 dark:text-gray-400">
                    <p>
                      <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                    </p>
                    <p>
                      <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                    </p>
                    <p>
                      <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                    </p>
                    <p>
                      <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Impact of Disabling Cookies</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Please note that disabling certain cookies may affect the functionality of ChemLab:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-500 dark:text-gray-400 mt-2">
                    <li>You may need to log in repeatedly</li>
                    <li>Your preferences may not be saved</li>
                    <li>Some features may not work properly</li>
                    <li>The site may not remember your previous interactions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Consent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Consent Management</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    By continuing to use ChemLab, you consent to our use of cookies as described in this policy.
                    Essential cookies are automatically enabled as they are necessary for the site to function.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Withdrawing Consent</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You can withdraw your consent at any time by adjusting your browser settings or contacting us
                    directly. However, this may affect your ability to use certain features of our service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                  new policy on this page and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Email:</strong> privacy@chemlab.com
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
