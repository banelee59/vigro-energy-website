import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900">Energy Infrastructure Development</h1>
              <p className="text-xl mb-8 text-gray-600">
                Building Africa's energy backbone to power economic growth.
              </p>
              <Button className="bg-green-700 hover:bg-green-800 text-white">
                Discuss Your Project
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/services/infrastructure-hero.jpg"
                alt="Energy Infrastructure"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Infrastructure Solutions</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Storage Terminals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Strategic bulk storage with modern automation and safety systems.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Pipeline Networks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Efficient fuel transportation reducing road congestion.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">LNG Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Regasification terminals and small-scale LNG solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner on Infrastructure Development</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Vilgro Energy brings capital and expertise to energy infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-green-700 hover:bg-green-800">
                Discuss Partnership
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button size="lg" variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}