import styles from "./ExpriencesStyles.module.css";

function Expriences() {
  return (
    <section id="experiences" className={styles.container}>
      <div className={styles.info}>
        <h1>Experieces</h1>
        <h2>WE WASANA D COMPANY LIMITED</h2>
        <p>Internship</p>
        <p>Team: Programmer</p>
        <p>Position: Frontend Developer</p>
        <p>Duration: June 6 - july 29 2022</p>
        <br/>
        <h2>Bangkok MSP COMPANY LIMITED</h2>
        <p>SOC L1 (Permanent)</p>
        <p>Team: Security Operations Center (SOC)</p>
        <p>Position: SOC L1</p>
        <p>Duration: June 28 2024 - Feb 20 2025</p>
        <br />
        <h2>MCR CONSULTING CO.,LTD.</h2>
        <p>Developer (Permanent)</p>
        <p>Team: Oracle Developer</p>
        <p>Position: Junior Oracle Developer</p>
        <p>Duration: Mar 3 2025 - May 29 2026</p>
        <br/>
        <h2>Krungthai Card Public Company Limited</h2>
        <p>Developer (Permanent)</p>
        <p>Team: Internal Control & Monitoring</p>
        <p>Position: Junior Developer (PG2)</p>
        <p>Duration: June 1 2026 - Present</p>
      </div>
    </section>
  );
}

export default Expriences;
