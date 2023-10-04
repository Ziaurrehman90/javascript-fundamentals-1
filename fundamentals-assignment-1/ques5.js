// let package1="standard";
// let package2="express";
// let package3="overnight";
let package="standard";
switch(package){
    case "standard":
        console.log("It might take 3-5 days ");
        break;
    case "express":
        console.log("It might take 1-2 days ");
        break;
    case "overnight":
        console.log("it might be delivered in the next day");
        break;
    default:
        console.log("All is good");
}