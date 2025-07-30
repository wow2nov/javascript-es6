let height = undefined;
let result;
const checkHeight = (height) => {
    return height ?? "Height is not defined";
};
result = checkHeight(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
