var obj = document.createElement("span");
obj.innerHTML = "<span id=\"showtime\"></span>";
document.querySelector(".footer_custom_text").appendChild(obj);
​
function show_date_time() { //创建函数-show_date_time()
    window.setTimeout("show_date_time()", 1000); //设置每隔1000毫秒(也就是1秒)执行一次函数show_date_time()
    BirthDay = new Date("08/26/2024 20:00:00"); //利用New新建一个固定Date对象，网站创建运行起始日期，修改这个日期即可
    today = new Date(); //利用New新建一个当前日期时间的Date对象
    timeold = (today.getTime() - BirthDay.getTime()); //计算时间间隔，取当前日期对象的毫秒数与固定日期对象的毫秒数差值。差值标记为过去的时间即网站运行的时间
    //利用时间间隔(毫秒)分别求出天数、小时、分钟、秒
    sectimeold = timeold / 1000; //转换毫秒单位为秒
    secondsold = Math.floor(sectimeold); //利用Math对象的floor方法取出以秒为单位的整数时间间隔
    msPerYear = 365 * 24 * 60 * 60 * 1000; //计算出每年所需的毫秒数 
    e_yearsold = timeold / msPerYear; //利用以毫秒为单位的时间间隔计算出运行的年数，结果为带有小数的值
    yearsold = Math.floor(e_yearsold); //利用Math对象的floor方法将运行的年数化为整数 
    e_daysold = (e_yearsold - yearsold) * 365; //计算出带有小数的运行天数
    daysold = Math.floor(e_daysold); //利用Math对象的floor方法将运行的天数化为整数
    e_hrsold = (e_daysold - daysold) * 24; //计算出带有小数的运行小时数
    hrsold = Math.floor(e_hrsold); //利用Math对象的floor方法将运行的小时数化为整数
    e_minsold = (e_hrsold - hrsold) * 60; //计算出带有小数的运行分钟数
    minsold = Math.floor((e_hrsold - hrsold) * 60); //利用Math对象的floor方法将运行的分钟数化为整数
    seconds = Math.floor((e_minsold - minsold) * 60); //计算出运行的秒数
    if (yearsold == 0) { //判断运行时间是否大于一年
        showtime.innerHTML = "小站勉强运行了：" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒"; // 运行时间小于一年不显示运行年数
    } else {
        showtime.innerHTML = "小站勉强运行了：" + yearsold + "年" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
    }
​
}
show_date_time(); //调用show_date_time()