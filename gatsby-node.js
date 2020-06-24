const path = require('path');
const tagData = require('./src/tagData');

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js');
  const singleTagIndexTemplate = path.resolve(
    'src/templates/singleTagIndex.js'
  );

  const postsByTag = {};
  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTag);

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  });

  tags.forEach(tag => {
    const posts = postsByTag[tag];
    const cover = tagData.filter(el => el.tag == tag);
    createPage({
      path: `/tags/${tag}`,
      component: singleTagIndexTemplate,
      context: {
        cover,
        posts,
        tag,
      },
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const BlogPostTemplate = path.resolve('src/templates/blogPost.js');
    resolve(
      graphql(
        `
          query {
            site {
              siteMetadata {
                author
                description
                name
                photo
              }
            }
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    cover
                    date
                    excerpt
                    path
                    tags
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const {
          author,
          description,
          name,
          photo,
        } = result.data.site.siteMetadata;
        const posts = result.data.allMarkdownRemark.edges;
        createTagPages(createPage, posts);

        posts.forEach(({ node }, index) => {
          createPage({
            path: node.frontmatter.path,
            component: BlogPostTemplate,
            context: {
              author,
              cover: node.frontmatter.cover,
              date: node.frontmatter.date,
              description,
              name,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
              pathSlug: node.frontmatter.path,
              photo,
              prev: index === 0 ? null : posts[index - 1].node,
              tags: node.frontmatter.tags,
            },
          });
          resolve();
        });
      })
    );
  });
};
