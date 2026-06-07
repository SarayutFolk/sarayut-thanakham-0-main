import styles from './ProjectsStyles.module.css';
import ProjectsCard from '../../components/ProjectCard';
import todoList from '../../assets/todoList.jpg';
import gameStore from '../../assets/gameStore.jpg';
// import hipsster from '../../assets/hipsster.png';
// import fitLift from '../../assets/fitlift.png';

import { motion } from 'framer-motion';

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className={styles.container}>
      <motion.h1 
        className="sectionTitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>
      <motion.div 
        className={styles.projectsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <ProjectsCard 
            src={todoList} 
            link ={'https://todo-list-app101.netlify.app/'}
            h3="To-dolist"
            p='To-do-list-App'
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProjectsCard 
            src={gameStore} 
            link ={'https://github.com/SarayutFolk/game-shop-website.git'}
            h3="Game Shop"
            p='Game Shop Web App'
          />
        </motion.div>
        {/* <ProjectsCard 
          src={hipsster} 
          link ={'https://github.com'}
          h3="Hipsster"
          p='Glass Shop'
        />
        <ProjectsCard 
          src={fitLift} 
          link ={'https://github.com'}
          h3="Fitlift"
          p='Fitness App'
        /> */}
        
      </motion.div>

    </section>
  )
}

export default Projects;