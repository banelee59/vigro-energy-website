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
    }, 3000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              sizes="100vw"
              quality={100}
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-70" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 backdrop-blur-sm" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                VILGRO ENERGY
              </h1>
              <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
            </div>

            {/* Tagline */}
            <div className="space-y-4">
              <p className="text-lg md:text-2xl text-white font-medium leading-snug">
                Contributing towards solving Africa's Energy Security, One Shipment at a Time.
              </p>
              <p className="text-base md:text-lg text-green-300 font-light tracking-wide">
                We trade, develop, and advise on energy solutions for Southern Africa and beyond.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-xl shadow-md transition"
                >
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  Our Products
                </Button>
              </Link>
            </div>

            {/* Image indicators */}
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
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
     {/* Mission & Vision Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Title
    <h2 className="text-4xl font-bold text-left text-[#00A651] mb-12">
      Welcome to Vilgro Energy
    </h2> */}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column: Mission & Vision Text */}
      <div className="space-y-12">
        <div>
          <h3 className="text-3xl font-bold text-[#00A651] mb-4">Our Mission</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            To power Africa's future through reliable and sustainable energy solutions.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#00A651] mb-4">Our Vision</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            To be a trusted partner in enabling access to reliable, innovative, and cleaner energy solutions across
            Africa—powering progress, resilience, and shared prosperity.
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="flex justify-center">
        <img
          src="/images/pic 1.jpeg" // replace with your actual image path
          alt="Mission and Vision"
          className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[500px]"
        />
      </div>
    </div>
  </div>
</section>



{/* Our Products/Services Section */}
<section className="py-16" style={{ backgroundColor: "#1b1b83" }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white mb-4">What We Do / Services</h2>
      <div className="w-24 h-1 bg-white mx-auto"></div>
    </div>

    {/* Services Flex Row - Force single line */}
    <div className="flex flex-row flex-nowrap justify-between space-x-6 overflow-x-auto">
      {/* Service 1 */}
      <div className="w-1/5 min-w-[200px] text-center">
        <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/images/wrench.png" 
            alt="Liquid Fuels" 
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Liquid Fuels</h3>
        <p className="text-white text-sm leading-relaxed">
          Comprehensive liquid fuel trading, sourcing, and supply chain management across Southern Africa.
        </p>
      </div>

      {/* Service 2 */}
      <div className="w-1/5 min-w-[200px] text-center">
        <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/images/process.png" 
            alt="Natural Gas & LNG" 
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Natural Gas & LNG</h3>
        <p className="text-white text-sm leading-relaxed">
          Natural gas and LNG solutions for power generation, industrial processes, and energy security.
        </p>
      </div>

      {/* Service 3 */}
      <div className="w-1/5 min-w-[200px] text-center">
        <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/images/investment.png" 
            alt="Infrastructure Development" 
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Infrastructure Development</h3>
        <p className="text-white text-sm leading-relaxed">
          Strategic infrastructure development to enhance energy security and distribution capabilities.
        </p>
      </div>

      {/* Service 4 */}
      <div className="w-1/5 min-w-[200px] text-center">
        <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/images/operator.png" 
            alt="Strategic Advisory" 
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Strategic Advisory</h3>
        <p className="text-white text-sm leading-relaxed">
          Expert advisory services for energy market navigation, risk management, and strategic planning.
        </p>
      </div>

      {/* Service 5 */}
      <div className="w-1/5 min-w-[200px] text-center">
        <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/images/protection.png" 
            alt="Mergers & Acquisitions" 
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Mergers & Acquisitions</h3>
        <p className="text-white text-sm leading-relaxed">
          M&A advisory and transaction support for energy sector consolidation and growth opportunities.
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
