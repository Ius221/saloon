<template>
  <div class="holographic-container">
    <div class="holographic-card">
      <h2><slot /></h2>
    </div>
  </div>
</template>

<style>
.holographic-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  background: #fff;
}

.holographic-card {
  width: 300px;
  height: 200px;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  transition: all 0.5s ease;
}
.holographic-card h2 {
  color: #0ff;
  font-size: 2rem;
  position: relative;
  z-index: 2;
}
.holographic-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    0deg,
    transparent,
    transparent 30%,
    rgba(0, 255, 255, 0.3)
  );
  transform: rotate(-45deg);
  transition: all 0.5s ease;
  opacity: 0;
}

.holographic-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.holographic-card:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}
</style>
