import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import TinyHeader from '../components/tinyHeader';

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext;
  return (
    <div className={'page-template page-tag'}>
      <div className={'site-wrapper'}>
        <TinyHeader />
        <main id={'site-main'} className={'site-main outer'}>
          <div className={'inner'}>
            <article className={'post-full post page no-image'}>
              <header className={'post-full-header'}>
                <h1 className={'post-full-title'}>#Tags</h1>
              </header>
              <section className={'post-full-content'}>
                <div className={'post-content'}>
                  <p>List of (almost) all the tags.</p>
                  <ol>
                    {tags.map(tag => (
                      <li style={{ textTransform: `capitalize` }} key={tag}>
                        <Link to={`/tags/${tag}`}>{tag.toLowerCase()}</Link>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AllTagsTemplate;
