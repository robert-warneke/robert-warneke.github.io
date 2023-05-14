document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal");
    const btn = document.getElementById("modal-btn");
    const span = document.getElementsByClassName("close")[0];
    const form = modal.querySelector('form');
    const emailInput = document.getElementById("email");

    // Regular Expression for Email Validation
    const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
        form.reset();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            form.reset();
        }
    }

    form.onsubmit = function(event) {
        if (!emailRegex.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            event.preventDefault();  // prevent form submission
        }
    }
});
