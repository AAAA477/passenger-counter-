//initialise the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countEl.textContent = count
}
function save(){
    let counter = countEl.innerText
    let countStr = counter + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    

}