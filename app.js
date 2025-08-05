const students = [];

function renderTable() {
    const tbody = document.querySelector('#studentsTable tbody');
    tbody.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.className}</td>
            <td>${student.email}</td>
        `;
        tbody.appendChild(row);
    });
}

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const roll = document.getElementById('roll').value.trim();
    const className = document.getElementById('class').value.trim();
    const email = document.getElementById('email').value.trim();
    if (name && roll && className && email) {
        students.push({ name, roll, className, email });
        renderTable();
        this.reset();
    }
});

// Optionally, add some initial data
document.addEventListener('DOMContentLoaded', () => {
    students.push(
        { name: 'Alice Johnson', roll: '101', className: '10A', email: 'alice@example.com' },
        { name: 'Bob Smith', roll: '102', className: '10B', email: 'bob@example.com' }
    );
    renderTable();
});
