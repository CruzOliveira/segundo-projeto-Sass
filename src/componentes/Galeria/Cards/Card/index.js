import React from 'react';
import curtir from '../imagens/favorito.png';
import abrir from '../imagens/open.png';

export default function Card({ fotos, styles }) {
  return (
    <li className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={fotos.imagem}
        alt={fotos.titulo}
      />
      <p className={styles.galeria__descricao}>{fotos.titulo}</p>
      <div>
        <p>{fotos.creditos}</p>
        <span>
          <img src={abrir} alt="icone de expandir" />
          <img src={curtir} alt="ícone de coração ou favoritar" />
        </span>
      </div>
    </li>
  );
}
