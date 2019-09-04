import React from 'react';
import { Link } from 'gatsby';
import ComplexHeader from '../components/complexHeader';
import Footer from '../components/footer';

const AllTagsTemplate = ({ data, pageContext }) => {
  const { posts, tag } = pageContext;
  const desc = `Essay${posts.length > 1 ? 's' : ''} about ${tag}.`;
  return (
    <div className={'tag-template tag-movie-reviews'}>
      <div className={'site-wrapper'}>
        <ComplexHeader
          siteTitle={tag.toUpperCase()}
          description={desc}
          hideName={true}
        />
        <main id={'site-main'} className={'site-main outer'}>
          <div className={'inner'}>
            <div className={'post-feed'}>
              {posts.map(post => (
                <article
                  className={'post-card post'}
                  key={post.frontmatter.path}
                >
                  <Link
                    to={post.frontmatter.path}
                    className={'post-card-image-link'}
                  >
                    <div
                      className={'post-card-image'}
                      style={{
                        backgroundImage: `url(${post.frontmatter.cover})`,
                      }}
                    />
                  </Link>
                  <div className={'post-card-content'}>
                    <Link
                      to={post.frontmatter.path}
                      className={'post-card-content-link'}
                    >
                      <header className={'post-card-header'}>
                        <span className={'post-card-tags'}>
                          {tag} •{' '}
                          {new Date(post.frontmatter.date).toDateString()}
                        </span>
                        <h2 className={'post-card-title'}>
                          {post.frontmatter.title}
                        </h2>
                      </header>
                      <section className={'post-card-excerpt'}>
                        <p>{post.frontmatter.excerpt}</p>
                      </section>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AllTagsTemplate;
