$(document).ready(function(){
  var count = 0;
  var cat = function(name, image){
    this.Name = name;
    this.Image = image;
    this.count = 0;
  }
  var cats = [];
  cats.push(new cat('ruby','cat'));
  cats.push(new cat('henry','cat1'));
  var displayCount = function(totalcount){
    var count = totalcount;
    var kicker = $(this).parent().siblings('.kicker-count');
    var updateCount = function(){
      kicker.text(count++);
    }
    return updateCount;
  };
  for(item in cats){
    $('.container').append('<div><span>' + cats[item].Name + '</span></div><div><img src="images/' + cats[item].Image + '.jpg"></div><div class="kicker-count"></div>' )
    $('img').click(displayCount(cats[item].count));
  }


});