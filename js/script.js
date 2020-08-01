let life = 3;
let height = $(".area").height();
let width = $(".area").width();
let duration = 2;
let isgame = false;
let score = 0;
let flag;
$(".score").text(score);

const insertlife = () => {
    let result = '';
    for (let index = 0; index < life; index++) {
        result += '<img src="580b585b2edbce24c47b29bd.png" alt="">';
    }
    $('.life').html(result);
}

insertlife();

const generate = () => {
    duration -= 0.05;
    console.log(duration + "  " + life);
    $(".area").html(`<img src="${Math.floor((Math.random() * 5) + 1)}.png" alt="">`);
    $(".area img").css("top", Math.floor((Math.random() * (height - 50)) + 1));
    $(".area img").css("left", Math.floor((Math.random() * (width - 100)) + 1));

    $(".area img").fadeIn();

    $(".area img").click(function() {
        score++;
        $(".score").text(score);
        $(".area img").dequeue();
        if (life > 0) {
            generate();
        }
    });

    $(".area img").delay(duration * 1000).fadeOut().queue(function() {
        invisible();
        $(this).dequeue();
    });

}

const invisible = () => {
    life--;
    $(".area").html(" ");
    insertlife();
    if (life > 0) {
        generate();
    }
}

$(".restart").click(function() {
    if (!isgame) {
        isgame = true;
        $(".restart").text("Reset");
        generate();
    } else {
        location.reload();
    }
});