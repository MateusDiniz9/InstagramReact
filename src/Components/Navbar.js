function Logo(props) {
  return (
    <div class="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div class="separador"></div>
      <img src={props.img} />
    </div>
  );
}

function LogoMobile() {
  return (
    <div class="logo-mobile">
      <ion-icon name="logo-instagram"></ion-icon>
    </div>
  );
}
function InstagramMobile() {
  return (
    <div class="instagram-mobile">
      <img src="./img/logo.png" />
    </div>
  );
}
function Search() {
  return (
    <div class="pesquisa">
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
}
function Icons() {
  return (
    <div class="icones">
      <ion-icon name="paper-plane-outline"></ion-icon>
      <ion-icon name="compass-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}
function IconsMobile() {
  return (
    <div class="icones-mobile">
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
  );
}

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo img="./img/logo.png" />
        <LogoMobile />
        <InstagramMobile img="./img/logo.png" />
        <Search />
        <Icons />
        <IconsMobile />
      </div>
    </div>
  );
}
