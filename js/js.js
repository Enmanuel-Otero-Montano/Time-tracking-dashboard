const dailyButton = document.getElementById("daily")
const weeklyButton = document.getElementById("weekly")
const monthlyButton = document.getElementById("monthly")
const current = document.querySelectorAll(".current")
const previous = document.querySelectorAll(".previous")



const petition = () => {
    fetch("/data.json")
    .then(res => res.ok == true ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for (let i=0; i<res.length; i++) {
            current[i].textContent = `${res[i].timeframes.daily.current}hrs`
            previous[i].textContent = `Last Day - ${res[i].timeframes.daily.previous}hrs`
        }
    })
}
petition()

dailyButton.addEventListener("click", () => {
    petition()
})

weeklyButton.addEventListener("click", () => {
    fetch("/data.json")
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
    fetch("/data.json")
        .then(res => res.ok == true ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (let i=0; i<res.length; i++) {
                current[i].textContent = `${res[i].timeframes.monthly.current}hrs`
                previous[i].textContent = `Last Month - ${res[i].timeframes.monthly.previous}hrs`
            }
        })
})