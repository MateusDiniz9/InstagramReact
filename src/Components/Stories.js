function Setinha() {
  return (
    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  );
}

export default function Stories() {
  let stories = [
    { image: "./img/9gag.svg", usuario: "9gag" },
    { image: "./img/meowed.svg", usuario: "meowed" },
    { image: "./img/barked.svg", usuario: "barked" },
    {
      image: "./img/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
    },
    { image: "./img/wawawicomics.svg", usuario: "wawawicomics" },
    { image: "./img/respondeai.svg", usuario: "respondeai" },
    { image: "./img/filomoderna.svg", usuario: "filomoderna" },
    { image: "./img/memeriagourmet.svg", usuario: "memeriagourmet" },
  ];

  const storiesJSX = stories.map((story) => (
    <div class="story">
      <div class="imagem">
        <img src={story.image} />
      </div>
      <div class="usuario">{story.usuario}</div>
    </div>
  ));

  return (
    <div class="stories">
      {storiesJSX}
      <Setinha />
    </div>
  );
}
