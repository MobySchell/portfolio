import me from "../assets/IMG-20230129-WA0025.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="grid w-[100%] h-fit bg-primary">
        <div className="grid place-self-center w-[90%] md:w-[80%] h-fit text-white">
          {/* Info about me section */}
          <div className="grid grid-rows-auto my-[82px]">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-secondary rounded-lg p-5 ">
                <img
                  className="grid place-self-center rounded-lg"
                  src={me}
                  alt="me"
                />
                <div>
                  <div className="text-xl font-semibold my-4">
                    Hey there! 👋
                  </div>
                  <div className="grid gap-5">
                    <p>
                      Just a young tech adventurer here, navigating the wilds of
                      technology - simultaneously fretting over AI while also
                      gleefully embracing its wonders! 😄 Sure, I might not have
                      the mileage yet, but hey, I'm all about putting in the
                      elbow grease!
                    </p>
                    <p>
                      My journey kicked off at Younglings where I dipped my toes
                      into the world of web development as an intern. Picture
                      me, wrestling with HTML5, CSS3, JavaScript and Firebase to
                      craft my very own portfolio website. Oh, and let's not
                      forget the thrill of diving into those internal
                      hackathons! 🚀
                    </p>
                    <p>
                      But wait, there's more! I leveled up faster than a cheat
                      code in a video game. From newbie intern to seasoned
                      mentor - yup, that's right, I was coaching the fresh faces
                      joining the team. And then came the big leap, climbing the
                      corporate ladder like a champ (cue nervous laughter from
                      this high school graduate).
                    </p>
                    <p>
                      As if that wasn't adventurous enough, I swooped into the
                      role of Operations Manager, where my superpower became
                      debugging. You know, those moments where I'm the hero
                      sitting with colleagues for hours, unraveling code
                      mysteries, with Stack Overflow as our trusty sidekick!
                    </p>
                    <p>
                      Sure, I might be young and green, but hey, I'm hustling,
                      learning, and on the lookout for fantastic opportunities
                      to flourish in this digital age. 🌟 Let's grow together,
                      shall we?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 Columns */}
            <div className="grid mt-5 h-fit">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-5">
                <div className="bg-action rounded-lg p-5">
                  <div className="font-semibold">Tech Skills</div>
                  <ul className="pl-10">
                    <li className="list-disc">React.js</li>
                    <li className="list-disc">JavaScript</li>
                    <li className="list-disc">Firebase</li>
                    <li className="list-disc">HTML5</li>
                    <li className="list-disc">CSS3</li>
                  </ul>
                </div>

                <div className="bg-action rounded-lg p-5">
                  <div className="font-semibold">Tech I'm Learning</div>
                  <ul className="pl-10">
                    <li className="list-disc">TypeScript</li>
                    <li className="list-disc">Next.js</li>
                    <li className="list-disc">Node.js</li>
                    <li className="list-disc">MongoDB</li>
                    <li className="list-disc">Express.js</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 h-fit">
              <div className="bg-action rounded-lg p-5 h-full">
                <div className="font-semibold">
                  What I am currently learning
                </div>
                <ul className="pl-10">
                  <li className="list-disc">Data Scructures & Algorithms</li>
                  <li className="list-disc">Web DevelopmentMERN Stack</li>
                </ul>
              </div>
              <div className="bg-action rounded-lg p-5 h-full">
                <div className="font-semibold">What I like</div>
                <ul className="pl-10">
                  <li className="list-disc">Exploring</li>
                  <li className="list-disc">
                    Games - both digital and physical
                  </li>
                  <li className="list-disc">Festivals</li>
                  <li className="list-disc">Night Markets</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div></div>
        </div>
      </div>
    </>
  );
}
