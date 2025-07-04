<template>
  <div>
    <div class="first-div">Welcome To Scissors & Style</div>

    <the-header />
    <h1>Hello from Vue + Bun!</h1>
  </div>
</template>

<script>
import TheHeader from "./components/Header/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #c0c0c0;
}
</style>

<style scoped>
.first-div {
  background-color: #f6c3aa;
  display: flex;
  justify-content: center;
  padding: 13px 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 13px;
}
</style>
