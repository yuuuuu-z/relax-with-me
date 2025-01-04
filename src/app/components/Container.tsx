"use client";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

const Container = () => {
  const audioLists = [
    {
      name: "Coffee Pouring",
      src: "coffee-pouring.mp3",
    },
    {
      name: "Coffee Machine",
      src: "coffee-machine-30756.mp3",
    },
    {
      name: "Coffee Maker",
      src: "coffee-maker-68090.mp3",
    },
    {
      name: "Customers",
      src: "coffee-shop-sounds-2-60194.mp3",
    },
  ];

  const moreAudioLists = [
    {
      name: "Hot Drink",
      src: "hot-drink-being-poured-and-stirred-40665.mp3",
    },
    {
      name: "Pouring Ice",
      src: "pouring-ice-25927.mp3",
    },
    {
      name: "Ice & Thunder",
      src: "pouring-rain-thunder-24236.mp3",
    },

    {
      name: "A Cup Of Coffee",
      src: "stirring-a-cup-of-coffee-193831.mp3",
    },
  ];
  return (
    <div>
      <div className="flex flex-col container mx-auto max-w-none items-center justify-center py-10 md:flex-row md:justify-between md:items-start md:px-10">
        <div>
          <Image
            src="/cafesketch.png"
            alt="Cafe Sketch"
            width={400}
            height={400}
            className="px-10 w-[400px] h-[400px] md:w-[650px] md:h-[500px] "
          />
        </div>
        <div className="pt-10 md:py-0  ">
          <div className=" flex flex-col items-center ">
            {audioLists.map((audio, index) => (
              <div className="py-3" key={index}>
                <p className=" text-center mb-3">{audio.name}</p>
                <ReactAudioPlayer
                  key={index}
                  src={audio.src}
                  loop
                  controls
                  style={{
                    borderRadius: "8px",
                    maxWidth: "170px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-5 ">
        {moreAudioLists.map((moreAudio, index) => (
          <div className="py-3 " key={index}>
            <p className=" text-center mb-3">{moreAudio.name}</p>
            <ReactAudioPlayer
              key={index}
              src={moreAudio.src}
              loop
              controls
              style={{
                borderRadius: "8px",
                maxWidth: "170px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
