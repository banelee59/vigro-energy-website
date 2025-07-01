import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ConsultationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0">
          <Image
            src="/images/pic2.jpg"
            alt="Consultation services worker"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Consultation Services</h1>
            <p className="text-xl">Expert Asset Consulting Services</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-8">
                At Vigro Energy, our extensive expertise spans trading solutions with a specialised consulting service
                for optimising your energy infrastructure through the strategic deployment of energy assets.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Understand the complexities of capital and resource energy markets</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Leverage regulatory and commercial frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Provide with reasonable solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Strategic regulatory and commercial frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Tactical and reasonable solutions in Capex</p>
                </div>
              </div>

              <Button size="lg" className="bg-green-700 hover:bg-green-800">
                Get Started
              </Button>
            </div>

            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Industrial consultation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
