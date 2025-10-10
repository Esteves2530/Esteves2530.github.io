/*=============== SWIPER PROJECTS ===============*/

const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }

});

/*=============== WORK TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetSelector = tab.dataset.target, targetContent = document.querySelector(targetSelector)

        /*=============== DESATIVA CONTEUDO ===============*/
        tabContents.forEach(content => content.classList.remove('work-active'))
        tabs.forEach(t => t.classList.remove('work-active'))

        /*=============== ATIVA CONTEUDO ===============*/
        tab.classList.add('work-active')
        targetContent.classList.add('work-active')
    })
});

/*=============== IMAGE SWITCH ===============*/

let imagens = ["assets/img/280 - 008380.jpg", "assets/img/1000064635.jpg", "assets/img/1000052543.jpg",
                  "assets/img/1000051025.jpg", "assets/img/1000050283.jpg"];
let index = 0;

setInterval(() => {
    slideshow.style.opacity = 0; // começa fade-out
    setTimeout(() => {
    index = (index + 1) % imagens.length; // próxima imagem
    slideshow.src = imagens[index];
    slideshow.style.opacity = 1; // fade-in
    }, 400); // espera o fade-out acabar (1s)
}, 4000);


/*<script>
    let imagens = ["assets/img/280 - 008380.jpg", "assets/img/1000064635.jpg", "assets/img/1000052543.jpg",
    "assets/img/1000051025.jpg", "assets/img/1000050283.jpg"];
    let index = 0;

    setInterval(() => {
    index = (index + 1) % imagens.length; // volta ao início
    document.getElementById("slideshow").src = imagens[index];  // alterar para o ID da imagem e ficam a alternar entre si
    }, 3000); // troca a cada 3 segundos
</script>-->

<!--<script>
    let imagens = ["assets/img/280 - 008380.jpg", "assets/img/1000064635.jpg", "assets/img/1000052543.jpg",
    "assets/img/1000051025.jpg", "assets/img/1000050283.jpg"];
    let index = 0;

    setInterval(() => {
        slideshow.style.opacity = 0; // começa fade-out
        setTimeout(() => {
        index = (index + 1) % imagens.length; // próxima imagem
        slideshow.src = imagens[index];
        slideshow.style.opacity = 1; // fade-in
        }, 400); // espera o fade-out acabar (1s)
    }, 3500);
</script>*/

