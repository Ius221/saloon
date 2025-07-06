<template>
  <div
    class="hero-container"
    @mouseenter="pauseInterval"
    @mouseleave="startInterval"
  >
    <div class="overlay"></div>

    <!-- Hero Slides -->
    <div
      v-for="(slide, idx) in slides"
      :key="idx"
      class="hero-slide"
      :class="{ active: idx === currentSlide }"
      :style="{ background: slide.background }"
    ></div>

    <!-- Hero Content -->
    <div class="hero-content">
      <the-title class="hero-title" :key="slideData[currentSlide].title">
        {{ slideData[currentSlide].title }}
      </the-title>
      <the-description
        class="hero-description"
        :key="slideData[currentSlide].description"
      >
        {{ slideData[currentSlide].description }}
      </the-description>
    </div>

    <!-- Navigation Buttons -->
    <button class="nav-button prev-button" @click="changeSlide(-1)">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="15,18 9,12 15,6"></polyline>
      </svg>
    </button>
    <button class="nav-button next-button" @click="changeSlide(1)">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="9,18 15,12 9,6"></polyline>
      </svg>
    </button>
  </div>
</template>

<script>
import TheDescription from "../../UI/TheDescription.vue";
export default {
  components: { TheDescription },
  name: "DynamicHeroSection",
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      isTransitioning: false,
      slides: [
        { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
        { background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
        { background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
        { background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
      ],
      slideData: [
        {
          title: "Creative Innovation",
          description:
            "Explore the vibrant world of endless possibilities and creative solutions",
        },
        {
          title: "Passionate Design",
          description:
            "Where bold ideas meet stunning visual experiences that captivate and inspire",
        },
        {
          title: "Digital Excellence",
          description:
            "Crafting exceptional digital experiences with cutting-edge technology and artistry",
        },
        {
          title: "Nature's Harmony",
          description:
            "Discover the perfect balance between innovation and natural beauty",
        },
      ],
    };
  },
  mounted() {
    this.startInterval();
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    updateSlide(index) {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this.currentSlide = index;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    },
    changeSlide(direction) {
      let next = this.currentSlide + direction;
      if (next >= this.slides.length) next = 0;
      if (next < 0) next = this.slides.length - 1;
      this.updateSlide(next);
      this.resetInterval();
    },
    goToSlide(idx) {
      this.updateSlide(idx);
      this.resetInterval();
    },
    nextSlide() {
      this.changeSlide(1);
    },
    startInterval() {
      clearInterval(this.slideInterval);
      this.slideInterval = setInterval(this.nextSlide, 5000);
    },
    pauseInterval() {
      clearInterval(this.slideInterval);
    },
    resetInterval() {
      this.pauseInterval();
      this.startInterval();
    },
    handleKeydown(e) {
      if (e.key === "ArrowLeft") this.changeSlide(-1);
      if (e.key === "ArrowRight") this.changeSlide(1);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  overflow: hidden;
}

.hero-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  transform: scale(1);
  animation: zoomEffect 5s ease-in-out infinite;
}

.hero-slide.active {
  opacity: 1;
}

@keyframes zoomEffect {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
  max-width: 800px;
  padding: 0 20px;
}

.hero-title {
  /* font-size: 3.5rem; */
  /* font-weight: bold; */
  margin-bottom: 20px;
  color: #f0f0f0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  opacity: 0;
  transform: translateY(50px);
  animation: slideUpFade 1s ease-out forwards;
}

.hero-description {
  /* font-family: Oranienbaum; */

  /* font-size: 1.4rem; */
  line-height: 1.6;
  color: #f0f0f0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  opacity: 0;
  transform: translateY(50px);
  animation: slideUpFade 1s ease-out 0.3s forwards;
}

@keyframes slideUpFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 20;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.nav-button:hover {
  color: rgba(255, 255, 255, 0.8);
  transform: translateY(-50%) scale(1.2);
}

.nav-button:active {
  transform: translateY(-50%) scale(0.9);
}

.prev-button {
  left: 30px;
}

.next-button {
  right: 30px;
}

.slide-indicators {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 30;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
  z-index: 5;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-description {
    font-size: 1.1rem;
  }
  .nav-button {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  .prev-button {
    left: 20px;
  }
  .next-button {
    right: 20px;
  }
}
</style>
