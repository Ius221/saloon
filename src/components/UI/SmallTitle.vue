<template>
  <div class="small-title">
    <slot />
  </div>
</template>

<style scoped>
.small-title {
  width: 100%;
  height: auto;
  margin: 0px 0px 22.4px;
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 18px;
  color: rgb(189, 118, 85);
  letter-spacing: 2px;
}
@media (max-width: 1028px) {
  .small-title {
    height: 4px;
  }
}
@media (max-width: 768px) {
  .small-title {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
}
</style>
