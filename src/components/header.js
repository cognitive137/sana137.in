import PropTypes from 'prop-types';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Header = ({ siteTitle, description, headerImg, hideName }) => {
  const data = useStaticQuery(graphql`
    query getHomeName {
      site {
        siteMetadata {
          homeName
        }
      }
    }
  `);
  const { homeName } = data.site.siteMetadata;
  return (
    <header
      style={{
        backgroundColor: `#86BD26`,
        backgroundImage: `url(${headerImg})`,
      }}
      className={'site-header outer'}
    >
      <div className={'inner'}>
        <div className={'site-header-content'}>
          <h1 style={{ margin: 0 }} className={'site-title'}>
            {siteTitle}
          </h1>
          <br />
          <h2 className={'site-description'}>{description}</h2>
          {!hideName && <h2>{homeName}</h2>}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Sanaa’s stories`,
  description: `Hi, I am Sanā!`,
};

export default Header;
