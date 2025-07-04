<template>
  <div class="nav">
    <div class="none">
      <img src="../../assets/logo.png" alt="" class="nav-img" />
      <p class="title">Scissors & Style</p>
    </div>
    <ul class="outer-ul">
      <li v-for="(val, ind) in middleHeading" :key="ind" class="outer-list">
        <a href="#">
          {{ val }}
          <img
            src="../../assets/dropdown.png"
            alt="icon"
            class="menu-icon active"
          />
        </a>
      </li>
    </ul>
    <div class="none">
      <p class="last-row">Search</p>
      <p class="last-row">My Account</p>
      <div class="o-div">
        <div class="appoint-btn">
          <img
            src="../../assets/calender.png"
            alt="icon"
            class="menu-icon"
            style="margin-left: 0; opacity: 0.7"
          />
          <span>BOOK NOW!</span>
        </div>
      </div>
      <a class="last-img hamburger">
        <img src="../../assets/menu-icon.png" alt="menu" class="menu-icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      middleHeading: [
        "HOME",
        "ABOUT US",
        "PORTFOLIOS",
        "BLOG",
        "PAGES",
        "CONTACTS",
      ],
    };
  },
};
</script>

<style>
.nav {
  width: 100%;
  padding: 0 50px;
  display: flex;
  /* remove this for top stick */
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #faf9f7;
  /* Ends here  */
}

.nav-img {
  width: 60px;
  padding: 20px 0;
}

.nav-img,
.nav,
.title,
.none,
.last-row,
.o-div,
.outer-ul,
a,
.outer-list {
  justify-content: space-between;
  display: flex;
  background-color: #fff;
}

.active {
  color: #a95e49;
}
a,
.last-row {
  text-decoration: none;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #000;
  gap: 28px;
  font-size: 16px;
  margin-right: 26px;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.5s ease;
}
a {
  height: 100%;
}
a:hover,
.last-row:hover {
  transition: all 0.3s ease;
  cursor: pointer;
  color: #a95e49;
}
.title {
  align-items: center;
  margin-left: 5px;
  font-size: 26px;
  font-weight: normal;
  font-family: "Oranienbaum", serif;
}
.menu-icon {
  width: 19px;
  height: 18px;
  color: red;
  background-color: #faf9f7;
  margin-left: -27px;
  vertical-align: middle;
}
.last-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #faf9f7;
  margin-left: 0;
  cursor: pointer;
}
.last-img img {
  width: 35px;
  height: 35px;
  margin-left: 10px;
  margin-top: 65px;
}
.o-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.appoint-btn {
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  color: #000;
  background-color: #fff;
  font-weight: 600;
  margin-right: 26px;
  transition: all 0.7s ease;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  border: 1px solid black;
  padding: 12px 24px;
}
.appoint-btn:hover {
  color: #a95e49;
  border-color: #f6c3aa;
  transform: scale(1.05);
  border-width: 2px;
  border-radius: 10px;
  box-shadow: 0 0 20px #f6c3aa;
}
.appoint-btn:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}
span {
  background-color: #faf9f7;
  font-weight: bold;
  z-index: 2;
}
button {
  margin-left: 20px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}


</style>
