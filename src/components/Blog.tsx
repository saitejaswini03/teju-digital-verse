import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable APIs with Node.js and Express",
      summary: "Learn best practices for creating robust, scalable backend services that can handle high traffic and complex business logic.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Backend"
    },
    {
      title: "The Future of Web Development: AI Integration",
      summary: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications in 2024.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "AI & Tech"
    },
    {
      title: "Mastering React Performance Optimization",
      summary: "Deep dive into advanced React optimization techniques including memoization, virtualization, and bundle splitting.",
      date: "Dec 5, 2024",
      readTime: "12 min read",
      category: "Frontend"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my development journey.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="glass-strong rounded-xl overflow-hidden hover-lift group cursor-pointer"
            >
              {/* Category badge */}
              <div className="p-6 pb-0">
                <span className="inline-block px-3 py-1 text-xs bg-neon-primary/20 text-neon-primary rounded-full border border-neon-primary/30">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6 pt-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-neon-primary transition-colors mb-3">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.summary}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" className="w-full group/btn justify-between">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="neon" size="lg" className="group">
            View All Posts
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;