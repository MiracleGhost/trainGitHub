import React, { Component } from "react";
import "./index.css";
import { FetchAPIData } from "../../helpers/fetchData/Fetch";
import MainLogo from "../../atoms/logoModule/MainLogo";

class SearchPage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/404";
  };

  render() {
    return (
      <div className="karte-page" data-testid="search-content">
        <MainLogo />
        <div className="text">
          <FetchAPIData />
          <h3>
            Mit der Karte kannst du nach nach einer Station suchen. Klicke auf
            einen Bahnhof.
          </h3>
          <form onSubmit={this.handleSubmit} data-testid="search-station-form">
            <label>
              Stationsuche:
              <input type="text" name="station" data-testid="input-station" />
            </label>
            <button type="submit" data-testid="input-search-submit">
              Los
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export { SearchPage };
