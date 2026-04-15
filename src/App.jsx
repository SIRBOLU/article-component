import { useState } from "react";
import "./App.css";
import drawer from "./assets/drawers.jpg";
import michelle from "./assets/avatar-michelle.jpg";
import share from "./assets/icon-share.svg";
import facebook from "./assets/icon-facebook.svg";
import twitter from "./assets/icon-twitter.svg";
import pinterest from "./assets/icon-pinterest.svg";

function App() {
  const [showpopup, setShowpopup] = useState(false);
  return (
    <>
      <section>
        <div className="hero-left">
          <div className="hero-img">
            <img src={drawer} alt="drawer" />
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-writeup">
            <p className="heading">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home.
            </p>
            <p className="text">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            {showpopup && (
              <div className="pop-up">
                <p className="pop-share">SHARE</p>
                <img src={facebook} alt="fb" />
                <img src={twitter} alt="x" />
                <img src={pinterest} alt="pinterest" />
              </div>
            )}

            <div className="details">
              <div className="details-img">
                <img src={michelle} height={50} width={50} alt="michelle" />
                <div>
                  <p className="name">Michelle Appleton</p>
                  <p className="date">28 Jun 2020</p>
                </div>
              </div>

              <div className="share-cover">
                <img
                  src={share}
                  alt="share"
                  height={30}
                  width={30}
                  onMouseEnter={() => {
                    setShowpopup(!showpopup);
                  }}
                  onMouseLeave={() => {
                    setShowpopup(!showpopup);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
