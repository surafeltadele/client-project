const ctxSales = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctxSales, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
            label: 'Sales',
            data: [1200,1500,1800,1400,2000,2300],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }]
    }
});

const ctxUsers = document.getElementById('usersChart').getContext('2d');
const usersChart = new Chart(ctxUsers, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
            label: 'New Users',
            data: [200,300,400,250,500,600],
            backgroundColor: 'rgba(153, 102, 255, 0.6)'
        }]
    }
});

