function User(props) {
  return (
    <div class="usuario">
      <img src={props.img} />
      <div class="texto">
        <strong>{props.text}</strong>
        {props.text2}
      </div>
    </div>
  );
}

function Sugestions(props) {
  return (
    <div class="sugestoes">
      <div class="titulo">
        {props.text}
        <div>Ver tudo</div>
      </div>
      {props.jsx}
    </div>
  );
}
function Links() {
  return (
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
      Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}
function Copyright() {
  return <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>;
}
export default function Sidebar() {
  const sugestions = [
    {
      img: "./img/bad.vibes.memes.svg",
      textName: "bad.vibes.memes",
      textReason: "Segue você",
    },
    {
      img: "./img/chibirdart.svg",
      textName: "chibirdart",
      textReason: "Segue você",
    },
    {
      img: "./img/razoesparaacreditar.svg",
      textName: "razoesparaacreditar",
      textReason: "Novo no Instagram",
    },
    {
      img: "./img/adorable_animals.svg",
      textName: "adorable_animals",
      textReason: "Segue você",
    },
    {
      img: "./img/smallcutecats.svg",
      textName: "smallcutecats",
      textReason: "Segue você",
    },
  ];

  const sugestionsJSX = sugestions.map((sugestion) => (
    <div class="sugestao">
      <div class="usuario">
        <img src={sugestion.img} />
        <div class="texto">
          <div class="nome">{sugestion.textName}</div>
          <div class="razao">{sugestion.textReason}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  ));

  return (
    <div class="sidebar">
      <User img="./img/catanacomics.svg" text="catanacomics" text2="Catana" />
      <Sugestions text="Sugestões para você" jsx={sugestionsJSX} />
      <Links />
      <Copyright />
    </div>
  );
}
