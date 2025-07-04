<template>
  <div class="nav">
    <div class="none">
      <img src="../../assets/logo.png" alt="" class="nav-img" />
      <p class="title">Scissors & Style</p>
    </div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Location</a></li>
    </ul>
  </div>
</template>

<style>
.nav {
  width: 100%;
  padding: 20px 50px;
  display: flex;
}

.nav-img {
  width: 70px;
}

.nav-img,
.nav,
.title,
.none,
ul,
a,
li {
  justify-content: space-between;
  display: flex;
  background-color: #fff;
}
ul {
  display: flex;
}
a {
  text-decoration: none;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #000;
  gap: 28px;
  font-size: 16px;
  margin-right: 26px;
}
.title {
  align-items: center;
  margin-left: 5px;
  font-size: 26px;
  font-weight: normal;
  font-family: "Oranienbaum", serif;
}
</style>
