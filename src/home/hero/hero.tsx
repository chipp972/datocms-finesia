import React from 'react';
import { Section } from '../../components/layout/section';
import imageSrc from '../../../tmp/carousel3.png';
import css from './hero.module.sass';
import { Cta, CtaType } from '../../components/buttons/cta';

const data = {
  title: 'Soyez accompagné pour tous vos projets',
  subtitle:
    'Faites confiance à Finesia Conseil, cabinet créée en 2013 spécialisé dans le conseil financier & administratif',
  mainCta: {
    label: 'Devis en ligne',
    buttonType: CtaType.main,
    url: '/#devis'
  },
  secondaryCta: {
    label: '07 86 31 22 86',
    buttonType: CtaType.phone,
    url: 'tel:+33786312286'
  },
  image: {
    src: imageSrc
  }
};

export const Hero = () => (
  <Section className={css.hero}>
    <img className={css.backgroundImage} src={data.image.src} />
    <h1 className={css.heroTitle}>{data.title}</h1>
    <p className={css.heroSubtitle}>{data.subtitle}</p>
    <div className={css.buttonGroup}>
      <Cta className={css.cta} {...data.mainCta} />
      <Cta className={css.cta} {...data.secondaryCta} />
    </div>
  </Section>
);
