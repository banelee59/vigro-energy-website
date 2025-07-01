import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Meet the Team</h1>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
            Our leadership brings together experts in energy trading, infrastructure development, and strategic
            advisory. With a proven track record and decades of combined experience, the team is committed to creating
            accessible and dependable energy pathways throughout Africa.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Phinda Vilakazi */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Phinda Vilakazi"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Phinda Vilakazi</h3>
              <p className="text-gray-600 mb-2">VIGRO Energy</p>
              <p className="text-lg font-semibold text-gray-800 mb-6">Chief Executive Officer</p>

              <div className="text-left max-w-2xl mx-auto">
                <p className="text-gray-600 mb-4">
                  Phinda Vilakazi is an experienced executive with over 23 years of diverse experience in Oil and Gas,
                  Refining, Manufacturing, Trading, Supply, and Joint Venture management, holding key roles such as
                  Senior Vice President for a commercial B2B energy division, Managing Director of a liquid fuels and
                  gas marketing & sales business, and Vice President of an International Energy business division. Mr.
                  Vilakazi brings significant leadership experience across liquid fuels, natural gas, and renewable
                  energy value chains. His passion for business development is evident through leading diverse,
                  multi-disciplinary teams globally, with a BSc in Chemical Engineering from the University of Cape Town
                  and an MBA from GIBS, Princeton. He furthered his executive leadership training at IMD, Switzerland.
                </p>
                <p className="text-gray-600">
                  Mr. Vilakazi's global perspective is enriched by his extensive work in energy hubs in the USA, Qatar,
                  Nigeria, and various Sub-Saharan African countries. He has also served on joint venture boards in West
                  Africa, the Middle East, Mozambique, and South Africa, as well as the South African Petroleum Industry
                  Association as a board director.
                </p>
              </div>
            </div>

            {/* John Sichinga */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="John Sichinga"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">John Sichinga</h3>
              <p className="text-lg font-semibold text-gray-800 mb-6">Chief Operations Officer</p>

              <div className="text-left max-w-2xl mx-auto">
                <p className="text-gray-600 mb-4">
                  John Sichinga boasts over 35 years of comprehensive experience in the Oil and Gas, Petrochemical,
                  Electricity, and Mining Industries. His distinguished career includes 22 years with Sasol, culminating
                  in a Senior Vice President role for its Oil and Gas division. Mr. Sichinga's global footprint extends
                  across South Africa, India, the USA, Australia, Iran, Qatar, China, Libya, Uganda, Nigeria, and
                  Mozambique. His expertise further encompasses a tenure as Head of Business Operations for Globeleq, a
                  leading African Independent Power Producer, overseeing operations across the continent. Recently, he
                  served as the CEO of Lumika Renewables, a startup renewable energy company backed by AP Moller Capital
                  and Reurent.
                </p>
                <p className="text-gray-600">
                  With a Bachelor's Degree in Chemical Engineering from Birmingham University and a Post Graduate
                  Diploma from IMD Business School, Switzerland, Mr. Sichinga brings a wealth of knowledge and a track
                  record of success to his role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">News & Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Southern Africa Energy Market"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="text-sm text-gray-500 mb-2">January 15, 2025</div>
                <CardTitle className="text-xl">Southern Africa Energy Market Outlook 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Our analysis of emerging trends and opportunities in the Southern African energy sector for the coming
                  year.
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-green-700 hover:text-green-800">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Strategic Partnership"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="text-sm text-gray-500 mb-2">December 20, 2024</div>
                <CardTitle className="text-xl">New Strategic Partnership with Regional Refiners</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Vigro Energy announces key partnerships to strengthen fuel supply chains across the region.
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-green-700 hover:text-green-800">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Future of LNG in Africa"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="text-sm text-gray-500 mb-2">November 28, 2024</div>
                <CardTitle className="text-xl">The Future of LNG in Africa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Exploring the potential of liquefied natural gas to transform Africa's energy landscape.
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-green-700 hover:text-green-800">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
