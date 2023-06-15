import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <main className="app">
      <Header />
      <section className="hero">
        <h1>How Much Mortgage Should You Take?</h1>
        <p>
          egestas maecenas pharetra convallis posuere morbi leo urna molestie at
          elementum eu facilisis sed odio morbi quis commodo odio aenean
        </p>
      </section>

      <form className="form">
        <p>Calculate Now</p>
        <div className="input-boxes">
          <Input name="income" label="Monthly income" />
          <Input name="other-income" label="Other income" />
          <Input name="age" label="Age" />
          <Input name="tenure" label="Request Tenure(year)" />
          <Input
            name="equity"
            label="Amount of money you have available (equity)"
          />
        </div>

        <div className="submit-box">
          <span>@ 19%</span>
          <Button>Proceed</Button>
        </div>
      </form>
    </main>
  );
}

export default App;
