$( document ).ready(function() {

$('.dropdown-toggle').dropdown();

$('#theme li').click(function () {
        switch_style($(this).text());
    });

});
