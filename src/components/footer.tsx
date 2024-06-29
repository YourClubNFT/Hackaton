import React from "react";
import {
  InstagramLogo,
  LinkedinLogo,
  List,
  TiktokLogo,
  TwitterLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "phosphor-react";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-[#001D7E] text-[#a6adbb] p-10">
      <aside>
        <img
          src="src/assets/images/logo_yc_light.png"
          alt="YourClub logo"
          width={200}
          height={200}
        />
        <p className="font-bold">YourClub.io</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/yourclub.io/" target="_blank">
            <InstagramLogo size={30} color="#a6adbb" className="margin" />
          </a>

          <a href="https://www.tiktok.com/@yourclub.io" target="_blank">
            <TiktokLogo size={30} color="#a6adbb" className="margin" />
          </a>

          <a href="https://twitter.com/YourClubio" target="_blank">
            <TwitterLogo size={30} color="#a6adbb" className="margin" />
          </a>

          <a
            href="https://www.linkedin.com/company/yourclubio/?viewAsMember=true"
            target="_blank"
          >
            <LinkedinLogo size={30} color="#a6adbb" className="margin" />
          </a>

          <a
            href="https://www.youtube.com/@yourclubio/featured"
            target="_blank"
          >
            <YoutubeLogo size={30} color="#a6adbb" className="margin" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
