<template>
  <div class="outer-all">
    <div class="img-container">
      <div>
        <img
          src="https://media.istockphoto.com/id/1783214748/photo/processional-hair-dresser-styling-hair-of-young-woman-in-beauty-salon.jpg?s=2048x2048&w=is&k=20&c=o4a2N5okWB4hxUzt14Z9Mu4Mu7LCGlhMbe_4WyKtMrc="
          class="real-img"
        />
      </div>
    </div>
    <div class="container-div">
      <small-title>THE BEST STUDIO SINCE 2010</small-title>
      <the-title>We Will Change Your Out Looks</the-title>
      <the-description>
        Our cosmetology program transitions you from a creative, willing learner
        to a confident, licensed hair professional ready to jump into a career.
      </the-description>
      <div class="time">
        <div class="first-time">
          <div class="real-time">10+</div>
          <p class="common">Years Experience</p>
        </div>
        <div class="second-time" ref="counterContainer">
          <div class="real-time" :class="{ counting: isCounting }">
            {{ counterValue }}+
          </div>
          <p class="common">Happy Clients</p>
        </div>
      </div>
      <div class="btn">
        <the-button class="actual-btn">BookNow</the-button>
      </div>
    </div>
  </div>
</template>

<script>
import SmallTitle from "../../UI/SmallTitle.vue";
import TheTitle from "../../UI/TheTitle.vue";
export default {
  components: { SmallTitle, TheTitle },
  name: "DynamicHero",
  data() {
    return {
      counterValue: 0,
      isCounting: false,
    };
  },
  mounted() {
    this.observeCounter();
  },
  methods: {
    animateCounter(start, end, duration) {
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * (end - start) + start);

        this.counterValue = currentValue;
        this.isCounting = true;

        setTimeout(() => {
          this.isCounting = false;
        }, 100);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          this.counterValue = end;
        }
      };

      window.requestAnimationFrame(step);
    },
    observeCounter() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && this.counterValue === 0) {
            setTimeout(() => {
              this.animateCounter(0, 1000, 2000);
            }, 300);
          }
        });
      });

      if (this.$refs.counterContainer) {
        observer.observe(this.$refs.counterContainer);
      }
    },
  },
};
</script>

<style scoped>
/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.actual-btn {
  width: 100px;
}
.outer-all {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.container-div {
  display: flex;
  flex-direction: column;
  padding: 73px 0px 0px 55px;
  justify-content: space-evenly;
}

.img-container {
  width: 100%;
  max-width: 662px;
  height: auto;
  aspect-ratio: 662/620;
  padding: 14px 15px;
  border: 1px solid rgb(189, 118, 85);
  display: block;
  border-radius: 50%;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
  text-align: center;
  line-height: 28px;
  color: rgb(87, 83, 81);
}

.real-img {
  width: 100%;
  max-width: 630px;
  height: auto;
  aspect-ratio: 630/590;
  display: inline-block;
  border-radius: 49%;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
  text-align: center;
  line-height: 28px;
  color: rgb(87, 83, 81);
}

.description {
  width: 100%;
  max-width: 480px;
  height: auto;
  padding: 0px 0px 27px;
  font-size: 16px;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  line-height: 28px;
  color: rgb(87, 83, 81);
}

.time {
  display: flex;
  justify-content: space-evenly;
}

.real-time {
  animation: fadeIn 1s ease-out;
  width: auto;
  min-width: 100px;
  height: 58px;
  font-size: 54px;
  font-family: "Oranienbaum", serif;
  font-weight: 400;
  text-align: center;
  line-height: 58px;
  color: rgb(189, 118, 85);
  letter-spacing: -0.54px;
  margin-bottom: 10px;
}

.second-time {
  transition: transform 0.3s ease;
}

.second-time:hover {
  transform: translateY(-5px);
}

.common {
  width: 140px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  line-height: 28px;
  color: rgb(87, 83, 81);
  margin: 0 auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes numberPulse {
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

.counting {
  animation: numberPulse 0.1s ease-in-out;
}

img {
  border-radius: 50%;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .outer-all {
    width: 100%;
    max-width: 500px;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding: 0 20px;
  }

  .container-div {
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  .real-img {
    width: 352px;
    height: 329.641px;
  }

  .img-container {
    width: 384px;
    height: 359.641px;
  }

  .time {
    display: flex;
    justify-content: flex-start;
    width: auto;
    padding: 20px 0;
  }

  .btn {
    width: 50px;
  }

  .description {
    font-size: 1rem;
    text-align: center;
    width: 350px;
  }
}
</style>
