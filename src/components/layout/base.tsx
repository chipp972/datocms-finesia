import '../../styles/global.sass';
import css from './layout.module.sass';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { NavBar } from '../nav/nav';
// import { Footer } from '../footer/footer';

const layoutQuery = graphql`
  query LayoutQuery {
    datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          profileType
          url
        }
      }
    }
  }
`;

type Props = {
  seo: any;
  path: string;
};

export const Layout: React.FC<Props> = ({ seo, children, path }) => {
  const data = useStaticQuery(layoutQuery);
  return (
    <>
      <div>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={seo}
        />
        <NavBar path={path} />
        <main className={css.mainContainer}>
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};
