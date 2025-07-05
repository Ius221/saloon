<template>
  <div class="outer-all">
    <div class="first-child">our services</div>
    <div class="title">Your Satisfaction Is Our Priority</div>
    <p class="description">
      We performs a full spectrum of body contouring, facial plastic surgery,
      and breast enhancement procedures. We uses many sophisticated,
      customizable techniques to suit your specific needs and preferences.
    </p>
    <div class="img-section">
      <div class="first-img">
        <img src="./img-1.png" class="item first" />
        <img src="./img-1.png" class="item second" />
        <img src="./img-1.png" class="item third" />
        <p class="item img-text first">Haircut</p>
        <p class="item img-text second">Haircut</p>
        <p class="item img-text third">Haircut</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.outer-all {
  padding: 10vh 0;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.first-child {
  width: 440px;
  height: 18px;
  margin-bottom: 19px;
  display: block;
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 600;
  text-align: center;
  line-height: 18px;
  color: rgb(189, 118, 85);
  letter-spacing: 2px;
}

.title {
  width: 440px;
  height: 120.938px;
  display: block;
  font-size: 54px;
  font-family: Oranienbaum;
  font-weight: 400;
  text-align: center;
  line-height: 60.48px;
  color: rgb(34, 29, 26);
  letter-spacing: -0.54px;
}

.description {
  width: 671px;
  height: 143px;
  padding-bottom: 59px;
  display: block;
  font-size: 16px;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  text-align: center;
  line-height: 28px;
  color: rgb(87, 83, 81);
}

.first-img {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 150px);
  gap: 10px;
}

.item {
  background-color: #ccc;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

img {
  width: 410px;
  height: 290px;
  display: block;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 28px;
  color: rgb(87, 83, 81);
}

.img-text {
  width: 190px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  font-size: 22px;
  font-family: Oranienbaum;
  font-weight: 400;
  text-align: center;
  line-height: 26.4px;
  color: rgb(34, 29, 26);
  letter-spacing: -0.22px;
  margin-top: 100px;
  margin-left: 110px;
  border: none;
}

@media (max-width: 1028px) {
  .outer-all {
    max-width: 800px;
  }

  .first-child {
    height: 4px;
  }

  .first-img {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 150px);
    gap: 10px;
  }

  .title {
    font-size: 2rem;
    height: 70px;
  }

  .description {
    width: 400px;
  }

  .third {
    display: none;
  }
}

@media (max-width: 768px) {
  .outer-all {
    max-width: 400px;
  }

  .item {
    margin-top: 25px;
  }

  .first-child {
    height: 4px;
  }

  .first-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-size: 2rem;
    height: 70px;
  }

  .description {
    width: 400px;
  }

  .img-text {
    font-size: 16px;
    margin: 0 auto;
    margin-top: -30px;
    padding: 8px 16px;
  }

  .second,
  .third {
    display: none;
  }
}
</style>
