const likeImages = document.querySelectorAll('.like-image');


    likeImages.forEach((likeImage) => {
      const likeDialog = likeImage.previousElementSibling;


      likeImage.addEventListener('mouseover', () => {
        likeDialog.style.display = 'block';
      });


      likeImage.addEventListener('mouseout', () => {
        likeDialog.style.display = 'none';
      });
    });