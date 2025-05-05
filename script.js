document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/dashboard-stats')
        .then(res => res.json())
        .then(data => {
            document.querySelector('.card:nth-child(1) p').textContent = data.totalProjects;
            document.querySelector('.card:nth-child(2) p').textContent = data.ongoingTasks;
            document.querySelector('.card:nth-child(3) p').textContent = data.completedTasks;
        })
        .catch(err => console.error('Error fetching dashboard stats:', err));
});
