import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>username</th>
                        <th>password</th>
                        <th>lastName</th>
                        <th>firstName</th>
                        <th>lastLogin</th>
                        <th>createdDate</th>
                        <th>deleted</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.id}>
                            <td>{forecast.username}</td>
                            <td>{forecast.password}</td>
                            <td>{forecast.lastName}</td>
                            <td>{forecast.firstName}</td>
                            <td>{forecast.lastLogin}</td>
                            <td>{forecast.createdDate}</td>
                            <td>{forecast.deleted ? "Yes" : "No"}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('api/users');
        const data = await response.json();
        console.log(data);
        this.setState({ forecasts: data, loading: false });
    }
}
