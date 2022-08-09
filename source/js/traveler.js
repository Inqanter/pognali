const likes = document.querySelectorAll('.like__button');

function likesClickHandler(e) {
  e.preventDefault();
  this.classList.toggle('like__button--active');
}

likes.forEach(like => {
  like.addEventListener('click', likesClickHandler);
});
