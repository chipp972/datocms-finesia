import css from './buttons.module.sass';
import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { Case } from 'react-case-when';
import { FiArrowRight, FiPhone } from 'react-icons/fi';

export enum CtaType {
  phone = 'phone',
  link = 'link',
  main = 'main',
  secondary = 'secondary',
  ghost = 'ghost'
}

export type CtaProps = {
  url: string;
  buttonType: CtaType;
  label: string;
  className?: string;
};

export const Cta: React.FC<CtaProps> = ({ label, buttonType, url, className }) => (
  <Link className={clsx({
    [css.mainCta]: buttonType === CtaType.main,
    [css.mainGhostCta]: buttonType === CtaType.ghost,
    [css.secondaryCta]: [CtaType.phone, CtaType.secondary].includes(buttonType),
    [css.link]: CtaType.link === buttonType
  }, className)} to={url}>
    <Case when={buttonType === CtaType.phone}>
      <FiPhone className={css.leadingIcon} />
    </Case>
    {label}
    <Case when={buttonType === CtaType.link}>
      <FiArrowRight className={css.trailingIcon} />
    </Case>
  </Link>
);
