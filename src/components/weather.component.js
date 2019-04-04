import React from "react";

class Weather extends React.Component {

    render() {

        return(
            <div className={this.props.context}>
                <h1> {this.props.country} </h1>
                <h1> {this.props.city} </h1>
                <h1> {this.props.temp} </h1>
                <h1> {this.props.sunrise} </h1>
                <h1> {this.props.sunset} </h1>
                <h1> {this.props.error} </h1>
            </div>
        );
    }
}

export default Weather;