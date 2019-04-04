import React from "react";

class Weather extends React.Component {

    render() {

        return(
            <div className={this.props.context}>
                { this.props.city &&
                    <div>
                        <h2> Location </h2>
                        <h3> {this.props.country} </h3>
                        <h3> {this.props.city} </h3>
                        <h2> Weather </h2>
                        <h3> {this.props.temp} </h3>
                        <h2>Sunrise</h2>
                        <h3> {this.props.sunrise} </h3>
                        <h2>Sunset</h2>
                        <h3> {this.props.sunset} </h3>
                        <h3> {this.props.error} </h3>
                    </div>
                }
            </div>
        );
    }
}

export default Weather;