<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let ChartRef;

  const skills = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 85 },
    { skill: 'JavaScript', percentage: 80 },
    { skill: 'React', percentage: 75 },
    { skill: 'Node.js', percentage: 70 },
    { skill: 'Python', percentage: 65 },
    { skill: 'Django', percentage: 60 },
    { skill: 'SQL', percentage: 55 },
    { skill: 'Git', percentage: 95 },
    { skill: 'Docker', percentage: 50 },
  ];

  onMount(() => {
      const ctx = ChartRef.getContext('2d');
      new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: skills.map(skill => skill.skill),
          datasets: [{
            data: skills.map(skill => skill.percentage),
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB', '#FF6384'
            ],
            hoverBackgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB', '#FF6384'
            ]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right'
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
            }
          }
        }
      });
  });

</script>


<div class="chart-container">
  <canvas bind:this={ChartRef}></canvas>
</div>

<style>
  .chart-container {
    width: 50%;
    height: 50%;
    margin: auto;
  }
</style>

