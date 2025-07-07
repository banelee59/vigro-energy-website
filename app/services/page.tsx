import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Fuel, Zap, Building, TrendingUp, Handshake, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Comprehensive energy solutions designed to power Africa's future through reliable, innovative, and
            sustainable approaches.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Liquid Fuels */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                    <Fuel className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Liquid Fuels</CardTitle>
                </div>
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Liquid Fuels"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Comprehensive liquid fuel trading, sourcing, and supply chain management across Southern Africa. We
                  ensure reliable access to gasoline, diesel, jet fuel, and other refined petroleum products.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Crude oil trading and sourcing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Refined product supply</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Storage and logistics management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Supply chain optimization</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Natural Gas & LNG */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Natural Gas & LNG</CardTitle>
                </div>
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Natural Gas & LNG"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Natural gas and LNG solutions for power generation, industrial processes, and energy security. We
                  facilitate access to cleaner energy alternatives across the region.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">LNG import and distribution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Pipeline gas supply</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Power generation solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Industrial gas applications</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Infrastructure Development */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Infrastructure Development</CardTitle>
                </div>
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Infrastructure Development"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Strategic infrastructure development to enhance energy security and distribution capabilities. We
                  invest in and develop critical energy infrastructure across Southern Africa.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Storage facility development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Pipeline infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Terminal and port facilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Distribution networks</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Strategic Advisory */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Strategic Advisory</CardTitle>
                </div>
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Strategic Advisory"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Expert advisory services for energy market navigation, risk management, and strategic planning. Our
                  team brings decades of experience to help you make informed decisions.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Market analysis and insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Risk management strategies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Regulatory compliance guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Strategic planning support</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800">Learn More</Button>
              </CardContent>
            </Card>
          </div>

          {/* Mergers & Acquisitions - Full Width */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                      <Handshake className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Mergers & Acquisitions</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    M&A advisory and transaction support for energy sector consolidation and growth opportunities. We
                    help identify, evaluate, and execute strategic transactions that drive value creation.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Transaction advisory services</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Due diligence support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Valuation and financial modeling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Post-merger integration</span>
                    </li>
                  </ul>
                  <Button className="bg-green-700 hover:bg-green-800">Learn More</Button>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Mergers & Acquisitions"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Contact us today to discuss how our services can meet your energy needs and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              Contact Us Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-700 bg-transparent"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
