var typed= new Typed(".text", {
    strings: ["Final Year Student", "President of Mastro Club", "Fresher"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const projects = document.querySelectorAll('.port-box');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Hide all projects
            projects.forEach(project => {
                project.style.display = 'none';
            });

            // Show projects based on the selected filter
            if (filterValue === 'all') {
                projects.forEach(project => {
                    project.style.display = 'block';
                });
            } else {
                const filteredProjects = document.querySelectorAll('.port-box.' + filterValue);
                filteredProjects.forEach(project => {
                    project.style.display = 'block';
                });
            }
        });
    });
});

