import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Lightbulb, Heart, Globe, MapPin, Truck, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">About Us</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Vigro Energy was founded in 2023 with the mission of delivering sustainable, secure energy solutions
                across Southern Africa. Born out of a clear need for reliable fuel supply following the closure of
                several refineries in South Africa.
              </p>
              <p className="text-gray-600">
                Our leadership team combines decades of experience in the energy sector, working with global refiners,
                traders, and government stakeholders. The company is Black-owned and proudly South African, holding a
                Level 1 BBBEE status.
              </p>
            </div>
            <div className="relative h-80">
              <Image src="/images/about-worker.png" alt="About Vigro Energy" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What drives us:</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Centricity</h3>
                    <p className="text-gray-600">
                      We build long-term partnerships through reliability, responsiveness, and tailored service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Integrity</h3>
                    <p className="text-gray-600">
                      We operate with full transparency, guided by ethical practices in every transaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lightbulb className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600">We adopt smart, efficient strategies to meet modern energy demands.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Vigro Energy:</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Reliable Sourcing</h3>
                    <p className="text-gray-600">Global networks and partners ensure consistency and quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Regional Reach</h3>
                    <p className="text-gray-600">Supplying energy solutions across Southern Africa.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Truck className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Efficient Delivery</h3>
                    <p className="text-gray-600">We bridge supply with demand, on time and within budget.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Worker looking up at industrial facility"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Drives Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Customer Centricity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We build long-term partnerships through reliability, responsiveness, and tailored service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We operate with full transparency, guided by ethical practices in every transaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We adopt smart, efficient strategies to meet modern energy demands.</CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We uphold the highest standards of health, safety, and environmental protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Social Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We contribute to regional growth by improving access to energy and enabling economic development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Vigro Energy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Reliable Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Global networks and partners ensure consistency and quality.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Regional Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Supplying energy solutions across Southern Africa.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Efficient Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We bridge supply with demand, on time and within budget.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Sustainable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Committed to powering growth through sustainable practices.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
