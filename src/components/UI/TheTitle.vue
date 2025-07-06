<template>
  <div class="actual-title">
    <slot />
  </div>
</template>

<style scoped>
.actual-title {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  font-size: 54px;
  font-family: Oranienbaum;
  font-weight: 400;
  line-height: 60.48px;
  color: rgb(34, 29, 26);
  letter-spacing: -0.54px;
}
@media (max-width: 768px) {
  .actual-title {
    height: 90px;
    font-size: 2rem;
    text-align: center;
    width: 300px;
    line-height: 1;
  }
}
</style>
