import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            About Us: Powering Africa's Future, One Shipment at a Time
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Vilgro Energy, we believe energy is more than just a commodity — it's the heartbeat of progress,
                industry, and everyday life. Born from a shared vision of bold, independent leadership in the African
                energy landscape, we are a proudly Level 1 BBBEE company with a singular focus: securing Africa's energy
                future.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In a region where the shutdown of crude refineries and a deepening electricity crisis have made South
                Africa and its neighbours increasingly dependent on imported fuels, we saw more than just a challenge —
                we saw an opportunity. An opportunity for local ownership, for African-led solutions, and for a trusted
                partner to reshape the region's energy narrative.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/vilgro truck.jpeg"
                alt="About Vilgro Energy"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 lg:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Energy infrastructure"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="lg:order-1">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our work is grounded in reliability, innovation, and collaboration. We've built strong, strategic
                alliances with global refiners, traders, national oil companies, and governments—relationships forged
                through trust, consistency, and a deep understanding of complex markets.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From crude and refined product sourcing to storage, logistics, and transport, our expertise spans the
                full energy value chain. We don't just move energy; we unlock its potential—designing tailored supply
                strategies that keep industries moving and economies growing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                But we don't stop there. Our team brings decades of global experience to the table, offering advisory
                and consulting services that help our partners navigate change, manage risk, and find new pathways to
                growth.
              </p>
              <p className="text-xl text-gray-900 font-semibold">
                At Vilgro Energy, we aren't just participants in Africa's energy story—we're shaping it.
              </p>
            </div>
            <div className="relative h-96">
              <Image
               
                src="/images/pic 1.jpg"
                alt="African energy leadership"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Join us in shaping Africa's energy future through reliable, innovative, and sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn About Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
