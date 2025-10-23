"use client"

import Image from "next/image";
import { Scale, Menu, BookOpen, Shield, MessageCircle, Users, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface LawAINavbarProps {
  logo?: {
    url: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    trial: {
      text: string;
      url: string;
    };
    contact: {
      text: string;
      url: string;
    };
  };
}

const LawAINavbar = ({
  logo = {
    url: "/",
    title: "ZeroFiscus",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "Hoe werkt het", url: "#hoe-werkt-het" },
    { title: "Reviews", url: "#reviews" },
    { title: "Waarom", url: "#waarom" },
    { title: "Veelgestelde vragen", url: "#faq" },
  ],
  auth = {
    trial: { text: "Start Check", url: "/assessment" },
    contact: { text: "Contact", url: "mailto:info@zerofiscus.nl" },
  },
}: LawAINavbarProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or near top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Blur the clicked element to remove focus state
    (e.currentTarget as HTMLElement).blur();
    
    if (targetId === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80; // Account for fixed navbar
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const renderMenuItem = (item: MenuItem) => {
    if (item.items && item.items.length > 0) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger className="text-sm font-medium">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[350px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {item.items.map((subItem) => (
                <NavigationMenuLink key={subItem.title} asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href={subItem.url}
                  >
                    <div className="flex items-center gap-2">
                      {subItem.icon}
                      <div className="text-sm font-medium leading-none">
                        {subItem.title}
                      </div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {subItem.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink asChild>
          <a
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            href={item.url}
            onClick={(e) => handleSmoothScroll(e, item.url)}
          >
            {item.title}
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };


  return (
    <section className={`fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 bg-white border-b border-gray-200 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Desktop Navigation */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href={logo.url} className="flex items-center">
              <Image
                src="/ZeroFiscus.png"
                alt="ZeroFiscus"
                width={105}
                height={29}
                className="h-auto"
              />
            </a>
            
            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-3">
            <Button asChild size="sm" variant="outline">
              <a href={auth.contact.url}>{auth.contact.text}</a>
            </Button>
            <Button asChild size="sm" className="bg-gray-900 hover:bg-gray-800">
              <a href={auth.trial.url}>{auth.trial.text}</a>
            </Button>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <a href={logo.url} className="flex items-center flex-shrink-0">
              <Image
                src="/ZeroFiscus.png"
                alt="ZeroFiscus"
                width={90}
                height={26}
                className="h-auto"
              />
            </a>
            
            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="flex-shrink-0">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    Menu
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation menu
                  </SheetDescription>
                </SheetHeader>
                
                <div className="flex flex-col h-full">
                  {/* Navigation items - main content */}
                  <div className="flex-1 py-6">
                    {menu.map((item) => (
                      <a
                        key={item.title}
                        href={item.url}
                        onClick={(e) => {
                          handleSmoothScroll(e, item.url);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block text-base font-medium py-4 text-foreground hover:text-accent-foreground border-b border-border/50 transition-colors min-h-[44px] flex items-center"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                  
                  {/* Buttons at bottom */}
                  <div className="flex flex-col gap-3 pb-6">
                    <Button asChild variant="outline" className="text-foreground border-foreground hover:bg-foreground hover:text-background">
                      <a href={auth.contact.url} onClick={() => setIsMobileMenuOpen(false)}>{auth.contact.text}</a>
                    </Button>
                    <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
                      <a href={auth.trial.url} onClick={() => setIsMobileMenuOpen(false)}>{auth.trial.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LawAINavbar }; 