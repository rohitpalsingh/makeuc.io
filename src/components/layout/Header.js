import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center max-w-full py-4 px-8">
      <Link to="/">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon />
          </div>
        </div>
      </Link>
      <div className="flex mt-4 sm:mt-0">
        {/* <AnchorLink className="px-4" href="#schedule">
          Schedule
        </AnchorLink> */}
        <AnchorLink className="px-4" href="#tracks">
          Tracks
        </AnchorLink>
        <AnchorLink className="px-4" href="#faq">
          FAQ
        </AnchorLink>
        {/* <AnchorLink className="px-4" href="#prizes">
          Prizes
        </AnchorLink> */}
        <AnchorLink className="px-4" href="#sponsors">
          Sponsors
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Link to="/register">
          <Button className="text-sm">Register</Button>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
