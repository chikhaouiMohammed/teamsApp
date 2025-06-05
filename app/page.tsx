"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight, CheckCircle, Sparkles, Menu, X } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { BlogCard } from "@/components/ui/blog-card"
import { ServiceModal } from "@/components/ui/service-modal"
import { SocialIcons } from "@/components/ui/social-icons"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { NewsletterForm } from "@/components/ui/newsletter-form"

export default function HomePage() {
  const [modalService, setModalService] = useState<"task-management" | "scheduling" | "tracking" | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  })
  const { scrollToSection } = useSmoothScroll()
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  // Show only first 3 blog posts on home page
  const featuredPosts = blogPosts.slice(0, 3)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false) // Close mobile menu when link is clicked
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
              {/* Desktop Navigation - moved to right */}
              <nav className="hidden md:flex space-x-8">
                <button
                  onClick={() => handleNavClick("hero")}
                  className="text-[#2f3249] font-semibold hover:text-[#0bc2f7] transition-colors relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0bc2f7] group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-[#6d7d8b] hover:text-[#2f3249] transition-colors relative group"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0bc2f7] group-hover:w-full transition-all duration-300"></span>
                </button>
                <Link href="/blog" className="text-[#6d7d8b] hover:text-[#2f3249] transition-colors relative group">
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0bc2f7] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <button
                  onClick={() => handleNavClick("testimonials")}
                  className="text-[#6d7d8b] hover:text-[#2f3249] transition-colors relative group"
                >
                  Testimonials
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0bc2f7] group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => handleNavClick("footer")}
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
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#dae3ea]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => handleNavClick("hero")}
                  className="text-[#2f3249] font-semibold py-2 hover:text-[#0bc2f7] transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-[#6d7d8b] py-2 hover:text-[#2f3249] transition-colors text-left"
                >
                  Services
                </button>
                <Link href="/blog" className="text-[#6d7d8b] py-2 hover:text-[#2f3249] transition-colors">
                  Blog
                </Link>
                <button
                  onClick={() => handleNavClick("testimonials")}
                  className="text-[#6d7d8b] py-2 hover:text-[#2f3249] transition-colors text-left"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => handleNavClick("footer")}
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

      {/* Rest of the page remains unchanged */}
      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f3249] mb-6 leading-tight">
                Instant collaboration
                <br />
                <span className="bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent">
                  for remote teams
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#6d7d8b] mb-8 leading-relaxed font-medium">
                All-in-one place for your remote team to chat, collaborate and track project progress.
              </p>

              {/* Email Subscription Form in Hero */}
              <div className="max-w-md mb-6">
                <h3 className="text-lg font-semibold text-[#2f3249] mb-3">Get early access to our platform</h3>
                <NewsletterForm variant="hero" />
              </div>
            </div>
            <div className="relative animate-fade-in-right hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0bc2f7]/20 to-transparent rounded-lg transform rotate-3"></div>
              <Image
                src="/images/herosection.jpg"
                alt="Woman working on laptop"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section - Updated to make image larger and centered */}
      <section className="py-16 md:py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="animate-fade-in-left lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2f3249] mb-6 leading-tight">
                Your hub for
                <br />
                <span className="bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent">
                  team work
                </span>
              </h2>
              <p className="text-base md:text-lg text-[#6d7d8b] mb-8 leading-relaxed font-medium">
                Give everyone you work with—inside and outside your company—a more productive way to stay in sync.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                  <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                    Flexible project management
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                  <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                    Bring your team together
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-right lg:w-1/2">
              <div className="relative w-full max-w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0bc2f7]/20 to-transparent rounded-3xl transform -rotate-6"></div>
                <Image
                  src="/images/Flux_Dev_A_highresolution_ultrarealistic_photograph_of_a_moder_1.jpg"
                  alt="Mobile app interface"
                  width={400}
                  height={800}
                  className="rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Simple Task Management */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/simpletasks.jpg"
                  alt="Task management"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2f3249] mb-6 leading-tight">
                  Simple Task
                  <br />
                  <span className="bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent">
                    Management
                  </span>
                </h3>
                <p className="text-base md:text-lg text-[#6d7d8b] mb-8 leading-relaxed font-medium">
                  Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Organize tasks, set priorities, and track progress with our intuitive task management system.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                    <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                      Drag and drop task organization
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                    <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                      Real-time collaboration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                    <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                      Progress tracking and analytics
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => setModalService("task-management")}
                  className="bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Schedule that works */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2f3249] mb-6 leading-tight">
                  Schedule that
                  <br />
                  <span className="bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent">
                    actually works
                  </span>
                </h3>
                <p className="text-base md:text-lg text-[#6d7d8b] mb-8 leading-relaxed font-medium">
                  Never miss a deadline again with our intelligent scheduling system. Coordinate across time zones and keep everyone on the same page with automated reminders.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                    <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                      Smart calendar integration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                    <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                      Automated meeting scheduling
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                    <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                      Time zone coordination
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => setModalService("scheduling")}
                  className="bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div>
                <Image
                  src="/images/schedule.jpg"
                  alt="Schedule management"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full"
                />
              </div>
            </div>
          </div>

          {/* Tasks That Stay On Track */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/tasksThatStayOnTrack.jpg"
                  alt="Task tracking"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2f3249] mb-6 leading-tight">
                  Tasks That Stay
                  <br />
                  <span className="bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent">
                    On Track
                  </span>
                </h3>
                <p className="text-base md:text-lg text-[#6d7d8b] mb-8 leading-relaxed font-medium">
                  Keep your projects moving forward with our advanced tracking system. Monitor progress, identify bottlenecks, and ensure nothing falls through the cracks.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                    <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                      Visual progress tracking
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                    <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                      Automated status updates
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-[#0bc2f7] group-hover:scale-110 transition-transform" />
                    <span className="text-[#6d7d8b] group-hover:text-[#2f3249] transition-colors font-medium">
                      Performance analytics
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => setModalService("tracking")}
                  className="bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 md:py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2f3249] mb-6">
              Latest from our{" "}
              <span className="bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent">Blog</span>
            </h2>
            <p className="text-base md:text-xl text-[#6d7d8b] font-medium max-w-2xl mx-auto">
              Thoughts, stories and ideas from our team to help you build better remote teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] text-white font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                View all posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2f3249] text-center mb-12 md:mb-16">
            What People Say About{" "}
            <span className="bg-gradient-to-r from-[#0bc2f7] to-[#2f3249] bg-clip-text text-transparent">Team App</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border border-[#dae3ea] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#f7aa00] text-[#f7aa00] group-hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                  <p className="text-[#6d7d8b] text-sm mb-6 leading-relaxed font-medium">{testimonial.content}</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.author.avatar || "/placeholder.svg"}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                      className="rounded-full group-hover:scale-110 transition-transform ring-2 ring-[#f5f7fa] group-hover:ring-[#0bc2f7]"
                    />
                    <div>
                      <p className="text-sm font-bold text-[#2f3249] group-hover:text-[#0bc2f7] transition-colors">
                        {testimonial.author.name}
                      </p>
                      <p className="text-xs text-[#6d7d8b] font-medium">{testimonial.author.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  <button
                    onClick={() => handleNavClick("hero")}
                    className="hover:text-white transition-colors font-medium text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("services")}
                    className="hover:text-white transition-colors font-medium text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors font-medium">
                    Blog
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("footer")}
                    className="hover:text-white transition-colors font-medium text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-base md:text-lg">Features</h4>
              <ul className="space-y-2 md:space-y-3 text-[#94a3b1]">
                <li>
                  <button
                    onClick={() => setModalService("task-management")}
                    className="hover:text-white transition-colors font-medium text-left"
                  >
                    Task Management
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalService("scheduling")}
                    className="hover:text-white transition-colors font-medium text-left"
                  >
                    Scheduling
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalService("tracking")}
                    className="hover:text-white transition-colors font-medium text-left"
                  >
                    Progress Tracking
                  </button>
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

      {/* Service Modal */}
      <ServiceModal isOpen={modalService !== null} onClose={() => setModalService(null)} service={modalService} />
    </div>
  )
}

const testimonials = [
  {
    content:
      "This app has completely transformed how our team collaborates. The interface is intuitive and the features are exactly what we needed.",
    author: {
      name: "Alex Johnson",
      role: "Product Manager",
      avatar: "/images/avatars/testimonials/Alex Johnson.png",
    },
  },
  {
    content:
      "Amazing tool for remote teams! The scheduling feature has saved us countless hours and improved our productivity significantly.",
    author: {
      name: "Sarah Chen",
      role: "Team Lead",
      avatar: "/images/avatars/testimonials/Sarah Chen.png",
    },
  },
  {
    content:
      "I love how easy it is to track project progress and communicate with team members. Highly recommend for any remote team.",
    author: {
      name: "Michael Rodriguez",
      role: "Developer",
      avatar: "/images/avatars/testimonials/Michael Rodriguez.png",
    },
  },
  {
    content:
      "The task management features are top-notch. Our team has never been more organized and efficient than with this platform.",
    author: {
      name: "Emma Thompson",
      role: "Project Coordinator",
      avatar: "/images/avatars/testimonials/Emma Thompson .png",
    },
  },
]