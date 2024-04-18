type VideoProps = {
  videoArr: { type: string; src: string }[];
};

const Video = ({ videoArr }: VideoProps) => {
  return (
    <div className="video-container">
      <div className="video">
        <video
          width={1920}
          height={1080}
          preload="true"
          muted={true}
          loop
          playsInline
          autoPlay
        >
          {videoArr.map((item, index) => {
            return (
              <source key={index} src={item.src} type={`video/${item.type}`} />
            );
          })}
        </video>
      </div>
    </div>
  );
};

export default Video;
