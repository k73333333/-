var App = {
    template:`
    <div>我是一个入口组件</div>
    `
}
export default App;//抛出
export var num1=2;//作为一整个对象key导出
var num2 = 3;
export {num2};
export function add(x,y){
    return console.log(x+y);
    
}