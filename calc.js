{/* v0.toDoList */}
// let addBottleButton = document.getElementById("addBottle");
// let bottlesContainer = document.getElementById("bottlesContainer");
// let bottle = document.getElementById("bottle");

// addBottleButton.addEventListener("click", function(){
//     let paragraph = document.createElement("p");
//     paragraph.innerText = bottle.value;
//     bottlesContainer.appendChild(paragraph);
// })

{/* v0.1 */}
let bottlesContainer = document.getElementById("bottlesContainer");
let bottleButton = document.getElementById("addBottle");
let bottlesArray = [];
let submitButton = document.getElementById("submit");
let solutionContainer = document.getElementById("solution");
let i = 0;

function makeBottle() {
    let nextBottle = document.createElement("form");
    nextBottle.id = "new-bottle-" + i;
    let n = document.createElement("input");
    n.type = 'Number';
    n.id = "n";
    nextBottle.append(n);
    n.addEventListener("change", function(e) {
        n.value = e.target.value;
    });
    let p = document.createElement("input");
    p.type = 'Number';
    p.id = "p";
    nextBottle.append(p);
    p.addEventListener("change", function(e) {
        p.value = e.target.value;
    })
    let k = document.createElement("input");
    k.type = 'Number';
    k.id = "k";
    nextBottle.append(k);
    k.addEventListener("change", function(e) {
        k.value = e.target.value;
    })
    let dilutionRate = document.createElement("input");
    dilutionRate.type = 'Number';
    dilutionRate.id = "dilutionRate";
    nextBottle.append(dilutionRate);
    dilutionRate.addEventListener("change", function(e) {
        dilutionRate.value = e.target.value;
    })

    bottlesContainer.append(nextBottle);
    
    i++;
};

class Bottle {
    constructor(n, p, k, dilutionRate, ca, mg, s, cl, fe, zn, cu, mn, mo, b) {
        this.n = n;
        this.p = p;
        this.k = k;
        this.dilutionRate = dilutionRate;
        this.ca = ca;
        this.mg = mg;
        this.s = s;
        this.cl = cl;
        this.fe = fe;
        this.zn = zn;
        this.cu = cu;
        this.mn = mn;
        this.mo = mo;
        this.b = b;
    
    };


}

bottleButton.addEventListener("click", function(){
    makeBottle();
})

submitButton.addEventListener("click", function(){
    bottlesArray = [];
    for (let j = i; j > 0; j--) {
        let someBottle = new Bottle(document.forms[j-1].n.value, 
            document.forms[j-1].p.value, 
            document.forms[j-1].k.value,
            document.forms[j-1].dilutionRate.value)
            bottlesArray.push(someBottle);
    }
    console.log(bottlesArray);

    let finalN = 0;
    let finalP = 0;
    let finalK = 0;
    console.log(finalN);

    for (let k = i; k > 0; k--) {
        // Don't need to use *.*.value here bc it is now in the js object instead of html input!
        finalN += (bottlesArray[k-1].n * bottlesArray[k-1].dilutionRate);
        finalP += (bottlesArray[k-1].p * bottlesArray[k-1].dilutionRate);
        finalK += (bottlesArray[k-1].k * bottlesArray[k-1].dilutionRate);
    }
    finalN = finalN * 0.001; // required due to dilution in mL/L
    finalP = finalP * 0.001;
    finalK = finalK * 0.001;
    
    let paragraph = document.createElement("p");
    // let finalN = (bottle1.n.value * bottle1.dilutionRate.value + bottle2.n.value * bottle2.dilutionRate.value) * 0.001;
    // let finalP = (bottle1.p.value * bottle1.dilutionRate.value + bottle2.p.value * bottle2.dilutionRate.value) * 0.001;
    // let finalK = (bottle1.k.value * bottle1.dilutionRate.value + bottle2.k.value * bottle2.dilutionRate.value) * 0.001;
    // let finalCa = (bottle1.ca.value * bottle1.dilutionRate.value + bottle2.ca.value * bottle2.dilutionRate.value) * 0.001;
    // let finalMg = (bottle1.mg.value * bottle1.dilutionRate.value + bottle2.mg.value * bottle2.dilutionRate.value) * 0.001;
    // let finalS = (bottle1.s.value * bottle1.dilutionRate.value + bottle2.s.value * bottle2.dilutionRate.value) * 0.001;
    // let finalCl = (bottle1.cl.value * bottle1.dilutionRate.value + bottle2.cl.value * bottle2.dilutionRate.value) * 0.001;
    // let finalFe = (bottle1.fe.value * bottle1.dilutionRate.value + bottle2.fe.value * bottle2.dilutionRate.value) * 0.001;
    // let finalZn = (bottle1.zn.value * bottle1.dilutionRate.value + bottle2.zn.value * bottle2.dilutionRate.value) * 0.001;
    // let finalCu = (bottle1.cu.value * bottle1.dilutionRate.value + bottle2.cu.value * bottle2.dilutionRate.value) * 0.001;
    // let finalMn = (bottle1.mn.value * bottle1.dilutionRate.value + bottle2.mn.value * bottle2.dilutionRate.value) * 0.001;
    // let finalMo = (bottle1.mo.value * bottle1.dilutionRate.value + bottle2.mo.value * bottle2.dilutionRate.value) * 0.001;
    // let finalB = (bottle1.b.value * bottle1.dilutionRate.value + bottle2.b.value * bottle2.dilutionRate.value) * 0.001;

    paragraph.append("Nitrogen: " + finalN + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Phosphorus: " + finalP + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Potassium: " + finalK + "%");
    paragraph.append(document.createElement("br"));
    // paragraph.append("Calcium: " + finalCa + "%");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Magnesium: " + finalMg + "%");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Sulfur: " + finalS + "%");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Chlorine: " + finalCl + "%");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Iron: " + finalFe + "%");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Zinc: " + finalZn + "%");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Copper: " + finalCu + "%");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Manganese: " + finalMn + "%");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Molybdenum: " + finalMo + "%");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Boron: " + finalB + "%");
    // paragraph.append(document.createElement("br"));
    paragraph.append(document.createElement("br"));
    paragraph.append("Nitrogen: " + finalN * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Phosphorus: " + finalP * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Potassium: " + finalK * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    // paragraph.append("Calcium: " + finalCa * 10000 + "ppm");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Magnesium: " + finalMg * 10000 + "ppm");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Sulfur: " + finalS * 10000 + "ppm");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Chlorine: " + finalCl * 10000 + "ppm");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Iron: " + finalFe * 10000 + "ppm");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Zinc: " + finalZn * 10000 + "ppm");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Copper: " + finalCu * 10000 + "ppm");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Manganese: " + finalMn * 10000 + "ppm");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Molybdenum: " + finalMo * 10000 + "ppm");
    // paragraph.append(document.createElement("br"));
    // paragraph.append("Boron: " + finalB * 10000 + "ppm");

    solutionContainer.appendChild(paragraph);

})


