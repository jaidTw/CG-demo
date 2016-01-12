function rotateXZ3(angle) {
    var c = Math.cos(radians(angle))
    var s = Math.sin(radians(angle))
    return mat3(vec3(c, 0, -s), vec3(0, 1, 0), vec3(s, 0, c))
}

function multMatVec(Mat, vec) {
    var result = subtract(vec, vec)
    for(var i = 0; i < vec.length; ++i)
        for(var j = 0; j < Mat[0].length; ++j)
            result[i] += Mat[i][j] * vec[j]
    return result
}

function sMul(scal, vec) {
    var res = []
    for(var i = 0; i < vec.length; ++i)
        res[i] = scal * vec[i]
    return res
}