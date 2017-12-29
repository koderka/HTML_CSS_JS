function calculateTip(amount, rating) {
    
    var tip = 0;
    switch (rating) {
        case'Very good service':
            tip = 0.25 * amount;
            break;
        case'Good service':
            tip = 0.2 * amount;
            break;
        case'Neutral service':
            tip = 0.15 * amount;
            break;
        case'Bad service':
            tip = 0;
            break;
        default:
            return "Opis nieczytelny";
            
    }
    return tip;
}

console.log("Very good service", calculateTip(100, "Very good service"));
console.log("Good service", calculateTip(100, "Good service"));
console.log("Neutral service", calculateTip(100, "Neutral service"));
console.log("Bad service", calculateTip(100, "Bad service"));
console.log("Opis nieczytelny", calculateTip(100, "I don't know"));