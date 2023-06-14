import Button from "./Button";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <p>Mortgage Pre-Assessment</p>
      <Button>Sign up</Button>
    </header>
  );
}
