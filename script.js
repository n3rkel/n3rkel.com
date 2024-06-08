document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    var body = document.body;
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        this.textContent = 'moon';
    } else {
        this.textContent = 'sun';
    }
});


var originalTitle = document.title;


document.addEventListener('visibilitychange', function() {
    if (document.hidden) {

        document.title = 'leaving so soon? :(';
    } else {

        document.title = originalTitle;
    }
});
