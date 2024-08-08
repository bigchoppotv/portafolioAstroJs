import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import '../components/ChartComponent.css';

const ChartComponent = () => {
  const chartRef = useRef(null);

  const skills = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 45 },
    { skill: 'JavaScript', percentage: 80 },
    { skill: 'React', percentage: 30 },
    { skill: 'JQuery', percentage: 70 },
    { skill: 'Java', percentage: 80 },
    { skill: 'AWS', percentage: 60 },
    { skill: 'SQL', percentage: 85 },
    { skill: 'Git', percentage: 95 },
    { skill: '.Net', percentage: 80 },
    { skill: 'API', percentage: 95 },
    { skill: 'C#', percentage: 87 },
    { skill: 'Astrojs', percentage: 50 },
    { skill: 'EF', percentage: 90 },
    { skill: 'Json', percentage: 96 },
    { skill: 'IIS', percentage: 75 },
    { skill: 'Ingles', percentage: 65 },

  ];

  const colors = [
    '#B56576', // HTML
    '#6A0572', // CSS
    '#374785', // JavaScript
    '#22223B', // React
    '#4D7EA8', // JQuery
    '#635DFF', // Java
    '#4ECDC4', // AWS
    '#D79922', // SQL
    '#40514E', // Git
    '#F4A261', // .Net
    '#2A9D8F', // API
    '#E76F51', // C#
    '#E63946', // Scrum
    '#8D99AE', // EF
    '#83C5BE', // Json
    '#6D597A', // IIS
    '#2D6A4F'  // Ingles
  ];

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const gradientColors = colors.map((_, index) => {
      const gradient = ctx.createLinearGradient(0, 0, 400, 400);
      gradient.addColorStop(0, `hsl(${index * 30}, 100%, 95%)`);
      gradient.addColorStop(1, `hsl(${index * 30 + 15}, 100%, 50%)`);
      return gradient;
    });


    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: skills.map(skill => skill.skill),
        datasets: [{
          data: skills.map(skill => skill.percentage),
          backgroundColor: gradientColors,
          hoverBackgroundColor: gradientColors,
        }]
      },
      options: {
        responsive: true,
        borderColor: 'black',
        borderWidth: 4,
        hoverBorderColor: 'white',
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                size: 90,
                weight: 'bold'
              }
            },
            labels: {
              color: 'white'
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                label += Math.round(context.raw) + '%';
                return label;
              }
            }
          },
        }
      }
    });
  }, []);

  Chart.defaults.borderColor = '#FFFFFF';
  Chart.defaults.color = '#000';

  return (
    <div className="chart-container" style={{position: 'relative', height: '70vh', width:'40vw' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default ChartComponent;
