import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fuel, Zap, Building, TrendingUp, Handshake } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Liquid Fuels",
      icon: <Fuel className="h-5 w-5 text-white" />,
      image: "/services/liquid-fuels.jpg",
      url: "/services/liquid-fuels"
    },
    {
      title: "Natural Gas & LNG",
      icon: <Zap className="h-5 w-5 text-white" />,
      image: "/images/vilgro2.jpeg",
      url: "/services/natural-gas"
    },
    {
      title: "Infrastructure Development",
      icon: <Building className="h-5 w-5 text-white" />,
      image: "/services/infrastructure.jpg",
      url: "/services/infrastructure"
    },
    {
      title: "Strategic Advisory",
      icon: <TrendingUp className="h-5 w-5 text-white" />,
      image: "/services/advisory.jpg",
      url: "/services/strategic-advisory"
    },
    {
      title: "Mergers & Acquisitions",
      icon: <Handshake className="h-5 w-5 text-white" />,
      image: "/services/mergers.jpg",
      url: "/services/mergers-acquisitions"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Our Services</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Comprehensive energy solutions designed to power Africa's future through innovation and sustainability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link href={service.url} key={index} passHref>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col cursor-pointer border border-gray-200">
                  <CardHeader className="p-4 pb-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex-grow">
                    <div className="relative h-40 rounded-md overflow-hidden mb-3">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/request-quote" passHref>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-green-700"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}