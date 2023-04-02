import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import Newslatter from "./child/newsetller";
// import Newslatter from "./_child/newslatter";

export default function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-200" style={bg}>
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-2">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <ImFacebook color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImTwitter color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImYoutube color="#888888" />
            </Link>
          </div>

          <p className="text-gray-600 text-center mt-2">
            Copyright ©2022 All rights reserved
          </p>
          <p className="text-gray-600 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
