import React from "react";

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

export default function Posts() {
  const [name1, setName1] = React.useState("heart-outline");
  const [like1, setLike1] = React.useState("not-liked");
  const [name2, setName2] = React.useState("heart-outline");
  const [like2, setLike2] = React.useState("not-liked");
  let posts = [
    {
      imgTop: "./img/meowed.svg",
      textTop: "meowed",
      imgContent: "./img/gato-telefone.svg",
      imgLike: "./img/respondeai.svg",
      textLike: "respondeai",
      textLike2: "outras 101.523 pessoas",
      name: name1,
      setName: setName1,
      like: like1,
      setLike: setLike1,
    },
    {
      imgTop: "./img/barked.svg",
      textTop: "barked",
      imgContent: "./img/dog.svg",
      imgLike: "./img/adorable_animals.svg",
      textLike: "adorable_animals",
      textLike2: "outras 101.523 pessoas",
      name: name2,
      setName: setName2,
      like: like2,
      setLike: setLike2,
    },
  ];
  const postsJSX = posts.map((post) => (
    <div class="post">
      <Top img={post.imgTop} text={post.textTop} />
      <div class="conteudo">
        <img
          src={post.imgContent}
          onClick={() => {
            post.setLike("liked");
            post.setName("heart");
          }}
        />
      </div>
      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name={post.name}
              class={post.like}
              onClick={() => {
                if (post.like === "liked") {
                  post.setLike("not-liked");
                  post.setName("heart-outline");
                } else {
                  post.setLike("liked");
                  post.setName("heart");
                }
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={post.imgLike} />
          <div class="texto">
            Curtido por <strong>{post.textLike}</strong> e{" "}
            <strong>{post.textLike2}</strong>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div class="posts">{postsJSX}</div>;
}
