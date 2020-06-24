import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import '../components/layout.css';

const Footer = ({ author, name, style }) => (
  <footer className={'site-footer outer'} style={{ ...style }}>
    <div className={'site-footer-content inner'}>
      <section className={'copyright'}>
        {/* <a href={`https://www.twitter.com/${author}`}>{name}</a> ©{' '} */}
        {name} © {new Date().getFullYear()}
      </section>
      <nav className={'site-footer-nav'}>
        <Link to="/">Latest Posts</Link>
      </nav>
    </div>
  </footer>
);

Footer.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
};

Footer.defaultProps = {
  name: `Sana`,
  author: `Sana`,
};

export default Footer;
