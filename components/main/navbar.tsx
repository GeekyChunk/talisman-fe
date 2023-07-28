"use client";
import { useAuth } from "@/hooks/auth";
import { User } from "@/store/slice/auth";
import { Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, Cog8ToothIcon, KeyIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const AccountDropdown = ({ user }: {
    user: User
}) => {
    const auth = useAuth();

    return (
        <Menu as="div" className="dropdown dropdown-end text-lg">
            <Menu.Button className="btn btn-square">
                <UserCircleIcon className="h-6 w-6 md:w-8 md:h-8 text-gray-500" />
            </Menu.Button>
            <Menu.Items onClick={e => e.stopPropagation()} as="ul" className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <Menu.Item onClick={e => e.stopPropagation()} as="div" className="py-2">
                    <Link
                        href=""
                        className="w-full flex items-center justify-center gap-1 font-bold text-lg text-gray-700"
                    >
                        <UserIcon strokeWidth={2.0} className="w-6 h-6 fill-gray-700" />
                        <span>{user.username}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item as="li">
                    <Link
                        className="text-base font-semibold text-gray-600 flex gap-2 px-3"
                        href="/account"
                    >
                        <Cog8ToothIcon className="w-6 h-6" />
                        Settings
                    </Link>
                </Menu.Item>
                <Menu.Item as="li">
                    <button
                        onClick={() => auth.Logout()}
                        className="text-base font-semibold !text-rose-600 hover:bg-rose-50 focus:!bg-rose-100 active:!bg-rose-100 flex gap-2 px-3"
                    >
                        <KeyIcon className="w-6 h-6 text-rose-600" />
                        Logout
                    </button>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

export default function Navbar() {
    const auth = useAuth();

    return (
        <div className="bg-gray-200 shadow-lg py-2 px-4 z-20 sticky top-0 start-0 end-0">
            <div className="container mx-auto max-w-7xl flex justify-between items-center">
                <div>
                    <Link href="/dash" className="flex items-center gap-2">
                        <img className="h-auto w-12" src="/assets/brand.png" alt="Talisman" />
                        <div className="text-gray-600 text-xl font-bold">
                            Talisman
                        </div>
                    </Link>
                </div>

                <div className="flex-grow px-8 py-1 hidden md:block">
                    <div className="relative">
                        <input className="relative input input-bordered rounded-full w-full pl-12" placeholder="Search Talisman" type="text" />
                        <div className="absolute left-2 top-0 bottom-0 flex items-center">
                            <MagnifyingGlassIcon className="w-8 h-8 text-gray-500 font-bold" />
                        </div>
                    </div>
                </div>

                <div className="pl-4 hidden md:flex gap-3">

                    {
                        (auth.authStore.loggedIn && auth.authStore.profile) ? (
                            <div className="flex gap-3">
                                <Link href="/notifications" className="btn btn-square">
                                    <BellIcon className="h-6 w-6 md:w-8 md:h-8 text-gray-500" />
                                </Link>
                                <AccountDropdown user={auth.authStore.profile} />
                            </div>
                        ) : (
                            <Link href="/auth/login" className="btn btn-square">
                                <KeyIcon className="h-6 w-6 md:w-8 md:h-8 text-gray-500" />
                            </Link>
                        )
                    }
                </div>

                <div className="block md:hidden">
                    <button className="btn btn-square">
                        <Bars3Icon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
