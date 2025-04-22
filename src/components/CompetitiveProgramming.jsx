import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './CompetitiveProgramming.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CompetitiveProgramming = () => {
  // Sample data - replace with your actual stats
  const leetcodeData = {
    totalSolved: 243,
    easySolved: 92,
    mediumSolved: 125,
    hardSolved: 26,
    acceptanceRate: "82%"
  };

  const chartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [{
      data: [leetcodeData.easySolved, leetcodeData.mediumSolved, leetcodeData.hardSolved],
      backgroundColor: [
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(255, 99, 132, 0.7)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1,
      borderRadius: 4
    }]
  };

  return (
    <section className="cp-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="cp-header-container"
      >
        <h2 className="cp-main-title">My Competitive Programming</h2>
        <p className="cp-subtitle">Performance metrics from coding platforms</p>
        <div className="cp-divider" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="cp-card"
      >
        <div className="cp-platform-header">
          <img 
            src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" 
            alt="LeetCode Logo" 
            className="cp-logo"
          />
          <div>
            <h3 className="cp-platform-title">LeetCode Stats</h3>
            <a 
              href="https://leetcode.com/Khushi_kumari111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cp-username"
            >
              @Khushi_kumari111
            </a>
          </div>
        </div>

        <div className="cp-stats-grid">
          <StatBox title="Total Solved" value={leetcodeData.totalSolved} />
          <StatBox title="Easy" value={leetcodeData.easySolved} />
          <StatBox title="Medium" value={leetcodeData.mediumSolved} />
          <StatBox title="Hard" value={leetcodeData.hardSolved} />
          <StatBox title="Acceptance" value={leetcodeData.acceptanceRate} />
        </div>

        <div className="cp-chart-container">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } }
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

const StatBox = ({ title, value }) => (
  <motion.div 
    whileHover={{ y: -3 }}
    className="cp-stat-box"
  >
    <p className="cp-stat-title">{title}</p>
    <p className="cp-stat-value">{value}</p>
  </motion.div>
);

export default CompetitiveProgramming;