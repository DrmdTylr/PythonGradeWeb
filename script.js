fetch("./header/header.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.getElementById("myTopnav").innerHTML = data;
});

function grade_ammend() {
    input_text = parseInt(document.getElementById("grade").value)
    outOf=100
    canMarks=outOf*(input_text/100)
    finalGradeIncr = (12.67*(outOf/100)) - (0.0756*(canMarks))
    totalGrade = finalGradeIncr+canMarks
    output_div = document.getElementById("output")
    output_div.textContent = Math.round((totalGrade/outOf)*100)

    totalmarks = document.getElementById("total").value
    if (totalmarks == 0) {
        output1_div = document.getElementById("output1")
        output1_div.textContent = ""
    }
    else {
        marks = totalmarks * (input_text/100)
        output1_div = document.getElementById("output1")
        output1_div.textContent = "Total marks: " + Math.round(marks)
    }
}

function showInput() {
    var checkbox = document.getElementById("check").checked

    if (checkbox == true) {
        document.getElementById("h2mark").style.display = "block"
        document.getElementById("total").style.display = "block"
    }
    else if (checkbox == false) {
        document.getElementById("h2mark").style.display = "none"
        document.getElementById("total").style.display = "none"
    }
}

const hlvl = ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"]
const olvl = ["O1", "O2", "O3", "O4", "O5", "O6", "O7", "O8"]
const perc = [90, 80, 70, 60, 50, 40, 30, 0]


function grade(id) {
    hgrade = document.getElementById(id).value
    if (document.getElementById("h_" + id).checked == true) {
        for (let i = 0; i < 8; i++) {
            if (hgrade > perc[i]) {
                document.getElementById(id + "h").textContent = hlvl[i]
                break
            }
        }
    }
    else if (document.getElementById("o_" + id).checked == true) {
        for (let i = 0; i < 8; i++) {
            if (hgrade > perc[i]) {
                document.getElementById(id + "h").textContent = olvl[i]
                break
            }
        }
    }
}

function radio(id) {
    const idArr = id.split("_")
    newid = idArr[1]

    if (document.getElementById(id).checked == true) {
        if (id === "h_" + newid) {
            document.getElementById("holder_" + newid).style.backgroundColor = "rgb(253, 85, 85)"
        }
        else if (id === "o_" + newid) {
            document.getElementById("holder_" + newid).style.backgroundColor = "rgb(85, 141, 253)"
        }
    }
    
    grade(newid)
}

function newSubject() {
    for (let i = 1; i < 10; i++) {
        if (document.getElementById("holder_opt" + i) === null) {
            console.log(document.getElementById("opt" + i))
            optionnum = i
            break
        }
        if (document.getElementById("holder_opt9") != null) {
            alert("Cannot add more subjects")
            return
        }
        
    }

    container = document.getElementById("container")
    var el = document.createElement("div");
    el.className = "gradiv col-md-2 col-sm-4";
    container.appendChild(el)

    var elh1 = document.createElement("h1")
    elh1.textContent = "Opt " + optionnum
    el.appendChild(elh1)

    var elholder = document.createElement("div")
    elholder.className = "row holder"
    elholder.id = "holder_opt" + optionnum
    el.appendChild(elholder)

    
}

