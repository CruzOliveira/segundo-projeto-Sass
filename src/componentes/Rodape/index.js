import React from 'react';
import Facebook from './img/facebook.svg';
import Instagram from './img/instagram.svg';
import Twitter from './img/twitter.svg';
import styles from './Rodape.module.scss';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="/" rel="noreferrer" target="_blank">
          <img src={Facebook} alt="Icone do FaceBook" />
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <img src={Instagram} alt="Icone do twitter" />
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <img src={Twitter} alt="Icone do Instagram" />
        </a>
      </div>
      <p>Desenvolvido por Alura</p>
    </footer>
  );
}
