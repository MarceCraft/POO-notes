# POO-notes
Mis apuntes del curso de poo 

Si solo se desea recorrer una lista de JSON es de esta forma
```
const data = fetch(`url_api`);
data
.then(lista => {
    for (const element of lista) {
        console.log(...element)
    }
})
```