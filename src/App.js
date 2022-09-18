import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import IMAGE_POPE from "./assets/images/pope-francis.jpg";
import Footer from "./components/footer";
import VotingCard from "./components/voting_card";
// Temporary imports !TODO DB
import data from "./data/data.json";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero
        imageURL={IMAGE_POPE}
        headline="Pope Francis?"
        paragraph="He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)"
      />
      <section className="app_content">
        <div className="inner_content">
          <div className="content_headline">
            <h3>Previous Rulings</h3>
            <select onChange={console.log("CAMBIO SELECT")}>
              <option>List</option>
              <option>Grid</option>
            </select>
          </div>
          <div className="rulings">
            {data &&
              data.data.map((element, key) => (
                <VotingCard
                  key={key}
                  name={element.name}
                  description={element.description}
                  lastUpdated={element.lastUpdated}
                  category={element.category}
                  positiveVotes={element.votes.positive}
                  negativeVotes={element.votes.negative}
                  imageURL={element.picture}
                />
              ))}
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default App;
