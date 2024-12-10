// document.getElementById('clock')
// // document.querySelector('#clock')


// let date=new Date()
// // console.log(Date.toLocalTimeString());
// setInterval(function(){
// clock.innerHTMl=date.toLocalTimeString();
// },1000)

const clock = document.getElementById('clock');

function updateClock() {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time immediately
updateClock();