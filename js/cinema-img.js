let num = 1

function changeImg(idx){
    if(idx){
        if(num == 3) return
        num++
    } else {
        if(num == 1) return
        num--
    }
    let img = document.querySelector(".cinema-img")
    img.setAttribute("src", "media/img0" + num + ".jpg")
}
