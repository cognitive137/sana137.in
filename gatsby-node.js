const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const BlogPostTemplate = path.resolve('src/components/blogPost.js');
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: BlogPostTemplate,
            context: {
              pathSlug: node.frontmatter.path,
            },
          });
          resolve;
        });
      })
    );
  });
};
