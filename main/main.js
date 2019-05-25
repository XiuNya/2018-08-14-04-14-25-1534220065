/*function num2lcd(num){
    switch(nunm){
        case 0:return ["._.", "|.|", "|_|"];
        case 1:return ["...", "..|", "..|"];
        case 2:return ["._.", "._|", "|_."];
        case 3:return ["._.", "._|", "._|"];
        case 4:return ["...", "|_|", "..|"];
        case 5:return ["._.", "|_.", "._|"];
        case 6:return ["._.", "|_.", "|_|"];
        case 7:return ["._.", "..|", "..|"];
        case 8:return ["._.", "|_|", "|_|"];
        case 9:return ["._.", "|_|", "..|"];
    }
}
function union(lcdTotal,led){
    lcdTotal[0]=
}*/
module.exports = function main(num) {
    //console.log("Debug Info");
    var result=[];
    //var num_string=num.tostring(10);
    var i;
    var num2lcd_upper=  ["._.","...","._.","._.","...","._.","._.","._.","._.","._."];
    var num2lcd_middle= ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
    var num2lcd_lower=  ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
    var result_upper=[],result_middle=[],result_lower=[];
    var x;
    for(i=0;i<num.length;i++){
        //[Array#push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=example)
        x=parseInt(num[i]);
        result_upper.push(num2lcd_upper[x]);
        result_middle.push(num2lcd_middle[x]);
        result_lower.push(num2lcd_lower[x]);
    }
    //[Array#join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join?v=example)
    result=result_upper.join(' ')+'\n'+result_middle.join(' ')+'\n'+result_lower.join(' ')+'\n';
    return result;
    //return 'Hello World!';
};

