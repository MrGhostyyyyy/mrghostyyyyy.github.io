function writeDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10 && day < 10)
        document.getElementById('date').innerHTML = year + ".0" + month + ".0" + day + ".";
    else if (month < 10 && day >= 10)
        document.getElementById('date').innerHTML = year + ".0" + month + "." + day + ".";
    else if (month >= 10 && day < 10) 
        document.getElementById('date').innerHTML = year + "." + month + ".0" + day + ".";
    else   
        document.getElementById('date').innerHTML = year + "." + month + "." + day + ".";
}

function toggleCSS(title, alttitle) {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == title)
        theme.setAttribute('href', alttitle);
    else
        theme.setAttribute('href', title);
}