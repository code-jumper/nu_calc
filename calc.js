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
}

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
    let finalN = bottle1.n.value * bottle1.dilutionRate.value + bottle2.n.value * bottle2.dilutionRate.value;
    let finalP = bottle1.p.value * bottle1.dilutionRate.value + bottle2.p.value * bottle2.dilutionRate.value;
    let finalK = bottle1.k.value * bottle1.dilutionRate.value + bottle2.k.value * bottle2.dilutionRate.value;
    let finalCa = bottle1.ca.value * bottle1.dilutionRate.value + bottle2.ca.value * bottle2.dilutionRate.value;
    let finalMg = bottle1.mg.value * bottle1.dilutionRate.value + bottle2.mg.value * bottle2.dilutionRate.value;
    let finalS = bottle1.s.value * bottle1.dilutionRate.value + bottle2.s.value * bottle2.dilutionRate.value;
    let finalCl = bottle1.cl.value * bottle1.dilutionRate.value + bottle2.cl.value * bottle2.dilutionRate.value;
    let finalFe = bottle1.fe.value * bottle1.dilutionRate.value + bottle2.fe.value * bottle2.dilutionRate.value;
    let finalZn = bottle1.zn.value * bottle1.dilutionRate.value + bottle2.zn.value * bottle2.dilutionRate.value;
    let finalCu = bottle1.cu.value * bottle1.dilutionRate.value + bottle2.cu.value * bottle2.dilutionRate.value;
    let finalMn = bottle1.mn.value * bottle1.dilutionRate.value + bottle2.mn.value * bottle2.dilutionRate.value;
    let finalMo = bottle1.mo.value * bottle1.dilutionRate.value + bottle2.mo.value * bottle2.dilutionRate.value;
    let finalB = bottle1.b.value * bottle1.dilutionRate.value + bottle2.b.value * bottle2.dilutionRate.value;

    paragraph.innerText = finalN
    solutionContainer.appendChild(paragraph);
})
