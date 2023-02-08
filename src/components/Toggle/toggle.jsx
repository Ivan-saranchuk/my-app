import React from "react";
import { bindActionCreators } from "redux";

let Toggle = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log('Посилання було натиснуте.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Натисни на мене
    </a>
  );
}

export default Toggle;




function BoilVerdict (props){
  if (props.celsius >= 100){
    return "Вода закипела"
  }
  return "вода не закипела"
  }
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {temperature: ''};
  }
  handleChange(e){
    this.setState({temperature: e.target.value});
  }
  render() {
  const temperature = this.state.temperature;
  return(
  <fieldset>
    <legend>Введите температуру в градусах Цельсия</legend>
    <input value={temperature} onChange={this.handleChange} />
    <BoilVerdict celsius={temperature} />
  </fieldset>) 
  }
}
  