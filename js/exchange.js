var con = document.getElementById('N-center');
var lists = con.getElementsByTagName('li');
var ps = document.getElementsByTagName('p');
var index = 0;
for (let i = 0; i < lists.length; i++) {
    lists[i].onclick = function () {
        ps[index].style.setProperty('display', 'none');
        index = i;
        ps[i].style.setProperty('display', 'block');
    }
}