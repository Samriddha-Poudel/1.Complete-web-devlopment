const grade = 'E';

switch (grade) {
    case "A":
        console.log("A -> good");
        break;

    case "B":
        console.log("B -> Good, keep learning");
        break;

    case "C":
        console.log("C -> Need improvement");
        break;

    case "D":
    case "E":
        console.log(" Not good ");
        break;

        default:
            console.log("Invalid grade");


}