import React from 'react';
import { Link } from 'gatsby';
import ComplexHeader from '../components/complexHeader';
import Footer from '../components/footer';
import moment from 'moment';

const SingleTagTemplate = ({ pageContext }) => {
  const { cover, posts, tag } = pageContext;
  /* eslint eqeqeq: "off" */
  const bgImg = cover.length == 1 ? cover[0].cover : '';
  const desc = `Essay${posts.length > 1 ? 's' : ''} about ${tag}.`;
  return (
    <div className={'tag-template'}>
      <div className={'site-wrapper'}>
        <ComplexHeader
          siteTitle={tag.toUpperCase()}
          description={desc}
          hideName={true}
          headerImg={bgImg}
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
                          {tag} • {moment(post.frontmatter.date).fromNow()}
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

export default SingleTagTemplate;
