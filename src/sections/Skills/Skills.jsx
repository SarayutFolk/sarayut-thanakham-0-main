import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../components/SkillList';

import { motion } from 'framer-motion';

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id='skills' className={styles.container}>
        <motion.h1 
          className='sectionTitle'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills Programming
        </motion.h1>
        <motion.div 
          className={styles.skillList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="HTML" /></motion.div>
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="CSS" /></motion.div>
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Javascript" /></motion.div>
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Java" /></motion.div>
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Python" /></motion.div>
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="SQL" /></motion.div>
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Node" /></motion.div>
        </motion.div>
        <hr/>
        <motion.div 
          className={styles.skillList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="React" /></motion.div>
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Next.js" /></motion.div>
        </motion.div>
        <hr/>
        <motion.div 
          className={styles.skillList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Bootstrap" /></motion.div>
            <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Tailwind CSS" /></motion.div>
        </motion.div>
        <div>
          <hr />
        </div>
        <motion.h1 
          className='sectionTitle'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills SOC Analyze
        </motion.h1>
        <motion.div 
          className={styles.skillList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Experienced with SIEM tools: AlienVault, Securonix." /></motion.div>
          <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Monitor & analyze security alerts from SIEM (e.g., AlienVault, Securonix)." /></motion.div>
          <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Identify, triage, and escalate incidents based on severity." /></motion.div>
          <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Conduct initial investigations using log analysis and threat intelligence." /></motion.div>
          <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Perform basic incident response (containment, mitigation)." /></motion.div>
          <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Document and report security events for audits and future reference." /></motion.div>
          <motion.div variants={itemVariants}><SkillList src={checkMarkIcon} skill="Ensure log source health and SIEM data integrity." /></motion.div>
        </motion.div>
    </section>
  );
}

export default Skills