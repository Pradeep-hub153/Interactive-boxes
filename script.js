document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function () {
    // Toggle current box
    this.classList.toggle('expanded');

    // Collapse other boxes
    document.querySelectorAll('.box').forEach(otherBox => {
      if (otherBox !== this) {
        otherBox.classList.remove('expanded');
      }
    });
  });
});
