import React, { useState } from 'react';
import { Link } from 'gatsby';

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'Blog',
    slug: '/blog/',
  },
  {
    title: 'My Work',
    slug: '/experience/',
  },
  {
    title: 'Uses',
    slug: '/blog/uses',
  },
  {
    title: 'Contact Me',
    slug: '/contact/',
  },
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`hidden ${
          open ? 'flex' : 'flex-col'
        } sm:flex sm:flex-row sm:w-auto sm:order-none sm:my-0 w-full order-last my-4`}
      >
        {mainNavItems.map((item, index) => (
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
      <button className="sm:hidden nav-toggle" onClick={() => setOpen(!open)}>
        <span>button</span>
      </button>
    </>
  );
};

export default MainNav;
