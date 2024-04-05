document.getElementById('shoeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var sName = document.getElementById('sName').value.trim();
    var color = document.getElementById('color').value.trim();
    var condition = document.querySelector('input[name="condition"]:checked');
    var description = document.getElementById('description').value.trim();
    var shoesImage = document.getElementById('shoesImage').value.trim();

    if (!sName || !color || !condition || !description || !shoesImage) {
      alert('Please fill in all fields.');
      return;
    }

    this.reset();
});