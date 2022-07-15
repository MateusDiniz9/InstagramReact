function Top(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.img} />
        {props.text}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
function Content(props) {
  return (
    <div class="conteudo">
      <img src={props.img} />
    </div>
  );
}

function Bottom(props) {
  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.imgLike} />
        <div class="texto">
          Curtido por <strong>{props.textLike1}</strong> e{" "}
          <strong>{props.textLike2}</strong>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  let posts = [
    {
      imgTop: "./img/meowed.svg",
      textTop: "meowed",
      imgContent: "./img/gato-telefone.svg",
      imgLike: "./img/respondeai.svg",
      textLike: "respondeai",
      textLike2: "outras 101.523 pessoas",
    },
    {
      imgTop: "./img/barked.svg",
      textTop: "barked",
      imgContent: "./img/dog.svg",
      imgLike: "./img/adorable_animals.svg",
      textLike: "adorable_animals",
      textLike2: "outras 101.523 pessoas",
    },
  ];

  const postsJSX = posts.map((post) => (
    <div class="post">
      <Top img={post.imgTop} text={post.textTop} />
      <Content img={post.imgContent} />
      <Bottom
        imgLike={post.imgLike}
        textLike1={post.textLike}
        textLike2={post.textLike2}
      />
    </div>
  ));

  return <div class="posts">{postsJSX}</div>;
}
