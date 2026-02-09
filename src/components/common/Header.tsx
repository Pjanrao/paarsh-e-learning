import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  BookCopy,
  LayoutDashboard,
  Home,
  Users,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/courses", label: "Courses", icon: BookCopy },
  { href: "/about-us", label: "About Us", icon: Users },
  { href: "/contact-us", label: "Contact Us", icon: Mail },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      {/* ===== TOP INFO BAR ===== */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-10 items-center justify-between px-4">

          {/* LEFT : PHONE + EMAIL */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="tel:+919860098343"
              className="flex items-center gap-1 hover:underline"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 98600 98343</span>
            </a>

            <span className="h-4 w-px bg-white/40" />

            <a
              href="mailto:info@paarshelearning.com"
              className="flex items-center gap-1 hover:underline"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">
                info@paarshelearning.com
              </span>
            </a>
          </div>

          {/* RIGHT : SOCIAL ICONS */}
          <div className="flex items-center space-x-3">
            <a
              href="https://x.com/EPaarsh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white p-2 rounded-full transition-all duration-300
                         hover:bg-white hover:text-[#1DA1F2] hover:scale-110"
            >
              <Twitter className="h-4 w-4" />
            </a>

            <a
              href="https://www.facebook.com/paarsh.elearning/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white p-2 rounded-full transition-all duration-300
                         hover:bg-white hover:text-[#1877F2] hover:scale-110"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/paarsh-e-learning/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white p-2 rounded-full transition-all duration-300
                         hover:bg-white hover:text-[#0A66C2] hover:scale-110"
            >
              <Linkedin className="h-4 w-4" />
            </a>
             <a
              href="https://www.instagram.com/paarsh_elearning/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white p-2 rounded-full transition-all duration-300
                         hover:bg-white hover:text-[#E1306C] hover:scale-110"
            >
              <Instagram className="h-4 w-4" />
            </a>
             <a
              href="https://www.youtube.com/@paarshinfotech3697"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              className="text-white p-2 rounded-full transition-all duration-300
                         hover:bg-white hover:text-[#FF0000] hover:scale-110"
            >
              <Youtube className="h-4 w-4" />
            </a>
            
          </div>

        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <div className="container mx-auto flex h-16 items-center px-4">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 ml-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="ml-auto flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <div className="flex flex-col gap-6 pt-6">
                <Logo />

                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}

                {/* <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  Dashboard
                </Link> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
