// Exercise 21: Calendar
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    currentDate: new Date()
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const monthYear = document.getElementById('month-year');
    const calendarDays = document.getElementById('calendar-days');

    const date = state.currentDate;
    const month = date.getMonth();
    const year = date.getFullYear();

    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    calendarDays.innerHTML = '';

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.innerHTML += `<div class="day empty"></div>`;
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.textContent = i;
        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayDiv.classList.add('today');
        }
        calendarDays.appendChild(dayDiv);
    }
}

// TODO 4: Add your event listeners and logic
document.getElementById('prev-month-btn').addEventListener('click', () => {
    const newDate = new Date(state.currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    updateState({ currentDate: newDate });
});

document.getElementById('next-month-btn').addEventListener('click', () => {
    const newDate = new Date(state.currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    updateState({ currentDate: newDate });
});

// TODO 5: Initial render
render();
