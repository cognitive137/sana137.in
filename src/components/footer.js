import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ author, name, style }) => (
  <footer className={'site-footer outer'} style={{ ...style }}>
    <div className={'site-footer-content inner'}>
      <section className={'copyright'}>
        <a href={`https://www.twitter.com/${author}`}>{name}</a> ©{' '}
        {new Date().getFullYear()}
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
  name: `Sanā Habeeb`,
  author: `@SanaHabeeb4`,
};

export default Footer;
