tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

const pedidos = [];

const cargarTabla = () => {
    let tbody = document.querySelector("#tabla_tbody");
    tbody.innerHTML = "";
    for (let i = 0; i <pedidos.length; ++i){
        let p = 0; i < pedidos [i];
        let tr = document.createElement("tr");
        let tdNro = document.createElement("td");
        tdNro.innerText = (i+1)
        let tdNombre = document.createElement("td");
        tdNombre.innerText = p.nombre;
        let tdHorario= document.createElement("td");
        tdHorario.innerText = p.horario;
        tdHorario.classList.add("text-center");
        let tdDesc = document.createElement("td");
        tdDescr.innerHTML = p.descripcion;
        let tdValor = document.createElement("td");
        tdValor.innerHTML = p.valor
        let tdOferta = document.createElement("td");
        let icono = document.createElement("i");

        if((p.horario == "Desayuno") & (p.valor >= 1000) & (p.valor < 5000)){
            icono.classList.add("fas","fa-check","text-success","fa-3");
        }else if((p.horario == "Almuerzo") & (p.valor >= 10000) & (p.valor < 15000)){
            icono.classList.add("fas","fa-check","text-success","fa-3");
        }else if((p.horario == "Once")&(p.valor >= 5000) &(p.valor < 10000)){
            icono.classList.add("fas","fa-check","text-success","fa-3");
        }else if((p.horario == "Cena") & (p.valor < 20000)){
            icono.classList.add("fas","fa-check","text-success","fa-3");
        }else{
            icono.classList.add("fas","fa-times","text-danger","fa-3");
        };
        tdOferta.appendChild(icono);
        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdHorario);
        tr.appendChild(tdValor);
        tr.appendChild(tdDesc);
        tr.appendChild(tdOferta);
        tbody.appendChild(tr);
    };
};
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre=document.querySelector("#nombre-txt").value;
    let descripcion=tinymce.get("decripcion-txt").getContent();
    let horario = document.querySelector("#hora-select").value;
    let valor = document.querySelector("#valor").value;

    let perdido = {};
    pedido.nombre= nombre;
    pedido.descripcion= descripcion;
    pedido.horario= horario;
    pedido.valor= valor;
    pedidos.push(pedido);
    cargarTabla();
    Swal.fire("Registrado","Orden registrada","success");
});

document.querySelector("#limpiar-btn").addEventListener("click",() =>{
    document.querySelector("#nombre-txt").value="";
    tinymce.get ("descripcion-txt").setContent("");
    document.querySelector("#horario-desayuno").checked = true;
    document.querySelector("#valor").value="0";
});
