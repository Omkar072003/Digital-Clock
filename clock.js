const showTime = () => {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let session = 'AM'
    setTimeout(showTime, 1000)
    if (hour==0) {
        hour = 12
    }

    if (hour > 12) {
        hour = hour - 12
        session = 'PM'
    }

    // if (hour < 10) {
    //     hour = "0" + hour
    // }

    // if (minute < 10) {
    //     minute = "0" + minute
    // }

    // if (second < 10) {
    //     second = "0" + second
    // }

    hour = (hour < 10) ? "0" + hour : hour

    minute = (minute < 10) ? "0" + minute : minute

    second = (second < 10) ? "0" + second : second

    document.getElementById('digitalclock').innerHTML = hour + ":" + minute + ":" + second
}