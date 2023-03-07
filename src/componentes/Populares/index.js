import styles from './Populares.module.scss';
import fotos from './fotos.json';

export default function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {fotos.map((fotos) => {
          return (
            <li key={fotos.id}>
              <img src={fotos.path} alt={fotos.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
}
