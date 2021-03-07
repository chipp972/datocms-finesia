import css from './nav.module.sass';
// import cssVar from '../../styles/js-export.module.scss';
import React from 'react';
import { Link } from 'gatsby';
import { Section } from '../layout/section';
import { useNavMenu } from './nav.hook';
import clsx from 'clsx';
import { MenuIcon } from './menu-icon';

type Props = {
  path: string;
};

export const NavBar: React.FC<Props> = ({ path }) => {
  const { home, individuals, companies, contact, logo } = useNavMenu();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Section component="nav" className={css.navbar}>
      <div className={css.navbarInner}>
        <Link to={home.url} title={home.label} className={css.logo}>
          <img {...logo} />
          {/* <Logo size={cssVar.xxlSize} /> */}
        </Link>
        <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <ul className={clsx(css.menu, { [css.menuOpen]: isMenuOpen })}>
        {[home, individuals, companies, contact].map(({ id, url, label, estMisEnAvant }) => (
          <li
            key={`nav-${id}`}
            id={`nav-${id}`}
            className={clsx({
              [css.active]: path === url,
              [css.highlighted]: estMisEnAvant
            })}>
            <Link to={url} title={label}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};
