import "../styles/Input.css";
export default function Input(props) {
  return (
    <div className="input-box">
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} placeholder="Type something" />
    </div>
  );
}
