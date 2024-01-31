function addphone(id,marca,modelo,condicao,preco,imagem){
    let phone = {"id":id,
       "marca":marca,
        "modelo":modelo,
         "condicão":condicao,
          "preco":preco,
           "imagem":imagem,
            "vendido":"no" 
          }
      
          console.log(phone)
      var json = JSON.stringify(phone)
      //console.log(json)
       let fileContents = fs.readFileSync('./public/Mobile.json');
        
        fileContents = JSON.parse(fileContents);
        //console.log(json)
        fileContents.push(phone);
        fs.writeFileSync('./public/Mobile.json', JSON.stringify(fileContents));
        //console.log('oi')
      
      ;
    }
      
    addphone(9,"Nokia","3310","Novo","5","/images/Mobile/nokia.jpeg")