import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle, description, headerImg }) => {
  return (
    <header
      style={{
        backgroundColor: `#FFDD3D`,
        backgroundImage: `url(${headerImg})`,
      }}
      className={'site-header outer'}
    >
      <div className={'inner'}>
        <div className={'site-header-content'}>
          <h1 style={{ margin: 0 }} className={'site-title'}>
            {siteTitle}
          </h1>
          <br />
          <h2 className={'site-description'}>{description}</h2>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Sanaa’s stories`,
  description: `Hi, I am Sanā!`,
};

export default Header;
