<template>
  <div class="first-div" :style="{ opacity: isMobileMenuOpen ? 0.5 : 1 }">
    Welcome To Scissors & Style
  </div>

  <the-header @mobile-menu-changed="handleMobileMenuChange" />
  <div class="main-section" :style="{ opacity: isMobileMenuOpen ? 0.5 : 1 }">
    <h1>Hello from Vue + Bun!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid
      labore voluptas, voluptates officia modi. Dolorum consectetur deserunt
      odio in repellat delectus necessitatibus quae, aperiam saepe. Ex sunt
      corporis consectetur!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem neque maxime
      aliquid illum recusandae nihil molestiae natus fugit nemo. Quisquam,
      corrupti laboriosam accusantium sed a veniam vitae iusto debitis saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid
      labore voluptas, voluptates officia modi. Dolorum consectetur deserunt
      odio in repellat delectus necessitatibus quae, aperiam saepe. Ex sunt
      corporis consectetur!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem neque maxime
      aliquid illum recusandae nihil molestiae natus fugit nemo. Quisquam,
      corrupti laboriosam accusantium sed a veniam vitae iusto debitis saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos
      ratione tenetur, laboriosam quidem a itaque reprehenderit fugiat nam
      assumenda adipisci. At quaerat laudantium ratione obcaecati qui, mollitia
      consequuntur corporis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea officiis
      dicta cumque dolorem quos, assumenda ab nobis voluptatibus hic provident
      quod veritatis. Eveniet, velit ab atque voluptatem quidem iste modi!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid
      labore voluptas, voluptates officia modi. Dolorum consectetur deserunt
      odio in repellat delectus necessitatibus quae, aperiam saepe. Ex sunt
      corporis consectetur!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem neque maxime
      aliquid illum recusandae nihil molestiae natus fugit nemo. Quisquam,
      corrupti laboriosam accusantium sed a veniam vitae iusto debitis saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos
      ratione tenetur, laboriosam quidem a itaque reprehenderit fugiat nam
      assumenda adipisci. At quaerat laudantium ratione obcaecati qui, mollitia
      consequuntur corporis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea officiis
      dicta cumque dolorem quos, assumenda ab nobis voluptatibus hic provident
      quod veritatis. Eveniet, velit ab atque voluptatem quidem iste modi!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid
      labore voluptas, voluptates officia modi. Dolorum consectetur deserunt
      odio in repellat delectus necessitatibus quae, aperiam saepe. Ex sunt
      corporis consectetur!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem neque maxime
      aliquid illum recusandae nihil molestiae natus fugit nemo. Quisquam,
      corrupti laboriosam accusantium sed a veniam vitae iusto debitis saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos
      ratione tenetur, laboriosam quidem a itaque reprehenderit fugiat nam
      assumenda adipisci. At quaerat laudantium ratione obcaecati qui, mollitia
      consequuntur corporis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea officiis
      dicta cumque dolorem quos, assumenda ab nobis voluptatibus hic provident
      quod veritatis. Eveniet, velit ab atque voluptatem quidem iste modi!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos
      ratione tenetur, laboriosam quidem a itaque reprehenderit fugiat nam
      assumenda adipisci. At quaerat laudantium ratione obcaecati qui, mollitia
      consequuntur corporis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea officiis
      dicta cumque dolorem quos, assumenda ab nobis voluptatibus hic provident
      quod veritatis. Eveniet, velit ab atque voluptatem quidem iste modi!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos
      doloremque sunt, consequatur ut repellat corrupti, exercitationem quisquam
      magni fuga in, qui obcaecati soluta tempore! Ea commodi debitis dolorem
      quis.
    </p>
  </div>
</template>

<script>
import TheHeader from "./components/Header/TheHeader.vue";
export default {
  components: {
    TheHeader,
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
  background-color: aqua;
}
</style>
