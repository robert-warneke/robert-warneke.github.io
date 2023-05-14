document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal");
    const btn = document.getElementById("modal-btn");
    const span = document.getElementsByClassName("close")[0];
    const form = modal.querySelector('form');

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
});
