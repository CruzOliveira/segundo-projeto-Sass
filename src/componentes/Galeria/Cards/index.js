import Card from './Card';
export default function Cards({ fotos, styles }) {
  return (
    <div>
      <ul className={styles.galeria__cards}>
        {fotos.map((fotos) => {
          return <Card key={fotos.id} fotos={fotos} styles={styles} />;
        })}
      </ul>
    </div>
  );
}
