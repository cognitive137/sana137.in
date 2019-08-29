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
          description
          name
          title
        }
      }
    }
  `);

  return (
    <div
      style={{
        background: `#f1f1f1`,
      }}
    >
      <Header
        siteTitle={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          minHeight: `80vh`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer name={site.siteMetadata.name} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
