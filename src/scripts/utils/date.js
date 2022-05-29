const convertDate = (datetime) => {
    let y = datetime.slice(0,4)
    let m = datetime.slice(4,6)
    let d = datetime.slice(6,8)
    return `${d} - ${m} - ${y}`
}
const dateOnly = (datetime) => {
    return datetime.slice(6,8)
}
module.exports =  {convertDate , dateOnly};