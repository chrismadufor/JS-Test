// console.log("We are good to go")

function math(num1, num2, operator){
    let val = eval(num1 + operator + num2)
    console.log(val)
}
// math('2','2','+')

function gameDifference(p1, p2) {
    let result = [0, 0]
    for(i = 0; i < p1.length; i++) {
        if((p1[i] - p2[i]) > 0) result[0]++
        else if((p1[i] - p2[i]) < 0) result[1]++
    }
    console.log(result)
}
// gameDifference([1,4,7,5,4], [0,3,2,4,4])

function kangaroo(x1, x2, v1, v2) {
    // x1- start position for the first Kangaroo; v1 - jump distance for first Kangaroo
    // x2- start position for the second Kangaroo; v2 - jump distance for second Kangaroo

    let x = 1
    let possible = false
    // Remove all impossibilities
    if (x1 === x2 && v1 !== v2) console.log('NO')
    else if (x1 < x2 && v1 <= v2) console.log('NO')
    else if (x1 > x2 && v1 >= v2) console.log('NO')
    else {
        currPos1 = x1 + v1
        currPos2 = x2 + v2
        while(x < 1000) {   //using 1000 because my PC will hang 
            if (currPos1 === currPos2) {
                console.log("YES")
                possible = true
                break
            }
            else {
                currPos1 = currPos1 + v1
                currPos2 = currPos2 + v2
                x++
            }
        }
        if (!possible) console.log("NO")    
    }
    
}
kangaroo(1,5,2,1)
