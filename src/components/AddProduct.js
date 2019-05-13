import React from "react";
import "../styles/addProduct.scss";

class AddProduct extends React.Component {
  state = {
    name: "",
    type: "pieczywo"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="formWrapper">
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.addItem(this.state);
          }}
          className="form"
        >
          {/* Input z nazwa produktu */}
          <label htmlFor="name" className="form__label">
            Wpisz nazwę produktu
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            className="form__input"
          />
          {/* Input z działem danego produktu */}
          <label htmlFor="type" className="form__label">
            Podaj dział
          </label>
          <select
            id="type"
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
            className="form__input"
          >
            <option value="pieczywo">Pieczywo</option>
            <option value="owoce i warzywa">Owoce i warzywa</option>
            <option value="nabiał">Nabiał</option>
            <option value="mięsa i sery">Mięsa i sery</option>
          </select>

          <button className="form__button">Dodaj produkt</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
