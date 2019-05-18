import React from "react";
import "../styles/PageAddProduct.scss";

class PageAddProduct extends React.Component {
  state = {
    name: "",
    type: "pieczywo"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
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
            this.props.handleAddProduct(this.state);
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
            placeholder="np.chleb tostowy"
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
            <option value="mrożonki i przyprawy">Mrożonki i przyprawy</option>
            <option value="słoiki i puszki">Puszki i słoiki</option>
            <option value="kawa i herbata">Kawa i herbata</option>
            <option value="makarony">Makarony i ryż</option>
            <option value="słodycze">Słodycze</option>
            <option value="środki czystości">Środki czystości</option>
            <option value="napoje">Napoje</option>
            <option value="alkohole">Alkohole</option>
            <option value="art.papiernicze">Art.papiernicze</option>
            <option value="kosmetyki">Kosmetyki</option>
            <option value="ubrania">Ubrania</option>
          </select>

          <button className="form__button">Dodaj produkt</button>
        </form>
      </div>
    );
  }
}

export default PageAddProduct;
