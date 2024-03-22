import me from "../assets/IMG-20230129-WA0025.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="grid w-[100%] h-fit bg-primary">
        <div className="grid place-self-center w-[90%] md:w-[80%] h-fit text-white">
          {/* Info about me section */}
          <div className="grid grid-rows-auto my-[82px]">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-action rounded-lg p-5 ">
                <img
                  className="grid place-self-center rounded-lg"
                  src={me}
                  alt="me"
                />
                <div>
                  <div className="text-xl font-semibold">Get To Know Me</div>
                  <div className="grid gap-5">
                    <p>
                      Hey there! 👋 Just a young tech adventurer here,
                      navigating the wilds of technology - simultaneously
                      fretting over AI while also gleefully embracing its
                      wonders! 😄 Sure, I might not have the mileage yet, but
                      hey, I'm all about putting in the elbow grease!
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 h-fit">
              <div className="grid grid-cols-auto bg-action rounded-lg p-5 h-full ">
                <div className="col-start-1">
                  <div className="font-semibold">Tech Skills</div>
                  <ul>
                    <li> - React.js</li>
                    <li> - JavaScript</li>
                    <li> - Firebase</li>
                    <li> - HTML5</li>
                    <li> - CSS3</li>
                  </ul>
                </div>

                <div className="col-start-2">
                  <div className="font-semibold">Pending Tech Skills</div>
                  <ul>
                    <li> - TypeScript</li>
                    <li> - Next.js</li>
                    <li> - Node.js</li>
                    <li> - MongoDB</li>
                    <li> - Express.js</li>
                  </ul>
                </div>
              </div>

              <div className="bg-action rounded-lg p-5 h-fit">
                <div className="font-semibold">Soft Skills</div>
                <ul>
                  <li> - Communication</li>
                  <li> - Adaptability</li>
                  <li> - Leadership</li>
                  <li> - Problem-solving</li>
                  <li> - Teamwork</li>
                  <li> - Positive attitude</li>
                </ul>
              </div>
            </div>
            {/* 2 Columns */}
            <div className="grid auto-cols-auto gap-5 mt-5 h-fit">
              <div className="bg-action rounded-lg p-5 h-fit">
                <div className="font-semibold">
                  What I am currently learning
                </div>
                <ul>
                  <li> - Data Scructures & Algorithms</li>
                  <li> - Web Development - MERN Stack</li>
                </ul>
              </div>
              <div className="bg-action rounded-lg p-5 h-fit">
                <div className="font-semibold">What I like</div>
                <ul>
                  <li> - Exploring</li>
                  <li> - Games - both digital and physical</li>
                  <li> - Festivals</li>
                  <li> - Night Markets</li>
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
