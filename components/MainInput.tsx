import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"

const MainInput = () => {
    return (
        <div>
            <div className="flex items-center justify-center mb-4">
            <Input
                type="text"
                placeholder="Enter city name"
                className="w-full max-w-md p-4 text-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-200 rounded-r-none"
                />
                <Button className="rounded-l-none cursor-pointer" >
                    Search
                </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Type a city name to get the current weather.
        </p>
        </div>
    )
}

export default MainInput