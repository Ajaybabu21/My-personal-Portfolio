import React from "react";
import SectinTitle from "../../components/SectinTitle";

function Contact() {
  const user = {
    Name: "Ajay Babu",
    Address: "Kanjirakkattu(h), Chettapalam(po), Pulpally, Wayanad",
    Email: "ajaybabuKanjirakkattu2@gmail.com",
    DOB: "18-08-2001",
    Mobile: "7025010927",
  };

  return (
    <div className="flex">
      <div className="w-full sm:w-1/2">
        <SectinTitle title="Say Hello" />
        <div className="flex flex-col gap-1">
          <p className="text-tertiary text-md">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5" key={key}>
              <span className="text-tertiary text-md">{key}:</span>{" "}
              <span className="text-white">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary text-md">{"}"}</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <div className="h-[400px] w-3/4">
          <script
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
            type="module"
          ></script>

          <dotlottie-player
            src="https://lottie.host/788a4d82-189a-4ad8-96ae-cc30d79bac00/xl9CmN8tE1.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
