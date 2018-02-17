function completedProject(projectName, endDate, budget, stylist, associate, imageUrls){
    this.projectName = projectName;
    this.endDate = endDate;
    this.budget = budget;
    this.stylist = stylist;
    this.associate = associate;
    this.imageUrls = imageUrls;

    this.convertImageUrlToHtml = function(){
      var ret = "";
      var numOfImg = this.imageUrls.length;

      for(i = 0; i < numOfImg; i++){
        ret += "<img src=\"" +imageUrls[i]+ "\" class=\"item\" alt=\"image1\">"
      }
      return ret;
    }

    this.html = function(){
      return "      <div class=\"active_project\">\n" +
                      "        <p class=\"project_name\">"+this.projectName+"</p>" +
                      "        <p class=\"start_date\">End Date: "+ this.endDate +"</p>\n" +
                      "        <p class=\"budget\">Budget: $"+budget+"</p>\n" +
                      "        <p class=\"image\">" + this.convertImageUrlToHtml() +
                      "        <p class=\"stylist_associate\">Stylist: "+ this.stylist+"<br>Associate: "+ this.associate +"</p>" +
                      "      </div>";
    }
}

function inactiveProject(projectName, budget){
    this.projectName = projectName;
    this.budget = budget;

    this.html = function(){
      return "      <div class=\"active_project\">\n" +
                      "        <p class=\"project_name\">"+this.projectName+"</p>" +
                      "        <p class=\"budget\">Budget: $"+budget+"</p>\n" +
                      "        <p class=\"find_stylist\">Find Your Personal Stylist</p>" +
                      "      </div>";
    }
}

function addCompletedProject(){
  var p = new inactiveProject("New Hair", "60");
  document.getElementById("projects").innerHTML=p.html();
}

// function addCompletedProject(){
//   var p = new completedProject("New Hair", "Jan 9 2018", "60", "Eddie", "Jason", ["photos/hair.png", "photos/shirt.png"]);
//   document.getElementById("projects").innerHTML=p.html();
// }
