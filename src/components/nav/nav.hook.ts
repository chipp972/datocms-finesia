import { graphql, useStaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import LogoSrc from '../../../tmp/logo.png';

type MenuItem = {
  id: string;
  label: string;
  url: string;
  estMisEnAvant: boolean;
};

type NavQuery = {
  home: MenuItem;
  individuals: MenuItem;
  companies: MenuItem;
  contact: MenuItem;
  logo: {
    alt: string;
    fixed: FixedObject;
  };
};

// const query = graphql`
//   query NavQuery {
//     home: datoCmsHome {
//       id
//     }
//     individuals: datoCmsAboutSection {
//       id
//       sectionLabel
//       isMobile
//     }
//     companies: datoCmsProjectsSection {
//       id
//       sectionLabel
//       isMobile
//     }
//     contact: datoCmsContactSection {
//       id
//       sectionLabel
//       isMobile
//     }
//     logo {
//       alt
//       fluid(height: 58, imgixParams: { fm: "png", auto: "compress" }) {
//         ...GatsbyDatoCmsFixed
//       }
//     }
//   }
// `;

// export const useNavMenu = () => useStaticQuery<NavQuery>(query);
export const useNavMenu = () => ({
  home: {
    id: 'Accueil',
    label: 'Accueil',
    url: '/',
    estMisEnAvant: false
  },
  individuals: {
    id: 'Particuliers',
    label: 'Particuliers',
    url: '/particuliers',
    estMisEnAvant: false
  },
  companies: {
    id: 'Espace pro',
    label: 'Espace pro',
    url: '/entreprises',
    estMisEnAvant: false
  },
  contact: {
    id: 'Me contacter',
    label: 'Me contacter',
    url: '/me-contacter',
    estMisEnAvant: true
  },
  logo: {
    alt: 'Finesia logo',
    src: LogoSrc
  }
});
