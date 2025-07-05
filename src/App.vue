<template>
  <div class="first-div" :style="{ opacity: isMobileMenuOpen ? 0.5 : 1 }">
    Welcome To Scissors & Style
  </div>

  <the-header @mobile-menu-changed="handleMobileMenuChange" />
  <div class="main-section" :style="{ opacity: isMobileMenuOpen ? 0.5 : 1 }">
    <router-view />
  </div>
  <the-footer />
</template>

<script>
import TheHeader from "./components/HeaderFooter/TheHeader.vue";
import TheFooter from "./components/HeaderFooter/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    handleMobileMenuChange(isOpen) {
      this.isMobileMenuOpen = isOpen;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background-color: #c0c0c0; */
}
</style>

<style scoped>
.first-div {
  width: 100%;
  background-color: #f6c3aa;
  display: flex;
  justify-content: center;
  padding: 13px 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 13px;
}
.main-section {
  background-color: #f6c3aa;
}
</style>
