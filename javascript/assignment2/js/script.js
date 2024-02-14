const likeImages = document.querySelectorAll('.like-image');
let likeCount = 0;


likeImages.forEach((likeImage) => {
  const likeDialog = likeImage.previousElementSibling;

  likeImage.addEventListener('click', () => {
    likeCount++;
    if((likeCount%2)==1){
      likeImage.src='like.png'
    }
    else{
      likeImage.src='dislike.png'
    }
  });
});