
  
  const navMenuIcon = document.getElementById('navMenuIcon');
  const navLinks = document.getElementById('navLinks');
  navMenuIcon.onclick = function() {
    navLinks.classList.toggle('open');
  }

  document.querySelectorAll('.nav-links a').forEach(link =>
    link.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  function handle(src) {
    window.open(src, '_blank');
  }

  function toMail()
  {
    window.location.href="mailto:mssanjay180@gmail.com"
  }
  function toph()
  {
    window.location.href="tel:+916382160049"
  }

  function openModal(src) {
  const modal = document.getElementById("imageModal");
  const popupImage = document.getElementById("popupImage");
  popupImage.src = src;
  modal.style.display = "flex";
  modal.classList.remove("hide");
  }

  function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hide");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}