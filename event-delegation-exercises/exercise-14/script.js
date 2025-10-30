// Exercise 14: Sortable Table
const thead = document.querySelector('thead');
const tbody = document.getElementById('table-body');

// TODO: Add click listener to thead using event delegation
// HINT: Check if clicked element is a TH with class 'sortable'
// HINT: Get the data-column attribute
// HINT: Get all rows as array: Array.from(tbody.querySelectorAll('tr'))
// HINT: Sort rows based on column index (0=name, 1=age, 2=score)
// HINT: For numbers: use parseFloat(), for strings: use localeCompare()
// HINT: Clear tbody and append sorted rows

// Your code here:
let sortDirections = {};

thead.addEventListener('click', (event) => {
    const header = event.target.closest('th.sortable');
    if (!header) return;

    const column = header.dataset.column;
    const columnIndex = Array.from(header.parentElement.children).indexOf(header);

    // Toggle sort direction
    const direction = sortDirections[column] === 'asc' ? 'desc' : 'asc';
    sortDirections[column] = direction;

    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const aText = a.children[columnIndex].textContent;
        const bText = b.children[columnIndex].textContent;

        if (column === 'name') {
            return direction === 'asc' ? aText.localeCompare(bText) : bText.localeCompare(aText);
        } else {
            return direction === 'asc' ? parseFloat(aText) - parseFloat(bText) : parseFloat(bText) - parseFloat(aText);
        }
    });

    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
});
