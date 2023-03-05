// const c = new Array();
// function inso(a,b) {
//     var i,j=0;
//     for(i=a;i<=b;i++) {
//         c[j] = i;
//         j++;
//     }
//     console.log(c);
// }
// inso(1,10);

// const h = ["Lưu","Thanh","Hoàng"];
// console.log(h[2]);

function tong10(n) {
    var i,j,k;
    for(i=0;i<=n;i++) {
        for(j=0;j<=n;j++) {
            k=n-(i+j);
            if(k>=0) console.log(i,j,k);
        }
    }
}
tong10(10);

module.exports = {
    tong10
}