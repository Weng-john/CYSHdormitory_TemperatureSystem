/*check the time to judge whether Form close or not*/
function getFormData(){
  var date = new Date();
  var dd = date.getDay();
  var Time = date.getTime();
  Time /= (1000*60);
  Time += 480;
  Time %= 1440;
  
  var openTime = [(18*60+45),(22*60+29)];
  var closeTime = [(20*60),(23*60+20),(23*60+20)];
  
  if(dd>=1 && dd<=5 && ((Time>=openTime[0] && Time<=closeTime[0])||(Time>=openTime[1] && Time<=closeTime[1]))){
    openForm();
  }
  else if(dd==0 && Time>=openTime[1] && Time<=closeTime[2]){
    openForm();
   }
  else{
    closeForm();
  }
}

/* Allow Google Form to Accept Responses */
function openForm() {
    var form = FormApp.getActiveForm();
    form.setAcceptingResponses(true);
}

// Close the Google Form, Stop Accepting Reponses 
function closeForm() {
    var form = FormApp.getActiveForm();
    form.setAcceptingResponses(false);
}
