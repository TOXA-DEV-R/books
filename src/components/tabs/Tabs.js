import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyleTabs } from "../../styles/includes/global";
import { TabData } from "./TabData";

const Tabs = () => {
  const [categoryTabs, setCategoryTabs] = useState("temuriylar-davri");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(TabData.filter((item) => item.category === categoryTabs));
    console.log(data);
  }, [categoryTabs]);

  return (
    <StyleTabs className="tab">
      <div className="container">
        <div className="row">
          <h2 className="tab__title">Asosiy kategoriyalar</h2>
          <div className="tab__block">
            <button
              onClick={() => setCategoryTabs("temuriylar-davri")}
              className={`${
                categoryTabs === "temuriylar-davri"
                  ? "tab__block-btn active"
                  : "tab__block-btn"
              }`}
            >
              Temuriylar davri
            </button>
            <button
              onClick={() => setCategoryTabs("jadid-adabiyoti")}
              className={`${
                categoryTabs === "jadid-adabiyoti"
                  ? "tab__block-btn active"
                  : "tab__block-btn"
              }`}
            >
              Jadid adabiyoti
            </button>
            <button
              onClick={() => setCategoryTabs("sovet-davri")}
              className={`${
                categoryTabs === "sovet-davri"
                  ? "tab__block-btn active"
                  : "tab__block-btn"
              }`}
            >
              Sovet davri
            </button>
            <button
              onClick={() => setCategoryTabs("mustaqillik-davri")}
              className={`${
                categoryTabs === "mustaqillik-davri"
                  ? "tab__block-btn active"
                  : "tab__block-btn"
              }`}
            >
              Mustaqillik davri
            </button>
          </div>
        </div>
        <div className="row justify-around tab__content">
          {data.map((item) => {
            const { id, link_img, title, year, audio_books, books } = item;
            return (
              <Link className="tab-card" to="/" key={id}>
                <div className="tab-card__top">
                  <img src={link_img} alt={title} />
                </div>
                <div className="tab-card__body">
                  <h3 className="tab-card__title">
                    {title}
                    <span className="tab-card__date">{year}</span>
                  </h3>
                  <div className="tab-card__info">
                    <span>
                      <i className="ic ic_book"></i> {books}
                    </span>
                    <span>
                      <i className="ic ic_audio-book"></i>
                      {audio_books}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </StyleTabs>
  );
};

export default Tabs;
