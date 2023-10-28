const almightyList = document.getElementById("almighty-list").childNodes;
const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");
const totalWork = document.getElementById("total-work");
const previousWork = document.getElementById("previous-work");
const totalStudy = document.getElementById("total-study");
const previousStudy = document.getElementById("previous-study");
const totalPlay = document.getElementById("total-play");
const previousPlay = document.getElementById("previous-play");
const totalExercise = document.getElementById("total-exercise");
const previousExercise = document.getElementById("previous-exercise");
const totalSocial = document.getElementById("total-social");
const previousSocial = document.getElementById("previous-social");
const totalCare = document.getElementById("total-care");
const previousCare = document.getElementById("previous-care");
let prevBtn = null;
almightyList.forEach(btn => {
    btn.addEventListener("click", (e) => {
        fetchAsync(e); 
    e.target.classList.add("active");
    if(prevBtn !== null){
        prevBtn.classList.remove("active");
    }
    prevBtn = e.target;
    })
});
async function fetchAsync(event) {
    const timeFrameID = event.target.id;
    const response = await fetch("./data.json");
    const data = await response.json();
        console.log(data[0].timeframes[timeFrameID])
        totalWork.innerText = data[0].timeframes[timeFrameID].current + "hrs"
        previousWork.innerText = "Last Week"+" - "+ data[0].timeframes[timeFrameID].previous + "hrs"
        totalStudy.innerText = data[2].timeframes[timeFrameID].current + "hrs"
        previousStudy.innerText = "Last Week"+" - "+ data[2].timeframes[timeFrameID].previous + "hrs"
        totalPlay.innerText = data[1].timeframes[timeFrameID].current + "hrs"
        previousPlay.innerText = "Last Week"+" - "+ data[1].timeframes[timeFrameID].previous + "hrs"
        totalExercise.innerText = data[3].timeframes[timeFrameID].current + "hrs"
        previousExercise.innerText = "Last Week"+" - "+ data[0].timeframes[timeFrameID].previous + "hrs"
        totalSocial.innerText = data[4].timeframes[timeFrameID].current + "hrs"
        previousSocial.innerText = "Last Week"+" - "+ data[0].timeframes[timeFrameID].previous + "hrs"
        totalCare.innerText = data[5].timeframes[timeFrameID].current + "hrs"
        previousCare.innerText = "Last Week"+" - "+ data[0].timeframes[timeFrameID].previous + "hrs"
}

