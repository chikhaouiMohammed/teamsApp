"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { CheckCircle, Star, Users, Clock, BarChart3, Calendar, Target, Zap } from "lucide-react"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: "task-management" | "scheduling" | "tracking" | null
}

const serviceData = {
  "task-management": {
    title: "Simple Task Management",
    subtitle: "Organize, prioritize, and track your team's work effortlessly",
    description:
      "Transform the way your team handles tasks with our intuitive drag-and-drop interface. From simple to-dos to complex project workflows, manage everything in one place.",
    image: "/placeholder.svg?height=400&width=600&text=Task+Management+Dashboard",
    features: [
      {
        icon: <Users className="w-5 h-5" />,
        title: "Team Collaboration",
        description: "Assign tasks, set deadlines, and collaborate in real-time with your team members.",
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Priority Management",
        description: "Set task priorities and focus on what matters most with our smart priority system.",
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        title: "Progress Tracking",
        description: "Visual progress bars and completion rates help you stay on top of project status.",
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Automation",
        description: "Automate repetitive tasks and workflows to save time and reduce manual work.",
      },
    ],
    benefits: [
      "Increase team productivity by 40%",
      "Reduce project completion time",
      "Improve task visibility across teams",
      "Streamline workflow processes",
    ],
    testimonial: {
      text: "Task management has never been this easy. Our team's productivity increased dramatically since we started using this system.",
      author: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      rating: 5,
    },
  },
  scheduling: {
    title: "Smart Scheduling",
    subtitle: "Coordinate meetings and deadlines across time zones effortlessly",
    description:
      "Never miss a meeting or deadline again. Our intelligent scheduling system automatically coordinates across time zones and integrates with your existing calendar.",
    image: "/placeholder.svg?height=400&width=600&text=Smart+Calendar+System",
    features: [
      {
        icon: <Calendar className="w-5 h-5" />,
        title: "Calendar Integration",
        description: "Seamlessly sync with Google Calendar, Outlook, and other popular calendar apps.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        title: "Time Zone Coordination",
        description: "Automatically handle time zone differences for global team coordination.",
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Meeting Scheduling",
        description: "Find the best meeting times for all participants with smart availability detection.",
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Smart Reminders",
        description: "Automated reminders ensure no one misses important meetings or deadlines.",
      },
    ],
    benefits: [
      "Reduce scheduling conflicts by 80%",
      "Save 5+ hours per week on coordination",
      "Improve meeting attendance rates",
      "Streamline global team collaboration",
    ],
    testimonial: {
      text: "The scheduling feature has been a game-changer for our distributed team. No more back-and-forth emails to find meeting times.",
      author: "Michael Chen",
      role: "Team Lead at GlobalTech",
      rating: 5,
    },
  },
  tracking: {
    title: "Advanced Progress Tracking",
    subtitle: "Monitor project progress and team performance in real-time",
    description:
      "Get complete visibility into your projects with advanced tracking and analytics. Identify bottlenecks, track performance, and make data-driven decisions.",
    image: "/placeholder.svg?height=400&width=600&text=Progress+Analytics+Dashboard",
    features: [
      {
        icon: <BarChart3 className="w-5 h-5" />,
        title: "Real-time Analytics",
        description: "Live dashboards showing project progress, team performance, and key metrics.",
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Goal Tracking",
        description: "Set and track goals with visual progress indicators and milestone markers.",
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Team Performance",
        description: "Monitor individual and team performance with detailed productivity insights.",
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Automated Reports",
        description: "Generate comprehensive reports automatically and share with stakeholders.",
      },
    ],
    benefits: [
      "Improve project delivery by 35%",
      "Identify bottlenecks early",
      "Increase team accountability",
      "Make data-driven decisions",
    ],
    testimonial: {
      text: "The tracking capabilities give us unprecedented visibility into our projects. We can now predict and prevent issues before they become problems.",
      author: "Emily Rodriguez",
      role: "Operations Director at InnovateCo",
      rating: 5,
    },
  },
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service || !serviceData[service]) return null

  const data = serviceData[service]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <DialogTitle className="text-3xl font-bold text-[#2f3249] mb-2">{data.title}</DialogTitle>
          <p className="text-lg text-[#6d7d8b] font-medium">{data.subtitle}</p>
        </DialogHeader>

        <div className="space-y-8">

          {/* Description */}
          <div>
            <p className="text-[#6d7d8b] text-lg leading-relaxed">{data.description}</p>
          </div>

          {/* Features Grid */}
          <div>
            <h3 className="text-2xl font-bold text-[#2f3249] mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {data.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex space-x-4 p-4 bg-[#f5f7fa] rounded-lg hover:bg-white transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0bc2f7] rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2f3249] mb-2">{feature.title}</h4>
                    <p className="text-[#6d7d8b] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-[#2f3249] mb-6">Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#0bc2f7] flex-shrink-0" />
                  <span className="text-[#6d7d8b] font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-[#0bc2f7]/10 to-[#2f3249]/10 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(data.testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#f7aa00] text-[#f7aa00]" />
              ))}
            </div>
            <blockquote className="text-[#2f3249] text-lg font-medium mb-4 italic">
              "{data.testimonial.text}"
            </blockquote>
            <div>
              <p className="font-semibold text-[#2f3249]">{data.testimonial.author}</p>
              <p className="text-[#6d7d8b] text-sm">{data.testimonial.role}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
