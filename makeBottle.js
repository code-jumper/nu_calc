//How the fuck do I reference a variable 'i' both here and in calc.js?
//Can't have 'makeBottle' be a module until i figure out 'i'...

// let i = 0;

// export function makeBottle() {
//     let nextBottle = document.createElement("form");
//     nextBottle.id = "new-bottle-" + i;
//     let n = document.createElement("input");
//     n.type = 'Number';
//     n.id = "n";
//     nextBottle.append(n);
//     n.addEventListener("change", function(e) {
//         n.value = e.target.value;
//     });
//     let p = document.createElement("input");
//     p.type = 'Number';
//     p.id = "p";
//     nextBottle.append(p);
//     p.addEventListener("change", function(e) {
//         p.value = e.target.value;
//     })
//     let k = document.createElement("input");
//     k.type = 'Number';
//     k.id = "k";
//     nextBottle.append(k);
//     k.addEventListener("change", function(e) {
//         k.value = e.target.value;
//     })
//     let dilutionRate = document.createElement("input");
//     dilutionRate.type = 'Number';
//     dilutionRate.id = "dilutionRate";
//     nextBottle.append(dilutionRate);
//     dilutionRate.addEventListener("change", function(e) {
//         dilutionRate.value = e.target.value;
//     })

//     bottlesContainer.append(nextBottle);
    
//     i++;
// };
