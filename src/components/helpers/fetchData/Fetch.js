import React from "react";
import configdata from "../../../env.json";
import "./index.css";

class FetchAPIData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const headers = {
      "DB-Client-Id": configdata.ID,
      "DB-Api-Key": configdata.KEY,
    };
    fetch(
      "https://apis.deutschebahn.com/db-api-marketplace/apis/fasta/v2/facilities",
      { headers: headers }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
      .catch(function (error) {
        console.error("Error Message:", error.message);
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="search-drop">
          <span>Stationsuche: </span>
          <select className="station-list" data-testid="fetch-data-station">
            {items.map((facility) => {
              return (
                <option
                  key={facility.equipmentnumber}
                  value={facility.equipmentnumber}
                >
                  StatusID: {facility.stationnumber} Station Status:{" "}
                  {facility.state}
                </option>
              );
            })}
          </select>
        </div>
      );
    }
  }
}

export { FetchAPIData };
