var wordCounter = function(phrase){
  var wordArray = phrase.replace(/[^a-zA-z" "]/g,"").toLowerCase().split(" ");
  var wordCount = {};
  for(var index = 0; index < wordArray.length; index++) {
    if((wordArray[index] === "")) {continue; }
    else if(!(wordArray[index]in wordCount) ) {
      wordCount[wordArray[index]] = 1;
    } else {
      wordCount[wordArray[index]] += 1;
    }
  }
  return wordCount;
};
var sortHash = function(theHash){
  var sorted = [];
  for (var key in theHash) {sorted.push([key, theHash[key]])};

  sorted.sort(function(a,b){
    a = a[1];
    b = b[1];
    return a > b ? -1 : (a < b ? 1 : 0);
  });
  return sorted;
};

$(document).ready(function(){
  $("form#word_order").submit(function(event){
    var phrase = ($("input#phrase").val());
    var result = wordCounter(phrase);

    //$(".phrase").text(phrase);
    $(".count").text(JSON.stringify(sortHash(result), null, "  "));
    $("#result").show();
    event.preventDefault();
  });
});
