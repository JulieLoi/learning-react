import Navbar from '../components/MemeGenerator/Navbar.component';
import Meme from '../components/MemeGenerator/Meme.component';
import styles from '../stylesheets/MemeGenerator.module.css';

const MemeGeneratorPage = () => {
  return (
    <div className={styles["meme-generator-page"]}>
        <Navbar />
        <Meme />
    </div>
  );
};

export default MemeGeneratorPage;
