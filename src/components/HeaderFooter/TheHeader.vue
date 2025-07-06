<template>
  <div class="search-box" v-if="showSearchBox">
    <input type="text" class="search-open" placeholder="Search..." />
    <img
      src="../../assets/header/cross.png"
      alt=""
      width="24px"
      @click="showSearchBox = false"
    />
  </div>
  <div class="nav" :style="{ opacity: isMobileMenuOpen ? 0.5 : 1 }">
    <div class="logo-img">
      <img src="../../assets/header/logo.png" alt="" class="nav-img" />
      <p class="title">Scissors & Style</p>
    </div>
    <ul class="outer-ul">
      <li v-for="(val, ind) in middleHeading" :key="ind" class="outer-list">
        <a href="#">
          {{ val.toUpperCase() }}
          <img
            src="../../assets/header/dropdown.png"
            alt="icon"
            class="menu-icon active"
          />
        </a>
      </li>
    </ul>
    <div class="second-last">
      <p class="last-row" style="opacity: 0.8" @click="showSearchBox = true">
        <img
          src="../../assets/header/search.png"
          alt=""
          width="24px"
          style="margin-right: -19px"
          @click="showSearchBox = true"
        />
        Search
      </p>
      <p class="last-row">My Account</p>
      <div class="o-div">
      
        <the-button>BOOK NOW!</the-button>
      </div>
    </div>
    <a class="last-img hamburger">
      <img
        src="../../assets/header/menu-icon.png"
        alt="menu"
        class="menu-icon"
        @click="mobileView()"
      />
    </a>
  </div>

  <transition name="mobile-menu">
    <div
      v-if="isMobileMenuOpen"
      class="mobile-overlay"
      @click="closeMobileView"
    >
      <div class="mobile-view" @click.stop>
        <div class="mobile-inner">
          <div class="mobile-title">
            <p>MAIN MENU</p>
            <img
              src="../../assets/header/cross.png"
              alt="menu"
              class="menu-icon"
              @click="closeMobileView"
            />
          </div>
          <div
            class="mobile-list"
            v-for="(val, ind) in middleHeading"
            :key="ind"
          >
            <p>{{ val }}</p>
            <img
              src="../../assets/header/right-arrow.png"
              alt="menu"
              class="menu-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
  <div class="bottom-fixed">
    <div class="bottom-bar">
      <div class="last-thing" @click="showSearchBox = true">
        <img src="../../assets/header/search.png" alt="" width="24px" />
        <p>Search</p>
      </div>
      <div class="last-thing">
        <img src="../../assets/header/user.png" alt="" width="24px" />
        <p>Account</p>
      </div>
      <div class="last-thing">
        <img src="../../assets/header/cart.png" alt="" width="24px" />
        <p>Cart</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      middleHeading: [
        "Home",
        "About Us",
        "Portfolios",
        "Blog",
        "Pages",
        "Contacts",
      ],
      isMobileMenuOpen: false,
      showSearchBox: false,
    };
  },
  methods: {
    mobileView() {
      this.isMobileMenuOpen = true;
      this.$emit("mobile-menu-changed", true);
    },
    closeMobileView() {
      this.isMobileMenuOpen = false;
      this.$emit("mobile-menu-changed", false);
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  padding: 0 50px;
  display: flex;
  /* remove this for top stick */
  position: sticky;
  top: 0;
  z-index: 1;
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
.logo-img,
.second-last,
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
.last-row {
  margin-right: 50px;
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
/* Mobile view */
.mobile-view {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: #fff;
  color: #000;
  width: 330px;
  height: 100%;
}
.mobile-inner {
  padding: 10px 30px;
}
.mobile-title,
.mobile-list {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.mobile-title p,
.mobile-list p {
  font-size: 0.875rem;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 18px;
}
.mobile-title img,
.mobile-list img {
  height: 15px;
  width: 15px;
}
.mobile-title p {
  font-weight: 600;
  border-bottom: 2px solid #a95e49;
}
/* Mobile menu transition classes */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease-in-out;
}
.mobile-menu-enter-from {
  opacity: 0;
}
.mobile-menu-enter-to {
  opacity: 1;
}
.mobile-menu-leave-from {
  opacity: 1;
}
.mobile-menu-leave-to {
  opacity: 0;
}
.mobile-menu-enter-active .mobile-view,
.mobile-menu-leave-active .mobile-view {
  transition: transform 0.3s ease-in-out;
}
.mobile-menu-enter-from .mobile-view {
  transform: translateX(-100%);
}
.mobile-menu-enter-to .mobile-view {
  transform: translateX(0);
}
.mobile-menu-leave-from .mobile-view {
  transform: translateX(0);
}
.mobile-menu-leave-to .mobile-view {
  transform: translateX(-100%);
}
.hamburger {
  display: none;
}
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  color: #000;
  text-align: center;
  padding: 10px;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
}
.bottom-fixed {
  display: none;
}
.search-open {
  top: 0;
  width: 95%;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  padding-left: 20px;
  border: none;
  padding: 10px;
}

.search-box {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: -42px;
  width: 100%;
  background-color: #fff;
}
.search-box img {
  width: 22px;
  height: 22px;
  margin-top: 9px;
  cursor: pointer;
}
.bottom-bar {
  padding: 20px 0;
}
.last-thing p {
  font-family: "Montserrat", sans-serif;
  padding: 5px 0;
}
@media (max-width: 1280px) {
  .hamburger {
    display: flex;
  }
  .outer-ul {
    display: none;
  }
}
@media (max-width: 1024px) {
  .nav {
    padding: 0 25px;
  }
  .hamburger {
    display: flex;
  }
  .outer-ul {
    display: none;
  }
}
@media (max-width: 768px) {
  .nav {
    padding: 0 25px;
  }
  .hamburger .menu-icon {
    margin-top: 43px;
  }
  .title {
    font-size: 19px;
    width: 50px;
  }
  .nav-img {
    width: 40px;
    padding: 20px 0;
  }
  .hamburger {
    display: flex;
  }
  .outer-ul {
    display: none;
  }
  .second-last {
    display: none;
  }

  .bottom-fixed {
    display: flex;
  }
  .search-open {
    font-size: 16px;
  }
}
@media (max-width: 640px) {
  .nav {
    padding: 0;
  }
  .hamburger .menu-icon {
    margin-top: 43px;
  }
  .title {
    font-size: 16px;
    width: 50px;
  }
  .nav-img {
    width: 40px;
    padding: 20px 0;
  }
  .hamburger {
    display: flex;
  }
  .outer-ul {
    display: none;
  }
  .second-last {
    display: none;
  }
  .bottom-fixed {
    display: flex;
  }
  .last-thing p {
    display: none;
  }
  .search-open {
    font-size: 16px;
  }
}
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
</style>
