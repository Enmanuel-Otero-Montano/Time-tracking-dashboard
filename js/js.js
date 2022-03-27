const dailyButton = document.getElementById("daily")
const weeklyButton = document.getElementById("weekly")
const monthlyButton = document.getElementById("monthly")
const current = document.querySelectorAll(".current")
const previous = document.querySelectorAll(".previous")
const buttons = document.querySelectorAll(".button")



const petition = () => {
    dailyButton.classList.add("active")
    fetch("data.json")
    .then(res => res.ok == true ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for (let i=0; i<res.length; i++) {
            current[i].textContent = `${res[i].timeframes.daily.current}hrs`
            previous[i].textContent = `Last Day - ${res[i].timeframes.daily.previous}hrs`
        }
    })
}
document.addEventListener("DOMContentLoaded",petition());

dailyButton.addEventListener("click", () => {
    petition()
})

weeklyButton.addEventListener("click", () => {
    fetch("data.json")
        .then(res => res.ok == true ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (let i=0; i<res.length; i++) {
                current[i].textContent = `${res[i].timeframes.weekly.current}hrs`
                previous[i].textContent = `Last Week - ${res[i].timeframes.weekly.previous}hrs`
            }
        })
})

monthlyButton.addEventListener("click", () => {
    fetch("data.json")
        .then(res => res.ok == true ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (let i=0; i<res.length; i++) {
                current[i].textContent = `${res[i].timeframes.monthly.current}hrs`
                previous[i].textContent = `Last Month - ${res[i].timeframes.monthly.previous}hrs`
            }
        })
})

//Función para remover la clase "active", que le da color al texto de los botones.
//const removeActive = ()=> {
    for(const button of buttons) {
        button.addEventListener("click", ()=> {
            for(const removeActive of buttons) {
                removeActive.classList.remove("active")
            }
            button.classList.add("active")
        })
    }
//}
