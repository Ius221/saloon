<template>
  <section
    class="hero-section"
    @mouseenter="pauseAutoSlide"
    @mouseleave="startAutoSlide"
  >
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="hero-slide"
      :class="['slide-' + (index + 1), { active: currentSlide === index }]"
    >
      <div class="hero-content">
        <h1 class="hero-title">{{ slide.title }}</h1>
        <p class="hero-subtitle">{{ slide.subtitle }}</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-primary">{{ slide.button }}</a>
        </div>
      </div>
    </div>

    <div class="slide-indicators">
      <div
        v-for="(slide, index) in slides"
        :key="'indicator-' + index"
        class="indicator"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "Your Look, Our Passion",
          subtitle:
            "Every visit is personal. We listen, we style, and we perfect—because your satisfaction is what drives us.",
          button: "Shop Now",
        },
        {
          title: "Unwind & Refresh",
          subtitle:
            "From soothing facials to relaxing massages, we offer a full range of treatments designed to help you feel renewed inside and out.",
          button: "Shop Now",
        },
        {
          title: "Experience the Art of Beauty",
          subtitle:
            "Step into a space where style meets care. Our expert stylists create looks that enhance your natural beauty and boost your confidence.",
          button: "Shop Now",
        },
      ],
      currentSlide: 0,
      slideInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
    this.animateTextContent();
  },
  beforeDestroy() {
    this.pauseAutoSlide();
  },

  methods: {
    goToSlide(index) {
      this.currentSlide = index;
      this.animateTextContent();
      this.resetAutoSlide();
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.animateTextContent();
    },
    animateTextContent() {
      const slideEl =
        document.querySelectorAll(".hero-slide")[this.currentSlide];
      const textEls = slideEl.querySelectorAll(
        ".hero-title, .hero-subtitle, .hero-cta"
      );
      textEls.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        setTimeout(() => {
          el.style.transition = "all 0.8s ease-out";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, i * 200 + 300);
      });
    },
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    pauseAutoSlide() {
      if (this.slideInterval) clearInterval(this.slideInterval);
    },
    resetAutoSlide() {
      this.pauseAutoSlide();
      this.startAutoSlide();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Oranienbaum&display=swap");

.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-slide.active {
  opacity: 1;
}

.hero-slide::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
  z-index: 1;
}

.slide-1 {
  background-image: url("../../assets/hero/img-1.png");
}

.slide-2 {
  background-image: url("../../assets/hero/img-2.png");
}

.slide-3 {
  background-image: url("../../assets/hero/img-3.png");
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: left;
  color: white;
  max-width: 750px;
  padding: 0 2rem;
  margin-left: 10rem;
  margin-top: 17rem;
}

.hero-title {
  font-family: "Oranienbaum", serif;
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  margin-bottom: 2rem;
}

.hero-cta {
  display: inline-flex;
  gap: 1rem;
}

.btn {
  font-family: "Montserrat", sans-serif;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  backdrop-filter: blur(10px);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
  border-radius: 15px;
}

.slide-indicators {
  position: absolute;
  bottom: 6rem;
  left: 14rem;
  display: flex;
  gap: 1rem;
  z-index: 3;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .hero-content {
    margin-left: 2rem;
    max-width: calc(100% - 4rem);
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn {
    width: 100%;
    max-width: 250px;
  }

  .slide-indicators {
    left: 2rem;
  }
}
@media (max-width: 640px) {
  .hero-content {
    margin-left: 1rem;
    margin-top: 6rem;
    max-width: calc(100% - 4rem);
  }
}
</style>
