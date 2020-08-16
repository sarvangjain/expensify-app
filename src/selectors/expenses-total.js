// Get sum of visible expenses

export default (expenses) => {
    return expenses ?  
        (expenses
            .map((expense) => expense.amount))
            .reduce((a, b) => a + b, 0) 
        : 0;
}