import GettingStartedOutdoors from "../assets/getting-started-outdoors.jpg";

const GettingStarted = () => {
  return (
    <>
      <div className="wrapper">
          <header>
            <h1>Getting started with <span className="teal-text">Bouldering</span></h1>
          </header>
          <main>
            <section>
              <h2 className="teal-text">How to get started</h2>
              <p>Unlike many outdoor sports, getting started with bouldering is surprisingly simple. All you need are some climbing shoes, chalk, and a positive attitude—most gyms even rent the equipment for your first sessions. <strong>No prior experience or complex gear required!</strong></p>
              <div className="two-column-layout">
                <div className="climber-bg">
                  <h3>Know Before You Go</h3>
                  <p>Before you start climbing, learn proper falling technique and always check your landing zone. Taking basic safety precautions and learning gym etiquette will help ensure a fun and injury-free experience.</p>
                </div>
                <div>
                  <h3>The simple steps to getting started</h3>
                  <ol>
                    <li>Find a bouldering gym near you.</li>
                    <li>Rent or invest in a pair of climbing shoes.</li>
                    <li>Learn basic bouldering techniques.</li>
                    <li>Start with easy routes and gradually increase difficulty.</li>
                    <li>Join a bouldering community or club.</li>
                  </ol>
                </div>
              </div>
              <img src={GettingStartedOutdoors} alt="An overhead angle of a shirtless man climbing a boulder outdoors." />
            </section>
          </main>
        </div>
        <footer className="teal-bg">
          <p>©2025 Boulder inc. All rights reserved.</p>
        </footer>
    </>
  );
};
export default GettingStarted;