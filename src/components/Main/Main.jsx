import MainCSS from "./Main.module.scss";

const Main = () => {
  return (
    <main id="about_me">
      <h1 className={MainCSS.title}>About me</h1>
      <div className={MainCSS.container}>
        <div className={MainCSS.box}>
          <div className={MainCSS.card}>
            <h2 className={MainCSS.card_number}>01</h2>
            <h3 className={MainCSS.card_title}>Card One</h3>
            <p className={MainCSS.card_content}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nihil eos. Quisquam reiciendis quas repudiandae obcaecati est.
              Voluptas assumenda qui iusto, atque eligendi necessitatibus
              officia minima, voluptatibus, aspernatur sequi harum?
            </p>
            <button className={MainCSS.btn}>Read More</button>
          </div>
        </div>

        <div className={MainCSS.box}>
          <div className={MainCSS.card}>
            <h2 className={MainCSS.card_number}>02</h2>
            <h3 className={MainCSS.card_title}>Card Two</h3>
            <p className={MainCSS.card_content}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nihil eos. Quisquam reiciendis quas repudiandae obcaecati est.
              Voluptas assumenda qui iusto, atque eligendi necessitatibus
              officia minima, voluptatibus, aspernatur sequi harum?
            </p>
            <button className={MainCSS.btn}>Read More</button>
          </div>
        </div>

        <div className={MainCSS.box}>
          <div className={MainCSS.card}>
            <h2 className={MainCSS.card_number}>03</h2>
            <h3 className={MainCSS.card_title}>Card Three</h3>
            <p className={MainCSS.card_content}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nihil eos. Quisquam reiciendis quas repudiandae obcaecati est.
              Voluptas assumenda qui iusto, atque eligendi necessitatibus
              officia minima, voluptatibus, aspernatur sequi harum?
            </p>
            <button className={MainCSS.btn}>Read More</button>
          </div>
        </div>

        <div className={MainCSS.box}>
          <div className={MainCSS.card}>
            <h2 className={MainCSS.card_number}>04</h2>
            <h3 className={MainCSS.card_title}>Card Four</h3>
            <p className={MainCSS.card_content}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nihil eos. Quisquam reiciendis quas repudiandae obcaecati est.
              Voluptas assumenda qui iusto, atque eligendi necessitatibus
              officia minima, voluptatibus, aspernatur sequi harum?
            </p>
            <button className={MainCSS.btn}>Read More</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
