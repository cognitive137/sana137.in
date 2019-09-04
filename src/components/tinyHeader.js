import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const TinyHeader = () => {
  const data = useStaticQuery(graphql`
    query getSiteUrl {
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
    <header className={'site-header outer'}>
      <div className={'inner'}>
        <nav className={'site-nav'}>
          <div className={'site-nav-left'}>
            <Link to={'/'} className={'site-nav-logo'}>
              {homeName}
            </Link>
            <ul className="nav" role="menu">
              <li className="nav-weblog" role="menuitem">
                <Link to={'/tags'} style={{ textTransform: `upper` }}>
                  #tags
                </Link>
              </li>
            </ul>
          </div>
          <div className={'site-nav-right'}>
            <div className={'social-links'}>
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TinyHeader;
