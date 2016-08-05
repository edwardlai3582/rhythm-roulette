import React from 'react';

import messages from './messages';
import A from 'components/A';
import styles from './styles.css';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';

function Footer() {
    const footy ="So i build this site just to practice (also a big fan of Rhythm Roulette). I don't own any content, logos, pictures, videos showed on this site.\ If you have any question, this is my email: edwardlai3582@gmail.com\ Peace!";
    
  return (
    <footer className={styles.footer}>
      <section>
        <p>So I build this site just to practice (also a big fan of Rhythm Roulette).</p>
        <p>I don't own any content, logos, pictures, videos showed on this site.</p>
        <p>If you have any questions, this is my email: edwardlai3582@gmail.com</p>
        <p>Peace!</p>
      </section>
    </footer>
  );
}

export default Footer;
