import React from 'react';
import { Section } from '../../components/layout/section';
import logo1 from '../../../tmp/bred.png';
import logo2 from '../../../tmp/credit-du-nord.png';
import logo3 from '../../../tmp/bnp.png';
import css from './partners.module.sass';
import { SectionTitle } from '../../components/title/title';

const maxLogoWidth = 300;

const data = {
  title: 'Nos partenaires',
  logos: [
    { id: 'logo1', src: logo1 },
    { id: 'logo2', src: logo2 },
    { id: 'logo3', src: logo3 }
  ]
};

export const Partners = () => (
  <Section className={css.partners}>
    <SectionTitle>{data.title}</SectionTitle>
    <ul className={css.logoList}>
      {data.logos.map(({ id, src }, index) => (
        <li style={{ left: (index - data.logos.length) * maxLogoWidth }}
          className={css.logo}
          key={id}>
            <img src={src} />
        </li>
      ))}
    </ul>
  </Section>
);
