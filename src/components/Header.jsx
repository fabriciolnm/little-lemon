import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Menu", href: "/menu", current: false },
  { name: "Reservations", href: "/reservation", current: false },
  { name: "Order Online", href: "/order", current: false },
  { name: "Sign up", href: "/signup", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white my-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 lg:px-8">
            <div className="relative flex h-auto items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-teal-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-center">
                <div className="flex flex-shrink-0 items-center mr-5">
                  <img
                    className="h-14 w-auto"
                    src="/static/images/logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-black hover:bg-teal-900 hover:text-white"
                            : "text-black hover:bg-teal-900 hover:text-white",
                          "rounded-md px-2 py-4 text-base font-bold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu links*/}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white text-black hover:bg-teal-900 hover:text-white"
                      : "text-black hover:bg-teal-900 hover:text-white",
                    "block rounded-md px-3 py-2 text-sm font-bold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
