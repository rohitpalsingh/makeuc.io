import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = ({ page = `index` } = {}) => {
  const [ state, setState ] = useState(`top`);

  useEffect(() => {
    const listener = document.addEventListener(`scroll`, e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (state !== `scrolling`) {
          setState(`scrolling`);
        }
      } else {
        if (state !== `top`) {
          setState(`top`);
        }
      }
    });

    return () => document.removeEventListener(`scroll`, listener);
  });

  return <header className={`sticky top-0 shadow navbar ${state}`}>
    <div className="container flex flex-col sm:flex-row justify-between items-center max-w-full px-8 py-2">
      <Link to="/">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon />
          </div>
        </div>
      </Link>
      { (page === `index`) &&
        <div className="flex mt-3 sm:mt-0">
          <AnchorLink className="px-5 xs:px-4 nav-link" href="#about">
            ABOUT
          </AnchorLink>
          {/* <AnchorLink href="#schedule"></AnchorLink> */}
          <AnchorLink className="px-5 xs:px-4 nav-link" href="#tracks">
            TRACKS
          </AnchorLink>
          <AnchorLink className="px-5 xs:px-4 nav-link" href="#faq">
            FAQ
          </AnchorLink>
          {/* <AnchorLink href="#prizes"></AnchorLink> */}
          <AnchorLink className="px-5 xs:px-4 nav-link" href="#sponsors">
            SPONSORS
          </AnchorLink>
        </div>
      }
      <div className="hidden md:block">
        { page === `index` ?
          <Link to="/register">
            <Button className="text-sm font-bold">REGISTER</Button>
          </Link> :
          <Link to="/">
            <Button size="default" className="text-sm font-bold">HOME</Button>
          </Link>
        }
      </div>
    </div>
  </header>
};

export default Header;
