import Carousel from "./Carousel";

function Slider() {
  const datas = [
    {
      src: "/video/html.png",
    },
    {
      src: "/video/css.png",
    },
    {
      src: "/video/js.png",
    },
    {
      src: "/video/react.png",
    },
    {
      src: "/video/next.png",
    },
    {
      src: "/video/tailwind.png",
    },
    {
      src: "/video/redux.png",
    },
    {
      src: "/video/git.png",
    },
    {
      src: "/video/github.png",
    },
  ];
  return (
    <div className="App  ">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={datas}
            time={2000}
            width="850px"
            height="150px"
            radius="10px"
            slideNumber={true}
            automatic={true}
            slideBackgroundColor="white"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;











