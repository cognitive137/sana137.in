import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';

import '../components/hanabi.global.css';
import '../components/hanabi.screen.css';

export const query = graphql`
  query BlogPostList {
    site {
      siteMetadata {
        author
        name
        photo
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        excerpt
        timeToRead
      }
      edges {
        node {
          frontmatter {
            cover
            date
            path
            tags
            title
          }
        }
      }
    }
  }
`;

export default function IndexPage(props) {
  const edges = props.data.allMarkdownRemark.edges;
  const nodes = props.data.allMarkdownRemark.nodes;
  for (let index in edges) edges[index] = { ...edges[index], ...nodes[index] };
  const { author: twitterHandle, name, photo } = props.data.site.siteMetadata;
  return (
    <Layout>
      <SEO title="Home" />
      <div className={'post-feed'}>
        {edges.map((edge, index) => {
          const { frontmatter } = edge.node;
          const publishDate = new Date(frontmatter.date).toDateString();
          const cover = frontmatter.cover;
          return (
            <article className={'post-card'} key={frontmatter.path}>
              <Link to={frontmatter.path} className={'post-card-image-link'}>
                <div
                  className={'post-card-image'}
                  style={{
                    backgroundImage: `url("${cover}")`,
                  }}
                ></div>
              </Link>
              <div className={'post-card-content'}>
                <Link
                  to={frontmatter.path}
                  className={'post-card-content-link'}
                >
                  <header className="postCardHeader">
                    <span className={'post-card-tags'}>
                      {frontmatter.tags ? frontmatter.tags[0] + ` • ` : ``}{' '}
                      {publishDate}
                    </span>
                    <h2 className={'post-card-title'}>{frontmatter.title}</h2>
                  </header>
                  <section className="postCardExcerpt">
                    <p className={'excerpt'}>{edges[index].excerpt}</p>
                  </section>
                </Link>
                <footer className={'post-card-meta'}>
                  <ul className={'author-list'}>
                    <li className={'author-list-item'}>
                      <a
                        href={`https://www.twitter.com/${twitterHandle}`}
                        className={'static-avatar'}
                      >
                        <img
                          src={photo}
                          className={'avatar-wrapper'}
                          alt={name}
                        />
                      </a>
                    </li>
                  </ul>
                  <span className={'reading-time'}>
                    {edges[index].timeToRead} min read
                  </span>
                </footer>
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
}
