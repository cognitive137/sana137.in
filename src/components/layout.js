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
          ...siteMain,
          ...outer,
          minHeight: `75vh`,
        }}
      >
        <main style={inner}>{children}</main>
      </div>
      <Footer
        author={site.siteMetadata.author}
        name={site.siteMetadata.name}
        style={{ ...siteFooter, ...outer }}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const inner = {
  margin: `0 auto`,
  maxWidth: `960px`,
  width: `100%`,
};

const outer = {
  padding: `0 4vw`,
  position: `relative`,
};

const siteFooter = {
  color: `white`,
  paddingBottom: `60px`,
  paddingTop: `20px`,
  position: `relative`,
};

const siteMain = {
  flexGrow: `1`,
  zIndex: `100`,
};
