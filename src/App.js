import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import IMAGE_POPE from "./assets/images/pope-francis.jpg";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero
        imageURL={IMAGE_POPE}
        headline="Pope Francis?"
        paragraph="He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)"
      />
      <Footer />
    </div>
  );
};

export default App;
