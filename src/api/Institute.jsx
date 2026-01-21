const apiUrl='https://696fb3c9a06046ce61879cea.mockapi.io/institute'

export function getAllInstitute(setData){
    fetch(apiUrl).then(res=>res.json()).then(res=>setData(res))
}