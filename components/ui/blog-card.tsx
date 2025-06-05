import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group block h-full">
      <Card className="bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-full overflow-hidden">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Image Section */}
          <div className="relative overflow-hidden h-48">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Category Badge on Image */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/90 text-[#2f3249] hover:bg-white transition-colors shadow-sm">
                {post.category}
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Title */}
            <h3 className="text-xl font-bold text-[#2f3249] mb-3 line-clamp-2 group-hover:text-[#0bc2f7] transition-colors leading-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[#6d7d8b] text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">{post.excerpt}</p>

            {/* Meta Information */}
            <div className="flex items-center justify-between text-xs text-[#94a3b1] mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#f5f7fa] text-[#6d7d8b] px-2 py-1 rounded-full hover:bg-[#0bc2f7] hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Section */}
            <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-[#f5f7fa]">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={36}
                height={36}
                className="rounded-full ring-2 ring-[#f5f7fa] group-hover:ring-[#0bc2f7] transition-colors"
              />
              <div className="flex-grow">
                <p className="text-sm font-semibold text-[#2f3249] group-hover:text-[#0bc2f7] transition-colors">
                  {post.author.name}
                </p>
                <p className="text-xs text-[#6d7d8b]">{post.author.role}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
