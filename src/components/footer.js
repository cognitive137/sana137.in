import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ name, author }) => (
  <footer style={{ background: `#323330` }}>
    <div
      // style={{
      //   color: `#fff`,
      //   fontSize: '13px',
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `1.45rem 1.0875rem`,
      //   verticalAlign: `middle`,
      // }}
      style={{
        ...siteFooterContent,
        ...inner,
        fontSize: '13px',
        margin: `0 auto`,
        padding: `1.45rem 0`,
      }}
    >
      <section className="copyright">
        <a href={`https://www.twitter.com/${author}`} style={links}>
          {name}
        </a>{' '}
        © {new Date().getFullYear()}
      </section>
      <nav style={siteFooterNav}>
        <Link style={links} to="/">
          Latest Posts
        </Link>
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

const inner = {
  margin: `0 auto`,
  maxWidth: `960px`,
  width: `100%`,
};

const siteFooterContent = {
  alignItems: `center`,
  color: `rgba(255, 255, 255, 0.7)`,
  display: `flex`,
  flexWrap: `wrap`,
  fontSize: `1.3rem`,
  justifyContent: `space-between`,
};

const siteFooterNav = {
  display: `flex`,
};

const links = {
  color: `#fff`,
  textDecoration: `none`,
};
