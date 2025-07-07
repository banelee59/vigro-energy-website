import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Lightbulb, Heart, Zap, Globe, Network, Gauge, Leaf, Building2, Factory } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
            {/* Left side - Content */}
            <div className="text-white">
              {/* Company name with enhanced styling */}
              <div className="mb-8">
                <h1 className="text-6xl font-bold mb-2 text-white drop-shadow-lg">Vilgro Energy</h1>
                <div className="w-24 h-1 bg-green-400 mb-6"></div>
              </div>

              {/* Main value proposition with improved typography */}
              <div className="mb-10 space-y-6">
                <p className="text-2xl font-semibold leading-relaxed text-white drop-shadow-md">
                Contributing towards solving Africa’s Energy Security, One Shipment at a Time.

                </p>

                {/* Mission statement with emphasis */}
                <div className="bg-blue-800/40 backdrop-blur-sm rounded-lg p-6 border-l-4 border-green-400">
                  <p className="text-xl font-medium text-green-100 mb-3">
                  We trade, develop, and advise on energy solutions for Southern Africa and beyond.
                  </p>
                  <p className="text-lg text-blue-100">
                  Our focus is on addressing South Africa and SADC's energy security by enabling trade, infrastructure, and expertise in both liquid fuels and gas markets.

                  </p>
                </div>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Learn More About Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-blue-900 font-semibold px-8 py-3 transition-all duration-300 bg-transparent"
                >
                  Our Products
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-blue-800/20 backdrop-blur-sm rounded-2xl p-4 border border-green-400/30">
                  <div className="relative h-80 w-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/pic 1.jpeg"
                      alt="Industrial worker at energy facility"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
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
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-blue-200">At the core of Vilgro Energy is a commitment to:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center bg-white/95 backdrop-blur-sm border-green-400/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Customer Centricity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We exist to serve and empower our customers.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm border-green-400/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We operate with honesty, transparency, and accountability.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm border-green-400/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We pioneer smart, forward-looking energy solutions that lead the way toward a more secure,
                  lower-carbon future.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm border-green-400/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We place the safety of our people, partners, and communities above all else.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm border-green-400/30 hover:shadow-xl transition-all duration-300 lg:col-start-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Social Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe energy must drive not only economies—but also social progress and community development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Products/Services Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">What We Do / Services</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-green-400">
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="images/vilgro2.jpeg" 
                    alt="Liquid Fuels"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-blue-900">Liquid Fuels</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  Comprehensive liquid fuel trading, sourcing, and supply chain management across Southern Africa.
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-green-400">
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="images/pic3.jpg" 
                    alt="Natural Gas & LNG"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-blue-900">Natural Gas & LNG</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  Natural gas and LNG solutions for power generation, industrial processes, and energy security.
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-green-400">
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Infrastructure Development"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-blue-900">Infrastructure Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  Strategic infrastructure development to enhance energy security and distribution capabilities.
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-green-400">
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Strategic Advisory"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-blue-900">Strategic Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  Expert advisory services for energy market navigation, risk management, and strategic planning.
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-green-400 lg:col-start-2">
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Mergers & Acquisitions"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-blue-900">Mergers & Acquisitions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  M&A advisory and transaction support for energy sector consolidation and growth opportunities.
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work with Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Work with Us?</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Reliable Security of Supply</h3>
              <p className="text-gray-600">
                Ensuring consistent and dependable energy supply chains across the region.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Network className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Strategic Networks</h3>
              <p className="text-gray-600">Leveraging global partnerships and local expertise for optimal solutions.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Gauge className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Agility & Expertise</h3>
              <p className="text-gray-600">Rapid response capabilities backed by decades of industry experience.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Energy Transition</h3>
              <p className="text-gray-600">Supporting the transition to cleaner, more sustainable energy solutions.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Customer Centric Energy Solutions</h3>
              <p className="text-gray-600">
                Tailored solutions designed around your specific energy needs and challenges.
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Black-owned, proudly South African company</h3>
            <p className="text-lg">
              Level 1 BBBEE status with deep local knowledge and commitment to African energy independence.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Who We Serve?</h2>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Industrial Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manufacturing, mining, and industrial operations requiring reliable energy supply.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Governments and Commercial Policymakers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Public sector entities focused on energy security and policy implementation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Global Energy Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  International energy corporations seeking African market access and partnerships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Independent Power Producers</CardTitle>
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
