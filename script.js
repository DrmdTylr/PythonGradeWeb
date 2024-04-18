function grade_ammend() {
    input_text = parseInt(document.getElementById("grade").value)
    outOf=100
    canMarks=outOf*(input_text/100)
    finalGradeIncr = (12.67*(outOf/100)) - (0.0756*(canMarks))
    totalGrade = finalGradeIncr+canMarks
    output_div = document.getElementById("output")
    output_div.textContent = Math.round((totalGrade/outOf)*100)
}