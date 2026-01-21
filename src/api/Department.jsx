
const apiUrl='https://696fb3c9a06046ce61879cea.mockapi.io/department'

export function getAllDepartment(setData){
    fetch(apiUrl).then(res=>res.json()).then(res=>setData(res))
}