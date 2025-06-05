"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft, Sparkles, Menu, X, CheckCircle } from "lucide-react"
import { categories, getBlogPostsByCategory } from "@/lib/blog-data"
import { BlogCard } from "@/components/ui/blog-card"
import { NewsletterForm } from "@/components/ui/newsletter-form"
import { SocialIcons } from "@/components/ui/social-icons"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  })
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  const filteredPosts = getBlogPostsByCategory(selectedCategory).filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

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

      {/* Blog Header */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6 md:mb-8">
            <Link href="/" className="flex items-center text-[#6d7d8b] hover:text-[#0bc2f7] transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f3249] mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6d7d8b] mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
              Thoughts, stories and ideas from our team to help you build better remote teams and improve collaboration
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto mb-6 md:mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6d7d8b] w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 w-full border-[#dae3ea] focus:border-[#0bc2f7] focus:ring-[#0bc2f7] transition-colors rounded-full text-base md:text-lg font-medium"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all hover:scale-105 font-semibold px-4 md:px-6 py-1.5 md:py-2 rounded-full text-sm md:text-base ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] text-white shadow-lg"
                      : "border-[#dae3ea] text-[#6d7d8b] hover:border-[#0bc2f7] hover:text-[#0bc2f7] hover:shadow-md"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 md:py-16">
              <p className="text-[#6d7d8b] text-lg md:text-xl font-medium">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3249] mb-4">
            Stay{" "}
            <span className="bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent">Updated</span>
          </h2>
          <p className="text-base md:text-lg text-[#6d7d8b] mb-8 font-medium">
            Get the latest articles and insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="inline" />
          </div>
        </div>
      </section>

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
            <p className="text-xs md:text-sm mt-2">Website made by Chikhaoui Mohammed Mostafa</p>
          </div>
        </div>
      </footer>
    </div>
  )
}