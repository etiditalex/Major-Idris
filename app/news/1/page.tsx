import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Major Idris Meets with Right Honorable Raila Odinga | Major Idris',
  description: 'Strategic meeting with ODM Party Leader and former Prime Minister of Kenya to discuss Nyali constituency development priorities.',
  openGraph: {
    title: 'Major Idris Meets with Right Honorable Raila Odinga',
    description: 'Strategic meeting with ODM Party Leader and former Prime Minister of Kenya to discuss Nyali constituency development priorities.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758276117/Majro_Idris_with_Raila_Odinga_ewljai.jpg'],
  },
}

const NewsPostPage = () => {
  const post = {
    id: 1,
    title: 'Major Idris Meets with Right Honorable Raila Odinga',
    excerpt: 'Strategic meeting with ODM Party Leader and former Prime Minister of Kenya to discuss Nyali constituency development priorities.',
    image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758276117/Majro_Idris_with_Raila_Odinga_ewljai.jpg',
    category: 'Political Meetings',
    date: '2024-01-20',
    readTime: '4 min read',
    author: 'Major Idris Team',
    content: `
      <p class="text-lg text-gray-600 mb-6">In a significant political development, Major Idris recently held a strategic meeting with the Right Honorable Raila Odinga, ODM Party Leader and former Prime Minister of Kenya, to discuss critical development priorities for Nyali constituency.</p>
      
      <h2 class="text-2xl font-heading font-bold text-gray-900 mb-4 mt-8">Meeting Highlights</h2>
      
      <p class="mb-4">The meeting, which took place in a cordial atmosphere, focused on several key areas that are crucial for the continued development and prosperity of Nyali constituency. Both leaders emphasized the importance of collaborative efforts in addressing the needs of the local community.</p>
      
      <h3 class="text-xl font-heading font-semibold text-gray-900 mb-3 mt-6">Key Discussion Points</h3>
      
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li><strong>Infrastructure Development:</strong> Plans for improved road networks, water supply systems, and public facilities</li>
        <li><strong>Youth Empowerment:</strong> Strategies to create more employment opportunities and skills development programs</li>
        <li><strong>Healthcare Access:</strong> Initiatives to enhance medical services and healthcare accessibility for all residents</li>
        <li><strong>Economic Growth:</strong> Support for local businesses and entrepreneurship development</li>
        <li><strong>Environmental Conservation:</strong> Coastal protection and sustainable development initiatives</li>
      </ul>
      
      <h3 class="text-xl font-heading font-semibold text-gray-900 mb-3 mt-6">Political Collaboration</h3>
      
      <p class="mb-4">The meeting underscored the importance of political unity and collaboration in driving meaningful change. Major Idris expressed his commitment to working closely with the ODM party leadership to ensure that Nyali constituency receives the attention and resources it deserves.</p>
      
      <p class="mb-4">Right Honorable Raila Odinga commended Major Idris for his dedication to community service and his innovative approach to addressing local challenges. He pledged continued support for development initiatives that will benefit the people of Nyali.</p>
      
      <h3 class="text-xl font-heading font-semibold text-gray-900 mb-3 mt-6">Looking Forward</h3>
      
      <p class="mb-4">This meeting marks the beginning of a strengthened partnership between Major Idris and the ODM party leadership, with both parties committed to working together for the betterment of Nyali constituency. The discussions have laid the groundwork for several upcoming initiatives that will be announced in the coming weeks.</p>
      
      <p class="mb-6">Major Idris remains committed to his vision of "Championing Health, Community & Progress for Nyali" and will continue to engage with key political leaders to ensure that the constituency's interests are well represented at all levels of government.</p>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
        <p class="text-orange-800 font-medium">"This meeting represents a significant step forward in our efforts to bring about positive change in Nyali. I am grateful for the support and guidance of Right Honorable Raila Odinga, and I look forward to working together to deliver on our promises to the people." - Major Idris</p>
      </div>
    `
  }

  const relatedPosts = [
    {
      id: 2,
      title: 'Major Idris Holds Strategic Meeting with ODM Party Secretary Edwin Sifuna',
      excerpt: 'High-level discussions on party strategy and constituency development initiatives.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220086/WhatsApp_Image_2025-09-18_at_9.26.19_PM_2_ttriec.jpg',
      category: 'Political Meetings',
      date: '2024-01-18'
    },
    {
      id: 3,
      title: 'Major Idris Launches New Healthcare Initiative for Nyali',
      excerpt: 'A comprehensive healthcare program targeting vulnerable populations.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_18_ea4mss.jpg',
      category: 'Healthcare',
      date: '2024-01-15'
    },
    {
      id: 4,
      title: 'Youth Skills Development Program Reaches 500 Participants',
      excerpt: 'The Walk Movement\'s flagship youth program continues to grow.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_16_bivkhm.jpg',
      category: 'Youth Development',
      date: '2024-01-10'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-primary-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/news" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-white/80">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center text-white/80">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center text-white/80">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-12">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Share Buttons */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Articles */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <Link
                      key={relatedPost.id}
                      href={`/news/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-contain rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-heading font-semibold text-gray-900 group-hover:text-primary-500 transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mb-1">{relatedPost.category}</p>
                          <p className="text-xs text-gray-400">
                            {new Date(relatedPost.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-orange-500 to-primary-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-heading font-bold mb-3">Stay Updated</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Get the latest news and updates from Major Idris directly in your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-orange-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPostPage
