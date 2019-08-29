import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle, description }) => (
  <header
    style={{
      background: `#F0DB4F`,
      // boxShadow: `0 0 8px #323330`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#323330`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <br />
      <h4 style={{ color: 'rgba(0, 0, 0, 0.7)', marginBottom: 0 }}>
        {description}
      </h4>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Sanaa’s stories`,
  description: `Hi, I am Sanā!`,
};

export default Header;
