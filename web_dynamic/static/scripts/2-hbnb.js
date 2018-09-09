$(document).ready(function () {
  let amenityDict = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      amenityDict[this.getAttribute('data-id')] = this.getAttribute('data-name');
    }
    else if (!this.checked) {
      delete amenityDict[this.getAttribute('data-id')];
    }
      let i = 0;
      let string = "";
      Object.keys(amenityDict).forEach(function (key) {
	if (i === 0) {
	  string += amenityDict[key];
	} else {
	  string += ", ";
	  string += amenityDict[key];
	}
	i++;
        $("div.amenities h4").text(string);
      });
      if (!Object.keys(amenityDict).length) {
        $("div.amenities h4").empty();
      };
  });


$.get("http://0.0.0.0:5001/api/v1/status/", function (data) {
    console.log(data);
/*    if (status === 'OK') {
    $('DIV#api_status').addclass('available')
  } else {
    $('DIV#api_status').removeclass('available')
  }; */
});

});
