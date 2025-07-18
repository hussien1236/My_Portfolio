import { useEffect, useState } from 'react';
import { client } from '../sanity';
import { Typewriter } from 'react-simple-typewriter';

interface Profile {
  profileImage?: { asset: { url: string } };
  cv?: { asset: { url: string } };
}

const Home = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(
      `*[_type == "profile"][0]{
        profileImage{asset->{url}},
        cv{asset->{url}}
      }`
    ).then((data: Profile) => {
      setProfile(data);
      setLoading(false);
    });
  }, []);

  return (
    <div id="home">
      <div className="flex flex-col justify-center items-center mt-10 lg:mx-40 gap-4">
        <div className="lg:w-60 lg:h-60 md:w-50 md:h-50 w-40 h-40 rounded-full">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-full">Loading...</div>
          ) : profile?.profileImage?.asset?.url ? (
            <img className="rounded-full w-full h-full object-cover" src={profile.profileImage.asset.url} alt="Profile" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-full">No Image</div>
          )}
        </div>
        <div className="flex flex-col text-center items-center gap-2">
          <div className="home_title font-semibold">
            <span className="colored_text">
              I'm<span>
                <Typewriter
                  words={[" Hussein Hamdan", " a Fullstack Developer Based in Lebanon"]}
                  loop={0}
                  cursor={false}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>
            <span className="blinking-cursor text-white">|</span>
          </div>
          <div className="font-light lg:font-semibold md:text-sm text-xs lg:text-md text-gray-400">I'm a Fullstack Web Developer experienced in React.js and ASP.NET Core. I enjoy building scalable, efficient, and user-friendly web applications with clean and maintainable code.</div>
        </div>
        <div className="flex gap-5 justify-center mt-5">
          <a href='#contact'>
            <button className="primary_button font-semibold">
              Connect With Me
            </button>
          </a>
          {profile?.cv?.asset?.url && (
            <a href={profile.cv.asset.url} download target="_blank" rel="noopener noreferrer">
              <button className="secondary_button">My Resume</button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home