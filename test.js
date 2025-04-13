const f = ()=>{
    for(var i=0;i<5;i++){
        setTimeout((function(i){return ()=>{console.log(i)}})(i),0)
    }
    }
f()