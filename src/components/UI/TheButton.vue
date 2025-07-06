<template>
  <div class="appoint-btn">
    <span><slot /></span>
  </div>
</template>

<style scoped>
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
span {
  background-color: #faf9f7;
  font-weight: bold;
  z-index: 2;
}
.appoint-btn:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}
</style>
