let p = new Promise(function(crumpiPromessa){
    crumpiPromessa(['Ana','Bia', 'Carlos', 'Daniel'])
})

p
.then(valor => valor[0])
.then(valor => console.log(valor) )