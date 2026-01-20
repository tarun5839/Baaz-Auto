import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from 'lucide-react'

const BlogDetailPage = () => {
  const { id } = useParams()

  const blogs = [
    {
      id: '1',
      title: 'Understanding Different Types of Automotive Pulleys',
      excerpt: 'A comprehensive guide to alternator, crankshaft, idler, and tensioner pulleys.',
      image: '/images/IMG_2445.jpg',
      date: 'January 10, 2026',
      category: 'Technical',
      readTime: '5 min read',
      content: `
        <h2>Introduction to Automotive Pulleys</h2>
        <p>Pulleys are essential components in any vehicle's engine system. They transfer power from the engine to various accessories like the alternator, air conditioning compressor, power steering pump, and water pump.</p>
        
        <h2>Types of Pulleys</h2>
        
        <h3>1. Alternator Pulleys</h3>
        <p>Alternator pulleys are responsible for driving the alternator, which charges the battery and powers the electrical system. Modern vehicles use Overrunning Alternator Decouplers (OAD) that allow the alternator to spin freely during engine deceleration, reducing belt wear and noise.</p>
        
        <h3>2. Crankshaft Pulleys</h3>
        <p>Also known as harmonic balancers, crankshaft pulleys are mounted on the crankshaft and drive all the accessory belts. They often incorporate a harmonic damper to reduce engine vibrations.</p>
        
        <h3>3. Idler Pulleys</h3>
        <p>Idler pulleys don't drive any accessory - they simply guide the serpentine belt and maintain proper belt tension and alignment. They use sealed bearings for smooth, quiet operation.</p>
        
        <h3>4. Tensioner Pulleys</h3>
        <p>Tensioner pulleys work with a spring-loaded mechanism to maintain constant belt tension. This is crucial for preventing belt slippage and ensuring all accessories receive proper power.</p>
        
        <h3>5. Water Pump Pulleys</h3>
        <p>These pulleys drive the water pump, which circulates coolant through the engine. Proper water pump pulley function is essential for preventing engine overheating.</p>
        
        <h2>Why Quality Matters</h2>
        <p>At BAAZ, we manufacture all types of pulleys using high-grade materials and precision CNC machining. Our pulleys undergo rigorous testing including dynamic balancing, dimensional accuracy checks, and endurance testing to ensure reliable performance.</p>
        
        <h2>Conclusion</h2>
        <p>Understanding the different types of pulleys and their functions helps in proper maintenance and timely replacement. Always choose quality pulleys from trusted manufacturers like BAAZ for optimal performance and longevity.</p>
      `
    },
    {
      id: '2',
      title: 'How to Choose the Right Pulley for Your Vehicle',
      excerpt: 'Expert tips on selecting the correct pulley specifications and materials.',
      image: '/images/IMG_2447.jpg',
      date: 'January 5, 2026',
      category: 'Guide',
      readTime: '4 min read',
      content: `
        <h2>Selecting the Perfect Pulley</h2>
        <p>Choosing the right pulley for your vehicle is crucial for optimal performance. Here's a comprehensive guide to help you make the right choice.</p>
        
        <h2>Key Factors to Consider</h2>
        
        <h3>1. OE Specifications</h3>
        <p>Always check the Original Equipment (OE) part number for your vehicle. This ensures compatibility with your engine's belt system and maintains proper accessory speed ratios.</p>
        
        <h3>2. Material Quality</h3>
        <p>Look for pulleys made from high-grade metals. At BAAZ, we use premium steel and aluminum alloys that offer excellent durability and corrosion resistance.</p>
        
        <h3>3. Groove Profile</h3>
        <p>Modern vehicles use serpentine belts with micro-V grooves. Ensure the pulley's groove profile matches your belt type - whether it's a V-belt, multi-ribbed, or flat belt system.</p>
        
        <h3>4. Bearing Quality</h3>
        <p>For idler and tensioner pulleys, bearing quality is crucial. Look for sealed, pre-lubricated bearings that can withstand high speeds and temperatures.</p>
        
        <h3>5. Surface Finish</h3>
        <p>A smooth surface finish reduces belt wear and noise. Our pulleys undergo precision machining to achieve optimal surface quality.</p>
        
        <h2>Signs You Need a New Pulley</h2>
        <ul>
          <li>Squealing or chirping noise from the engine bay</li>
          <li>Visible wear or damage on the pulley surface</li>
          <li>Belt slippage or premature belt wear</li>
          <li>Wobbling or rough rotation</li>
          <li>Engine overheating (water pump pulley)</li>
        </ul>
        
        <h2>Why Choose BAAZ Pulleys</h2>
        <p>With 57+ years of manufacturing excellence, BAAZ pulleys meet or exceed OE specifications. Every pulley is tested for quality and backed by our commitment to customer satisfaction.</p>
      `
    },
    {
      id: '3',
      title: 'Signs Your Pulley Needs Replacement',
      excerpt: 'Learn to identify common symptoms of worn or failing pulleys.',
      image: '/images/IMG_2448.jpg',
      date: 'December 28, 2025',
      category: 'Maintenance',
      readTime: '3 min read',
      content: `
        <h2>When to Replace Your Pulleys</h2>
        <p>Pulleys are wear items that need periodic replacement. Recognizing the warning signs early can prevent costly repairs and breakdowns.</p>
        
        <h2>Warning Signs</h2>
        
        <h3>1. Unusual Noises</h3>
        <p>A squealing, chirping, or grinding noise from the engine bay often indicates pulley problems. Worn bearings or misaligned pulleys create friction that produces these sounds.</p>
        
        <h3>2. Belt Wear Patterns</h3>
        <p>If your serpentine belt shows uneven wear, cracking, or fraying on one side, a misaligned or worn pulley may be the cause.</p>
        
        <h3>3. Visible Damage</h3>
        <p>Inspect pulleys for cracks, chips, rust, or worn grooves. Any visible damage warrants replacement.</p>
        
        <h3>4. Wobbling or Play</h3>
        <p>Grab the pulley and check for wobble or excessive play. This indicates worn bearings that will eventually fail.</p>
        
        <h3>5. Belt Tension Issues</h3>
        <p>If the belt keeps loosening or the tensioner can't maintain proper tension, the tensioner pulley assembly may need replacement.</p>
        
        <h3>6. Accessory Problems</h3>
        <p>Dim headlights, weak air conditioning, or power steering issues can sometimes be traced back to failing pulleys.</p>
        
        <h2>Replacement Intervals</h2>
        <p>While there's no fixed replacement interval, consider replacing pulleys:</p>
        <ul>
          <li>When replacing the serpentine belt</li>
          <li>At 100,000 km as preventive maintenance</li>
          <li>Whenever any of the above symptoms appear</li>
        </ul>
        
        <h2>Professional Installation</h2>
        <p>While some pulleys are easy to replace, others require special tools. When in doubt, consult a qualified mechanic.</p>
      `
    },
    {
      id: '4',
      title: 'The Manufacturing Process Behind Quality Pulleys',
      excerpt: 'An inside look at how BAAZ manufactures precision pulleys.',
      image: '/images/IMG_2451.jpg',
      date: 'December 20, 2025',
      category: 'Behind Scenes',
      readTime: '6 min read',
      content: `
        <h2>Inside BAAZ Manufacturing</h2>
        <p>Ever wondered how quality pulleys are made? Take a behind-the-scenes look at our manufacturing process in Bawana Industrial Area, Delhi.</p>
        
        <h2>Our Manufacturing Process</h2>
        
        <h3>1. Raw Material Selection</h3>
        <p>We source high-grade metals from reputed vendors. Each batch is tested for chemical composition and mechanical properties before acceptance.</p>
        
        <h3>2. CNC Machining</h3>
        <p>Our facility houses 10 CNC Turning Centres and multiple Lathe Turning Centres. Computer-controlled machining ensures micron-level precision in every pulley.</p>
        
        <h3>3. Heat Treatment</h3>
        <p>Select pulleys undergo heat treatment to achieve optimal hardness and wear resistance. This process enhances durability under heavy load conditions.</p>
        
        <h3>4. Surface Finishing</h3>
        <p>Precision grinding and polishing create the smooth surface finish necessary for optimal belt engagement and reduced wear.</p>
        
        <h3>5. Quality Testing</h3>
        <p>Every pulley undergoes comprehensive testing:</p>
        <ul>
          <li><strong>Dynamic Balancing:</strong> Ensures smooth rotation at high speeds</li>
          <li><strong>Dimensional Accuracy:</strong> Verified using precision gauges and micrometers</li>
          <li><strong>Hardness Testing:</strong> Confirms material strength</li>
          <li><strong>Surface Finish Check:</strong> Ensures optimal belt engagement</li>
          <li><strong>Endurance Testing:</strong> Validates performance under load</li>
          <li><strong>Visual Inspection:</strong> Final quality check</li>
        </ul>
        
        <h2>Production Capacity</h2>
        <p>With 2 production units and automated manufacturing, we produce 50,000 pieces monthly. This capacity allows us to serve customers across India and internationally.</p>
        
        <h2>Quality Commitment</h2>
        <p>Since 1967, BAAZ has been synonymous with quality. Our ethical business practices, timely delivery, and customer-focused approach have earned us the trust of leading automotive companies.</p>
      `
    },
    {
      id: '5',
      title: 'Serpentine Belt System: Complete Guide',
      excerpt: 'Everything you need to know about serpentine belt systems and pulleys.',
      image: '/images/IMG_2452.jpg',
      date: 'December 15, 2025',
      category: 'Technical',
      readTime: '5 min read',
      content: `
        <h2>Understanding Serpentine Belt Systems</h2>
        <p>Modern vehicles use a single serpentine belt to drive multiple accessories. Understanding this system helps in proper maintenance.</p>
        
        <h2>How It Works</h2>
        <p>The serpentine belt wraps around multiple pulleys in a specific routing pattern. The crankshaft pulley provides the driving force, while various accessory pulleys are driven by the belt.</p>
        
        <h2>Components</h2>
        <ul>
          <li><strong>Crankshaft Pulley:</strong> The drive pulley connected to the engine</li>
          <li><strong>Alternator Pulley:</strong> Powers the electrical system</li>
          <li><strong>A/C Compressor Pulley:</strong> Drives air conditioning</li>
          <li><strong>Power Steering Pulley:</strong> Assists steering</li>
          <li><strong>Water Pump Pulley:</strong> Circulates coolant</li>
          <li><strong>Idler Pulleys:</strong> Guide the belt path</li>
          <li><strong>Tensioner Pulley:</strong> Maintains belt tension</li>
        </ul>
        
        <h2>Maintenance Tips</h2>
        <p>Regular inspection of all pulleys and the belt ensures reliable operation. Replace worn components promptly to avoid breakdowns.</p>
        
        <h2>BAAZ Serpentine System Pulleys</h2>
        <p>We manufacture complete range of pulleys for serpentine belt systems. All our pulleys are precision-engineered for perfect compatibility.</p>
      `
    },
    {
      id: '6',
      title: 'OAD vs Solid Alternator Pulleys',
      excerpt: 'Understanding the difference between decoupler and solid alternator pulleys.',
      image: '/images/IMG_2453.jpg',
      date: 'December 10, 2025',
      category: 'Technical',
      readTime: '4 min read',
      content: `
        <h2>Alternator Pulley Types Explained</h2>
        <p>Not all alternator pulleys are the same. Understanding the difference between OAD and solid pulleys helps in selecting the right replacement.</p>
        
        <h2>Solid Alternator Pulleys</h2>
        <p>Traditional solid pulleys are directly connected to the alternator shaft. They're simple, durable, and cost-effective for older vehicles.</p>
        
        <h2>Overrunning Alternator Decouplers (OAD)</h2>
        <p>OAD pulleys contain a one-way clutch mechanism that allows the alternator to freewheel during engine deceleration. Benefits include:</p>
        <ul>
          <li>Reduced belt wear and vibration</li>
          <li>Quieter operation</li>
          <li>Less stress on the belt tensioner</li>
          <li>Improved fuel efficiency</li>
        </ul>
        
        <h2>Which One Do You Need?</h2>
        <p>Always replace with the same type as original. If your vehicle came with OAD, replacing with a solid pulley can cause problems.</p>
        
        <h2>BAAZ Alternator Pulleys</h2>
        <p>We manufacture both OAD and solid alternator pulleys to OE specifications. Contact us for the right pulley for your vehicle.</p>
      `
    },
  ]

  const blog = blogs.find(b => b.id === id)

  if (!blog) {
    return <Navigate to="/blogs" replace />
  }

  // Get related blogs (excluding current)
  const relatedBlogs = blogs.filter(b => b.id !== id).slice(0, 3)

  return (
    <div className="min-h-screen bg-industrial-950 pt-24">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-4">
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-industrial-400 hover:text-primary-500 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Blogs
        </Link>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8"
        >
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="px-4 py-2 bg-primary-500 text-sm font-bold text-white rounded-full">
              {blog.category}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6 text-sm text-industrial-400 mb-6"
          >
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {blog.readTime}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              BAAZ Team
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight"
          >
            {blog.title}
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-r from-primary-500/20 to-primary-600/10 rounded-2xl border border-primary-500/30 text-center"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-3">Need Quality Pulleys?</h3>
            <p className="text-industrial-400 mb-6">Contact BAAZ for premium automotive pulleys - India's No.1 Manufacturer</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Get Quote</Link>
              <Link to="/products" className="btn-outline">View Products</Link>
            </div>
          </motion.div>

          {/* Related Blogs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  to={`/blogs/${relatedBlog.id}`}
                  className="group bg-industrial-900/50 rounded-xl overflow-hidden border border-industrial-800 hover:border-primary-500/50 transition-all"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary-500 font-semibold">{relatedBlog.category}</span>
                    <h4 className="text-sm font-display font-bold text-white mt-1 line-clamp-2 group-hover:text-primary-400 transition-colors">
                      {relatedBlog.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .blog-content h2 {
          font-family: 'Oswald', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        .blog-content h3 {
          font-family: 'Oswald', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #f97316;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          color: #9ca3af;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
        }
        .blog-content ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        .blog-content ul li {
          color: #9ca3af;
          padding-left: 1.75rem;
          position: relative;
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        .blog-content ul li:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65rem;
          width: 8px;
          height: 8px;
          background: #f97316;
          border-radius: 50%;
        }
        .blog-content strong {
          color: #fff;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

export default BlogDetailPage


