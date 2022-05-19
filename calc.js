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

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

class Bottle {
    constructor(n, p, k, ca, mg, s, cl, fe, zn, cu, mn, mo, b, dilutionRate) {
        this.n = n;
        this.p = p;
        this.k = k;
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
        this.dilutionRate = dilutionRate;
    }
    makeBottle() {


    }

}

bottleButton.addEventListener("click", function(){
    let nextBottle = document.createElement("div");
    nextBottle.id = "new-bottle";
    let n = document.createElement("input");
    // n.value = "";
    nextBottle.append(n);
    let p = document.createElement("input");
    // p.value = "";
    nextBottle.append(p);
    let k = document.createElement("input");
    // k.value = "";
    nextBottle.append(k);
    let dilutionRate = document.createElement("input");
    // dilutionRate.value = "";
    nextBottle.append(dilutionRate);

    let aBottle = new Bottle(n.value, p.value, k.value, 
        // ca.value, mg.value, s.value, cl.value, fe.value, zn.value, cu.value, mn.value, mo.value, b.value, 
        dilutionRate.value);
    // let nextBottle = document.createElement("div");
    // nextBottle.append(document.createElement("input"));

    bottlesContainer.append(nextBottle);
    bottlesArray.append(aBottle);
})

let N1 = document.getElementById("N1");
let P1 = document.getElementById("P1");
let K1 = document.getElementById("K1");
let Ca1 = document.getElementById("Ca1");
let Mg1 = document.getElementById("Mg1");
let S1 = document.getElementById("S1");
let Cl1 = document.getElementById("Cl1");
let Fe1 = document.getElementById("Fe1");
let Zn1 = document.getElementById("Zn1");
let Cu1 = document.getElementById("Cu1");
let Mn1 = document.getElementById("Mn1");
let Mo1 = document.getElementById("Mo1");
let B1 = document.getElementById("B1");
let dilutionRate1 = document.getElementById("dilutionRate1");

let N2 = document.getElementById("N2");
let P2 = document.getElementById("P2");
let K2 = document.getElementById("K2");
let Ca2 = document.getElementById("Ca2");
let Mg2 = document.getElementById("Mg2");
let S2 = document.getElementById("S2");
let Cl2 = document.getElementById("Cl2");
let Fe2 = document.getElementById("Fe2");
let Zn2 = document.getElementById("Zn2");
let Cu2 = document.getElementById("Cu2");
let Mn2 = document.getElementById("Mn2");
let Mo2 = document.getElementById("Mo2");
let B2 = document.getElementById("B2");
let dilutionRate2 = document.getElementById("dilutionRate2");

let bottle1 = new Bottle(N1, P1, K1, Ca1, Mg1, S1, Cl1, Fe1, Zn1, Cu1, Mn1, Mo1, B1, dilutionRate1);
let bottle2 = new Bottle(N2, P2, K2, Ca2, Mg2, S2, Cl2, Fe2, Zn2, Cu2, Mn2, Mo2, B2, dilutionRate2);

submitButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    let finalN = (bottle1.n.value * bottle1.dilutionRate.value + bottle2.n.value * bottle2.dilutionRate.value) * 0.001;
    let finalP = (bottle1.p.value * bottle1.dilutionRate.value + bottle2.p.value * bottle2.dilutionRate.value) * 0.001;
    let finalK = (bottle1.k.value * bottle1.dilutionRate.value + bottle2.k.value * bottle2.dilutionRate.value) * 0.001;
    let finalCa = (bottle1.ca.value * bottle1.dilutionRate.value + bottle2.ca.value * bottle2.dilutionRate.value) * 0.001;
    let finalMg = (bottle1.mg.value * bottle1.dilutionRate.value + bottle2.mg.value * bottle2.dilutionRate.value) * 0.001;
    let finalS = (bottle1.s.value * bottle1.dilutionRate.value + bottle2.s.value * bottle2.dilutionRate.value) * 0.001;
    let finalCl = (bottle1.cl.value * bottle1.dilutionRate.value + bottle2.cl.value * bottle2.dilutionRate.value) * 0.001;
    let finalFe = (bottle1.fe.value * bottle1.dilutionRate.value + bottle2.fe.value * bottle2.dilutionRate.value) * 0.001;
    let finalZn = (bottle1.zn.value * bottle1.dilutionRate.value + bottle2.zn.value * bottle2.dilutionRate.value) * 0.001;
    let finalCu = (bottle1.cu.value * bottle1.dilutionRate.value + bottle2.cu.value * bottle2.dilutionRate.value) * 0.001;
    let finalMn = (bottle1.mn.value * bottle1.dilutionRate.value + bottle2.mn.value * bottle2.dilutionRate.value) * 0.001;
    let finalMo = (bottle1.mo.value * bottle1.dilutionRate.value + bottle2.mo.value * bottle2.dilutionRate.value) * 0.001;
    let finalB = (bottle1.b.value * bottle1.dilutionRate.value + bottle2.b.value * bottle2.dilutionRate.value) * 0.001;

    paragraph.append("Nitrogen: " + finalN + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Phosphorus: " + finalP + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Potassium: " + finalK + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Calcium: " + finalCa + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Magnesium: " + finalMg + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Sulfur: " + finalS + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Chlorine: " + finalCl + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Iron: " + finalFe + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Zinc: " + finalZn + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Copper: " + finalCu + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Manganese: " + finalMn + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Molybdenum: " + finalMo + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append("Boron: " + finalB + "%");
    paragraph.append(document.createElement("br"));
    paragraph.append(document.createElement("br"));
    paragraph.append("Nitrogen: " + finalN * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Phosphorus: " + finalP * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Potassium: " + finalK * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Calcium: " + finalCa * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Magnesium: " + finalMg * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Sulfur: " + finalS * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Chlorine: " + finalCl * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Iron: " + finalFe * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Zinc: " + finalZn * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Copper: " + finalCu * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Manganese: " + finalMn * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Molybdenum: " + finalMo * 10000 + "ppm");
    paragraph.append(document.createElement("br"));
    paragraph.append("Boron: " + finalB * 10000 + "ppm");

    solutionContainer.appendChild(paragraph);
})
