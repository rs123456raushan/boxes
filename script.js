document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            boxes.forEach(b => b.classList.remove('expanded')); // Collapse any other expanded box
            boxes.forEach(b => b.querySelector('.circle').style.backgroundColor = "transparent"); // Reset the circle color of other boxes

            this.classList.add('expanded'); // Expand the clicked box
            this.querySelector('.circle').style.backgroundColor = "green"; // Green circle for the selected box
        });
    });
});
