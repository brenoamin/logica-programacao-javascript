const celular = 99918888;
let stringcelular = `${celular}`
arrayNumb = stringcelular.split("")
if (arrayNumb.length < 9) {
    arrayNumb.splice(0, 0, "9")
    arrayNumb.splice(1, 0, " ")
    arrayNumb.splice(6, 0, "-")
    let formatNumb = ""
    for (let numb of arrayNumb) {
        formatNumb += numb;
    }
    console.log(formatNumb)
}
else {
    arrayNumb.splice(2, 0, "9")
    arrayNumb.splice(0, 0, "(")
    arrayNumb.splice(3, 0, ")")
    arrayNumb.splice(4, 0, " ")
    arrayNumb.splice(6, 0, " ")
    arrayNumb.splice(11, 0, "-")
    let formatNumb = ""
    for (let numb of arrayNumb) {
        formatNumb += numb;
    }
    console.log(formatNumb)
}