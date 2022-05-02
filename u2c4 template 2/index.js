// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",data);
var matchArr=JSON.parse(localStorage.getItem("schedule")) || [];
function data(){
    event.preventDefault();
    var matchData={
        matNum: masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date: masaiForm.date.value,
        Venue: masaiForm.venue.value,
    };
    console.log(matchData)
   matchArr.push(matchData)
    console.log(matchArr)
     localStorage.setItem("schedule",JSON.stringify(matchArr));
     window.location.href = "matches.html";
}