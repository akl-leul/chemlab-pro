import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-500 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Personal Information</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    When you create an account, we collect your name, email address, and password. If you sign in with a
                    third-party service (Google, GitHub), we receive basic profile information from that service.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Usage Data</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We collect information about how you use ChemLab, including the reactions you calculate, elements
                    you view, and articles you read. This helps us improve our services and provide personalized
                    experiences.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Technical Information</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We automatically collect certain technical information, including your IP address, browser type,
                    device information, and usage patterns to ensure our service works properly and securely.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Service Provision</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We use your information to provide, maintain, and improve ChemLab's features, including AI-powered
                    calculations, personalized recommendations, and user account management.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Communication</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We may send you service-related emails, such as account verification, password resets, and important
                    updates about our service. You can opt out of promotional emails at any time.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Analytics and Improvement</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We analyze usage patterns to understand how our service is used, identify areas for improvement, and
                    develop new features that benefit our users.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Third-Party Services</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We use trusted third-party services for authentication (Google, GitHub), hosting (Vercel), and
                    database management (PostgreSQL). These services have their own privacy policies and security
                    measures.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Legal Requirements</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We may disclose your information if required by law, court order, or government regulation, or to
                    protect the rights, property, or safety of ChemLab, our users, or others.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Business Transfers</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the
                    new entity, subject to the same privacy protections.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Security Measures</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We implement industry-standard security measures to protect your personal information, including
                    encryption, secure servers, and regular security audits.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Password Protection</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Your passwords are encrypted using bcrypt hashing, and we never store or have access to your
                    plain-text passwords.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Data Breach Response</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    In the unlikely event of a data breach, we will notify affected users and relevant authorities as
                    required by law and take immediate steps to secure the affected systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Access and Portability</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You have the right to access, download, and export your personal data. You can view and manage your
                    information through your account settings.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Correction and Updates</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You can update your personal information at any time through your profile settings. If you need
                    assistance, please contact our support team.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Deletion</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You can delete your account at any time. Upon deletion, we will remove your personal information,
                    though some data may be retained for legal or operational purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Essential Cookies</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We use essential cookies to maintain your session, remember your preferences, and ensure the
                    security of our service. These cookies are necessary for ChemLab to function properly.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Analytics</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We may use analytics tools to understand how our service is used and to improve user experience.
                    These tools may use cookies and similar technologies.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Cookie Control</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You can control cookies through your browser settings, though disabling certain cookies may affect
                    the functionality of ChemLab.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  ChemLab is designed for educational use and may be used by students under 18 with parental consent. We
                  do not knowingly collect personal information from children under 13 without verifiable parental
                  consent. If you believe we have collected information from a child under 13, please contact us
                  immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  ChemLab is hosted in the United States. If you are accessing our service from outside the US, please
                  be aware that your information may be transferred to, stored, and processed in the US where our
                  servers are located and our central database is operated.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  We may update this privacy policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify users of any material changes by email or
                  through our service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
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
