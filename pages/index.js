import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://shorturl.at/aejP6" name="Nike" />
        <CategoryCard image="https://shorturl.at/aLMOS" name="Adidas" />
        <CategoryCard image="https://shorturl.at/ciRS3" name="Supreme" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://shorturl.at/bEIX5" name="Vans" />
        <CategoryCard
          image="https://shorturl.at/cdJ68"
          name="Accessories"
        />
      </div>
    </main>
  );
};

export default HomePage;
