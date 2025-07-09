"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <section className="bg-white border-b border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">HOME</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-700 font-medium">ABOUT VILGRO ENERGY</span>
        </div>
      </section>

      {/* Hero Section with Heading and Image */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Powering Africa's Future Through <span className="text-blue-600">Energy Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
            At Vilgro Energy, we believe energy is more than just a commodity — it's the heartbeat of progress, industry, and everyday life. Born from a shared vision of bold, independent leadership in the African energy landscape, we are a proudly Level 1 BBBEE company with a singular focus: securing Africa's energy future.</p>

            <p className="text-lg text-gray-600 leading-relaxed">In a region where the shutdown of crude refineries and a deepening electricity crisis have made South Africa and its neighbours increasingly dependent on imported fuels, we saw more than just a challenge — we saw an opportunity. An opportunity for local ownership, for African-led solutions, and for a trusted partner to reshape the region's energy narrative.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[30rem]  w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/pic 1.jpeg"
              alt="Vilgro Energy Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-left mb-10">
      <h2 className="text-4xl font-extrabold text-gray-900">Our Story</h2>
      <div className="mt-2 w-20 h-1 bg-[#1b1b83] rounded"></div>
    </div>

    {/* Full Width Text */}
    <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
      <p>
        Our work is grounded in reliability, innovation, and collaboration. We've built strong, strategic alliances
        with global refiners, traders, national oil companies, and governments—relationships forged through trust,
        consistency, and a deep understanding of complex markets.
      </p>
      <p>
        From crude and refined product sourcing to storage, logistics, and transport, our expertise spans the full
        energy value chain. We don't just move energy; we unlock its potential—designing tailored supply strategies
        that keep industries moving and economies growing.
      </p>
    </div>
  </div>
</section>


      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Partnerships</h3>
              <p className="text-gray-700">
                We cultivate strong relationships with global refiners, traders, and governments to ensure reliable energy supply chains.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-End Solutions</h3>
              <p className="text-gray-700">
                From sourcing to logistics, we manage the complete value chain to deliver seamless energy solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-700">
                Our deep understanding of African markets allows us to navigate complexities and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/vilgro truck.jpeg" alt="Our Impact" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Vilgro Energy plays a vital role in keeping industries operational and economies growing across Southern Africa. Our work directly contributes to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Energy security for businesses and communities</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Job creation and skills development</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sustainable energy transition initiatives</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Local content and transformation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     

      {/* Leadership Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-6">
              With decades of combined experience in global energy markets, our leadership team brings unparalleled expertise to Africa's energy challenges.
            </p>
          </div>
          
          
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partner With Us</h2>
          <p className="text-blue-100 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
            Join Vilgro Energy in shaping Africa's energy future through reliable, innovative, and sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}