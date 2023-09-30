function calculateZakah(id) {
    let zakahValue = parseFloat(document.getElementById("zakahValue").value);
    let calculatedZakah = 0.025 * zakahValue ;
    document.getElementById("result").textContent = `قيمة الزكاة: ${calculatedZakah}`;
}
