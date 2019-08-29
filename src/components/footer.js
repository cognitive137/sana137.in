import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ name }) => (
  <footer
    style={{
      background: `#323330`,
      marginTop: `1.45rem`,
    }}
  >
    <div
      style={{
        color: `#fff`,
        fontSize: '20px',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        verticalAlign: `middle`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `#fff`,
          textDecoration: `none`,
        }}
      >
        {name}
      </Link>{' '}
      © {new Date().getFullYear()}
    </div>
  </footer>
);

Footer.propTypes = {
  name: PropTypes.string,
};

Footer.defaultProps = {
  name: `Sanā Habeeb`,
};

export default Footer;
