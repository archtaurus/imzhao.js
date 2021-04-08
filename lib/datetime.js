module.exports = {
    now: {
        get year() {
            return new Date().getFullYear()
        },
        get month() {
            return new Date().getMonth() + 1
        },
        get day() {
            return new Date().getDate()
        },
        get hour() {
            return new Date().getHours()
        },
        get minute() {
            return new Date().getMinutes()
        },
        get second() {
            return new Date().getSeconds()
        },
        get millisecond() {
            return new Date().getMilliseconds()
        },
        get timestamp() {
            return Date.now()
        },
        get timestampSecond() {
            return Math.floor(Date.now() / 1000)
        },
        get dateString() {
            return `${this.year}年${this.month.toString().padStart(2, '0')}月${this.day.toString().padStart(2, '0')}日`
        },
        get timeString() {
            return `${this.hour.toString().padStart(2, '0')}时${this.minute.toString().padStart(2, '0')}分${this.second.toString().padStart(2, '0')}秒`
        },
        get datetimeString() {
            return new Intl.DateTimeFormat('zh-CN', {
                calendar: 'chinese',
                year: 'numeric', month: 'numeric', day: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric',
                dateStyle: 'long',
                timeStyle: 'long',
                hour12: false
            }).format(new Date())
            return `${this.dateString} ${this.timeString}`
        }
    },
}
