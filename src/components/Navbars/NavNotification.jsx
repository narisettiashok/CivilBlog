import { BellIcon } from "@heroicons/react/outline";

function NavNotification() {
    return (
        <>
            <button className="h-8 w-8 rounded-md hover:bg-blue-200 hover:text-blue-800 focus:outline-none">
                <BellIcon className="w-full h-5" />
            </button>
        </>
    )
}

export default NavNotification;
