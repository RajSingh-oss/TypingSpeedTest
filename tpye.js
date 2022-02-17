var new_key = "";
var totalword = -1;
var speed_word = 0;
var mark = 40;
var wrong_word = 0;
var messege = "The backgroung colour is depands on typing speed please give me a better logic for bgcolour thankyou keep learing <br/> (-^-___-^-)";
var min_S = 0;
var sec_S = 0;
var milisec_S = 0;
var min_L = 0;
var sec_L = 0;
var milisec_L = 0;
function key_pressed(e) {

    // var str = down.innerHTML;
    // str += e.key


    new_key = e.key;

    // down.innerHTML= str;
    getbtn(new_key);
}
var old_btn_id = "btn_ ";
function getbtn(id_name) {
    var id_name_real = "btn_" + id_name;
    // console.log(id_name_real);
    var btn = document.getElementById(id_name_real);
    btn.style.background = "rgb(129, 128, 128)";
    if (old_btn_id != id_name_real) {
        bg__clear(old_btn_id);
    }
    showbtn();
    old_btn_id = "btn_" + id_name;
}
function bg__clear(old_btn_id) {
    // console.log(old_btn_id);
    var btn = document.getElementById(old_btn_id);
    btn.style.background = "rgb(48, 47, 46)";
}
var word = "";
function read() {
    var down = document.getElementById('real');
    const file = document.getElementById('file').files[0];
    var fr = new FileReader();
    fr.addEventListener('load', function (e) {
        word = e.target.result;
        // console.log(word);
    })
    fr.readAsText(file);
    if (word.length != 0) {
        var timme = new Date();
        min_S = timme.getMinutes();
        sec_S = timme.getSeconds();
        milisec_S = timme.getMilliseconds();
        // console.log(min_S, sec_S, milisec_S);
        down.innerHTML = "Please click in this blank black box and start typing ..."
        showbtn()
    }
}
var n = 0;
var word_to_press = "";
function showbtn() {
    var new_word = "Enter";
    var word_len = word.length;
    if (word_len >= n) {
        totalword++;
        new_word = word.charAt(n);
        if (new_word == " ") {
            speed_word++;
        }
        var word_to_press = word.charAt(n - 1);
        var down = document.getElementById('real');
        console.log(new_word);
        down.innerHTML = word;
        real_word = new_word;
        n += 1;
        if (word_to_press != new_key) {
            wrong_word = wrong_word + 1;
        }
    }
    else {
        done();
    }
    // console.log(word_len)
    var new_btn = "btn_" + new_word;
    var btn = document.getElementById(new_btn);
    btn.style.background = "red";
}
function done() {
    dis = true;
    var timme = new Date();
    min_L = timme.getMinutes();
    sec_L = timme.getSeconds();
    milisec_L = timme.getMilliseconds();
    console.log(min_L, sec_L, milisec_L);
    var down = document.getElementById('real');
    down.innerHTML = "ok well done thank you! <br> If you wand to restart please reload this page and choose the txt file that you want . "
    var itom1 = document.getElementById('itom1')
    itom1.style.display = "none"
    var itom1 = document.getElementById('itom2')
    itom1.style.display = "block"
    show_speed();
}
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// this .js is for done.html
// bouth .js file are conected so dont spret them
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
var backcolor = "";
var dis = false
function back() {
    var itom1 = document.getElementById('itom1')
    var itom2 = document.getElementById('itom2')
    var btns = document.getElementById('btns')
    var body = document.getElementById('body')
    if (dis) {

        itom1.style.display = "block"
        itom2.style.display = "none"
        btns.style.display = "none"
        body.style.backgroundColor = "gray"
        dis = false;
    }
    else {
        itom1.style.display = "none"
        itom2.style.display = "block"
        body.style.backgroundColor = backcolor;
        dis = true;
    }

}
var timme = 0;
function show_speed() {

    show_time();
    marks();
    wrong();
    mess();
    console.log("hello")
    var speed = speed_word / timme;
    if (speed <= 15) {
        var body = document.getElementById('body');
        body.style.backgroundColor = "red";
        backcolor = "red";
    }
    else if (speed > 15 && speed <= 20) {
        var body = document.getElementById('body');
        body.style.backgroundColor = "pink";
        backcolor = "pink";
    }
    else {
        var body = document.getElementById('body')
        body.style.backgroundColor = "green"
        backcolor = "green";
    }
    var down = document.getElementById('speed');
    down.innerHTML = "your typing speed " + speed + " word/min";

}
function show_time() {
    // var tome = (min_L-min_S) +" : " +(sec_L-sec_S) ;
    var minat = (min_L - min_S);
    var second = (sec_L - sec_S);
    var milisecond = (milisec_L - milisec_S);
    if (milisecond < 0) {
        second -= 1;
        milisecond = milisecond + 1000;
    }
    if (second < 0) {
        minat--;
        second = second + 60;
    }
    timme = minat + (second / 60);
    // console.log(timme);
    var down = document.getElementById('time');
    down.innerHTML = "You heve taken " + (minat) + " min " + (second) + " sec " + (milisecond) + " milisec " + " in typing";
}
function marks() {
    var down = document.getElementById('mark');
    // down.innerHTML = "your mark is " + mark + " out of 100";
}
function wrong() {
    var akuret = 100 - ((wrong_word * 100) / totalword);
    // console.log(akuret)
    var down = document.getElementById('wrong');
    down.innerHTML = "you have pressed " + wrong_word + " wrong keys out of " + totalword + " keys <br>" + akuret + " % accurate thank you  ";
    // console.log(wrong_word, totalword)
}
function akuresi() {

}
function mess() {
    var down = document.getElementById('mess');
    down.innerHTML = messege;
}