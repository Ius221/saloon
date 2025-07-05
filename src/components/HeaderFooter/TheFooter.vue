<template>
  <div footer-div>
    <div class="img">
      <div class="img-div">
        <div>
          <img
            src="../../assets/header/logo.png"
            width="50px"
            class="logo-img"
          />
        </div>
        <p class="small-content">NEWSLETTER SIGNUP</p>
        <p class="main-content">Want to get updates on Hair & Wellness news?</p>
        <div class="email-field">
          <input type="email" class="email-here" placeholder="Your Email" />
          <p class="small-content" style="color: rgb(189, 118, 85)">
            SUBSCRIBE
          </p>
        </div>
        <div class="list-item">
          <ul>
            <li v-for="(val, ind) in allList" :key="ind">
              {{ val }}
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>
            © Copyright 2023
            <span
              style="
                color: rgb(189, 118, 85);
                cursor: pointer;
                font-weight: 600;
              "
              >Scissors & Style</span
            >. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allList: [
        "Home",
        "About Us",
        "Service",
        "Our Projects",
        "Blog",
        "Contacts",
      ],
    };
  },
};
</script>

<style scoped>
.img {
  background-image: url("../../assets/header/footer.jpg");
  font-family: "Montserrat", sans-serif;
  background-repeat: no-repeat;
  background-size: cover; /* Ensures image covers footer area */
  background-position: center; /* Keeps image centered */
  width: 100%;
}
ul {
  display: flex;
  gap: 35px;
  padding: 14px 0;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
  list-style-type: none;
}
li:hover {
  color: rgb(189, 118, 85);
  cursor: pointer;
}
.img-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 24px 0;
  padding-bottom: 50vh;
}
.small-content {
  letter-spacing: 2px;
  color: rgb(189, 118, 85);
  font-size: 12px;
  font-weight: 600;
}
.logo-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.main-content {
  font-size: 40px;
  text-transform: capitalize;
  text-align: center;
  width: 475px;
  padding: 15px 0;
  font-family: "Oranienbaum", serif;
}
.email-field p {
  width: 82.8906px;
  height: 50px;
  padding: 16px 0px;
  display: inline-block;
  box-sizing: border-box;
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  color: rgb(34, 29, 26);
  letter-spacing: 1.2px;
  cursor: pointer;
}
.email-field input {
  border: none;
  outline: none; /* removes blue highlight on focus */
  background-color: transparent;
  width: 327.109px;
  height: 52px;
  padding: 13px 0px 19px;
  display: inline-block;
  box-sizing: border-box;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 20px;
  color: rgb(87, 83, 81);
}
.email-field {
  border-bottom: 1px solid #000;
  width: 410px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Montserrat;
  align-items: center;
  font-weight: 400;
  line-height: 28px;
  margin: 20px 0;
  color: rgb(87, 83, 81);
}
.copyright {
  margin-top: 10px;
}
@media (max-width: 1080px) {
}
@media (max-width: 1028px) {
}
@media (max-width: 768px) {
  .img {
    background-image: linear-gradient(to top right, #ffdce2, #ffffff);
  }
  .img-div {
    padding-bottom: 15vh;
    padding-top: 3vh;
  }
  .main-content {
    width: 350px;
    font-size: 35px;
    padding: 0;
  }
}
@media (max-width: 640px) {
  .img {
    background-image: linear-gradient(to top right, #ffdce2, #ffffff);
  }
  .img-div {
    gap: 0;
    padding-bottom: 10vh;
    padding-top: 2vh;
  }
  .main-content {
    width: 350px;
    font-size: 35px;
    padding: 0;
  }
  .small-content {
    font-size: 0.75rem;
    margin: 28px 0;
  }
  .email-field {
    width: 350px;
  }
  .copyright {
    width: 340px;
    font-size: 12px;
  }
  ul {
    width: 350px;
    display: grid;
    grid-template-columns: repeat(3, 100px); /* 3 columns */
    grid-template-rows: repeat(2, 0px); /* 2 rows, 150px height each */
    place-items: center;
    margin: 0 auto;
    margin-bottom: 35px;
  }
}
</style>
