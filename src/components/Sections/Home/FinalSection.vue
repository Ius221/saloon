<template>
  <section class="full-screen-section">
    <div class="inner-div">
      <div class="content-div">
        <the-title id="title">Working Hours</the-title>
        <div class="random">
          <div class="timing">
            <p class="day">Monday – Friday</p>
            <p class="time">8:00AM – 7:00PM</p>
          </div>
          <div class="timing">
            <p class="day">Saturday</p>
            <p class="time">8:00AM – 5:00PM</p>
          </div>
          <div class="timing">
            <p class="day">Sunday</p>
            <p class="time">8:00AM – 3:00PM</p>
          </div>
        </div>

        <!-- <hr /> -->
        <the-title id="title" style="padding: 30px 10px 0 0"
          >Appoitments</the-title
        >
        <p>2972 MG Road, Sector 44, Gurgaon, Haryana 122003</p>
        <p>support@scissorsstyle.in</p>
        <p>+91 99887 77665</p>
      </div>
      <center>
        <the-button style="width: 200px; margin-top: 22px"
          >Book An Appoitment</the-button
        >
      </center>
    </div>
  </section>
</template>

<script>
import TheButton from "../../UI/TheButton.vue";
import TheTitle from "../../UI/TheTitle.vue";
// import TheTitle from "../../UI/TheTitle.vue";
export default {
  components: { TheTitle, TheButton },
  //   components: { TheTitle },
  data() {
    return {
      dayArray: ["Monday – Friday", "Saturday", "Sunday"],
      timeArray: ["8:00AM – 7:00PM", "8:00AM – 5:00PM", "8:00AM – 3:00PM"],
    };
  },
};
</script>

<style scoped>
#title {
  margin-bottom: 5px;
  font-size: 24px;
}
p {
  font-size: 14px;
}
.random {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 30px;
}
.full-screen-section {
  background-image: url("./img--.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.inner-div {
  position: absolute;
  top: 250px;
  left: 350px;
  width: 459.234px;
  height: 540px;
  padding: 40px;
  border-radius: 5px;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  line-height: 28px;
  color: rgb(87, 83, 81);
}
.timing {
  display: flex;
  justify-content: space-between;
}

/* === Responsive for mobile === */
@media (max-width: 768px) {
  .full-screen-section {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    background-image: none;
  }

  .inner-div {
    position: static; /* Reset absolute positioning */
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background-image: linear-gradient(to bottom right, #ffdce2, #ffffff);

    color: #000;
    box-sizing: border-box;
  }
}
</style>
