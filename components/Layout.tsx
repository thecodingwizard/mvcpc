import type { NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  DatabaseIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";

const Layout: NextPage = ({ children }) => {
  return (
    <div className="bg-white min-h-full">
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1 font-black text-2xl text-gray-700">
              <Link href="/">
                <a>MVCPC</a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link href="/resources">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Resources
                </a>
              </Link>
              <Link href="/team">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Team
                </a>
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="mailto:programmingcompetitive@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact Us
              </a>
              <a
                href="https://forms.gle/EKcgMq9siKd3WY757"
                target="_blank"
                rel="noreferrer"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
              >
                Interest Form
              </a>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-black text-gray-700">
                      <Link href="/">
                        <a>MVCPC</a>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      <Link href="/resources">
                        <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                            <DatabaseIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            Resources
                          </div>
                        </a>
                      </Link>
                      <Link href="/team">
                        <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                            <UsersIcon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            Team
                          </div>
                        </a>
                      </Link>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <a
                    href="https://forms.gle/EKcgMq9siKd3WY757"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Interest Form
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    <a
                      href="mailto:programmingcompetitive@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-900"
                    >
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main className="min-h-full">{children}</main>

      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto x-4 sm:px-6 py-8 lg:px-8">
          <p className="text-base text-gray-400">
            &copy; 2021 Nathan Wang. Site last updated on 09/04/2021.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
