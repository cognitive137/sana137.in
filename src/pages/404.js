import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Footer from '../components/footer';
import SEO from '../components/seo';
const cover = `https://solarsystem.nasa.gov/system/downloadable_items/862_PIA21590.jpg`;

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query getHomeName404 {
      site {
        siteMetadata {
          homeName
        }
      }
    }
  `);
  const { homeName } = data.site.siteMetadata;
  return (
    <div className={'error-template'}>
      <SEO title="404: Not found" />
      <div
        className={'site-wrapper'}
        style={{
          backgroundColor: `#000`,
          backgroundImage: `url(${cover})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `contain`,
        }}
      >
        <header
          className={'site-header outer no-cover'}
          style={{ background: `transparent` }}
        >
          <div className={'inner'}>
            <nav className={'site-nav-center'}>
              <Link to={'/'} className={'site-nav-logo'}>
                {homeName}
              </Link>
            </nav>
          </div>
        </header>
        <main id={'site-main'} className={'site-main outer'}>
          <div className={'inner'}>
            <section className={'error-message'}>
              <h1
                className={'error-code'}
                style={{
                  color: `rgb(240, 237, 200)`,
                  opacity: 0.9,
                }}
              >
                404
              </h1>
              <br />
              <p
                className={'error-description'}
                style={{ color: `rgb(240, 237, 200)`, opacity: 0.9 }}
              >
                It was quite lonely and cold here, far away from the Sun.
                <br />
                Thanks for stopping by!
              </p>
              <br />
              <Link
                to={'/'}
                className={'error-link'}
                style={{
                  border: `1px solid rgb(240, 237, 200)`,
                  borderRadius: `20px`,
                  color: `rgb(240, 237, 200)`,
                  padding: `9px 16px`,
                }}
              >
                Land on the home page.
              </Link>
            </section>
          </div>
        </main>
        <Footer style={{ background: `transparent` }} />
      </div>
    </div>
  );
};

export default NotFoundPage;
