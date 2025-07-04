<template>
  <header class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <span class="nav-link">ABOUT US</span>
        <ul class="dropdown">
          <li>Our Story</li>
          <li>Team</li>
          <li>Careers</li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.navbar {
  background: #fff;
  padding: 1rem;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  cursor: pointer;
  font-weight: bold;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0.5rem 0;
  display: none;
  min-width: 150px;
  z-index: 10;
}

.dropdown li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dropdown li:hover {
  background: #f2f2f2;
}

/* Show dropdown on hover */
.nav-item:hover .dropdown {
  display: block;
}
</style>
