import PropTypes from 'prop-types';
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const ComplexHeader = ({ siteTitle, description, headerImg, hideName }) => {
  const data = useStaticQuery(graphql`
    query getHomeNameForComplex {
      site {
        siteMetadata {
          homeName
          siteUrl
        }
      }
    }
  `);
  const { homeName, siteUrl } = data.site.siteMetadata;
  return (
    <header
      style={{
        backgroundColor: `#86BD26`,
        backgroundImage: `url(${headerImg})`,
      }}
      className={'site-header outer'}
    >
      <div className={'inner'}>
        <TinyHeader homeName={homeName} siteUrl={siteUrl} />
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

ComplexHeader.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
};

ComplexHeader.defaultProps = {
  siteTitle: `Sanaa’s stories`,
  description: `Hi, I am Sanā!`,
};

export default ComplexHeader;

const TinyHeader = ({ homeName, siteUrl }) => {
  return (
    <nav className={'site-nav'}>
      <div className={'site-nav-left'}>
        <Link to={'/'} className={'site-nav-logo'}>
          {homeName}
        </Link>
        <ul className="nav" role="menu">
          <li className="nav-weblog" role="menuitem">
            <Link to={'/tags'} style={{ textTransform: `upper` }}>
              Topics
            </Link>
          </li>
        </ul>
      </div>
      <div className={'site-nav-right'}>
        <div className={'social-links'} />
        <a
          className={'rss-button'}
          href={`https://feedly.com/i/subscription/feed/${siteUrl}/rss.xml`}
          rel="noopener noreferrer"
          target="_blank"
          title="RSS"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="6.18" cy="17.82" r="2.18"></circle>
            <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path>
          </svg>
        </a>
      </div>
    </nav>
  );
};
