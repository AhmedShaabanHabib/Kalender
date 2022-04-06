const date = new Date();

const renderKalender =()=>{
  const monthdays = document.querySelector(".Tage")

  const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate(); 
  
  const firstDayindex =date.getDay()+2; 
  //console.log(firstDayindex);
  
  const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
  
  const lastDayindex =new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
  
  const nextDaysindex = 7 - lastDayindex -1 ;
  
  const months =  [
      "Januar",
      "Februar",
      "Maerz",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "Sebtember",
      "Oktober",
      "November",
      "Dezember"
  ];
  
  const colors = [ 
       "Cyan",
       "red",
       "blue",
       "green",
       "blueviolet",
       "teal",
       "darkcyan",
       "deeppink",
       "indigo",
       "maroon",
       "magenta",
       "olive"
      ];

  document.querySelector(".Datum h1").innerHTML = months[date.getMonth()] ;
  document.querySelector(".Datum p").innerHTML =  new Date().toDateString();
  document.querySelector(".Monat  ").style.background =colors[date.getMonth()];
  //document.querySelector(".Heute ").style.background =colors[date.getMonth()];
  
  
  
  let days ="";
  
  for(let x = firstDayindex; x> 0 ; x--){
    days+= `<div class= "prev-date">${prevLastDay - x +1 }</div>` ;
  }
  
  for (let i=1; i<=lastDay; i++){
  
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth())
       {days += `<div class= "Heute" >${i}</div>`;} 
    else 
       {days += `<div>${i}</div>`;}
    
    }
  
  
  for (j= 1 ; j<= nextDaysindex ; j++){ 
    days += `<div class= "next-date">${j}</div>` ;
  
  }
  monthdays.innerHTML = days ;
}



document.querySelector(".prev").addEventListener('click',()=>{
         date.setMonth(date.getMonth()-1);
         renderKalender();
         
})


document.querySelector(".next").addEventListener('click',()=>{
         date.setMonth(date.getMonth()+1);
         renderKalender();
})

renderKalender();
