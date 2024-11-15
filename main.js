import { store } from './store.js';

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const resetButton = document.getElementById('reset');

    // Update the DOM whenever the state changes
    store.subscribe((state) => {
        counter.textContent = state.count;
    });

    // Event listeners for buttons
    addButton.addEventListener('click', () => store.dispatch({ type: 'ADD' }));
    subtractButton.addEventListener('click', () => store.dispatch({ type: 'SUBTRACT' }));
    resetButton.addEventListener('click', () => store.dispatch({ type: 'RESET' }));
});
