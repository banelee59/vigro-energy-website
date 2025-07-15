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
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Powering Africa's Future Through <span className="text-blue-600">Energy Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
            At Vilgro Energy, we believe energy is more than just a commodity — it's the heartbeat of progress, industry, and everyday life. Born from a shared vision of bold, independent leadership in the African energy landscape, we are a proudly Level 1 BBBEE company with a singular focus: securing Africa's energy future.</p>

            <p className="text-lg text-gray-600 leading-relaxed">In a region where the shutdown of crude refineries and a deepening electricity crisis have made South Africa and its neighbours increasingly dependent on imported fuels, we saw more than just a challenge — we saw an opportunity. An opportunity for local ownership, for African-led solutions, and for a trusted partner to reshape the region's energy narrative.
            </p>
          </div>
          <div className="md:w-1/2 relative h-80 w-80 rounded-xl overflow-hidden shadow-lg">
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
<section className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading with decorative elements */}
    <div className="text-center mb-16">
      <span className="inline-block text-lg font-semibold text-[#1b1b83] mb-2">
        OUR JOURNEY
      </span>
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Our <span className="text-[#1b1b83]">Story</span>
      </h2>
      <div className="flex justify-center">
        <div className="w-24 h-1.5 bg-[#1b1b83] rounded-full"></div>
        <div className="w-4 h-1.5 bg-yellow-400 rounded-full ml-1"></div>
      </div>
    </div>

    {/* Content with improved typography */}
    <div className="max-w-6xl mx-auto ">
      <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
        <p className="text-xl text-gray-800 font-medium">
          Our work is grounded in <span className="text-[#1b1b83] font-semibold">reliability</span>, <span className="text-[#1b1b83] font-semibold">innovation</span>, and <span className="text-[#1b1b83] font-semibold">collaboration</span>.
        </p>
        
        <p>
          We've built strong, strategic alliances with global refiners, traders, national oil companies, and governments—relationships forged through trust, consistency, and a deep understanding of complex markets.
        </p>
        
        <div className="relative pl-6 border-l-4 border-[#1b1b83]">
          <p className="italic text-gray-900">
            From crude and refined product sourcing to storage, logistics, and transport, our expertise spans the full energy value chain.
          </p>
        </div>
        
        <p className="text-xl text-gray-800 font-medium">
          We don't just move energy; we <span className="text-[#1b1b83]">unlock its potential</span>—designing tailored supply strategies that keep industries moving and economies growing.
        </p>
      </div>
    </div>

    {/* Optional decorative element */}
    <div className="flex justify-center mt-16">
      <div className="w-32 h-0.5 bg-gray-200"></div>
    </div>
  </div>
</section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
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
        <div className="max-w-6xl mx-auto px-4">
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

     
{/* Meet our team */}
      <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-6">
        Our dedicated team of professionals drives our mission forward with expertise, integrity, and passion.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Team Member 1 */}
      <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left">
        <img
           src="/images/ceo.png"
          alt="Team Member 1"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900">Phinda Vilakazi</h3>
        <p className="text-blue-600">Chief Executive Officer</p>
        <p className="mt-2 text-gray-600 text-sm">
          Jane brings 20 years of leadership in energy and infrastructure projects across Africa.
        </p>
      </div>
      {/* Team Member 2 */}
      <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left">
        <img
           src="/images/coo.png"
          alt="Team Member 2"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900">John Sichinga</h3>
        <p className="text-blue-600">Chief Operating Officer</p>
        <p className="mt-2 text-gray-600 text-sm">
          John oversees our operations, ensuring efficient and sustainable energy solutions.
        </p>
      </div>
      {/* Team Member 3 */}
      <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member 3"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900">Sarah Lee</h3>
        <p className="text-blue-600">Chief Financial Officer</p>
        <p className="mt-2 text-gray-600 text-sm">
          Sarah manages our financial strategy, driving growth and sustainability.
        </p>
      </div>
      {/* Team Member 4 */}
      <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member 4"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900">Michael Brown</h3>
        <p className="text-blue-600">Head of Development</p>
        <p className="mt-2 text-gray-600 text-sm">
          Michael leads project development and implementation with innovative solutions.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}