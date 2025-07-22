import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Linkedin } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  linkedin: string;
}

async function getArticles(): Promise<Article[]> {
  try {
    // In a production environment, you would fetch from your CMS or API here
    // Example:
    // const res = await fetch('https://your-api-endpoint.com/articles');
    // if (!res.ok) throw new Error('Failed to fetch articles');
    // return await res.json();

    // Fallback static data
    return [
      {
        id: 1,
        title: "Southern Africa Energy Market Outlook 2025",
        excerpt: "Our comprehensive analysis of emerging trends and opportunities in the Southern African energy sector for the coming year.",
        date: "January 15, 2025",
        category: "Market Analysis",
        image: "/images/news2.jpg",
        linkedin: "https://www.linkedin.com/company/vigro-energy/posts/southern-africa-energy-market-outlook-2025"
      },
      {
        id: 2,
        title: "New Strategic Partnership with Regional Refiners",
        excerpt: "Vigro Energy announces key partnerships to strengthen fuel supply chains across the region and enhance energy security.",
        date: "December 20, 2024",
        category: "Partnership",
        image: "/images/news3.jpg",
        linkedin: "https://www.linkedin.com/company/vigro-energy/posts/strategic-partnership-regional-refiners"
      },
      {
        id: 3,
        title: "The Future of LNG in Africa",
        excerpt: "Exploring the potential of liquefied natural gas to transform Africa's energy landscape and drive economic growth.",
        date: "November 28, 2024",
        category: "Industry Insights",
        image: "/images/news4.jpeg",
        linkedin: "https://www.linkedin.com/company/vigro-energy/posts/future-lng-africa"
      }
    ];
  } catch (error) {
    console.error('Error fetching articles:', error);
    // Return minimal fallback data if both API and static data fail
    return [
      {
        id: 0,
        title: "Latest Energy Insights",
        excerpt: "We couldn't load the latest articles. Please check back soon for updates.",
        date: new Date().toLocaleDateString(),
        category: "Update",
        image: "/images/news-fallback.jpg",
        linkedin: "https://www.linkedin.com/company/vigro-energy"
      }
    ];
  }
}

export default async function NewsPage() {
  const articles = await getArticles();
  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">News & Insights</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Stay updated with the latest developments in the energy sector, market insights, and Vigro Energy's
            contributions to Africa's energy landscape.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4" />
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Featured</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h2>
              <p className="text-gray-600 mb-6">
                {featuredArticle.excerpt} {featuredArticle.id !== 0 && "We explore market dynamics, regulatory changes, and investment opportunities that will shape the industry."}
              </p>
              <div className="flex space-x-4">
                {featuredArticle.id !== 0 && (
                  <Button className="bg-green-700 hover:bg-green-800">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
                <a 
                  href={featuredArticle.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-white hover:bg-gray-50"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  {featuredArticle.id !== 0 ? "Share" : "Visit Us"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <CardHeader className="flex-1">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="mb-4 line-clamp-3">{article.excerpt}</CardDescription>
                  <div className="flex justify-between items-center mt-auto">
                    {article.id !== 0 && (
                      <Button variant="link" className="p-0 h-auto text-green-700 hover:text-green-800">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                    <a 
                      href={article.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      title={article.id !== 0 ? "View on LinkedIn" : "Visit our LinkedIn"}
                      aria-label={article.id !== 0 ? `Share ${article.title} on LinkedIn` : "Visit Vigro Energy on LinkedIn"}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Enable Incremental Static Regeneration (ISR)
export const revalidate = 3600; // Revalidate every hour