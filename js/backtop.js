// backtop.js
document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function() {
        // 检查页面的滚动位置，如果超过一屏或者到达页面底部，则显示按钮
        if (window.pageYOffset > window.innerHeight || (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});
