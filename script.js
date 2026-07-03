document.getElementById('downloadBtn').addEventListener('click', function() {
  const poster = document.getElementById('posterContainer');

  // Triggers html2canvas to render the poster element as a high-quality graphic canvas image
  html2canvas(poster, {
    scale: 2, // Doubles the resolution output quality so text remains super sharp
    useCORS: true, // Prevents errors if photos are hosted on an outside web link
    logging: false
  }).then(function(canvas) {
    // Converts canvas element data strings directly into an image URL link string format
    const imageElementUrl = canvas.toDataURL('image/png');
    
    // Simulates an invisible browser click download process automation sequence
    const triggerFileLink = document.createElement('a');
    triggerFileLink.href = imageElementUrl;
    triggerFileLink.download = 'Missing_Person_Risima_Maluleke.png'; // Sets the image output file name
    document.body.appendChild(triggerFileLink);
    triggerFileLink.click();
    document.body.removeChild(triggerFileLink);
  }).catch(function(error) {
    alert('Something went wrong generating the image file download element.');
    console.error(error);
  });
});
