interface NumberCategories {
    positive: number[];
    negative: number[];
    zero: number[];
}

const plusMinus = (arr: number[]): number[] => {
    let numberCategories: NumberCategories = {
        positive: [],
        negative: [],
        zero: []
    };
    numberCategories = arr.reduce((acc, curr) => {
        if (curr > 0) {
            acc.positive.push(curr);
        } else if (curr < 0) {
            acc.negative.push(curr);
        } else {
            acc.zero.push(curr);
        }
        return acc;
    }, numberCategories);

    const positiveRatio = numberCategories.positive.length / arr.length;
    const negativeRatio = numberCategories.negative.length / arr.length;
    const zeroRatio = numberCategories.zero.length / arr.length;
    return [positiveRatio, negativeRatio, zeroRatio];
}

export default plusMinus;