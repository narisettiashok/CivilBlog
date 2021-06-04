
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CogIcon } from "@heroicons/react/outline";

import profilePic from "../../assets/images/profile-pic.png";

function NavProfile() {
	const routes = [
		{ name: "Profile", to: "/app/user-profile" },
		{ name: "Settings", to: "/app/settings" }
	];

	return (
		<>
			<div className="hidden sm:block">
				<Menu className="relative w-full">
					{
						({ open }) => (
							<>
								<Menu.Button className="border-0 rounded-md p-2 focus:outline-none flex justify-center items-center">
									<img className="h-8 w-8 rounded"
										src={profilePic}
										alt="Profile"
									/>
								</Menu.Button>
								<Transition
									show={open}
									as={Fragment}
									enter="duration-150 ease-out"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="duration-100 ease-in"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Menu.Items className="absolute z-10 right-10 w-44 border border-gray-300 rounded-lg bg-white">
										{routes.map((route, key) => (
											<Menu.Item key={key} className="w-full block p-2 whitespace-nowrap text-sm font-semibold hover:bg-gray-300">
												<Link className=""
													to={route.to}>
													{route.name}
												</Link>
											</Menu.Item>
										))}
									</Menu.Items>
								</Transition>
							</>
						)
					}
				</Menu>
			</div>

			{/* Mobile View */}
			<div className="sm:hidden flex items-center space-x-4">
				<Link className="h-8 w-8 rounded-md focus:outline-none"
					to="/app/user-profile">
					<img className="h-8 w-8 rounded"
						src={profilePic}
						alt="Profile"
					/>
				</Link>
				<Link className="h-6 w-6 focus:outline-none"
					to="/app/settings">
					<CogIcon />
				</Link>
			</div>
		</>
	)
}

export default NavProfile;
