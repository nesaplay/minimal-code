"use client"

import Link from "next/link"
import { Mail, MapPin, Code, Brain, Briefcase, ChevronDown, Linkedin, Github, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const calculateTransform = (factor: number) => {
    if (!heroRef.current) return { x: 0, y: 0 }
    const rect = heroRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const moveX = ((mousePosition.x - centerX) / centerX) * factor
    const moveY = ((mousePosition.y - centerY) / centerY) * factor
    return { x: moveX, y: moveY }
  }

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-100 blur-[120px] opacity-20"
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-100 blur-[120px] opacity-20"
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-[20%] right-[30%] w-[40%] h-[40%] rounded-full bg-teal-100 blur-[120px] opacity-10"
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Minimal Code
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-gray-600 transition-colors">
              Services
            </Link>
            <Link href="#socials" className="hover:text-gray-600 transition-colors">
              Connect
            </Link>
            <Link href="#contact" className="hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Link href="#contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section ref={heroRef} className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/90 to-gray-100/80"></div>
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.15),transparent_60%)]"
              style={{
                x: calculateTransform(-15).x,
                y: calculateTransform(-15).y,
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(120,219,198,0.1),transparent_60%)]"
              style={{
                x: calculateTransform(-10).x,
                y: calculateTransform(-10).y,
              }}
            />
            <motion.div
              className="absolute h-[40rem] w-[40rem] -top-[10rem] -left-[20rem] bg-[radial-gradient(circle,rgba(220,220,255,0.2),transparent_50%)]"
              style={{
                x: calculateTransform(-5).x,
                y: calculateTransform(-5).y,
              }}
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-[20%] left-[15%] w-4 h-4 rounded-full bg-purple-200"
              animate={{
                y: [0, -15, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-[30%] right-[25%] w-6 h-6 rounded-full bg-blue-200"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-[70%] left-[30%] w-3 h-3 rounded-full bg-teal-200"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Code-like elements */}
            <motion.div
              className="absolute top-[25%] left-[10%] text-gray-200 text-opacity-20 text-xs font-mono"
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              &lt;div&gt;
            </motion.div>
            <motion.div
              className="absolute top-[60%] right-[15%] text-gray-200 text-opacity-20 text-xs font-mono"
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              &lt;/code&gt;
            </motion.div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500">
                  Minimal Code
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Elegant solutions for complex problems
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="#services">
                <Button className="min-w-[150px]">Our Services</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="min-w-[150px]">
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-24 md:mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.p
                className="text-sm text-gray-500 mb-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                Scroll to explore
              </motion.p>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </motion.div>
            </motion.div>
            {/* Hide scroll indicator on small screens to prevent overlap */}
            <style jsx>{`
              @media (max-height: 700px) {
                .absolute.bottom-0 {
                  display: none;
                }
              }
            `}</style>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative border-t border-gray-100">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl mb-6">
                Hello, I'm <span className="font-semibold">Nenad Radovanovic</span>, the founder of Minimal Code.
              </p>
              <p className="text-gray-600 mb-8">
                With years of experience in software development and consulting, I specialize in creating efficient,
                elegant solutions that solve real business problems. My approach focuses on minimalism and
                functionality, ensuring that every line of code serves a purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 relative border-t border-gray-100">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <Code size={48} className="text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Full Stack Development</h3>
                  <p className="text-gray-600 text-center">
                    End-to-end web and mobile application development using modern technologies and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <Brain size={48} className="text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">AI Solutions</h3>
                  <p className="text-gray-600 text-center">
                    Implementing intelligent systems and machine learning solutions to automate and enhance your
                    business.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <Briefcase size={48} className="text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Consulting</h3>
                  <p className="text-gray-600 text-center">
                    Strategic technology consulting to help you make informed decisions and optimize your tech stack.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section id="socials" className="py-20 relative border-t border-gray-100">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Connect With Me</h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nenadradovanovic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                        <Linkedin size={32} className="text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                      <p className="text-sm text-gray-500 text-center">Professional Network</p>
                    </CardContent>
                  </Card>
                </a>

                {/* GitHub */}
                <a href="https://github.com/nesaplay" target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors">
                        <Github size={32} className="text-gray-800" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">GitHub</h3>
                      <p className="text-sm text-gray-500 text-center">Code & Projects</p>
                    </CardContent>
                  </Card>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/_ishone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4 group-hover:bg-pink-100 transition-colors">
                        <Instagram size={32} className="text-pink-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Instagram</h3>
                      <p className="text-sm text-gray-500 text-center">Photos & Updates</p>
                    </CardContent>
                  </Card>
                </a>

                {/* Email */}
                <a href="mailto:nash.radovanovich@gmail.com" className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                        <Mail size={32} className="text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-sm text-gray-500 text-center">Direct Contact</p>
                    </CardContent>
                  </Card>
                </a>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600">
                  Feel free to connect with me on social media or send me an email directly.
                  <br />
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative border-t border-gray-100">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="mr-3 h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:nash.radovanovich@gmail.com" className="text-gray-600 hover:underline">
                        nash.radovanovich@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        Drugog srpskog ustanka 25
                        <br />
                        34300 Arandjelovac
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="font-medium">Company Information</p>
                    <p className="text-gray-600">ID: 65573407</p>
                    <p className="text-gray-600">VAT: 111658803</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <div className="p-6 border rounded-lg bg-gray-50">
                  <p className="mb-4">
                    Ready to discuss your project? Click the button below to open your email client and send me a
                    message.
                  </p>
                  <a
                    href="mailto:nash.radovanovich@gmail.com?subject=Inquiry from Minimal Code Website"
                    className="w-full"
                  >
                    <Button className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Minimal Code</h2>
              <p className="text-gray-400 mt-2">Elegant solutions for complex problems</p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Minimal Code. All rights reserved.</p>
              <p>ID: 65573407 | VAT: 111658803</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
