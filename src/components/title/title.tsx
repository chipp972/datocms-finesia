import React from 'react';
import css from './typography.module.sass';

export const SectionTitle: React.FC = ({ children }) => (
  <h2 className={css.sectionTitle}>{children}</h2>
);
