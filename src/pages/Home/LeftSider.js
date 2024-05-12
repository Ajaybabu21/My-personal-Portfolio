import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3">
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <i class="ri-mail-line  text-gray-400 "></i>{" "}
          </a>
          <a href="https://www.instagram.com/?hl=en">
            {" "}
            <i class="ri-instagram-line  text-gray-400 "></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            {" "}
            <i class="ri-linkedin-fill  text-gray-400  "></i>
          </a>
          <a href="https://github.com/">
            {" "}
            <i class="ri-github-fill  text-gray-400 "></i>
          </a>
          <a href="https://x.com/Ajaybab51271160?t=12XMWKP1HHEqoGpdCsPMxg&s=09">
            {" "}
            <i class="ri-twitter-x-line  text-gray-400"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63]"></div>
      </div>
    </div>
  );
}

export default LeftSider;
