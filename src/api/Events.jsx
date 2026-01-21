

const apiUrl='https://696fbeb5a06046ce6187bcdb.mockapi.io/events'

export function getAllEvents(setData){
    fetch(apiUrl).then(res=>res.json()).then(res=>setData(res))
}