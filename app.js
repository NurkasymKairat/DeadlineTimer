'use strict';

const timeText = document.querySelector('.text_timer'),
      days = document.querySelector('#days'),
      hours = document.querySelector('#hours'),
      minutes = document.querySelector('#minute'),
      seconds = document.querySelector('#second');

let time = '2023-01-06';

function timeLIne() {
   const t = Date.parse(time) - Date.parse(new Date()),
   day = Math.floor( (t/(1000*60*60*24)) ),
   
   hou = Math.floor( (t/(1000*60*60) % 24) );

   let secon = Math.floor( (t/1000) % 60 );
   secon = secon < 10 ? '0' + secon: secon;
   let minute = Math.floor( (t/1000/60) % 60 );
   minute = minute < 10 ? '0' + minute: minute;


   days.innerHTML = `${day}`;
   hours.innerHTML = `${hou}`;
   minutes.innerHTML = `${minute}`;
   seconds.innerHTML = `${secon}`;
    if (t <= 0) {
       clearInterval(b);
    }

 }
 
 let b = setInterval(timeLIne, 1000);







