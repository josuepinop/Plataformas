document.addEventListener('DOMContentLoaded', () => {
  // Inicializar Swiper
  new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 800,
  });

  // Formulario
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Gracias por tu mensaje. Te responderemos pronto.');
      this.reset();
    });
  }
});
