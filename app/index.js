import document from "document";
import { gettext } from "i18n";
import * as messaging from "messaging";

  
let gregoriandate = document.getElementById('gregoriandate');
let  stardate = document.getElementById('stardate');
let mydata=null;
let month=null;
// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === 'gregoriandate' && evt.data.newValue) {
     mydata=JSON.parse(evt.data.newValue);
     mydata=new Date(mydata.name);
    gregoriandate.text=mydata.toDateString();
    month=mydata.getMonth()+1;
    if (month<10)
      month="0"+month.toString();
    else
      month=month.toString().substr(0,2);
    stardate.text=mydata.getYear().toString()+month+'.'+mydata.getDate().toString();
  }
};

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log('Copyright \u00A92022 Giulio Sorrentino<gsorre84@gmail.com>');
  console.log('This progam is dedicated to Francesca Milano');
  console.log('This program is distribuited under GPL. No Warranty is provided.');
  console.log('App Socket Open');
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log('App Socket Closed');
};
