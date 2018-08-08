/****************************************
* canvas relevant methods
* created by chaixiaoduo@126.com
* 2018-06-30 21:26:41
****************************************/
import * as cf from '../config/config'
import store from '../store'
export default class CanvasUtils {

    /**
     * Draw a grid
     * @param {object} canvasElement canvas element
     */
    public drawGrid (canvasElement: any): void{   
        
        const backgroundGird = store.getState().top.get('backgroundGird')    
        const el = canvasElement
        let w:number = el.canvas.width
        let h:number = el.canvas.height
        for(let i = 0; i < Math.ceil(w / backgroundGird); i++){
            for(let j = 0; j < Math.ceil(h / backgroundGird); j++){
                let  a
                if(i % 2 == 0){
                    if(j % 2 == 0){
                        a = cf.BACKGROUND_COLOR.light
                    }else {
                        a = cf.BACKGROUND_COLOR.dark
                    }
                }else {
                    if(j % 2 == 0){
                        a = cf.BACKGROUND_COLOR.dark
                    }else {
                        a = cf.BACKGROUND_COLOR.light
                    }
                }
                el.fillStyle = a
                el.fillRect(i * backgroundGird, j * backgroundGird,backgroundGird,backgroundGird)
            }
        }
    }

    public drawRect() {
        
    }

}