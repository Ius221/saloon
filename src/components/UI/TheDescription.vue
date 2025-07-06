<template>
  <p class="description">
    <slot />
  </p>
</template>

<style scoped>
.description {
  /* width: 671px; */
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
@media (max-width: 1028px) {
  .description {
    width: 400px;
  }
}
@media (max-width: 768px) {
  .description {
    width: 400px;
  }
}
</style>
