import styles from './HeroStyles.module.css';
import folkImg from '../../assets/folk-img.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume from '../../assets/Resume.pdf'
import { useTheme } from '../../components/ThemeContext';
import { motion } from 'framer-motion';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="hero" className={styles.container}>
      <img
        className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
      />
      <motion.div 
        className={styles.colorModeContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className={styles.hero}
          src={folkImg}
          alt="Profile picture of Sarayut Thanakham"
        />
      </motion.div>
      <motion.div 
        className={styles.info}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Sarayut 
          <br />
          Thanakham
        </motion.h1>
        <motion.h2 variants={itemVariants}>Developer</motion.h2>
        <motion.span variants={itemVariants}>
            <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
        </motion.span>
        <motion.p className={styles.description} variants={itemVariants}>
          I am a Developer with expertise in designing and developing software,
          focusing on writing efficient and secure code. I have experience working with both Backend
          and Frontend technologies and continuously strive to learn and adapt to new technologies.
        </motion.p>
        <motion.a href={Resume} download variants={itemVariants}>
          <button className="hover">Resume</button>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;