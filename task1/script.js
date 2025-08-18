$(document).ready(function () {
    let weatherData = [];

    $("#getWeather").click(function (e) {
        e.preventDefault(); 

        let city = $("#city").val().trim();
        if (city === "") {
            alert("Please enter a city name");
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5a9299a24729e96f2fceaeef20ede331&units=metric`;

        $.getJSON(url, function (data) {
            let weatherObj = {
                city: data.name,
                temp: data.main.temp
            };

            weatherData.push(weatherObj);

            let tableRows = "";
            weatherData.forEach(item => {
                tableRows += `
                  <tr>
                    <td>${item.temp} °C</td>
                    <td>${item.city}</td>
                  </tr>
                `;
            });
            $("#weatherTable").html(tableRows);

            $("#city").val("");
        }).fail(function () {
            alert("City not found or API request failed.");
        });
    });
});
