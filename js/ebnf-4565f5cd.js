var i={slash:0,parenthesis:1},n={comment:0,_string:1,characterClass:2};const l={startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(e,c){if(!!e){switch(c.stack.length===0&&(e.peek()=='"'||e.peek()=="'"?(c.stringType=e.peek(),e.next(),c.stack.unshift(n._string)):e.match("/*")?(c.stack.unshift(n.comment),c.commentType=i.slash):e.match("(*")&&(c.stack.unshift(n.comment),c.commentType=i.parenthesis)),c.stack[0]){case n._string:for(;c.stack[0]===n._string&&!e.eol();)e.peek()===c.stringType?(e.next(),c.stack.shift()):e.peek()==="\\"?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return c.lhs?"property":"string";case n.comment:for(;c.stack[0]===n.comment&&!e.eol();)c.commentType===i.slash&&e.match("*/")||c.commentType===i.parenthesis&&e.match("*)")?(c.stack.shift(),c.commentType=null):e.match(/^.[^\*]*/);return"comment";case n.characterClass:for(;c.stack[0]===n.characterClass&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(".")||c.stack.shift();return"operator"}var t=e.peek();switch(t){case"[":return e.next(),c.stack.unshift(n.characterClass),"bracket";case":":case"|":case";":return e.next(),"operator";case"%":if(e.match("%%"))return"header";if(e.match(/[%][A-Za-z]+/))return"keyword";if(e.match(/[%][}]/))return"bracket";break;case"/":if(e.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(e.match(/[\][a-z]+/))return"string.special";case".":if(e.match("."))return"atom";case"*":case"-":case"+":case"^":if(e.match(t))return"atom";case"$":if(e.match("$$"))return"builtin";if(e.match(/[$][0-9]+/))return"variableName.special";case"<":if(e.match(/<<[a-zA-Z_]+>>/))return"builtin"}return e.match("//")?(e.skipToEnd(),"comment"):e.match("return")?"operator":e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?e.match(/(?=[\(.])/)?"variable":e.match(/(?=[\s\n]*[:=])/)?"def":"variableName.special":["[","]","(",")"].indexOf(e.peek())!=-1?(e.next(),"bracket"):(e.eatSpace()||e.next(),null)}}};export{l as ebnf};
