function insochan() {
    console.log("in số chẵn:")
    for (let i = 0; i <= 10; i += 2) {
        console.log(i);
    }
}

function bangcuutruong() {
    console.log("bảng cửu trương:")
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            console.log(i,"x", j,"=",i*j)
        }
    }
}
function tong3so() {
    var c;
    console.log("tong 3 so có tổng bằng 10 là:")
    for (let a = 0; a <= 10; a++) {
        for (let b = 0; b <= 10; b++) {
            if (a + b <= 10 && 0 <= a + b) {
                c = 10 - a - b;
                
                console.log(a, b, c);
            }
        }
    }
}

module.exports = { tong3so, bangcuutruong, insochan }