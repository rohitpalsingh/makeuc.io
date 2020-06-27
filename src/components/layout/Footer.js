import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a target='_blank' href="mailto:contact@makeuc.io">Email</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a target='_blank' href="https://www.linkedin.com/company/makeuc/">LinkedIn</a>
          </li>
          <li>
            <a target='_blank' href="https://www.instagram.com/uc_ieee">Instagram</a>
          </li>
          <li>
            <a target='_blank' href="https://twitter.com/uc_ieee">Twitter</a>
          </li>
          <li>
            <a target='_blank' href="https://github.com/ieeeatuc/makeuc.io">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
