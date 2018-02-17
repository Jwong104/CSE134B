function completedProject(projectName, endDate, budget, stylist, associate, imageUrls, projectID){
    this.projectName = projectName;
    this.endDate = endDate;
    this.budget = budget;
    this.stylist = stylist;
    this.associate = associate;
    this.imageUrls = imageUrls;
    this.projectID = projectID;

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

function inactiveProject(projectName, budget, projectID){
    this.projectName = projectName;
    this.budget = budget;
    this.projectID = projectID;

    this.html = function(){
      return "      <div class=\"active_project\">\n" +
                      "        <p class=\"project_name\">"+this.projectName+"</p>" +
                      "        <p class=\"budget\">Budget: $"+budget+"</p>\n" +
                      "        <p class=\"find_stylist\">Find Your Personal Stylist</p>" +
                      "      </div>";
    }
}

function activeProject(projectName, endDate, budget, stylist, associate, progressUrl, projectID){
    this.projectName = projectName;
    this.endDate = endDate;
    this.budget = budget;
    this.stylist = stylist;
    this.associate = associate;
    this.progressUrl = progressUrl;
    this.projectID = projectID;

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

function getNavBar(){

  return "    <div class=\"profile\" >\n"+
                  "<img src=\"photos/steve.jpg\" alt=\"My Man Steve\">"+
               "</div>"+
              "<p class=\"heading\">John Doe<p>"+
              "<p style=\"text-align:center;\">Edit Profile</p>"+

              "<div class=\"projects\" style=\"text-align:center;\">"+
              "<p class=\"heading\">Projects</h1>"+
              "<ul style=\" display:inline-block; text-align:left;\">"+
                "<li><a href=\"active_project.html\">Active</a></li>"+
                "<li><a href=\"inactive_project.html\">Inactive</a></li>"+
                "<li><a href=\"completed_project.html\">Completed</a></li>"+
                "<li><a href=\"create_project.html\">Create New</a></li></ul>"+
              "</div>"+
              "<a href=\"#\"><p class=\"heading\"> Messages </p></a>"+
              "<a href=\"explore.html\"><p class=\"heading\"> Explore </p></a>"+
              "<div style=\"text-align:center; !important\">"+
                  "<ul style=\"display:inline-block; text-align:left; !important\">"+
                  "<li><a href=\"#\">Help</a></li>"+
                  "<li><a href=\"#\">Support</a></li>"+
                  "<li><a href=\"#\">Feedback</a></li>"+
                  "<li><a href=\"#\">Contact Us</a></li>"+
                "</ul>"+
              "</div>";
}

function addNavBar(p){
  //document.getElementById("#").innerHTML += getNavBar();
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
  p[0] = new activeProject("New Hair", "Jan 9 2018", "60", "Eddie", "Jason", "photos/progress.png", "123");
  p[1] = new activeProject("New Hair", "Jan 9 2018", "60", "Eddie", "Jason", "photos/progress.png", "1234");
  localStorage.setItem("activeProject", JSON.stringify(p));
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

function finishIt(projectID){
  var parent = document.getElementById("main-page");
  var child = document.getElementById(projectID);
  parent.removeChild(child);

  var listOfProject = localStorage.getItem("activeProject");
  for(i = 0; i < listOfProject.length; i++){
    if(listOfProject[i].projectID === projectID){
      var listOfCompletedProject = localStorage.getItem("completedProject");
      listOfCompletedProject.push(listOfProject[i]);
      localStorage.setItem("completedProject", JSON.stringify(listOfCompletedProject));
      listOfProject.slice(i, 1);
      localStorage.setItem("activeProject", JSON.stringify(listOfProject));
    }
  }
}
