import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../components/layout/base';
import { Hero } from '../home/hero/hero';
import { TextImageSection, TextImageSectionType } from '../home/text-image-section/text-image-section';
import imageRightSrc from '../../tmp/image-right.png';

const firstSection = {
  title: 'Notre metier',
  sectionType: TextImageSectionType.textLeftImageRight,
  cta: {
    buttonType: 'link',
    id: '23589202',
    label: 'En savoir plus',
    url: '/#about'
  },
  content: '<ul>\n  <li>\n    <span data-slate-fragment="JTVCJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QlMjIlMkMlMjJzdHlsZSUyMiUzQSUyMmJ1bGxldGVkJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdEl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJMJUUyJTgwJTk5aW50ZXJtJUMzJUE5ZGlhdGlvbiUyMGZpbmFuY2klQzMlQThyZSUyMGV0JTIwY291cnRhZ2UlMjAlM0ElMjBGYWlyZSUyMGxlJTIwbGllbiUyMGVudHJlJTIwbCVFMiU4MCU5OWFwcG9ydGV1ciUyMGRlJTIwZm9uZHMlMjAoYmFucXVlcyUyQyUyMGFzc3VyYW5jZXMlMkMlMjBvcmdhbmlzbWVzJTIwcHVibGlxdWVzJTJDJTIwaW52ZXN0aXNzZXVycyUyMHByaXYlQzMlQTlzJUUyJTgwJUE2KSUyMGV0JTIwbGUlMjBwb3J0ZXVyJTIwZGUlMjBwcm9qZXQlMjAoY2xpZW50cykuJTIyJTdEJTVEJTdEJTVEJTdEJTVEJTdEJTVE">\n      L&rsquo;interm&eacute;diation financi&egrave;re et courtage : Faire le lien entre l&rsquo;apporteur de fonds (banques, assurances, organismes publiques, investisseurs priv&eacute;s&hellip;) et le porteur de projet (clients).\n    </span>\n  </li>\n  <li>\n    <span data-slate-fragment="JTVCJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QlMjIlMkMlMjJzdHlsZSUyMiUzQSUyMmJ1bGxldGVkJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdEl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJMJUUyJTgwJTk5aW50ZXJtJUMzJUE5ZGlhdGlvbiUyMGZpbmFuY2klQzMlQThyZSUyMGV0JTIwY291cnRhZ2UlMjAlM0ElMjBGYWlyZSUyMGxlJTIwbGllbiUyMGVudHJlJTIwbCVFMiU4MCU5OWFwcG9ydGV1ciUyMGRlJTIwZm9uZHMlMjAoYmFucXVlcyUyQyUyMGFzc3VyYW5jZXMlMkMlMjBvcmdhbmlzbWVzJTIwcHVibGlxdWVzJTJDJTIwaW52ZXN0aXNzZXVycyUyMHByaXYlQzMlQTlzJUUyJTgwJUE2KSUyMGV0JTIwbGUlMjBwb3J0ZXVyJTIwZGUlMjBwcm9qZXQlMjAoY2xpZW50cykuJTIyJTdEJTVEJTdEJTVEJTdEJTVEJTdEJTVE">\n      L&rsquo;analyse de probl&eacute;matiques financi&egrave;res, bancaires et administratives\n    </span>\n  </li>\n  <li>\n    <span data-slate-fragment="JTVCJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QlMjIlMkMlMjJzdHlsZSUyMiUzQSUyMmJ1bGxldGVkJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdEl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJMJUUyJTgwJTk5aW50ZXJtJUMzJUE5ZGlhdGlvbiUyMGZpbmFuY2klQzMlQThyZSUyMGV0JTIwY291cnRhZ2UlMjAlM0ElMjBGYWlyZSUyMGxlJTIwbGllbiUyMGVudHJlJTIwbCVFMiU4MCU5OWFwcG9ydGV1ciUyMGRlJTIwZm9uZHMlMjAoYmFucXVlcyUyQyUyMGFzc3VyYW5jZXMlMkMlMjBvcmdhbmlzbWVzJTIwcHVibGlxdWVzJTJDJTIwaW52ZXN0aXNzZXVycyUyMHByaXYlQzMlQTlzJUUyJTgwJUE2KSUyMGV0JTIwbGUlMjBwb3J0ZXVyJTIwZGUlMjBwcm9qZXQlMjAoY2xpZW50cykuJTIyJTdEJTVEJTdEJTVEJTdEJTVEJTdEJTVE">\n      L&rsquo;assistance sur la structuration financi&egrave;re et le montage de dossier\n    </span>\n  </li>\n  <li>\n    <span data-slate-fragment="JTVCJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QlMjIlMkMlMjJzdHlsZSUyMiUzQSUyMmJ1bGxldGVkJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdEl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJMJUUyJTgwJTk5aW50ZXJtJUMzJUE5ZGlhdGlvbiUyMGZpbmFuY2klQzMlQThyZSUyMGV0JTIwY291cnRhZ2UlMjAlM0ElMjBGYWlyZSUyMGxlJTIwbGllbiUyMGVudHJlJTIwbCVFMiU4MCU5OWFwcG9ydGV1ciUyMGRlJTIwZm9uZHMlMjAoYmFucXVlcyUyQyUyMGFzc3VyYW5jZXMlMkMlMjBvcmdhbmlzbWVzJTIwcHVibGlxdWVzJTJDJTIwaW52ZXN0aXNzZXVycyUyMHByaXYlQzMlQTlzJUUyJTgwJUE2KSUyMGV0JTIwbGUlMjBwb3J0ZXVyJTIwZGUlMjBwcm9qZXQlMjAoY2xpZW50cykuJTIyJTdEJTVEJTdEJTVEJTdEJTVEJTdEJTVE">\n      La n&eacute;gociation des conditions d&rsquo;emprunt, d&rsquo;achat ou de garantie\n    </span>\n  </li>\n</ul>',
  image: {
    src: imageRightSrc
  }
};

const IndexPage = ({ data, path }) => (
  <Layout path={path}>
    <Hero />
    <TextImageSection {...firstSection} />
    <div style={{ height: '100vh', backgroundColor: 'red' }}>test content</div>
    <div style={{ height: '100vh', backgroundColor: 'blue' }}>test content</div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
