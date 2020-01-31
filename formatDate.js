function FormatDate(date, type) {

    let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + (d.getUTCDate()),
    year = d.getUTCFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    if(type === 'yyyy-mm-dd') return [year, month, day].join('-');
    else if(type === 'dd-mm-yyyy') return [day, month, year].join('-');
    else if(type === 'mm-dd-yyyy') return [month, day, year].join('-');
    else if(type === 'yyyy/mm/dd') return [year, month, day].join('/');
    else if(type === 'dd/mm/yyyy') return [day, month, year].join('/');
    else if(type === 'mm/dd/yyyy') return [month, day, year].join('/');
}
