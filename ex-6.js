let height = undefined;
let result;

function newHeight (height) {
return height ?? "Height is not defined"
    
}
result = newHeight(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
