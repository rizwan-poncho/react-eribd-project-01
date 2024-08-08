import aboutUsBanner from "../assets/about-us-banner-photo.png";
import presedents from "../assets/ambassador.jpg";

const AmbassadorPh = () => {
  return (
    <div>
      <div className={`relative`}>
        <img className={`w-full`} src={aboutUsBanner} alt="About Us Banner" />
        <h1
          className={`text-[#0CAF2F] text-sm md:text-3xl md:font-semibold font-medium`}
          style={{
            position: "absolute",
            top: "50%",
            left: "25%",
            transform: "translate(-50%, -50%)",
            margin: 0,
          }}
        >
          MESSAGE FROM THE AMBASSADOR OF
          <br />
          BANGLADESH TO PHILIPPINES
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
              <p className={`text-center text-sm text-[#8D8D92]`}>
                Embassy of the Republic of the <br /> Philippines <br />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className={`md:col-span-1 md:block hidden`}></div>

          <div className={`md:col-span-7`}>
            <p className={`md:text-sm text-justify text-[#8D8D92] mb-10`}>
              Since the inception of Bangladesh, our two countries are very good
              friends and partners. Bangladesh and the Philippines are
              collaborating to ensure better life for their people. The two
              countries have many similarities and face many similar challenges.
              In recent time, both economies are growing, and that has created
              new demands, and new potentials. If these new found opportunities
              could be tapped, then the two countries could set a remarkable
              example of South-South Cooperation..
            </p>
            <p className={`md:text-sm text-justify text-[#8D8D92] mb-10`}>
              Bangladesh Philippines Chamber of Commerce & Industry in
              Bangladesh is an active agent to harness the full potential in
              bilateral trade and investment including the new areas. It has
              already proved its worth and usefulness by initiating new
              interests and vigor in bilateral potentials. We thank their
              leadership and acknowledge their efforts with deep appreciation in
              bringing our two friendly countries further closer.
            </p>
            <p className={`md:text-sm text-justify text-[#8D8D92] mb-10`}>
              From this Embassy, we assure the Chamber our all-out support for
              its plans and projects.
            </p>
            <p className={`md:text-sm text-justify text-[#8D8D92] mb-10`}>
              We wish them all the success.
            </p>

            <p className={`md:text-sm text-justify text-[#8D8D92]`}>
              Long live Bangladesh-Philippines Friendship!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorPh;
