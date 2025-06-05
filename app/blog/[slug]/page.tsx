"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, Calendar, User, Share2, Menu, X, Sparkles, CheckCircle } from "lucide-react"
import { getBlogPost, blogPosts } from "@/lib/blog-data"
import { SocialIcons } from "@/components/ui/social-icons"

export default function BlogPostPage() {
  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const post = slug ? getBlogPost(slug) : null
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  })
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  const scrollToFooter = () => {
    const footer = document.getElementById("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu when contact is clicked
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted", formData)
    
    // Show success alert
    setShowSuccessAlert(true)
    
    // Hide after 3 seconds
    setTimeout(() => {
      setShowSuccessAlert(false)
    }, 3000)
    
    setIsGetStartedModalOpen(false)
    setFormData({ fullName: "", email: "" })
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-[#dae3ea] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent hover:scale-105 transition-transform">
                Teams.
              </div>
            </Link>
            
            {/* Right-aligned Navigation and Button */}
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-[#6d7d8b] hover:text-[#2f3249] transition-colors relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0bc2f7] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="#about" className="text-[#6d7d8b] hover:text-[#2f3249] transition-colors relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0bc2f7] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="/blog"
                  className="text-[#2f3249] font-semibold hover:text-[#0bc2f7] transition-colors relative group"
                >
                  Blog
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0bc2f7]"></span>
                </Link>
                <button
                  onClick={scrollToFooter}
                  className="text-[#6d7d8b] hover:text-[#2f3249] transition-colors relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0bc2f7] group-hover:w-full transition-all duration-300"></span>
                </button>
              </nav>
              
              {/* Get Started Button */}
              <Button 
                onClick={() => setIsGetStartedModalOpen(true)}
                className="hidden md:flex bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-[#2f3249] p-2 rounded-lg hover:bg-[#f0f4f8] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-[#dae3ea]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/" 
                    className="text-[#6d7d8b] py-2 hover:text-[#2f3249] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <a 
                    href="#about" 
                    className="text-[#6d7d8b] py-2 hover:text-[#2f3249] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <Link 
                    href="/blog" 
                    className="text-[#2f3249] font-semibold py-2 hover:text-[#0bc2f7] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <button
                    onClick={scrollToFooter}
                    className="text-[#6d7d8b] py-2 hover:text-[#2f3249] transition-colors text-left"
                  >
                    Contact
                  </button>
                  
                  <Button 
                    onClick={() => setIsGetStartedModalOpen(true)}
                    className="mt-4 w-full bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Success Alert */}
      {showSuccessAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in-down">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span>Thank you! We'll be in touch soon.</span>
        </div>
      )}

      {/* Get Started Modal */}
      {isGetStartedModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-fade-in-down">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2f3249]">
                Get Started
              </h3>
              <button 
                onClick={() => setIsGetStartedModalOpen(false)}
                className="text-[#6d7d8b] hover:text-[#2f3249] transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            
            <p className="text-[#6d7d8b] mb-6">
              Enter your details to get early access to our platform
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#6d7d8b] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#dae3ea] rounded-lg focus:ring-2 focus:ring-[#0bc2f7] focus:border-[#0bc2f7] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#6d7d8b] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#dae3ea] rounded-lg focus:ring-2 focus:ring-[#0bc2f7] focus:border-[#0bc2f7] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Article Header */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4 md:mb-6">
            <Link
              href="/blog"
              className="flex items-center text-[#6d7d8b] hover:text-[#0bc2f7] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Blog</span>
            </Link>
          </div>

          <div className="mb-4 md:mb-6">
            <Badge variant="secondary" className="mb-3 bg-[#f5f7fa] text-[#6d7d8b]">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2f3249] mb-4 md:mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-[#6d7d8b] mb-4 md:mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full w-10 h-10 md:w-12 md:h-12"
                />
                <div>
                  <p className="font-medium text-[#2f3249]">{post.author.name}</p>
                  <p className="text-xs md:text-sm text-[#6d7d8b]">{post.author.role}</p>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="border-[#dae3ea] text-[#6d7d8b] hover:border-[#0bc2f7] hover:text-[#0bc2f7]"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-6 md:mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 md:mb-8">
            <div
              className="prose prose-sm md:prose-lg max-w-none text-[#2f3249] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#dae3ea]">
              <h4 className="text-xs md:text-sm font-medium text-[#6d7d8b] mb-3">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-[#f5f7fa] text-[#6d7d8b] hover:bg-[#0bc2f7] hover:text-white transition-colors cursor-pointer text-xs md:text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <Card className="bg-white border-0 shadow-sm mb-6 md:mb-8">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start space-x-3 md:space-x-4">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full w-12 h-12 md:w-16 md:h-16"
                />
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-[#2f3249] mb-1">{post.author.name}</h4>
                  <p className="text-[#6d7d8b] text-xs md:text-sm mb-2">{post.author.role}</p>
                  <p className="text-[#6d7d8b] text-xs md:text-sm leading-relaxed">
                    Passionate about remote work and team collaboration. Sharing insights and best practices to help
                    teams work better together, no matter where they are.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2f3249] mb-6 md:mb-8">Related Articles</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <Card className="bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={400}
                          height={250}
                          className="w-full h-40 md:h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 md:p-6">
                        <Badge variant="secondary" className="mb-2 md:mb-3 bg-[#f5f7fa] text-[#6d7d8b] text-xs md:text-sm">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-base md:text-lg font-semibold text-[#2f3249] mb-2 md:mb-3 line-clamp-2 group-hover:text-[#0bc2f7] transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-[#6d7d8b] text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={relatedPost.author.avatar || "/placeholder.svg"}
                              alt={relatedPost.author.name}
                              width={20}
                              height={20}
                              className="rounded-full w-5 h-5 md:w-6 md:h-6"
                            />
                            <span className="text-xs text-[#6d7d8b]">{relatedPost.author.name}</span>
                          </div>
                          <span className="text-xs text-[#6d7d8b]">{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer id="footer" className="bg-[#2f3249] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            <div className="lg:col-span-2 col-span-2">
              <div className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#0bc2f7] to-white bg-clip-text text-transparent">
                Teams.
              </div>
              <p className="text-[#94a3b1] mb-6 font-medium">Instant collaboration for remote teams</p>
              <SocialIcons />
            </div>

            <div>
              <h4 className="font-bold mb-4 text-base md:text-lg">Company</h4>
              <ul className="space-y-2 md:space-y-3 text-[#94a3b1]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Careers
                  </a>
                </li>
                <li>
                  <button onClick={scrollToFooter} className="hover:text-white transition-colors font-medium text-left">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-base md:text-lg">Features</h4>
              <ul className="space-y-2 md:space-y-3 text-[#94a3b1]">
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Task Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Reporting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Your Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-4 text-base md:text-lg">Contact</h4>
              <ul className="space-y-2 md:space-y-3 text-[#94a3b1]">
                <li>
                  <a href="mailto:hello@teams.com" className="hover:text-white transition-colors font-medium">
                    hello@teams.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1-555-0123" className="hover:text-white transition-colors font-medium">
                    +1 (555) 012-3456
                  </a>
                </li>
                <li>
                  <span className="text-[#94a3b1] font-medium">San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#25313c] mt-10 pt-8 text-center text-[#94a3b1]">
            <p className="font-medium">&copy; 2025 Teams. All rights reserved.</p>
            <p className="text-xs md:text-sm mt-2">Website designed and developed by Chikhaoui Mohammed Mostafa.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}