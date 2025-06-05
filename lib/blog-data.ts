export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  author: {
    name: string
    avatar: string
    role: string
  }
  date: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "managing-remote-teams",
    title: "10 Secret tips for a managing remote team",
    excerpt:
      "Everything you need to know about managing a remote team. Tips and tricks from the best managers in the industry.",
    content: `
      <p>Managing remote teams has become increasingly important in today's work environment. Here are 10 essential tips that will help you lead your remote team effectively.</p>
      
      <h2>1. Establish Clear Communication Channels</h2>
      <p>Set up dedicated channels for different types of communication - urgent matters, project updates, and casual conversations.</p>
      
      <h2>2. Set Regular Check-ins</h2>
      <p>Schedule consistent one-on-ones and team meetings to maintain connection and track progress.</p>
      
      <h2>3. Define Clear Expectations</h2>
      <p>Make sure everyone understands their roles, responsibilities, and deadlines.</p>
      
      <h2>4. Use the Right Tools</h2>
      <p>Invest in quality collaboration tools that make remote work seamless and efficient.</p>
      
      <h2>5. Foster Team Culture</h2>
      <p>Create opportunities for team bonding and maintain company culture even when working remotely.</p>
    `,
    category: "Management",
    image: "/images/blogImages/10 Secret Tips for Managing a Remote Team.png",
    author: {
      name: "John Smith",
      avatar: "/images/avatars/John Smith.png",
      role: "Senior Manager",
    },
    date: "Mar 16, 2024",
    readTime: "5 min read",
    tags: ["Remote Work", "Management", "Leadership"],
  },
  {
    id: "team-priorities",
    title: "How to set team priorities effectively",
    excerpt:
      "Setting priorities is crucial for team success. Learn how to prioritize effectively and keep your team focused on what matters most.",
    content: `
      <p>Effective prioritization is the cornerstone of successful team management. Here's how to set priorities that drive results.</p>
      
      <h2>Understanding Priority Frameworks</h2>
      <p>Learn about different prioritization methods like the Eisenhower Matrix and MoSCoW method.</p>
      
      <h2>Involving Your Team</h2>
      <p>Get input from team members to ensure buy-in and better decision-making.</p>
      
      <h2>Regular Review and Adjustment</h2>
      <p>Priorities change, so make sure to review and adjust them regularly.</p>
    `,
    category: "Productivity",
    image: "/images/blogImages/How to Set Team Priorities Effectively.png",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/avatars/Sarah Johnson.png",
      role: "Product Manager",
    },
    date: "Mar 14, 2024",
    readTime: "4 min read",
    tags: ["Productivity", "Planning", "Strategy"],
  },
  {
    id: "building-culture",
    title: "Building strong culture in remote teams",
    excerpt:
      "Culture is important for remote teams. Here's how to build a strong team culture that transcends physical boundaries.",
    content: `
      <p>Building a strong culture in remote teams requires intentional effort and creative approaches.</p>
      
      <h2>Virtual Team Building</h2>
      <p>Organize online activities that bring your team together and create shared experiences.</p>
      
      <h2>Shared Values and Mission</h2>
      <p>Ensure everyone understands and embodies your company's core values and mission.</p>
      
      <h2>Recognition and Celebration</h2>
      <p>Create systems to recognize achievements and celebrate milestones together.</p>
    `,
    category: "Culture",
    image: "/images/blogImages/Building Strong Culture in Remote Teams.png",
    author: {
      name: "Mike Davis",
      avatar: "/images/avatars/Mike Davis.png",
      role: "HR Director",
    },
    date: "Mar 12, 2024",
    readTime: "6 min read",
    tags: ["Culture", "Team Building", "Remote Work"],
  },
  {
    id: "communication-tips",
    title: "Communication tips for remote teams",
    excerpt:
      "Effective communication is key to remote team success. Learn the best practices for clear and efficient team communication.",
    content: `
      <p>Communication is the lifeline of remote teams. Here are proven strategies to improve your team's communication.</p>
      
      <h2>Choose the Right Medium</h2>
      <p>Different types of communication require different tools - know when to use chat, email, or video calls.</p>
      
      <h2>Be Clear and Concise</h2>
      <p>Remote communication should be more explicit than in-person communication.</p>
      
      <h2>Document Everything</h2>
      <p>Keep records of important decisions and discussions for future reference.</p>
    `,
    category: "Communication",
    image: "/images/blogImages/Communication Tips for Remote Teams.png",
    author: {
      name: "Emily Wilson",
      avatar: "/images/avatars/Emily Wilson.png",
      role: "Communications Lead",
    },
    date: "Mar 10, 2024",
    readTime: "3 min read",
    tags: ["Communication", "Remote Work", "Best Practices"],
  },
  {
    id: "perfect-office-space",
    title: "Creating the perfect office space",
    excerpt:
      "Your office space affects productivity. Here's how to create the perfect workspace that enhances focus and creativity.",
    content: `
      <p>Your workspace has a significant impact on your productivity and well-being. Here's how to optimize it.</p>
      
      <h2>Ergonomic Setup</h2>
      <p>Invest in proper furniture and equipment to support your physical health.</p>
      
      <h2>Lighting and Environment</h2>
      <p>Good lighting and a comfortable environment are crucial for sustained productivity.</p>
      
      <h2>Organization and Minimalism</h2>
      <p>Keep your space organized and free from distractions.</p>
    `,
    category: "Workspace",
    image: "/images/blogImages/Creating the Perfect Office Space.png",
    author: {
      name: "David Brown",
      avatar: "/images/avatars/David Brown.png",
      role: "Workplace Designer",
    },
    date: "Mar 8, 2024",
    readTime: "4 min read",
    tags: ["Workspace", "Productivity", "Design"],
  },
  {
    id: "work-life-balance",
    title: "Balancing work and life remotely",
    excerpt:
      "Work-life balance is crucial for remote workers. Learn how to maintain healthy boundaries and avoid burnout.",
    content: `
      <p>Remote work can blur the lines between personal and professional life. Here's how to maintain balance.</p>
      
      <h2>Set Clear Boundaries</h2>
      <p>Establish specific work hours and stick to them to maintain separation.</p>
      
      <h2>Create Rituals</h2>
      <p>Develop routines that signal the start and end of your workday.</p>
      
      <h2>Take Regular Breaks</h2>
      <p>Schedule breaks throughout your day to recharge and maintain focus.</p>
    `,
    category: "Wellness",
    image: "/images/blogImages/Balancing Work and Life Remotely.png",
    author: {
      name: "Lisa Garcia",
      avatar: "/images/avatars/Lisa Garcia.png",
      role: "Wellness Coach",
    },
    date: "Mar 6, 2024",
    readTime: "5 min read",
    tags: ["Wellness", "Work-Life Balance", "Mental Health"],
  },
]

export const categories = ["All", "Management", "Productivity", "Culture", "Communication", "Workspace", "Wellness"]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}
