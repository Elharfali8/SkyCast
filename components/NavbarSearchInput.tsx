
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input"

const NavbarSearchInput = () => {
  return (
      <div className="flex items-center">
          <Input type="search" placeholder="Search..." className="rounded-r-none" />
          <button className=" text-gray-500 hover:text-gray-700 cursor-pointer bg-[#3b82f6] h-[36px] w-[36px] flex items-center justify-center rounded-r-lg">
              <FaSearch  />
              </button>
    </div>
  )
}

export default NavbarSearchInput