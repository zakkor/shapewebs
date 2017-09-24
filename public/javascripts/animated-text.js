let $animatedText = $('#animated-text');
let index = 0;
window.setInterval(() => {
    let words = ['idea', 'image', 'vision', 'dream'];
    $animatedText.animate({
        opacity: 0,
        letterSpacing: '2px'
    }, 500);
    $animatedText.promise().done(() => {
        $animatedText.html(words[index]);
        $animatedText.animate({
            opacity: 1,
            letterSpacing: '0px'
        }, 500);
    });
    index++;
    if (index === words.length) {
        index = 0;
    }
}, 2500);

