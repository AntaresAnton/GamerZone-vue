<template>
  <section class="hero-section">
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://placehold.co/1920x600/121212/7b4cff?text=Consolas+de+última+generación"
            class="d-block w-100"
            alt="Consolas de última generación"
          />
          <div class="carousel-caption">
            <h2 data-aos="fade-up" data-aos-delay="100">Consolas de última generación</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Descubre el poder de PS5, Xbox Series X y Nintendo Switch
            </p>
            <button class="btn btn-primary btn-lg" data-aos="fade-up" data-aos-delay="300">
              Ver consolas
            </button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://placehold.co/1920x600/121212/ff4c8e?text=Periféricos+Gaming"
            class="d-block w-100"
            alt="Periféricos Gaming"
          />
          <div class="carousel-caption">
            <h2 data-aos="fade-up" data-aos-delay="100">Periféricos Gaming</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Mejora tu setup con nuestros teclados, ratones y auriculares
            </p>
            <button class="btn btn-secondary btn-lg" data-aos="fade-up" data-aos-delay="300">
              Ver periféricos
            </button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://placehold.co/1920x600/121212/00e5ff?text=Ofertas+Especiales"
            class="d-block w-100"
            alt="Ofertas Especiales"
          />
          <div class="carousel-caption">
            <h2 data-aos="fade-up" data-aos-delay="100">Ofertas Especiales</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Hasta 50% de descuento en productos seleccionados
            </p>
            <button class="btn btn-accent btn-lg" data-aos="fade-up" data-aos-delay="300">
              Ver ofertas
            </button>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container features-section py-4">
      <div class="row g-4 text-center">
        <div class="col-md-3 col-6" data-aos="fade-up" data-aos-delay="100">
          <div class="feature-item">
            <i class="fas fa-truck-fast fa-2x text-primary mb-3"></i>
            <h6 class="fw-bold">Envío Gratis</h6>
            <p class="small mb-0">En pedidos superiores a $99</p>
          </div>
        </div>
        <div class="col-md-3 col-6" data-aos="fade-up" data-aos-delay="200">
          <div class="feature-item">
            <i class="fas fa-shield-halved fa-2x text-primary mb-3"></i>
            <h6 class="fw-bold">Garantía</h6>
            <p class="small mb-0">1 año en todos los productos</p>
          </div>
        </div>
        <div class="col-md-3 col-6" data-aos="fade-up" data-aos-delay="300">
          <div class="feature-item">
            <i class="fas fa-headset fa-2x text-primary mb-3"></i>
            <h6 class="fw-bold">Soporte 24/7</h6>
            <p class="small mb-0">Atención al cliente</p>
          </div>
        </div>
        <div class="col-md-3 col-6" data-aos="fade-up" data-aos-delay="400">
          <div class="feature-item">
            <i class="fas fa-credit-card fa-2x text-primary mb-3"></i>
            <h6 class="fw-bold">Pago Seguro</h6>
            <p class="small mb-0">Múltiples métodos de pago</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style lang="scss" scoped>
.hero-section {
  margin-bottom: 3rem;

  .carousel-item {
    height: 500px;

    img {
      object-fit: cover;
      height: 100%;
      filter: brightness(0.7);
    }

    .carousel-caption {
      bottom: 20%;

      h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
      }
    }
  }

  .features-section {
    margin-top: -50px;
    position: relative;
    z-index: 10;

    .feature-item {
      background-color: white;
      padding: 1.5rem;
      border-radius: $border-radius;
      box-shadow: $box-shadow;
      height: 100%;
      transition: $transition-base;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}

@media (max-width: 768px) {
  .hero-section {
    .carousel-item {
      height: 400px;

      .carousel-caption {
        h2 {
          font-size: 1.8rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
