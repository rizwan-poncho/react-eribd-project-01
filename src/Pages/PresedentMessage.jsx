import aboutUsBanner from "../assets/about-us-banner-photo.png";
import presedents from "../assets/president.jpg";
const PresedentMessage = () => {
  return (
    <div>
      <div className={`relative`}>
        <img className={`w-full`} src={aboutUsBanner} alt="About Us Banner" />
        <h1
          className={`text-[#0CAF2F] text-base md:text-4xl md:font-semibold font-medium`}
          style={{
            position: "absolute",
            top: "50%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            margin: 0,
          }}
        >
          MESSAGE FROM THE
          <br />
          PRESIDENT
        </h1>
      </div>

      <div className={`md:py-12 py-5 px-3 md:px-56`}>
        <div className={`grid md:grid-cols-10 gap-8 w-full`}>
          <div className={`w-full md:col-span-2`}>
            <img
              className={`w-full`}
              src={presedents}
              alt="President of BPCCI"
            />
            <div className={`mt-4`}>
              <h3 className={`text-2xl font-medium text-center`}>
                Akber (AL) Hakim
              </h3>
              <h4 className={`text-center`}>President, BPCCI</h4>
            </div>
          </div>

          <div className={`md:col-span-1 md:block hidden`}></div>

          <div className={`md:col-span-7`}>
            <p className={`md:text-sm text-justify text-[#8D8D92] mb-10`}>
              It is with great pleasure and delight that I welcome you to our
              chamber. BPCCI is the leading platform to promote trade, commerce
              and bi-lateral exchanges between the two fastest growing economies
              of the world – Bangladesh and Philippines. There is much for us to
              exchange and gain from each other as we march towards shared
              prosperity.
            </p>
            <p className={`md:text-sm text-justify text-[#8D8D92] mb-10`}>
              With the rise of Asia, and in particular the South and the
              Southeast, the 21st century is surely shaping up to be an Asian
              story. As the west moves away from multilateralism to a more
              protectionist stance with increased trade barriers and tariffs,
              the east must look at other ways of increasing trade between its
              own borders by lowering tariff and non-tariff barriers, increasing
              dialogues and exchanges, and creating an overall atmosphere of
              trust and confidence. ASEAN, where Philippines is a leading
              player, stands as a shining example of what is possible when
              nations look at themselves as partners rather than adversaries.
            </p>
            <p className={`md:text-sm text-justify text-[#8D8D92] mb-10`}>
              Bangladesh and Philippines with a combined population approaching
              300 million and an ever-increasing middle class, are forecasted to
              have continued growth in the decades to come. It is time for us to
              put our heads together and explore the various areas of
              opportunities that exist today and others that we can build
              together for the future.
            </p>
            <p className={`md:text-sm text-justify text-[#8D8D92]`}>
              Wishing Bangladesh and Philippines continued prosperity and
              happiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresedentMessage;
