import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-[#1b1b83] to-[#1b1b83]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
            {/* Left side - Content */}
            <div className="text-white">
              {/* Company name with enhanced styling */}
              <div className="mb-8">
                <h1 className="text-6xl font-bold mb-2 text-white drop-shadow-lg">
                  Vilgro Energy
                </h1>
                <div className="w-24 h-1 bg-green-500 mb-6"></div>
              </div>
              
              {/* Main value proposition with improved typography */}
              <div className="mb-10 space-y-6">
                <p className="text-2xl font-semibold leading-relaxed text-white drop-shadow-md">
                  Addressing South Africa and SADC's energy security by enabling trade, infrastructure, and expertise in both liquid fuels and gas markets.
                </p>
                
                {/* Mission statement with emphasis */}
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border-l-4 border-green-500">
                  <p className="text-xl font-medium text-green-100 mb-3">
                    "Contributing to solving Africa's Energy Security, One Shipment at a Time."
                  </p>
                  <p className="text-lg text-gray-100">
                    We trade, develop, and advise on energy solutions for Southern Africa and beyond.
                  </p>
                </div>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 shadow-lg transition-all duration-300 hover:shadow-xl">
                  Learn More About Us
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-blue-900 hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 transition-all duration-300"
                >
                  Our Products
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-full min-h-[400px] flex items-end justify-end">
              <div className="relative w-80 h-80">
                <Image
                  src="/images/cargo2.jpeg"
                  alt="Industrial worker at energy facility"
                  fill
                  className="object-cover"
                  priority
                  style={{ border: 'none', outline: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome To Vilgro Energy</h2>
                <div className="w-16 h-1 bg-green-600"></div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Vilgro Energy is a South African-based energy company, committed to delivering sustainable energy
                  solutions across Southern Africa. We specialize in crude oil trading, refined petroleum products, and
                  natural gas supply, ensuring reliable energy access for communities and industries.
                </p>
                <p className="text-lg">
                  Our experienced team combines decades of expertise in energy trading, infrastructure development, and
                  strategic advisory. With a proven track record and decades of combined experience, the team is committed
                  to creating accessible and dependable energy pathways throughout Africa.
                </p>
              </div>
              
              <div className="mt-8">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 shadow-md transition-all duration-300 hover:shadow-lg">
                  Learn More About Us
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
               src="/images/pic 1.jpeg"
                alt="Energy facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products: What We Offer</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy solutions tailored for Southern Africa's diverse market needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Crude Oil"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Crude Oil</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-8 text-gray-600 leading-relaxed">
                  We are at the forefront of crude oil trading, providing advanced supply chain management of diverse
                  fuel streams and their supply. Sourcing crude oil from various regions, we ensure consistent supply to
                  meet diverse energy needs across the continent.
                </CardDescription>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Refined Petroleum"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Refined Petroleum</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-8 text-gray-600 leading-relaxed">
                  Our refined petroleum products meet the highest quality standards. From gasoline to diesel, we ensure
                  reliable supply chains for transportation, industrial, and commercial applications across Southern
                  Africa.
                </CardDescription>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Natural Gas and LNG"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Natural Gas and LNG</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-8 text-gray-600 leading-relaxed">
                  We provide natural gas and LNG solutions for power generation, industrial processes, and residential
                  use. Our expertise in gas infrastructure development ensures efficient and sustainable energy
                  distribution.
                </CardDescription>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}