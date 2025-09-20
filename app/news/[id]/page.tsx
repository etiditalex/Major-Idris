import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { notFound } from 'next/navigation'

// Generate static params for all news posts
export async function generateStaticParams() {
  const newsPosts = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' }
  ]
  
  return newsPosts.map((post) => ({
    id: post.id,
  }))
}

const NewsPostPage = ({ params }: { params: { id: string } }) => {
  const newsPosts = [
    {
      id: 3,
      title: 'Major Idris Launches New Healthcare Initiative for Nyali',
      content: `
        <p>Major Idris has announced a groundbreaking healthcare initiative that will transform medical services in Nyali constituency. This comprehensive program, launched in partnership with the Ministry of Health and local medical professionals, aims to provide free medical services to over 10,000 residents in underserved areas.</p>
        
        <p>The initiative includes the establishment of mobile clinics that will visit remote areas weekly, providing essential healthcare services including general consultations, maternal health services, and chronic disease management. Additionally, the program will train 50 community health workers to provide basic medical care and health education.</p>
        
        <p>"Healthcare is a fundamental right, not a privilege," said Major Idris during the launch event. "This initiative represents our commitment to ensuring that every resident of Nyali has access to quality healthcare, regardless of their economic status or location."</p>
        
        <p>The program is expected to begin operations next month and will be funded through a combination of government resources, community contributions, and partnerships with international health organizations. The initiative aligns with the United Nations Sustainable Development Goal 3: Good Health and Well-being.</p>
        
        <p>Community leaders have expressed strong support for the initiative, with many noting that it addresses a critical need in the constituency. "This is exactly what our community needs," said Sarah Mwangi, a local community organizer. "Many of our residents have been struggling to access healthcare, and this program will make a real difference in their lives."</p>
      `,
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_18_ea4mss.jpg',
      category: 'Healthcare',
      date: '2024-01-15',
      readTime: '5 min read',
      author: 'Major Idris Team',
      featured: true
    },
    {
      id: 4,
      title: 'Youth Skills Development Program Reaches 500 Participants',
      content: `
        <p>The Walk Movement's flagship youth skills development program has reached a significant milestone, successfully training 500 young people in various technical skills. This achievement represents a major step forward in youth empowerment and economic development in Nyali.</p>
        
        <p>The program, which began in 2022, offers training in areas such as computer programming, digital marketing, electrical work, plumbing, and entrepreneurship. Participants receive both theoretical knowledge and practical hands-on experience, preparing them for employment or self-employment opportunities.</p>
        
        <p>"We are incredibly proud of what our young people have achieved," said Major Idris. "These skills will not only improve their individual prospects but also contribute to the overall economic development of our community."</p>
        
        <p>The program has already seen remarkable success, with 80% of graduates finding employment or starting their own businesses within six months of completion. Many graduates have gone on to mentor new participants, creating a cycle of knowledge sharing and community development.</p>
      `,
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_16_bivkhm.jpg',
      category: 'Youth Development',
      date: '2024-01-10',
      readTime: '3 min read',
      author: 'Major Idris Team',
      featured: false
    },
    {
      id: 5,
      title: 'Infrastructure Project: New Community Center Opens',
      content: `
        <p>A state-of-the-art community center has been inaugurated in Nyali, providing much-needed space for various community activities and programs. The center, which took 18 months to complete, represents a significant investment in community infrastructure and social development.</p>
        
        <p>The facility includes a large multipurpose hall, meeting rooms, a library, computer lab, and outdoor recreational areas. It will serve as a hub for community meetings, educational programs, cultural events, and youth activities.</p>
        
        <p>"This community center is more than just a building," said Major Idris during the opening ceremony. "It's a symbol of our commitment to providing spaces where our community can come together, learn, and grow."</p>
        
        <p>The center was built using sustainable construction methods and incorporates solar panels for energy efficiency. It also includes accessibility features to ensure it can be used by all members of the community, including those with disabilities.</p>
      `,
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220138/Major_idris_3_14_c1h9mb.jpg',
      category: 'Infrastructure',
      date: '2024-01-05',
      readTime: '4 min read',
      author: 'Major Idris Team',
      featured: false
    },
    {
      id: 6,
      title: 'Environmental Conservation Campaign Launched',
      content: `
        <p>Major Idris has launched a comprehensive environmental conservation campaign aimed at protecting Nyali's coastal environment and promoting sustainable practices. The campaign focuses on waste management, coastal protection, and community education about environmental stewardship.</p>
        
        <p>The initiative includes beach cleanup drives, tree planting programs, and educational workshops on environmental conservation. It also involves partnerships with local schools to integrate environmental education into their curricula.</p>
        
        <p>"Our environment is our most precious resource," said Major Idris. "We must protect it for current and future generations. This campaign is about taking concrete action to preserve our natural heritage."</p>
        
        <p>The campaign has already mobilized over 1,000 volunteers and has resulted in the collection of 5 tons of waste from beaches and public areas. Plans are underway to establish a community recycling program and implement sustainable waste management practices.</p>
      `,
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_17_z2dev2.jpg',
      category: 'Environment',
      date: '2024-01-01',
      readTime: '6 min read',
      author: 'Major Idris Team',
      featured: false
    },
    {
      id: 7,
      title: 'Community Town Hall: Residents Voice Their Priorities',
      content: `
        <p>Over 1,000 residents participated in the quarterly town hall meeting to discuss community development priorities and provide feedback on ongoing projects. The meeting, held at the new community center, was one of the largest community gatherings in recent years.</p>
        
        <p>Residents raised various issues including the need for improved road infrastructure, better access to clean water, and increased support for small businesses. Many also expressed appreciation for recent healthcare and education initiatives.</p>
        
        <p>"This is what participatory democracy looks like," said Major Idris. "When we listen to our community and work together, we can achieve great things. The feedback we received today will guide our priorities for the coming months."</p>
        
        <p>The meeting concluded with the announcement of several new initiatives based on community input, including a small business support program and a water infrastructure improvement project.</p>
      `,
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_18_ea4mss.jpg',
      category: 'Governance',
      date: '2023-12-28',
      readTime: '4 min read',
      author: 'Major Idris Team',
      featured: false
    },
    {
      id: 8,
      title: 'Partnership with Local University Strengthens Education Programs',
      content: `
        <p>A new partnership between The Walk Movement and a local university will provide scholarships and research opportunities for Nyali students. The collaboration aims to improve access to higher education and support academic research relevant to community development.</p>
        
        <p>The partnership includes a scholarship program that will support 20 students annually, covering tuition fees and providing mentorship opportunities. Additionally, the university will conduct research on community development issues and provide technical expertise for various projects.</p>
        
        <p>"Education is the foundation of development," said Major Idris. "This partnership will help our young people access quality education while also contributing to research that benefits our community."</p>
        
        <p>The partnership also includes plans for student internships with The Walk Movement, providing practical experience in community development and public service.</p>
      `,
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_16_bivkhm.jpg',
      category: 'Education',
      date: '2023-12-20',
      readTime: '5 min read',
      author: 'Major Idris Team',
      featured: false
    }
  ]

  const post = newsPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getShareUrl = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const title = post.title
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="container-custom">
          <Link
            href="/news"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to News
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <a
                    href={getShareUrl('facebook')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={getShareUrl('twitter')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={getShareUrl('linkedin')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
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
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-heading font-bold mb-8 text-gray-900">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-64">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-bold mb-3 text-gray-900 group-hover:text-primary-500 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>{formatDate(relatedPost.date)}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <Link
                        href={`/news/${relatedPost.id}`}
                        className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold"
                      >
                        Read More
                        <ArrowLeft className="ml-2 rotate-180" size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsPostPage
