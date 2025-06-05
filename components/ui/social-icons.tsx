import { Facebook, Instagram } from "lucide-react"

interface SocialIconsProps {
  className?: string
  iconSize?: "sm" | "md" | "lg"
}

// Custom X (Twitter) icon component since Lucide doesn't have the new X logo
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export function SocialIcons({ className = "", iconSize = "md" }: SocialIconsProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className={iconSizeClasses[iconSize]} />,
      href: "https://www.facebook.com/chikhaoui.mohammed.530030",
      gradient: "from-[#1877f2] to-[#42a5f5]",
    },
    {
      name: "Instagram",
      icon: <Instagram className={iconSizeClasses[iconSize]} />,
      href: "https://www.instagram.com/chm4ms/",
      gradient: "from-[#e4405f] via-[#fd1d1d] to-[#fcb045]",
    },
    {
      name: "X",
      icon: <XIcon className={iconSizeClasses[iconSize]} />,
      href: "https://x.com/Chikhaoui_Moh",
      gradient: "from-[#000000] to-[#1a1a1a]",
    },
  ]

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[iconSize]} bg-gradient-to-r ${social.gradient} rounded-full hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center text-white shadow-lg hover:shadow-xl group`}
          aria-label={`Follow us on ${social.name}`}
        >
          <div className="group-hover:scale-110 transition-transform duration-300">{social.icon}</div>
        </a>
      ))}
    </div>
  )
}
