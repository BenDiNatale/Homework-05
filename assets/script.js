const myDay = [
{
    id: "0",
    hour: "09",
    time:"09",
    abbreviation: "AM",
    reminder: "",

},
{
    id: "1",
    hour: "10",
    time:"10",
    abbreviation: "AM",
    reminder: "",

},
{
    id: "2",
    hour: "11",
    time:"11",
    abbreviation: "AM",
    reminder: "",

},
{
    id: "3",
    hour: "12",
    time:"12",
    abbreviation: "PM",
    reminder: "",

},
{
    id: "4",
    hour: "1",
    time:"13",
    abbreviation: "PM",
    reminder: "",

},
{
    id: "5",
    hour: "2",
    time:"14",
    abbreviation: "PM",
    reminder: "",

},
{
    id: "6",
    hour: "3",
    time:"15",
    abbreviation: "PM",
    reminder: "",

},
{
    id: "7",
    hour: "4",
    time:"16",
    abbreviation: "PM",
    reminder: "",

},
{
    id: "8",
    hour: "5",
    time:"17",
    abbreviation: "PM",
    reminder: "",

},
]


//retrieve date for top of page
function getDate() {
    let currentDate = moment().format('dddd, MMMM Do');
    $("#time").text(currentDate);
}

//save to local storage, make function for displaying it as well
function saveData() {
    localStorage.setItem("myDay",JSON.stringify(myDay));
}

function displayData() {
    myDay.forEach(function(_thisHour){
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
})
};

function init() {
    var storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveReminders();
    displayReminders();
}

//create rows for data
myDay.forEach(function(thisHour){
    let hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    let hourField = $("<div>")
    .text('${thisHour.hour}${thisHour.abbreviation}')
    .attr({
        "class":"col-md-2 hour"
    });
})



getDate();