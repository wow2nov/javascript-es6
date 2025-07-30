let height = undefined;
let result = check(height);

function check(height) {
    return height ?? "height is not defined";
}


console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
