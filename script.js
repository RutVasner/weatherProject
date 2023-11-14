const url = `https://api.openweathermap.org/data/2.5/weather?`;
const API_KEY = "283f31ec764cd6fda0b7b5b88bfb470e";
const cityArr = ["london", "eilat", "alaska", "new york"]
const content = document.querySelector("#content");

const createColCard = (obj) => {
    const colEL = document.createElement("div");
    colEL.className = "p-1 content";
    const cardEl = document.createElement("div");
    cardEl.className = "card p-1 shadow w-25" ;
    cardEl.innerHTML = `
    <div class="firstRow d-flex justify-content-between ps-5 pe-5  ">
                <div class="d-flex flex-column">
                    <h3 class="fw-bold">${obj.data.name}</h3>
                    <div class="fw-lighter" style="color: gray;">${obj.data.weather[0].description}</div>
                </div>
                <img src="http://openweathermap.org/img/w/${obj.data.weather[0].icon}.png" />
            </div>
            <div class="secondRow d-flex">
                <ul style="list-style: none;">
                    <li>
                        <p >טמפ' נמדדת</p>
                    </li>
                    <li>
                        <h5 class="fw-bolder">${obj.data.main.temp}&deg;C</h5>
                    </li>
                </ul>
                <ul  style="list-style: none;">
                    <li>
                        <p>טמפ' מורגשת</p>
                    </li>
                    <li>
                        <h5 class="fw-bolder">${obj.data.main.feels_like}&deg;C</h5>
                    </li>
                </ul>
                <ul style="list-style: none;">
                    <li>
                        <p>לחות</p>
                    </li>
                    <li>
                        <h5 class="fw-bolder">${obj.data.main.humidity}%</h5>
                    </li>
                </ul>
            </div>
    `;
    
    colEL.append(cardEl);
    // alert("try4")
    console.log(colEL);
    return colEL; 
    // colEL.append(cardEl);
    // // alert("try4")
   

  };

const getData = async (city) => {
    try {
        const options = {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'he'
            }
        };
        const data = await axios.get(`${url}`, options);
        console.log("getdata");
        console.log(data);
        // alert("try1");
        return data
    } catch (error) {
        // alert("try2");
        console.log(error)

    }
}

const render = async (city) => {
    const data = await getData(city);
    console.log(city);
    content.append(createColCard(data));
}

const cityMap = (cityArr) => {
    cityArr.map((city) => render(city))
}

cityMap(cityArr)