var messages = [];

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
    return "      <div class=\"active_project\" id=\""+projectID+"\">\n" +
    "        <p class=\"project_name\">"+this.projectName+"</p>" +
    "        <p class=\"budget\">Budget: $"+budget+"</p>\n" +
    "        <p class=\"find_stylist\">Find Your Personal Stylist</p>" +
    "<button onclick=\"finishIt2(this)\" value=\""+projectID+"\">finish</button>"+
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
    return "      <div class=\"active_project\" id=\""+this.projectID+"\">\n" +
    "        <p class=\"project_name\">"+this.projectName+"</p>" +
    "        <p class=\"start_date\">End Date: "+ this.endDate +"</p>\n" +
    "        <p class=\"budget\">Budget: $"+budget+"</p>\n" +
    "        <p class=\"image\"><p class=\"image\"><img src="+ this.progressUrl +" alt=\"Progress Image\" class=\"progress\"></p>"+
    "        <p class=\"stylist_associate\">Stylist: "+ this.stylist+"<br>Associate: "+ this.associate +"</p>" +
    "      </div>";
  }
}

function getActiveProjectHtml(p){
  var ap = new activeProject(p.projectName, p.endDate, p.budget,
    p.stylist, p.associate, p.progressUrl, p.projectID);
    return ap.html();
  }

  function getCompletedProjectHtml(p){
    console.log(p.imageUrls);
    var imageUrls = ["photos/hair.png", "photos/shoes.png"];
    var cp = new completedProject(p.projectName, p.endDate, p.budget,
      p.stylist, p.associate,imageUrls , p.projectID);
      return cp.html();
    }

    function getInactiveProjectHtml(p){
      var ip = new inactiveProject(p.projectName, p.budget, p.projectID);
      return ip.html();
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
      var data = localStorage.getItem("inactiveProject");
      console.log(data);
      p = JSON.parse(data);
      if(data != null){
        for(i = 0; i < p.length; i++)
        addInactiveProject(p[i]);
      }
    }

    function populateCompletedProjectHtml(){
      console.log("Popultating completed projects");
      var data = localStorage.getItem("completedProject");
      console.log(data);
      p = JSON.parse(data);
      if(data != null){
        for(i = 0; i < p.length; i++)
        addCompletedProject(p[i]);
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

    function sendMessage(page){
      var input = document.getElementById("inputBox").value;

      var messages = [];
      messages = JSON.parse(localStorage.getItem("msg"));
      if(!messages)
      var messages = [];

      if(input === "")  return;
      messages.push({id:page, msg:input});
      localStorage.setItem('msg', JSON.stringify(messages));
      var chatBox = "<div class=\"chatBox\"><p class=\"chatContent\">"+input+"</p></div>";
      document.getElementById("inputBox").value =  "";
      document.getElementById("content").innerHTML += chatBox;
    }

    function populateMsg(page){
      var messages = [];
      //localStorage.clear();
      messages = JSON.parse(localStorage.getItem("msg"));
      console.log(messages);
      if (!messages)
      return;
      for(i=0; i<messages.length; i++){
        var input = messages[i].msg;
        if(messages[i].id === page)
        var chatBox = "<div class=\"chatBox\"><p class=\"chatContent\">"+input+"</p></div>";
        else
        var chatBox = "<div class=\"chatBox1\"><p class=\"chatContent\">"+input+"</p></div>";
        document.getElementById("content").innerHTML += chatBox;
      }
    }

    function finishIt(button){
      var projectID = button.value;
      var parent = document.getElementById("projects");
      console.log(projectID);
      var child = document.getElementById(projectID);
      console.log(child);
      parent.removeChild(child);

      var listOfProject = JSON.parse(localStorage.getItem("activeProject"));
      console.log(listOfProject);
      for(i = 0; i < listOfProject.length; i++){
        console.log(listOfProject[i]);
        if(listOfProject[i].projectID === projectID){
          var listOfCompletedProject = JSON.parse(localStorage.getItem("completedProject"));
          if(listOfCompletedProject == null) listOfCompletedProject = [];
          console.log(listOfCompletedProject);
          listOfCompletedProject.push(listOfProject[i]);
          console.log(listOfCompletedProject);
          localStorage.setItem("completedProject", JSON.stringify(listOfCompletedProject));
          listOfProject.slice(i, 1);
          localStorage.setItem("activeProject", JSON.stringify(listOfProject));
        }
      }
    }

    function finishIt2(button){
      var projectID = button.value;
      var parent = document.getElementById("projects");
      console.log(projectID);
      var child = document.getElementById(projectID);
      console.log(child);
      parent.removeChild(child);

      var listOfProject = JSON.parse(localStorage.getItem("inactiveProject"));
      console.log(listOfProject);
      for(i = 0; i < listOfProject.length; i++){
        console.log(listOfProject[i]);
        if(listOfProject[i].projectID === projectID){
          var listOfCompletedProject = JSON.parse(localStorage.getItem("activeProject"));
          if(listOfCompletedProject == null) listOfCompletedProject = [];
          console.log(listOfCompletedProject);
          listOfCompletedProject.push(listOfProject[i]);
          console.log(listOfCompletedProject);
          localStorage.setItem("activeProject", JSON.stringify(listOfCompletedProject));
          listOfProject.slice(i, 1);
          localStorage.setItem("inactiveProject", JSON.stringify(listOfProject));
        }
      }
    }

    function uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
