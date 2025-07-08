import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              HOME
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-700 font-medium">ABOUT VILGRO ENERGY</span>
          </nav>
        </div>
      </section>

      {/* Main Heading - White Background */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light text-gray-600 mb-8">WHO WE ARE</h1>
        </div>
      </section>

      {/* Hero Image - White Background */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/pic 1.jpeg" alt="Vilgro Energy Operations" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Content Section 1 - Light Gray Background */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-8">Powering Africa's Future, One Shipment at a Time</h2>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-lg">
              At Vilgro Energy, we believe energy is more than just a commodity — it's the heartbeat of progress,
              industry, and everyday life. Born from a shared vision of bold, independent leadership in the African
              energy landscape, we are a proudly Level 1 BBBEE company with a singular focus: securing Africa's energy
              future.
            </p>

            <p className="text-lg">
              In a region where the shutdown of crude refineries and a deepening electricity crisis have made South
              Africa and its neighbours increasingly dependent on imported fuels, we saw more than just a challenge — we
              saw an opportunity. An opportunity for local ownership, for African-led solutions, and for a trusted
              partner to reshape the region's energy narrative.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 2 - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Our work is grounded in reliability, innovation, and collaboration. We've built strong, strategic
              alliances with global refiners, traders, national oil companies, and governments—relationships forged
              through trust, consistency, and a deep understanding of complex markets.
            </p>
            <p className="text-lg">
              From crude and refined product sourcing to storage, logistics, and transport, our expertise spans the full
              energy value chain. We don't just move energy; we unlock its potential—designing tailored supply
              strategies that keep industries moving and economies growing.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 3 - Light Gray Background */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-lg">
              But we don't stop there. Our team brings decades of global experience to the table, offering advisory and
              consulting services that help our partners navigate change, manage risk, and find new pathways to growth.
            </p>
            <div className="bg-white border-l-4 border-blue-600 p-8 rounded-r-lg shadow-sm">
              <p className="text-xl text-gray-800 font-semibold text-center">
                At Vilgro Energy, we aren't just participants in Africa's energy story—we're shaping it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Blue/Green Gradient */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join us in shaping Africa's energy future through reliable, innovative, and sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Us Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
