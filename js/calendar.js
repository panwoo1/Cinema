let today = new Date();
let year  = today.getFullYear()
let month = today.getMonth() + 1

document.getElementById("yearMonth").innerHTML = month+"월"

let firstDate = new Date(today.getFullYear(), today.getMonth(), 1)
let lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0)
let day = firstDate.getDay()
let calendar = document.getElementById("calendar")
let week = Math.ceil(lastDate.getDate()/7) + 1

function makeCalendar(){
    let leftDays = 7
    let setDays = 1

    for(i = 1; i < week; i++){
        let row = calendar.insertRow()
        while(day != 0){
            row.insertCell().innerHTML = ""
            day -= 1
            leftDays -= 1
        }
        let nextMonthDate = 1
        while(leftDays != 0){
            if(setDays > lastDate.getDate()){
                row.insertCell().innerHTML = nextMonthDate
                leftDays -= 1
                nextMonthDate += 1
            } else {
                row.insertCell().innerHTML = setDays
                setDays += 1
                leftDays -= 1
            }
        }
        leftDays = 7
    }
}
makeCalendar()