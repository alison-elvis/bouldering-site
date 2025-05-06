import boulderingGym from "../assets/bouldering-gym.jpg";
import whatIsBouldering from "../assets/what-is-bouldering.jpg";
import whyBouldering from "../assets/why-bouldering.jpg";


const Home = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <h1>Discover the Thrill of <span className="teal-text">Bouldering</span>
</h1>
          <img src={boulderingGym} alt="An indoor bouldering gym, with a lot of people." />
        </header>
      </div>
      <main>
        <section>
          <div className="wrapper">
            <div className="two-column-layout">
              <div>
                <h2>What is Bouldering?</h2>
                <p>Bouldering is a form of rock climbing that is performed on small rock formations or artificial rock walls without the use of ropes or harnesses. 
</p>
                <p>Unlike <a href="https://en.m.wikipedia.org/wiki/Bouldering" target="_blank" rel="noopener noreferrer">traditional climbing</a>, bouldering focuses on short but intensive routes called "problems," typically keeping climbers within a safe distance from the ground while they navigate challenging sequences of moves.
</p>
              </div>
              <img src={whatIsBouldering} alt="A man attempting a bouldering problem at an indoor gym." />
            </div>
          </div>
          <div className="teal-bg">
            <div className="wrapper">
              <p>Experience the perfect blend of <strong>physical challenge and mental puzzle-solving</strong> as you navigate routes close to the ground, with nothing but a crash pad and determination. Bouldering strips climbing down to its purest form, making it both <strong>accessible to beginners and endlessly challenging for experts.</strong>
</p>
            </div>
          </div>
        </section>
        <div className="wrapper">
          <section>
            <div className="two-column-layout">
              <img src={whyBouldering} alt="A person climbing a large boulder outdoors with a blue sky in the background." />
              <div>
                <h2 className="teal-text">Why Bouldering?</h2>
                <p>Whether you're a complete beginner or an experienced athlete, climbers of all ages can challenge themselves, celebrate each other's successes, and build <em>lasting friendships.</em></p>
                <h3>Reasons to get started:</h3>
                <ul>
                  <li>                  Full-body workout</li>
                  <li>Improves problem solving skills</li>
                  <li>Builds mental resilience</li>
                  <li>And much more!</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="teal-bg">
        <p>©2025 Boulder inc. All rights reserved.</p>
      </footer>
    </>
  );
};
export default Home;