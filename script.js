function calculateResult() {
    let name = document.getElementById("name").value;
    let sub1 = parseFloat(document.getElementById("sub1").value);
    let sub2 = parseFloat(document.getElementById("sub2").value);
    let sub3 = parseFloat(document.getElementById("sub3").value);

    if (name === "" || isNaN(sub1) || isNaN(sub2) || isNaN(sub3)) {
        document.getElementById("result").innerHTML = "⚠️ Please fill all fields correctly!";
        return;
    }

    let total = sub1 + sub2 + sub3;
    let average = total / 3;
    let grade;

    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "Fail";

    document.getElementById("result").innerHTML =
        `👩‍🎓 Student: <b>${name}</b><br>
         📊 Total: ${total}<br>
         📈 Average: ${average.toFixed(2)}<br>
         🏆 Grade: ${grade}`;
}
