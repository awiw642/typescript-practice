interface  numberStorage {
    [value: number]: number;
}

const twoSum = (nums: number[], target: number): number[] => {
    const storage: numberStorage = {};
    let result: number[] = [];
    for (let x = 0; x < nums.length; x++) {
        const valueNeeded = target - nums[x];
        if (valueNeeded in storage) { 
            result = [storage[valueNeeded], x]
            break;
        }
        storage[nums[x]] = x;
    };
    return result;
};

export default twoSum;