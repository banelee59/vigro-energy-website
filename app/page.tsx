"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Lightbulb, Heart, Zap, Globe, Building2, Factory, CheckCircle } from "lucide-react"

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = ["/images/pic 1.jpeg", "/images/cargo4.jpeg", "/images/cargo3.jpeg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen bg-black overflow-hidden">
        {/* Background Images with Overlay */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <Image
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Energy infrastructure background ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-70" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                VILGRO ENERGY
              </h1>
              <div className="w-32 h-1 bg-green-500 mx-auto mb-8"></div>
            </div>

            {/* Tagline */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6 leading-tight">
                Contributing towards solving Africa's Energy Security, One Shipment at a Time.
              </p>
              <p className="text-lg md:text-xl text-green-300 font-medium tracking-wide">
                We trade, develop, and advise on energy solutions for Southern Africa and beyond.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg transition-all duration-300 min-w-[200px]"
                >
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 min-w-[200px] shadow-lg hover:shadow-xl"
                >
                  Our Products
                </Button>
              </Link>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-green-500 scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To power Africa's future through reliable and sustainable energy solutions
              </p>
            </div>
            <div className="text-center lg:text-left bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To be a trusted partner in enabling access to reliable, innovative, and cleaner energy solutions across
                Africa—powering progress, resilience, and shared prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
                <Image src="/images/vilgro2.jpeg" alt="Team collaboration and values" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-full opacity-20 blur-xl"></div>
            </div>

            {/* Right side - Values List */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <div className="w-24 h-1 bg-green-500 mb-8"></div>
              <p className="text-xl text-gray-600 mb-8">At the core of Vilgro Energy is a commitment to:</p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Centricity</h3>
                    <p className="text-gray-600">We exist to serve and empower our customers.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                    <p className="text-gray-600">We operate with honesty, transparency, and accountability.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      We pioneer smart, forward-looking energy solutions that lead the way toward a more secure,
                      lower-carbon future.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety</h3>
                    <p className="text-gray-600">
                      We place the safety of our people, partners, and communities above all else.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Impact</h3>
                    <p className="text-gray-600">
                      We believe energy must drive not only economies—but also social progress and community
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Our Products/Services Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left side - Services List */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do / Services</h2>
        <div className="w-24 h-1 bg-[#1b1b83] mb-8"></div>

        <div className="space-y-8">
          {[
            {
              title: "Liquid Fuels",
              desc:
                "Comprehensive liquid fuel trading, sourcing, and supply chain management across Southern Africa.",
            },
            {
              title: "Natural Gas & LNG",
              desc:
                "Natural gas and LNG solutions for power generation, industrial processes, and energy security.",
            },
            {
              title: "Infrastructure Development",
              desc:
                "Strategic infrastructure development to enhance energy security and distribution capabilities.",
            },
            {
              title: "Strategic Advisory",
              desc:
                "Expert advisory services for energy market navigation, risk management, and strategic planning.",
            },
            {
              title: "Mergers & Acquisitions",
              desc:
                "M&A advisory and transaction support for energy sector consolidation and growth opportunities.",
            },
          ].map((service, index) => (
            <div key={index} className="border-l-4 border-[#1b1b83] pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Image aligned to bottom right and going up */}
      <div className="flex items-end justify-end relative">
        <div className="relative h-[500px] w-full max-w-md rounded-xl overflow-hidden shadow-2xl mt-[-40px]">
          <Image
            src="/images/vilgro truck.jpeg"
            alt="Energy services and infrastructure"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-32 h-32 bg-green-500 rounded-full opacity-20 blur-xl"></div>
      </div>
    </div>
  </div>
</section>

      

      {/* Why Work with Us Section - New Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Work with Us?</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Partner with Africa's leading energy solutions provider. We deliver reliable, innovative, and sustainable
              energy solutions that power progress across the continent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Security of Supply</h3>
                <p className="text-gray-600">
                  Ensuring consistent and dependable energy supply chains across the region.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Networks</h3>
                <p className="text-gray-600">
                  Leveraging global partnerships and local expertise for optimal solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agility & Expertise</h3>
                <p className="text-gray-600">Rapid response capabilities backed by decades of industry experience.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Transition</h3>
                <p className="text-gray-600">
                  Supporting the transition to cleaner, more sustainable energy solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 text-left md:col-span-2">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Centric Energy Solutions</h3>
                <p className="text-gray-600">
                  Tailored solutions designed around your specific energy needs and challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Black-owned, proudly South African company</h3>
            <p className="text-lg text-gray-600">
              Level 1 BBBEE status with deep local knowledge and commitment to African energy independence.
            </p>
          </div>

          <div>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Who We Serve?</h2>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-900">Industrial Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manufacturing, mining, and industrial operations requiring reliable energy supply.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-900">Governments and Commercial Policymakers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Public sector entities focused on energy security and policy implementation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-900">Global Energy Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  International energy corporations seeking African market access and partnerships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-900">Independent Power Producers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  IPPs requiring fuel supply and strategic advisory for power generation projects.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
