import { useEffect, useState } from "react";
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
import { ModeToggle } from "@/components/ui/mode-toggle.tsx";
import { Link } from "react-router-dom";
import SearchBar from "@/components/ui/SearchBar";
import { SwapCard } from "@/components/ui/Card";
import {  featchRooms } from "@/features/room/roomApi";
import { useDispatch, useSelector } from "react-redux";
import { addRoomInfo } from "@/features/room/roomSlice";

function RoomsList() {
  const [rooms, setRooms] = useState<Array<any>>([]);
  const [SearchInput, setSearchInput] = useState<string>("");
  const dispatch = useDispatch();
  const room = useSelector((state: any) => state.room.roomInfo);
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    (async () => {
      const res = await featchRooms();
      setRooms(res.data);
      dispatch(addRoomInfo(res.data))
    })()

  }, [])






  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full mt-1">
        <Navbar>
          {/* 🖥️ Desktop Navbar */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center">
                <SearchBar />
              </div>
              <NavbarButton variant="secondary" as={Link} to="/login">
                Login
              </NavbarButton>
              <NavbarButton variant="secondary">
                <ModeToggle />
              </NavbarButton>
            </div>
          </NavBody>

          <MobileNav>

            <MobileNavHeader className="flex items-center justify-between w-full px-3 py-2 relative">
              <div className="flex items-center flex-shrink-0">
                <NavbarLogo />
              </div>

              <div className="flex-1 flex justify-center px-2">
                <SearchBar
                  className="
        w-full max-w-[70vw] sm:max-w-md 
        transition-all duration-300
      "
                />
              </div>

              {/* ☰ Right: Mobile Menu Toggle */}
              <div className="flex items-center justify-end flex-shrink-0 ml-2">
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </MobileNavHeader>

            {/* Dropdown Menu */}
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
                  {item.name}
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

      {/* Your other content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-18 pl-8">
        {rooms.map((item, key) => (
          <div key={key} className="flex justify-center">
            <SwapCard
              mode={item.mode}
              data={{
                title: item.City,
                description: item.Price,
                images: item.image
                  ? item.image.split(",").map((url: string) => ({
                    thumbnail: url.trim(),
                    alt: item.City || "Room Image",
                  }))
                  : [],


              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default RoomsList;
