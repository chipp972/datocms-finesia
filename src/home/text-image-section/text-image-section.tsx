import css from './text-image-section.module.sass';
import mdCss from '../../styles/markdown.module.sass';
import React from 'react';
import { Cta, CtaProps } from '../../components/buttons/cta';
import { Section } from '../../components/layout/section';
import { SectionTitle } from '../../components/title/title';

export enum TextImageSectionType {
  textLeftImageRight = 'textLeftImageRight',
  backgroundImage = 'backgroundImage'
}

type Props = {
  sectionType: TextImageSectionType;
  title: string;
  cta?: CtaProps;
  content: string;
  // TODO: To change to match datocms graphql structure
  image: {
    src: string;
  };
};

// TODO:
const BackgroundImageSection: React.FC<Omit<Props, 'sectionType'>> = ({ title, content, image, cta }) => (
  <Section>
    <img src={image.src} />
    <SectionTitle>{title}</SectionTitle>
    <div className={mdCss.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    <Cta {...cta} />
  </Section>
);

const TextLeftImageRight: React.FC<Omit<Props, 'sectionType'>> = ({ title, content, image, cta }) => (
  <Section className={css.section}>
    <img className={css.mobileImage} src={image.src} />
    <div className={css.sectionImageText}>
      <div className={css.textPart}>
        <SectionTitle>{title}</SectionTitle>
        <div className={mdCss.markdown} dangerouslySetInnerHTML={{ __html: content }} />
        <Cta className={css.cta} {...cta} />
      </div>
      <img className={css.imagePart} src={image.src} />
    </div>
  </Section>
);

export const TextImageSection: React.FC<Props> = ({ sectionType, ...sectionData }) => 
  sectionType === TextImageSectionType.textLeftImageRight
    ? <TextLeftImageRight {...sectionData} />
    : <BackgroundImageSection {...sectionData} />;
