let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

document.write(`<ul>`);
for(let cadaMes=0; cadaMes < meses.length; cadaMes++){
    document.write(`<li>${ meses[cadaMes] }</li>`);
}
document.write(`</ul>`);