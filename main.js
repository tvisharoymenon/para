var studentarray=[];
function submit() {
    var displayarray=[];
    
    }
    var length=studentarray.length;
    for (var t=0; t<length;t++) {
        displayarray.push("<h4> Name-"+studentarray[t]+"</h4>");

    }
    document.getElementById("display_name_with_commas").innerHTML=displayarray;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting() {
    studentarray.sort ();
    var displayarraysorted=[];
    var length=studentarray.length;
    for (var t=0; t<length;t++) {
        displayarraysorted.push("<h4> Name-"+studentarray[t]+"</h4>");

    }
    var removecommas=displayarraysorted.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
}

function getparagraph1() {
    var inputs = [];
    for(var i=1; i<=6 i++)
    {
        inputs.push
    }
    document.getElementById("showparagraph1").innerHTML = inputs.join(".")
    for (var t=0; t<length;t++) {
    inputs.push("<h4> Name-"+studentarray[t]+"</h4>");

}