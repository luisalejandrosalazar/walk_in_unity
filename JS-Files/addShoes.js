const reviewMessageDiv = document.getElementById("reviewMessage");
const form = document.getElementById("formInput");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form fields
    let sName = document.getElementById('sName').value.trim();
    let color = document.getElementById('color').value.trim();
    let condition = document.querySelector('input[name="condition"]:checked');
    let description = document.getElementById('description').value.trim();
    let shoesImage = document.getElementById('shoesImage').value.trim();

    if (!sName || !color || !condition || !description || !shoesImage) {
      alert('Please fill in all fields.');
      return;
    }

    var submittedDataParagraph = document.getElementById('submittedData');

    submittedDataParagraph.innerHTML = `
      <strong>Shoe/Brand Name:</strong> ${sName}<br>
      <strong>Color:</strong> ${color}<br>
      <strong>Condition:</strong> ${condition.value}<br>
      <strong>Description:</strong> ${description}<br>
      <strong>Shoes Image:</strong> ${shoesImage}<br>
    `;

    reviewMessageDiv.style.display = 'block';

    // Hide the form
    form.style.display = 'none';
  });