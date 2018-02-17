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
                      "        <p class=\"image\">" +this.convertImageUrlToHtml() +
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

function activeProject(projectName, endDate, budget, stylist, associate, progressUrl){
    this.projectName = projectName;
    this.endDate = endDate;
    this.budget = budget;
    this.stylist = stylist;
    this.associate = associate;
    this.progressUrl = progressUrl;

    this.html = function(){
      return "      <div class=\"active_project\">\n" +
                      "        <p class=\"project_name\">"+this.projectName+"</p>" +
                      "        <p class=\"start_date\">End Date: "+ this.endDate +"</p>\n" +
                      "        <p class=\"budget\">Budget: $"+budget+"</p>\n" +
                      "        <p class=\"image\"><p class=\"image\"><img src="+ this.progressUrl +" alt=\"Progress Image\" class=\"progress\"></p>"+
                      "        <p class=\"stylist_associate\">Stylist: "+ this.stylist+"<br>Associate: "+ this.associate +"</p>" +
                      "      </div>";
    }
}

function getActiveProjectHtml(p){
    return "      <div class=\"active_project\">\n" +
                    "        <p class=\"project_name\">"+p.projectName+"</p>" +
                    "        <p class=\"start_date\">End Date: "+ p.endDate +"</p>\n" +
                    "        <p class=\"budget\">Budget: $"+budget+"</p>\n" +
                    "        <p class=\"image\"><p class=\"image\"><img src="+ p.progressUrl +" alt=\"Progress Image\" class=\"progress\"></p>"+
                    "        <p class=\"stylist_associate\">Stylist: "+ p.stylist+"<br>Associate: "+ p.associate +"</p>" +
                    "      </div>";
}

function getCompletedProjectHtml(p){
  return "      <div class=\"active_project\">\n" +
                  "        <p class=\"project_name\">"+p.projectName+"</p>" +
                  "        <p class=\"start_date\">End Date: "+ p.endDate +"</p>\n" +
                  "        <p class=\"budget\">Budget: $"+p.budget+"</p>\n" +
                  "        <p class=\"image\">" +p.convertImageUrlToHtml() +
                  "        <p class=\"stylist_associate\">Stylist: "+ p.stylist+"<br>Associate: "+ p.associate +"</p>" +
                  "      </div>";
}
function getInactiveProjectHtml(p){

  return "      <div class=\"active_project\">\n" +
                  "        <p class=\"project_name\">"+p.projectName+"</p>" +
                  "        <p class=\"budget\">Budget: $"+p.budget+"</p>\n" +
                  "        <p class=\"find_stylist\">Find Your Personal Stylist</p>" +
                  "      </div>";

}




function addInactiveProject(p){
  // var p = new inactiveProject("New Hair", "60");
  document.getElementById("projects").innerHTML += getInactiveProjectHtml(p);
}

function addCompletedProject(p){
  // var p = new completedProject("New Hair", "Jan 9 2018", "60", "Eddie", "Jason", ["photos/tie.png", "photos/shirt.png"]);
  document.getElementById("projects").innerHTML += getCompletedProjectHtml(p);
}

function addActiveProject(p){
  // var p = new activeProject("New Hair", "Jan 9 2018", "60", "Eddie", "Jason", "photos/progress.png");
  document.getElementById("projects").innerHTML += getActiveProjectHtml(p);
}


//The load function is for testing
function load(){
  var p = [];
  p[0] = new inactiveProject("New Hair", "60");
  p[1] = new inactiveProject("Hello world", "60");
  localStorage.setItem("inactiveProject", JSON.stringify(p));
}

function populateInactiveProjectHtml(){
  load();
  var data = localStorage.getItem("inactiveProject");
  p = JSON.parse(data);
  if(data != null){
    for(i = 0; i < p.length; i++)
      addInactiveProject(p[i]);
  }
}

function populateCompletedProjectHtml(){
  var data = localStorage.getItem("completedProject");
  p = JSON.parse(data);
  if(data != null){
    for(i = 0; i < p.length; i++)
      addInactiveProject(p[i]);
  }
}

function populateActiveProjectHtml(){
  var data = localStorage.getItem("activeProject");
  p = JSON.parse(data);
  if(data != null){
    for(i = 0; i < p.length; i++)
      addInactiveProject(p[i]);
  }
}

function sendMessage(){
  var input = document.getElementById("inputBox").value;
  if(input === "")  return;
  var chatBox = "<div style=\"border-radius: 15px; border: 1px solid black;\"><p class=\"chatContent\">"+input+"</p></div>";


  document.getElementById("inputBox").value =  "";
  document.getElementById("content").innerHTML += chatBox;
}
