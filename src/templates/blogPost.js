import React from 'react';
import { graphql, Link } from 'gatsby';
import Footer from '../components/footer';
import TinyHeader from '../components/tinyHeader';
import moment from 'moment';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

import 'katex/dist/katex.min.css';

function BlogPostTemplate({ data, pageContext }) {
  const {
    author: twitterHandle,
    cover,
    date,
    description,
    name,
    next,
    photo,
    prev,
    tags,
  } = pageContext;
  const tempTags = [...tags];
  const newTags = [];
  while (tempTags.length > 1) {
    let tag = tempTags.shift().toLowerCase();
    newTags.push(
      <Link
        to={`/tags/${tag}`}
        style={{ textTransform: `capitalize` }}
        key={tag}
      >
        {tag}
      </Link>
    );
    newTags.push(' • ');
  }
  let tag = tempTags.shift().toLowerCase();
  newTags.push(
    <Link to={`/tags/${tag}`} style={{ textTransform: `capitalize` }} key={tag}>
      {tag}
    </Link>
  );
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  const disqusConfig = {
    url: window.location.href,
    identifier: window.location.pathname,
    title: title,
  };
  return (
    <div className={'post-template'}>
      <div className={'site-wrapper'}>
        <TinyHeader />
        <main id={'site-main'} className={'site-main outer'}>
          <div className={'inner'}>
            <article className={'post-full post'}>
              <header className={'post-full-header'}>
                <section className={'post-full-meta'}>
                  <time className={'post-full-meta-date'} dateTime={date}>
                    {new Date(date).toDateString()}
                  </time>
                </section>
                <h1 className={'post-full-title'}>{title}</h1>
                <span>{newTags}</span>
              </header>
              {cover && (
                <figure
                  className={'post-full-image'}
                  style={{ backgroundImage: `url(${cover})` }}
                />
              )}
              <section className={'post-full-content'}>
                <div
                  className={'post-content'}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </section>
              <footer className={'post-full-footer'}>
                <section className={'author-card'}>
                  <a
                    href={`https://www.twitter.com/${twitterHandle}`}
                    className={'author-profile-image'}
                  >
                    <img src={photo} className={'avatar-wrapper'} alt={name} />
                  </a>
                  <AuthorCardContent name={name} description={description} />
                </section>
                <ReadMore />
              </footer>
              <section className={'post-full-comments'}>
                <Disqus config={disqusConfig} />
              </section>
            </article>
          </div>
        </main>
        <aside className={'read-next outer'}>
          <div className={'inner'}>
            <div className={'read-next-feed'}>
              {next && (
                <article className={'post-card post'}>
                  <Link
                    className={'post-card-image-link'}
                    to={next.frontmatter.path}
                  >
                    <div
                      className={'post-card-image'}
                      style={{
                        backgroundImage: `url(${next.frontmatter.cover})`,
                      }}
                    />
                  </Link>
                  <div className={'post-card-content'}>
                    <Link
                      className={'post-card-content-link'}
                      to={next.frontmatter.path}
                    >
                      <header className={'post-card-header'}>
                        <span className={'post-card-tags'}>
                          {next.frontmatter.tags
                            ? next.frontmatter.tags[0] + ' • '
                            : ''}
                          {moment(next.frontmatter.date).fromNow()}
                        </span>
                        <h2 className={'post-card-title'}>
                          {next.frontmatter.title}
                        </h2>
                      </header>
                      <section className={'post-card-excerpt'}>
                        <p>{next.frontmatter.excerpt}</p>
                      </section>
                    </Link>
                  </div>
                </article>
              )}
              {prev && (
                <article className={'post-card post'}>
                  <Link
                    className={'post-card-image-link'}
                    to={prev.frontmatter.path}
                  >
                    <div
                      className={'post-card-image'}
                      style={{
                        backgroundImage: `url(${prev.frontmatter.cover})`,
                      }}
                    />
                  </Link>
                  <div className={'post-card-content'}>
                    <Link
                      className={'post-card-content-link'}
                      to={prev.frontmatter.path}
                    >
                      <header className={'post-card-header'}>
                        <span className={'post-card-tags'}>
                          {prev.frontmatter.tags
                            ? prev.frontmatter.tags[0] + ' • '
                            : ''}
                          {moment(prev.frontmatter.date).fromNow()}
                        </span>
                        <h2 className={'post-card-title'}>
                          {prev.frontmatter.title}
                        </h2>
                      </header>
                      <section className={'post-card-excerpt'}>
                        <p>{prev.frontmatter.excerpt}</p>
                      </section>
                    </Link>
                  </div>
                </article>
              )}
            </div>
          </div>
        </aside>
        <Footer />
      </div>
    </div>
  );
}
export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
export default BlogPostTemplate;

const ReadMore = () => (
  <div className={'post-full-footer-right'}>
    <Link to={'/'} className={'author-card-button'}>
      Read More
    </Link>
  </div>
);

const AuthorCardContent = ({ name, description }) => (
  <section className={'author-card-content'}>
    <h4 className={'author-card-name'}>{name}</h4>
    <p>{description}</p>
  </section>
);
