import React, { useState } from "react";
import { Link } from "gatsby";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

import Icon from "@/components/Icons/gatsby";

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: "Blog",
    slug: "/blog/",
  },
  {
    title: "My Work",
    slug: "/experience/",
  },
  {
    title: "Uses",
    slug: "/blog/uses",
  },
  {
    title: "Contact Me",
    slug: "/contact/",
  },
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`${
          open ? "" : "hidden"
        } flex flex-col w-full order-last items-end sm:flex sm:flex-row sm:w-auto sm:order-none my-0`}
      >
        {mainNavItems.map((item: MainNavItem, index) => (
          <Link
            className="main-nav-item animated-link text-xl"
            key={`nav-item-${index}`}
            to={item.slug}
            activeClassName="active"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="sm:hidden nav-toggle transition duration-300 ease-in-out transform hover:scale-110"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <Icon
          className={`fill-current text-pink transition ease-in-out duration-300 transform ${
            open ? "rotate-180" : ""
          }`}
          icon={faChevronCircleDown}
          size="2x"
        />
      </button>
    </>
  );
};

export default MainNav;
