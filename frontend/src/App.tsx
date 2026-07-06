import { ThemeProvider } from "./components/ui/theme-provider.tsx"
import { ModeToggle } from "./components/ui/mode-toggle.tsx"
import { Hero } from "./components/layout/Hero.tsx";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/layout/Navbar.tsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosAPI } from "./lib/axios.ts";

ThemeProvider
function App() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "addRoom",
      link: "#addRoom",
    },
  ];

  useEffect(() => {
    const data = axiosAPI.post("user/login", { userName: "aniket", password: "12345" });
    console.log(data);

  }, [])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>

      <div className="relative w-full mt-1">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              {/* <Link to='/login'>  */}
              <NavbarButton variant="secondary" as={Link} to="/login">Login</NavbarButton>
              {/* </Link> */}
              {/* <NavbarButton variant="primary">Book a call</NavbarButton> */}
              <NavbarButton variant="secondary">        <ModeToggle /></NavbarButton>
            </div>
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <Link to="/login">
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Login
                  </NavbarButton>
                </Link>
                {/* <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton> */}
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

      </div>

      <div className="pl-5 pt-6 pr-5">
        <Hero />
      </div>

      <div></div>
    </>
  )
}

export default App
