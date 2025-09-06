document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    let count = 0;
    
    // Update the counter display
    function updateCounter() {
        counterElement.textContent = count;
    }
    
    // Increment button click handler
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    // Decrement button click handler
    decrementBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });
    
    // Reset button click handler
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
});
