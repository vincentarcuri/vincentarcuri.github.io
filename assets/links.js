linkedin = document.getElementById("linkedin-logo");
github = document.getElementById("github-logo");
tableau = document.getElementById("tableau-logo");

linkedin.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/vincent-arcuri-289824249", '_blank');
});

github.addEventListener('click', function() {
    window.open('https://github.com/vincentarcuri/', '_blank');
});

tableau.addEventListener('click', function() {
    window.open('https://public.tableau.com/app/profile/vincent.arcuri/vizzes', '_blank');
});