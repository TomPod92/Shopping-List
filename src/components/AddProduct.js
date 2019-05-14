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
            this.setState({
              name: "",
              type: "pieczywo"
            });
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
            <option value="owoce">Owoce i warzywa</option>
            <option value="nabial">Nabiał</option>
            <option value="mieso">Mięsa i sery</option>
            <option value="puszki">Puszki i słoiki</option>
            <option value="kawa">Kawa i herbata</option>
            <option value="makarony">Makarony i ryż</option>
            <option value="slodycze">Słodycze</option>
            <option value="czystosc">Środki czystości</option>
            <option value="napoje">Napoje</option>
            <option value="alkohole">Alkohole</option>
            <option value="biurowe">Art.biurowe</option>
            <option value="kosmetyki">Kosmetyki</option>
            <option value="ubrania">Ubrania</option>
          </select>

          <button className="form__button">Dodaj produkt</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
