document.getElementById('light-mode-toggle').addEventListener('click', function() {
    var body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('light-mode')) {
        this.innerHTML = '<i class="fas fa-sun"></i> day';
    } else {
        this.innerHTML = '<i class="fas fa-moon"></i> night';
    }
});


var originalTitle = document.title;

//funny document title thing
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {

        document.title = 'leaving so soon? :(';
    } else {

        document.title = originalTitle;
    }
});

//
