import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0">
          <Image
            src="/images/pic 1.jpg"
            alt="Industrial worker at energy facility"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Vigro Energy</h1>
            <p className="text-xl mb-8">Providing Energy Solutions Anywhere, Anytime, Across Africa.</p>
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome To Vigro Energy</h2>
              <p className="text-gray-600 mb-6">
                Vigro Energy is a South African-based energy company, committed to delivering sustainable energy
                solutions across Southern Africa. We specialize in crude oil trading, refined petroleum products, and
                natural gas supply, ensuring reliable energy access for communities and industries.
              </p>
              <p className="text-gray-600 mb-8">
                Our experienced team combines decades of expertise in energy trading, infrastructure development, and
                strategic advisory. With a proven track record and decades of combined experience, the team is committed
                to creating accessible and dependable energy pathways throughout Africa.
              </p>
              <Button className="bg-green-700 hover:bg-green-800">Learn More About Us</Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Energy facility"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Products: What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Crude Oil"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle>Crude Oil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  We are at the forefront of crude oil trading, providing advanced supply chain management of diverse
                  fuel streams and their supply. Sourcing crude oil from various regions, we ensure consistent supply to
                  meet diverse energy needs across the continent.
                </CardDescription>
                <Button className="w-full bg-green-700 hover:bg-green-800">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Refined Petroleum"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle>Refined Petroleum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  Our refined petroleum products meet the highest quality standards. From gasoline to diesel, we ensure
                  reliable supply chains for transportation, industrial, and commercial applications across Southern
                  Africa.
                </CardDescription>
                <Button className="w-full bg-green-700 hover:bg-green-800">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Natural Gas and LNG"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle>Natural Gas and LNG</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  We provide natural gas and LNG solutions for power generation, industrial processes, and residential
                  use. Our expertise in gas infrastructure development ensures efficient and sustainable energy
                  distribution.
                </CardDescription>
                <Button className="w-full bg-green-700 hover:bg-green-800">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
