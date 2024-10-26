// Function to show a specific form with flash and smooth scrolling
function flashForm(formId) {
    // Hide both forms first
    document.getElementById('yes-form').classList.add('hidden');
    document.getElementById('no-form').classList.add('hidden');

    // Show the selected form
    const form = document.getElementById(formId);
    form.classList.remove('hidden'); // Show the form
    form.classList.add('flash');     // Add flash effect class

    // Flash effect timeout
    setTimeout(() => {
        form.classList.remove('flash'); // Remove flash effect class after 1 second
    }, 1000);

    // Smooth scroll to the form
    form.scrollIntoView({ behavior: 'smooth' });
}

// Event listeners for the buttons
document.getElementById('yes-btn').onclick = function() {
    flashForm('yes-form');
    alert('Yay! Can’t wait for our adventure together! 😘');
};

document.getElementById('no-btn').onclick = function() {
    flashForm('no-form');
    alert('No worries, we can still talk it over 🙂');
};
