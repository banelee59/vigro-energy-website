import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-3">
              <Image
                src="/images/log.jpeg" // ✅ Replace this with your logo path
                alt="Vilgro Energy Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-lg font-bold">Vilgro Energy</span>
            </div>
            <p className="text-gray-300 text-sm">
              Providing Energy Solutions Anywhere, Anytime, Across Africa.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/consultation" className="text-gray-300 hover:text-white transition-colors">
                  Consultation
                </Link>
              </li>
              {/* Add more services if needed */}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  News & Insights
                </Link>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2 text-green-300">Follow Us</h4>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 bg-blue-700 hover:bg-green-600 rounded-full transition duration-300 shadow"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Vilgro Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
