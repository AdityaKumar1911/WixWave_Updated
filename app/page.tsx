'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Laptop, Smartphone, Search, Users, BarChart, Database, Share2, HeadphonesIcon, Menu, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from '../app/img/white.png'
import Image from 'next/image';

const services = [
  { icon: Laptop, title: 'Web Design & Development', description: 'Crafting stunning and functional websites' },
  { icon: Smartphone, title: 'App Development', description: 'Building innovative mobile applications' },
  { icon: Search, title: 'SEO', description: 'Boosting your online visibility and rankings' },
  { icon: Users, title: 'CRM', description: 'Managing customer relationships effectively' },
  { icon: BarChart, title: 'Paid Ads', description: 'Maximizing your ROI with targeted advertising' },
  { icon: Database, title: 'ERP', description: 'Streamlining your business operations' },
  { icon: Share2, title: 'Social Media Management', description: 'Engaging your audience across platforms' },
  { icon: HeadphonesIcon, title: '24/7 Support', description: 'Always here when you need us' },
]

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg className="absolute w-full h-full">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>
        </defs>
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            r={Math.random() * 100 + 50}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            fill="url(#gradient)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 backdrop-blur-[100px]"></div>
    </div>
  )
}

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white py-16 md:py-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">WixWave</h3>
            <p className="mb-6 text-gray-300">Empowering businesses with innovative digital solutions.</p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: "#8B5CF6" }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'About Us', 'Contact', 'Blog'].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li>123 Tech Street</li>
              <li>San Francisco, CA 94107</li>
              <li>Email: info@wixwave.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="mb-4 text-gray-300">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col space-y-3">
              <Input type="email" placeholder="Your email" className="bg-white/10 border-purple-500 text-white placeholder-gray-400" />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Subscribe</Button>
            </form>
          </motion.div>
        </div>
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; 2023 WixWave Agency. All rights reserved.</p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-blue-900/20 backdrop-blur-sm"></div>
    </motion.footer>
  )
}

export default function WixWaveAgency() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Innovative', 'Cutting-edge', 'Scalable', 'Efficient']
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <header className="container mx-auto py-6 px-4">
          <nav className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
               <Image src={logo} alt="Logo" width={100} height={100} className="mr-2" /> {/* Adjust width and height */}
            </motion.h1>
            <ul className="hidden md:flex space-x-4">
              <li><a href="#services" className="hover:text-purple-300 transition">Services</a></li>
              <li><a href="#about" className="hover:text-purple-300 transition">About</a></li>
              <li><a href="#contact" className="hover:text-purple-300 transition">Contact</a></li>
            </ul>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <a href="#services" className="text-lg hover:text-purple-300 transition">Services</a>
                  <a href="#about" className="text-lg hover:text-purple-300 transition">About</a>
                  <a href="#contact" className="text-lg hover:text-purple-300 transition">Contact</a>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </header>

        <main className="px-4">
          <section className="container mx-auto py-12 md:py-20 text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{words[currentWord]}</span> Digital Solutions
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empowering businesses with cutting-edge technology and creativity
            </motion.p>
            <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">Get Started</Button>
          </section>

          <section id="services" className="py-12 md:py-20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Our Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
                    }}
                  >
                    <Card className="bg-white/10 border-none h-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <CardHeader>
                        <service.icon className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mb-4" />
                        <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm md:text-base">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="about" ref={ref} className="py-12 md:py-20">
            <div className="container mx-auto">
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
              >
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>About WixWave</motion.h2>
                <motion.p className="text-base md:text-lg mb-4" variants={itemVariants}>
                  WixWave is a leading digital agency specializing in creating innovative solutions for businesses of all sizes. Our team of experts is passionate about leveraging the latest technologies to help our clients succeed in the digital world.
                </motion.p>
                <motion.p className="text-base md:text-lg" variants={itemVariants}>
                  With our comprehensive range of services, from web and app development to SEO and social media management, we're your one-stop shop for all your digital needs. Our 24/7 support ensures that we're always here when you need us.
                </motion.p>
              </motion.div>
            </div>
          </section>

          <section id="contact" className="py-12 md:py-20">
            <div className="container mx-auto max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Contact Us</h2>
              <Card className="bg-white/10 backdrop-blur-sm border-none">
                <CardContent className="space-y-4 pt-6">
                  <Input placeholder="Name" className="bg-white/20 border-purple-300" />
                  <Input placeholder="Email" type="email" className="bg-white/20 border-purple-300" />
                  <Textarea placeholder="Message" className="bg-white/20 border-purple-300" />
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}