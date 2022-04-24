import React from "react";
import "../styles/Main.scss";

const Main = () => {
  return (
    <>
      <h1 className="main_title">About me</h1>
      <div className="about_me_container">
        <div className="box_about_me">
          <div className="card_about_me">
            <h2 className="card_number">01</h2>
            <h3 className="card_title">Card One</h3>
            <p className="card_content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nihil eos. Quisquam reiciendis quas repudiandae obcaecati est.
              Voluptas assumenda qui iusto, atque eligendi necessitatibus
              officia minima, voluptatibus, aspernatur sequi harum?
            </p>
            <button className="read_more">Read More</button>
          </div>
        </div>

        <div className="box_about_me">
          <div className="card_about_me">
            <h2 className="card_number">02</h2>
            <h3 className="card_title">Card Two</h3>
            <p className="card_content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nihil eos. Quisquam reiciendis quas repudiandae obcaecati est.
              Voluptas assumenda qui iusto, atque eligendi necessitatibus
              officia minima, voluptatibus, aspernatur sequi harum?
            </p>
            <button className="read_more">Read More</button>
          </div>
        </div>

        <div className="box_about_me">
          <div className="card_about_me">
            <h2 className="card_number">03</h2>
            <h3 className="card_title">Card Three</h3>
            <p className="card_content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nihil eos. Quisquam reiciendis quas repudiandae obcaecati est.
              Voluptas assumenda qui iusto, atque eligendi necessitatibus
              officia minima, voluptatibus, aspernatur sequi harum?
            </p>
            <button className="read_more">Read More</button>
          </div>
        </div>

        <div className="box_about_me">
          <div className="card_about_me">
            <h2 className="card_number">04</h2>
            <h3 className="card_title">Card Four</h3>
            <p className="card_content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nihil eos. Quisquam reiciendis quas repudiandae obcaecati est.
              Voluptas assumenda qui iusto, atque eligendi necessitatibus
              officia minima, voluptatibus, aspernatur sequi harum?
            </p>
            <button className="read_more">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
