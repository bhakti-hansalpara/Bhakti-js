function getLocalISOTime(twDate){
    var d=new Date (twDate);
    var utcd=Date.UTC(d.getFullYear(), d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),
    d.getSeconds(),d.getMilliseconds());
}

const d = new Date(0);

console.log(d.toISOString()); // "1970-01-01T00:00:00.000Z"
