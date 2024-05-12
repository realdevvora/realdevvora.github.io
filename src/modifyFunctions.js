function modifyAbout() {
    const about = document.getElementsByClassName("activities-about");
    // console.log(about)
    if (about[1].style.display) {
      if (about[1].style.display != "none") {
        for (let i = 0; i < about.length; i++) {
          about[i].style.display = "none";
        }
    
        const sectionButtons = document.getElementsByClassName("section-button")
        for (let i = 0; i < sectionButtons.length; i++) {
          sectionButtons[i].style.display = "block";
        }
        return
      }
      
      
    }
    for (let i = 0; i < about.length; i++) {
      about[i].style.display = "block";
    }

    const initiatives = document.getElementsByClassName("activities-initiatives")
    for (let i = 0; i < initiatives.length; i++) {
      initiatives[i].style.display = "none"
    }
    
    const projects = document.getElementsByClassName("activities-projects")
    for (let i = 0; i < projects.length; i ++) {
      projects[i].style.display = "none"
    }

  }

function modifyInitiatives() {
    const currentInitiatives = document.getElementsByClassName("activities-initiatives");
    // console.log(currentInitiatives)
    if (currentInitiatives[1].style.display) {
      if (currentInitiatives[1].style.display != "none") {
        for (let i = 0; i < currentInitiatives.length; i++) {
          currentInitiatives[i].style.display = "none";
        }
    
        const sectionButtons = document.getElementsByClassName("section-button")
        for (let i = 0; i < sectionButtons.length; i++) {
          sectionButtons[i].style.display = "block";
        }
        return
      }
      
      
    }
    for (let i = 0; i < currentInitiatives.length; i++) {
      currentInitiatives[i].style.display = "block";
    }

    const about = document.getElementsByClassName("activities-about")
    for (let i = 0; i < about.length; i++) {
      about[i].style.display = "none"
    }
    
    const projects = document.getElementsByClassName("activities-projects")
    for (let i = 0; i < projects.length; i ++) {
      projects[i].style.display = "none"
    }
  }


function modifyProjects() {
    const currentProjects = document.getElementsByClassName("activities-projects");
    // console.log(currentProjects)
    if (currentProjects[1].style.display) {
      if (currentProjects[1].style.display != "none") {
        for (let i = 0; i < currentProjects.length; i++) {
          currentProjects[i].style.display = "none";
        }
    
        const sectionButtons = document.getElementsByClassName("section-button")
        for (let i = 0; i < sectionButtons.length; i++) {
          sectionButtons[i].style.display = "block";
        }
        return
      }
      
      
    }
    for (let i = 0; i < currentProjects.length; i++) {
      currentProjects[i].style.display = "block";
    }

    const about = document.getElementsByClassName("activities-about")
    for (let i = 0; i < about.length; i++) {
      about[i].style.display = "none"
    }
    
    const initiatives = document.getElementsByClassName("activities-initiatives")
    for (let i = 0; i < initiatives.length; i ++) {
      initiatives[i].style.display = "none"
    }
  }

  export {modifyAbout, modifyInitiatives, modifyProjects}