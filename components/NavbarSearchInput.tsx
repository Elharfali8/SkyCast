
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input"

const NavbarSearchInput = () => {
  return (
      <div className="relative hidden lg:block">
          <Input type="search" placeholder="Search..." className="" />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
              <FaSearch />
              </button>
    </div>
  )
}

export default NavbarSearchInput