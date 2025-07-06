<template>
  <div class="outer-all">
    <small-title class="small-title">Explore Our Programs </small-title>
    <the-title class="actual-title"
      >We are proud of <br />
      our service</the-title
    >

    <div class="img-div">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="[
          'inner-div',
          hideOnMobile(index) ? 'hide' : '',
          hideOnSmall(index) ? 'last-hide' : '',
        ]"
      >
        <img src="./image.png" :class="index % 2 === 0 ? 'odd' : 'even'" />
        <the-title class="actual-title name">{{ card.title }}</the-title>
        <the-description class="desc">{{ card.desc }}</the-description>
      </div>
    </div>
  </div>
</template>

<script>
import TheDescription from "../../UI/TheDescription.vue";
import TheTitle from "../../UI/TheTitle.vue";
export default {
  components: { TheTitle, TheDescription },
  name: "HeroSection",
  data() {
    return {
      cards: [
        {
          img: "./image.png",
          title: "Haircut & Styling",
          desc: "Precision cuts and custom styles tailored to your personality, perfect for everyday or special occasions.",
        },
        {
          img: "./image.png",

          title: "Hair Spa",
          desc: "Rejuvenate dull, tired hair with deep conditioning, massage, and repair treatment for ultimate shine.",
        },
        {
          img: "./image.png",
          title: "Hair Coloring",
          desc: "Get bold, beautiful, or subtle shades using premium color products that protect and nourish your hair",
        },
        {
          img: "./image.png",
          title: "Facial Treatments",
          desc: "Brighten, hydrate, and cleanse your skin with customized facials suited to your skin type.",
        },
        {
          img: "./image.png",
          title: "Threading & Waxing",
          desc: "Perfectly shaped brows and smooth skin with hygienic, gentle hair removal for face and body",
        },
      ],
    };
  },
  methods: {
    hideOnMobile(index) {
      // index 2+ should be hidden on screens < 640px
      return window.innerWidth <= 640 && index >= 2;
    },
    hideOnSmall(index) {
      // index 3+ should be hidden on screens < 786px
      return window.innerWidth <= 786 && index >= 3;
    },
  },
  mounted() {
    // Recalculate classes on resize (optional enhancement)
    window.addEventListener("resize", () => this.$forceUpdate());
  },
  beforeUnmount() {
    window.removeEventListener("resize", () => this.$forceUpdate());
  },
};
</script>

<style scoped>
.small-title {
  display: flex;
  justify-content: center;
}

.actual-title {
  width: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px 0;
}
.outer-all {
  width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.img-div {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.odd {
  transition: all 0.5s ease;
  border-radius: 45% 45% 0 0;
}

.even {
  transition: all 0.5s ease;
  border-radius: 0 0 45% 45%;
}

.odd:hover,
.even:hover {
  border-radius: 45%;
  transition: all 0.5s ease;
}
.name {
  height: auto;
  font-size: 1.5rem;
  margin-bottom: 5px;
}
/* .hide {
} */

img {
  width: 228.484px;
  display: flex;
  height: 297.016px;
}

@media (max-width: 786px) {
  .outer-all {
    width: auto;
    /* margin: 0 auto; */
  }
  .name {
    margin-bottom: 5px;
  }
  img {
    width: 168.484px;
    height: 237.016px;
    border-radius: 45%;
    margin: 0 auto;
  }

  .even,
  .odd {
    border-radius: 45%;
  }

  .desc {
    text-align: center;
  }

  .last-hide {
    display: none;
  }
}

@media (max-width: 640px) {
  .outer-all {
    width: auto;
  }

  img {
    width: 168.484px;
    height: 237.016px;
    margin: 0 auto;
    border-radius: 45%;
  }
  .inner-div {
    width: 200px;
  }

  .even,
  .odd {
    border-radius: 45%;
  }

  .desc {
    width: auto;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
  }

  .hide {
    display: none;
  }
}
</style>
