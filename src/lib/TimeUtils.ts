/****************************************
* Time tool    
* created by chaixiaoduo@126.com
* 2018-06-27 11:34:31
****************************************/

export default class TimeUtils {

    // Built-in current time objects
    private nowTime: number

    constructor() {
        this.nowTime = +new Date()
    }

    private formatTime (v:number = this.nowTime):string{
        let e,Y,M,D,h,m,s
        e = new Date(v)
        Y = e.getFullYear();
        M = (e.getMonth()+1)>9?e.getMonth()+1:'0'+(e.getMonth()+1);
        D = e.getDate()>9?e.getDate():'0'+e.getDate();
        h = e.getHours()>9?e.getHours():'0'+e.getHours();
        m = e.getMinutes()>9?e.getMinutes():'0'+e.getMinutes();
        s = e.getSeconds()>9?e.getSeconds():'0'+e.getSeconds();
        return Y+'-'+M+'-'+D+' '+h+':'+m+':'+s;
    }

    public getTime (v?: number){
        return this.formatTime(v)
    }

}