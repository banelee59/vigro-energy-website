import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function NewsPage() {
  const articles = [
    {
      id: 1,
      title: "Southern Africa Energy Market Outlook 2025",
      excerpt:
        "Our comprehensive analysis of emerging trends and opportunities in the Southern African energy sector for the coming year.",
      date: "January 15, 2025",
      category: "Market Analysis",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "New Strategic Partnership with Regional Refiners",
      excerpt:
        "Vigro Energy announces key partnerships to strengthen fuel supply chains across the region and enhance energy security.",
      date: "December 20, 2024",
      category: "Partnership",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "The Future of LNG in Africa",
      excerpt:
        "Exploring the potential of liquefied natural gas to transform Africa's energy landscape and drive economic growth.",
      date: "November 28, 2024",
      category: "Industry Insights",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Sustainable Energy Solutions for Southern Africa",
      excerpt: "How Vigro Energy is contributing to sustainable development goals through innovative energy solutions.",
      date: "November 10, 2024",
      category: "Sustainability",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Energy Infrastructure Development in Africa",
      excerpt:
        "The critical role of infrastructure investment in unlocking Africa's energy potential and economic development.",
      date: "October 25, 2024",
      category: "Infrastructure",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "Crude Oil Trading Strategies in Volatile Markets",
      excerpt:
        "Expert insights on navigating market volatility and optimizing crude oil trading strategies in uncertain times.",
      date: "October 12, 2024",
      category: "Trading",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">News & Insights</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Stay updated with the latest developments in the energy sector, market insights, and Vigro Energy's
            contributions to Africa's energy landscape.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96">
              <Image
                src="/images/vilgro2.jpeg"
                alt="Featured article"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2025</span>
                <span>•</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Featured</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Southern Africa Energy Market Outlook 2025</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive analysis of emerging trends and opportunities in the Southern African energy sector
                for the coming year. We explore market dynamics, regulatory changes, and investment opportunities that
                will shape the industry.
              </p>
              <Button className="bg-green-700 hover:bg-green-800">
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative h-48 mb-4">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">{article.category}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">{article.excerpt}</CardDescription>
                  <Button variant="link" className="p-0 h-auto text-green-700 hover:text-green-800">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-green-100 mb-8">
            Subscribe to our newsletter for the latest energy market insights and company updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
            />
            <Button className="bg-white text-green-700 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
