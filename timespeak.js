javascript:(function()%7Bfunction formatAMPM(date) %7B%0A  var hours %3D date.getHours()%3B%0A  var minutes %3D date.getMinutes()%3B%0A  var ampm %3D hours >%3D 12 %3F 'pm' %3A 'am'%3B%0A  hours %3D hours %25 12%3B%0A  hours %3D hours %3F hours %3A 12%3B %2F%2F the hour '0' should be '12'%0A  minutes %3D minutes < 10 %3F '0'%2Bminutes %3A minutes%3B%0A  var strTime %3D hours %2B '%3A' %2B minutes %2B ' ' %2B ampm%3B%0A  return strTime%3B%0A%7D%0A%0Alet utterance %3D new SpeechSynthesisUtterance(formatAMPM(new Date()))%3B%0AspeechSynthesis.speak(utterance)%3B%7D)()
