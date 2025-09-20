import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Major Idris Holds Strategic Meeting with ODM Party Secretary Edwin Sifuna | Major Idris',
  description: 'High-level discussions on party strategy and constituency development initiatives with ODM Party Secretary General.',
  openGraph: {
    title: 'Major Idris Holds Strategic Meeting with ODM Party Secretary Edwin Sifuna',
    description: 'High-level discussions on party strategy and constituency development initiatives with ODM Party Secretary General.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220086/WhatsApp_Image_2025-09-18_at_9.26.19_PM_2_ttriec.jpg'],
  },
}

const NewsPostPage = () => {
  const post = {
    id: 2,
    title: 'Major Idris Holds Strategic Meeting with ODM Party Secretary Edwin Sifuna',
    excerpt: 'High-level discussions on party strategy and constituency development initiatives with ODM Party Secretary General.',
    image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220086/WhatsApp_Image_2025-09-18_at_9.26.19_PM_2_ttriec.jpg',
    category: 'Political Meetings',
    date: '2024-01-18',
    readTime: '3 min read',
    author: 'Major Idris Team',
    content: `
      <p class="text-lg text-gray-600 mb-6">Major Idris recently engaged in a productive strategic meeting with Edwin Sifuna, the ODM Party Secretary General, to discuss key party initiatives and constituency development strategies for Nyali.</p>
      
      <h2 class="text-2xl font-heading font-bold text-gray-900 mb-4 mt-8">Strategic Partnership</h2>
      
      <p class="mb-4">The meeting, held in a spirit of collaboration and mutual respect, focused on strengthening the party's presence in Nyali constituency and ensuring that the ODM party's vision aligns with the local development needs of the community.</p>
      
      <h3 class="text-xl font-heading font-semibold text-gray-900 mb-3 mt-6">Key Discussion Areas</h3>
      
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li><strong>Party Organization:</strong> Strengthening grassroots party structures and membership drives</li>
        <li><strong>Constituency Development:</strong> Coordinating party resources with local development priorities</li>
        <li><strong>Youth Engagement:</strong> Strategies to involve more young people in party activities and leadership</li>
        <li><strong>Women's Participation:</strong> Initiatives to increase women's representation in party leadership</li>
        <li><strong>Community Outreach:</strong> Programs to better connect with constituents and address their concerns</li>
      </ul>
      
      <h3 class="text-xl font-heading font-semibold text-gray-900 mb-3 mt-6">Development Coordination</h3>
      
      <p class="mb-4">The discussion emphasized the importance of coordinating party activities with ongoing development projects in Nyali. Major Idris shared his vision for the constituency and how it aligns with the broader ODM party agenda for national development.</p>
      
      <p class="mb-4">Edwin Sifuna expressed his appreciation for Major Idris's innovative approach to community engagement and his commitment to the party's values. He highlighted the importance of having dedicated leaders like Major Idris who understand the unique needs of their constituencies.</p>
      
      <h3 class="text-xl font-heading font-semibold text-gray-900 mb-3 mt-6">Future Collaborations</h3>
      
      <p class="mb-4">The meeting concluded with concrete plans for future collaborations, including regular coordination meetings and joint initiatives that will benefit the people of Nyali. Both leaders committed to maintaining open lines of communication to ensure effective service delivery.</p>
      
      <p class="mb-6">This strategic partnership represents a significant step forward in ensuring that Nyali constituency receives the attention and resources it deserves, while also strengthening the ODM party's presence and effectiveness in the region.</p>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
        <p class="text-orange-800 font-medium">"Working closely with the party leadership ensures that we can deliver on our promises to the people of Nyali. I am grateful for Edwin Sifuna's support and look forward to our continued collaboration." - Major Idris</p>
      </div>
      
      <h3 class="text-xl font-heading font-semibold text-gray-900 mb-3 mt-6">Commitment to Service</h3>
      
      <p class="mb-4">Both leaders reaffirmed their commitment to putting the interests of the people first and working together to address the challenges facing Nyali constituency. The meeting underscored the importance of unity within the party and the need for coordinated efforts in driving development.</p>
    `
  }

  const relatedPosts = [
    {
      id: 1,
      title: 'Major Idris Meets with Right Honorable Raila Odinga',
      excerpt: 'Strategic meeting with ODM Party Leader and former Prime Minister.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758276117/Majro_Idris_with_Raila_Odinga_ewljai.jpg',
      category: 'Political Meetings',
      date: '2024-01-20'
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
