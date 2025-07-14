import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Increased spacing between columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-16">

          {/* 1. Company Info & Contact */}
          <div>
            <div className="flex items-center mb-3">
              <Image
                src="/images/log.png"
                alt="Vilgro Energy Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-lg font-bold">Vilgro Energy</span>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              Providing Energy Solutions Anywhere, Anytime, Across Africa.
            </p>

            <div className="mb-3">
              <p className="text-gray-400 text-sm font-semibold">Address:</p>
              <p className="text-gray-400 text-sm">
                Block B Cullinan Office Park,<br />
                Cullinan Close, Morningside,<br />
                Sandton, 2057
              </p>
            </div>

            <div className="mb-3">
              <p className="text-gray-400 text-sm font-semibold">Email:</p>
              <p className="text-gray-400 text-sm">
                info@vilgro.com<br />
                sales@vilgro.com
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm font-semibold">Phone:</p>
              <p className="text-gray-400 text-sm">
                +27 (71) 683 8744<br />
                +27 72 612 3618
              </p>
            </div>
          </div>

          {/* 2. Services */}
          <div>
            <h3 className="text-base font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/consultation" className="text-gray-300 hover:text-white transition-colors">Liquid Fuels</Link></li>
              <li><Link href="/consultation" className="text-gray-300 hover:text-white transition-colors">Natural Gas & LNG</Link></li>
              <li><Link href="/consultation" className="text-gray-300 hover:text-white transition-colors">Infrastructure Development</Link></li>
              <li><Link href="/consultation" className="text-gray-300 hover:text-white transition-colors">Strategic Advisory</Link></li>
              <li><Link href="/consultation" className="text-gray-300 hover:text-white transition-colors">Mergers & Acquisitions</Link></li>
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News & Insights</Link></li>
            </ul>
          </div>

          {/* 4. Follow Us */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-green-300">Follow Us</h3>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 bg-blue-700 hover:bg-green-600 rounded-full transition duration-300 shadow mb-2"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Vilgro Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
