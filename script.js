document.getElementById("foodSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("foodInput").value;
  if (value === "")
    return;
  let file = "";
  let foodNumQuery = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + value+ "&sort=n&max=25&offset=0&api_key=WgwGfqLG378IHxGbODmDpPERmHmN737TXdJq9N9N";  
  	fetch(foodNumQuery)
	.then(function(response){
		return response.json();
	}).then(function(json){
		console.log(json);
		let results = "";
      results += '<hr><h2>All related products:</h2><hr>';
      for (let i=0; i < json.list.item.length; i++) {    

	      results += '<p class="item">' + json.list.item[i].name + '</p><p class="manu">Manufactured by: ' + json.list.item[i].manu + '</p>';
	      console.log(json.list.item[i]);
      }
		document.getElementById("foodResults").innerHTML = results;
	});
});
