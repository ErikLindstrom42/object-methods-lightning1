let dateVisited = "visitDate"
let owed = "amountBilled"
let patient = "patientName"


const doctorsBill = {
    officeName: "turn and cough LLC",
    streetAddress:"123 hooper st",
    doctorName:"Doc Holiday",
    patientName:"Butch Cassidy",
    visitDate:"11/8/1992",
    amountBilled:"$8000000.02",
    dueDate:"11/7/1992"
}


dateVisited = doctorsBill["visitDate"]
owed = doctorsBill["amountBilled"]
patient = doctorsBill["patientName"]


console.log(dateVisited,owed,patient)

for(const value of Object.values(doctorsBill)) {
    console.log(value)
}