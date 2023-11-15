import "./Prizes.css";
import prize1 from "../../../assets/png/prize1.jpeg";
import prize2 from "../../../assets/png/prize2.jpeg";
import prize3 from "../../../assets/png/prize3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Prizes() {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <div className="prizes__container">
      <h2 className="prizes_text_container">Prizes</h2>
      <div className="prize_box">
        <div className="prizes" data-aos ="fade-right" >
          <img src={prize2} alt="prize2" />

          <span className="prize-amount">₹1500</span>
        </div>
        <div className="prizes prize_1" data-aos ="zoom-in" >
          <img src={prize1} alt="prize1" />

          <span className="prize-amount">₹2500</span>
        </div>
        <div className="prizes" data-aos ="fade-left">
          <img src={prize3} alt="prize3" />

          <span className="prize-amount">₹1000</span>
        </div>
      </div>
    </div>
  );
}
