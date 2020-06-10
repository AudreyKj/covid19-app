import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Line, Pie } from "react-chartjs-2";

function Admin() {
    const [monthData, setMonthData] = useState();
    const [country, setCountry] = useState();
    const [chartReady, setchartReady] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get("/data")
            .then(data => {
                if (data.data.error) {
                    return setError(true);
                }

                let collect = {};

                for (let i = 0; i < data.data[0].length; i++) {
                    for (let key in data.data[0][i]) {
                        collect[data.data[0][i][key]]
                            ? (collect[data.data[0][i][key].toUpperCase()] += 1)
                            : (collect[data.data[0][i][key].toUpperCase()] = 1);
                    }
                }

                const country_label = [];
                const country_values = [];

                for (let key in collect) {
                    country_label.push(key);
                    country_values.push(collect[key]);
                }

                setCountry({
                    labels: country_label,
                    datasets: [
                        {
                            data: country_values,
                            backgroundColor: [
                                "#ea907a",
                                "#fbc687",
                                "#f4f7c5",
                                "#aacdbe",
                                "#726a95",
                                "#ccafaf",
                                "#7c3c21"
                            ],
                            hoverBackgroundColor: [
                                "rgba(234, 122, 122, 0.5)",
                                "rgba(251, 198, 135, 0.5)",
                                "rgba(244, 247, 197, 0.5)",
                                "rgba(170, 205, 190, 0.5)",
                                "rgba(114, 106, 149, 0.5)",
                                "rgba(204, 175, 175, 0.5)",
                                "rgba(124, 60, 33, 0.5)"
                            ]
                        }
                    ]
                });

                function monthConvertor(str) {
                    if (str === "01") {
                        return "January";
                    } else if (str === "02") {
                        return "February";
                    } else if (str === "03") {
                        return "March";
                    } else if (str === "04") {
                        return "April";
                    } else if (str === "05") {
                        return "May";
                    } else if (str === "06") {
                        return "June";
                    } else if (str === "07") {
                        return "July";
                    } else if (str === "08") {
                        return "August";
                    } else if (str === "09") {
                        return "September";
                    } else if (str === "10") {
                        return "October";
                    } else if (str === "11") {
                        return "November";
                    } else if (str === "12") {
                        return "December";
                    }
                }

                const month = {};

                for (let i = 0; i < data.data[1].length; i++) {
                    for (let key in data.data[1][i]) {
                        month[
                            monthConvertor(data.data[1][i][key].split("-")[1])
                        ]
                            ? (month[
                                  monthConvertor(
                                      data.data[1][i][key].split("-")[1]
                                  )
                              ] += 1)
                            : (month[
                                  monthConvertor(
                                      data.data[1][i][key].split("-")[1]
                                  )
                              ] = 1);
                    }
                }

                const month_label = [];
                const month_values = [];

                for (let key in month) {
                    month_label.push(key);
                    month_values.push(month[key]);
                }

                setMonthData({
                    labels: month_label,
                    datasets: [
                        {
                            label: "submissions frequency per month",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: "miter",
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: month_values
                        }
                    ]
                });

                setchartReady(true);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div>
                <h3> DATA VISUALIZATION ABOUT THE SUBMISSIONS </h3>
                {error && (
                    <h4 className="dataError">
                        ERROR: something went wrong in fetching the data. <br />
                        please come back later
                    </h4>
                )}
                {chartReady && (
                    <div className="data-container">
                        <div className="single-chart">
                            <Line data={monthData} />
                        </div>
                        <div className="single-chart bottom">
                            <Pie
                                data={country}
                                width={300}
                                height={300}
                                options={{ maintainAspectRatio: false }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Admin;
