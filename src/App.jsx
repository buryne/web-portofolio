import { About, Contact, Footer, Header, Skill } from "./components";

function App() {
  return (
    <>
      <div className="px-6">
        <Header />
        <About />
        <Skill />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
