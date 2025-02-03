import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Policies", href: "/policies" },
  ],
  Discover: [
    { name: "Trust & Safety", href: "/trust-and-safety" },
    { name: "Travel Credit", href: "/travel-credit" },
    { name: "Gift Cards", href: "/gift-cards" },
    { name: "Bomani Citizen", href: "/citizen" },
  ],
  Hosting: [
    { name: "Why Host", href: "/why-host" },
    { name: "Hospitality", href: "/hospitality" },
    { name: "Responsible Hosting", href: "/responsible-hosting" },
    { name: "Community Center", href: "/community-center" },
  ],
  Support: [
    { name: "Help Center", href: "/help" },
    { name: "Cancellation Options", href: "/cancellation" },
    { name: "Neighborhood Support", href: "/neighborhood-support" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-teal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white pt-8">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Bomani, Inc. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-mint">
              <Facebook />
            </a>
            <a href="#" className="hover:text-mint">
              <Twitter />
            </a>
            <a href="#" className="hover:text-mint">
              <Instagram />
            </a>
            <a href="#" className="hover:text-mint">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

