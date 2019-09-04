/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          description
          headerImg
          name
          title
        }
      }
    }
  `);

  return (
    <div className={'home-template'}>
      <div className={'site-wrapper'}>
        <Header
          siteTitle={site.siteMetadata.title}
          description={site.siteMetadata.description}
          headerImg={site.siteMetadata.headerImg}
        />
        <main className={'site-main outer'} id={'site-main'}>
          {children}
        </main>
        <Footer
          author={site.siteMetadata.author}
          name={site.siteMetadata.name}
          className={'site-footer outer'}
        />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
