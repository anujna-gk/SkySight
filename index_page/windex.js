
/*var out_data= ;*/


/**function dataSubmit() {
    var loc_opt = document.getElementsByName("location").value;
    var weather_opt = document.getElementsByName("weather_").value;
    var your_name = document.getElementsById("name_").value;


    var out_data = document.getElementsById("output_data");
    out_data.innerHTML = document.getElementById("output_data");
    out_data.innerHTML= "<h2>Location choosen is:</h2>"+ loc_opt +
    "<p> Weather to check is :" + weather_opt + "</p>"+"name is:"+ your_name;
}
*/

document.getElementById("sbtbut").addEventListener("click", function(){
    console.log("Submit button clicked");

    var loc_opt = document.querySelector('input[name="location"]:checked').value;
    var weather_opt = document.querySelector('input[name="weather_"]:checked').value;
    var your_name = document.getElementById("name_").value;

    var out_data = document.getElementById("output_data");
    out_data.innerHTML = "<p>Location chosen is:</p>" + loc_opt +
        "<p>Weather to check is: " + weather_opt + "</p>" + "Name is: " + your_name;
});
