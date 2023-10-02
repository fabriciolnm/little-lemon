import React from "react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Menu", href: "/menu", current: false },
  { name: "Reservations", href: "/reservation", current: false },
  { name: "Order Online", href: "/", current: false },
  { name: "Login", href: "/", current: false },
];

const Footer = () => {
  return (
    <footer className="bg-teal-900 w-full text-white">
      <main className="flex md:flex-row flex-shrink-0 items-center justify-center gap-4 md:gap-20">
        <img
          className="h-20 m-5 w-auto "
          src="/static/images/logo-footer.png"
          alt="Your Company"
        />
        <nav className="flex text-sm gap-4 md:gap-12 ">
          <div className="flex flex-col gap-2">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/menu">Menu</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="/reservation">Reservations</a>
            <a href="/">Order Online</a>
            <a href="/">Login</a>
          </div>
        </nav>
        <nav className="flex flex-shrink-0 md:items-stretch flex-col m-4 md:m-0 gap-4">
          <a href="http://www.facebook.com" target="blank">
            <img className="h-8 w-auto" src="/static/images/icon-facebook.png" alt="" />
          </a>
          <a href="http://www.instagram.com" target="blank">
            <img className="h-8 w-auto" src="/static/images/icon-instagram.png" alt="" />
          </a>
        </nav>
      </main>
        <hr className="my-2 mx-4 border-teal-800" />
      <div className="flex flex-shrink-0 items-center justify-center text-sm p-4">
        <p>© 2023 Copyright: Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
