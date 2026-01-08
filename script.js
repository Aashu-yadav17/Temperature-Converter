 function convert() {
    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (temp === "") {
        result.innerText = "Please enter a value!";
        return;
    }

    if (unit === "c") {
        let f = (temp * 9/5) + 32;
        result.innerText = `${temp}°C = ${f.toFixed(2)}°F`;
    } else {
        let c = (temp - 32) * 5/9;
        result.innerText = `${temp}°F = ${c.toFixed(2)}°C`;
    }
}
