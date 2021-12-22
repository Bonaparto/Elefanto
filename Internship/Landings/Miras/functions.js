// first_click1 = true;
// first_click2 = true;
// function clean(n) {
//     inp1 = document.getElementById("input1");
//     inp2 = document.getElementById("input2");
//     if(n == '1' && first_click1) {
//         inp1.value = '';
//         first_click1 = false;
//     } else if(n == '2' && first_click2){
//         inp2.value = '';
//         first_click2 = false;
//     } else if(n == '3'){
//         if(inp1.value == '' || inp2.value == '' || first_click1 || first_click2) {
//             return
//         };
//         document.getElementById("input1").value = '';
//         document.getElementById("input2").value = '';
//     }
// }

let hidden_divs = document.querySelectorAll('.pop-up > div');

for(let i = 0; i < hidden_divs.length; ++i) {
    let hidden_div = hidden_divs[i].querySelector('div');
    let img = hidden_divs[i].querySelector('img');
    img.addEventListener('mouseover', () => {
        hidden_div.classList.add("vis");
    });
    img.addEventListener('mouseout', () => {
        hidden_div.classList.remove("vis");
    })
}
    
function change_photos(n) {
    for(let i = 1; i <= 3; ++i) {
        document.getElementById("layouts__image" + i).src = "images/layouts/button" + n + '/' + i + ".png";
    }
}