const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (accumulator, item) => {
    return (accumulator += item);
};
const totalBatteries = batteryBatches.reduce(function(accumulator, element){return accumulator += element}, 0)