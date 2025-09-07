"use client"

import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const handleEmailClick = () => {
    const email = "hello@thelamandu.com"
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = `mailto:${email}`
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank")
    }
  }

  return (
    <footer className="bg-muted py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Phone className="w-6 h-6 text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-muted-foreground mb-2">Call Us</h4>
            <p className="text-muted-foreground/80">+0000000000</p>
          </div>

          <div className="text-center">
            <Mail className="w-6 h-6 text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-muted-foreground mb-2">Email</h4>
            <button
              onClick={handleEmailClick}
              className="text-muted-foreground/80 hover:text-accent transition-colors cursor-pointer"
            >
              test@test.com
            </button>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-muted-foreground mb-2">Location</h4>
            <p className="text-muted-foreground/80">Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors transform hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors transform hover:scale-110"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Brand Message */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">Thelamandu</h3>
          <p className="font-sans text-muted-foreground/80 max-w-2xl mx-auto text-pretty">
            From the heart of the Himalayas to your table. We&apos;re crafting an authentic Nepali dining experience that
            celebrates the rich flavors and warm hospitality of Nepal.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-muted-foreground/20">
          <p className="text-muted-foreground/60 text-sm">© 2025 Thelamandu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
