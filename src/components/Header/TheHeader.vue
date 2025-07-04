<template>
  <div class="nav">
    <div class="none">
      <img src="../../assets/logo.png" alt="" class="nav-img" />
      <p class="title">Scissors & Style</p>
    </div>
    <ul>
      <li>
        <a href="#" class="active"
          >HOME
          <img
            src="../../assets/dropdown.png"
            alt="icon"
            class="menu-icon active"
        /></a>
      </li>
      <li>
        <a href="#"
          >ABOUT US
          <img src="../../assets/dropdown.png" alt="icon" class="menu-icon"
        /></a>
      </li>
      <li>
        <a href="#">
          PORTFOLIOS
          <img src="../../assets/dropdown.png" alt="icon" class="menu-icon"
        /></a>
      </li>
      <li>
        <a href="#"
          >BLOG
          <img src="../../assets/dropdown.png" alt="icon" class="menu-icon"
        /></a>
      </li>
      <li>
        <a href="#"
          >PAGES
          <img src="../../assets/dropdown.png" alt="icon" class="menu-icon"
        /></a>
      </li>
      <li>
        <a href="#"
          >CONTACTS
          <img src="../../assets/dropdown.png" alt="icon" class="menu-icon"
        /></a>
      </li>
    </ul>
    <div class="none">
      <p class="last-row">Search</p>
      <p class="last-row">My Account</p>
      <div class="appoint-btn">
        <img
          src="../../assets/calender.png"
          alt="icon"
          class="menu-icon"
          style="margin-left: 0; opacity: 0.7"
        />
        <span>BOOK NOW!</span>
      </div>
      <a class="last-img">
        <img src="../../assets/menu-icon.png" alt="menu" class="menu-icon" />
      </a>
    </div>
  </div>
</template>

<style>
.nav {
  width: 100%;
  padding: 20px 50px;
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
}

.nav-img,
.nav,
.title,
.none,
.last-row,
.appoint-btn,
ul,
a,
li {
  justify-content: space-between;
  display: flex;
  background-color: #fff;
}

.active {
  color: #bd7655;
}
ul {
  display: flex;
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
  margin-top: 24px;
}
.appoint-btn {
  border: 1px solid black;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  color: #000;
  gap: 7px;
  margin-right: 26px;
  font-size: 12px;
  font-weight: 600;
}
span {
  background-color: #faf9f7;
  font-weight: bold;
}
button {
  margin-left: 20px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
</style>
