import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  authorList,
  authorListItem,
  avatarWrapper,
  Excerpt,
  postCard,
  postCardContent,
  postCardContentLink,
  postCardImage,
  postCardImageLink,
  postCardMeta,
  postCardTags,
  postCardTitle,
  postFeed,
  readingTime,
  staticAvatar,
} from '../components/indexStyle';
import { graphql, Link } from 'gatsby';

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
  const { edges, nodes } = props.data.allMarkdownRemark;
  const { author: twitterHandle, name, photo } = props.data.site.siteMetadata;
  return (
    <Layout>
      <SEO title="Home" />
      <div style={postFeed}>
        {edges.map((edge, index) => {
          const { frontmatter } = edge.node;
          const publishDate = new Date(frontmatter.date).toDateString();
          const cover = frontmatter.cover;
          return (
            <article style={postCard} key={frontmatter.path}>
              <Link to={frontmatter.path} style={postCardImageLink}>
                <div
                  style={{
                    ...postCardImage,
                    backgroundImage: `url("${cover}")`,
                  }}
                ></div>
              </Link>
              <div style={postCardContent}>
                <Link to={frontmatter.path} style={postCardContentLink}>
                  <header className="postCardHeader">
                    <span style={postCardTags}>
                      {frontmatter.tags ? frontmatter.tags[0] + ` • ` : ``}{' '}
                      {publishDate}
                    </span>
                    <h2 style={postCardTitle}>{frontmatter.title}</h2>
                  </header>
                  <section className="postCardExcerpt">
                    <p style={Excerpt}>{nodes[index].excerpt}</p>
                  </section>
                </Link>
                <footer style={postCardMeta}>
                  <ul style={authorList}>
                    <li style={authorListItem}>
                      <a
                        href={`https://www.twitter.com/${twitterHandle}`}
                        style={staticAvatar}
                      >
                        <img src={photo} style={avatarWrapper} alt={name} />
                      </a>
                    </li>
                  </ul>
                  <span style={readingTime}>
                    {nodes[index].timeToRead} min read
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
