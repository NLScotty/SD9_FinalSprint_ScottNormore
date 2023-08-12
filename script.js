// I function that I made to better display cost as a dollar amount. Used in all the functions below
function formatCost(cost) {
    return "$"+cost.toFixed(2)
}

// Functions that I use to iterate over the JSON File

function addDataToPage(data) {
    data.forEach(item => {
        document.getElementById("inventoryTable").innerHTML+=`<tr><td>${item.id}</td><td>${item.name}</td><td>${formatCost(item.cost)}</td><td>${item.qty}</td></tr>`            
    })
}
function consoleLogData(data) {
    data.forEach(item => {
        console.log("Item ID: "+item.id+", Item Name: "+item.name+", Item Cost: "+formatCost(item.cost)+", Item Quantity: "+item.qty)
    });
}
function logInventoryCost(data) {
    totalInventoryCost = 0  
    data.forEach(item => {
        totalInventoryCost += (item.qty * item.cost)
    });
    console.log("The Total Cost of Inventory is: "+formatCost(totalInventoryCost))
}


fetch('inventory.json')
    .then(response => response.json())
    .then(data =>{
        addDataToPage(data)
        consoleLogData(data)
        console.log("")
        logInventoryCost(data)
    })