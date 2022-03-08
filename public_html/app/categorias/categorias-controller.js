var DATA_CATEGORIAS;
var CATEGORIA_TO_DELTE;

$(document).ready(function(){
    $(document).ready(function() {
        DATA_CATEGORIAS=$('#listCategorias').DataTable( {
            "ajax": {
                type:'get',
                url:"http://daiquiriclub.com/api/categorias",
                dataSrc: 'data',
                cache: true
            },
            columns:[
                {
                    "targets": 0,
                    "render": function ( data, type, row ) {

                        //console.log(row);

                        //return row.created_at;
                        return moment(row.created_at).format('DD/MM/YYYY HH.MM.SS');

                    },            
                },
                {data: 'codigo'},
                {data: 'nombre'},
                {
                    "targets": 3,
                    "render": function ( data, type, row ) {
                        return "<a href='#' onclick=\"loadEditProduct('"+row.id+"')\">Editar</a> | <a href='#' onclick=\"loadConfirmDelete('"+row.id+"');\">Eliminar</a>";
                    },            
                },
            ]
        } );
    } );
});



function updateDataTable(){
    DATA_CATEGORIAS.ajax.reload();
}
function loadConfirmDelete(id){
    CATEGORIA_TO_DELTE=id;
    $('#modalContainer1').load("/views/categorias/frm-confirm-delete.html",function(response){
        $('#frmNewCategoria').modal({ show: true, backdrop: 'static', size: 'lg', keyboard:false});
    });
}

function loadNewProduct(){

    $('#modalContainer1').load("/views/categorias/frm-new-model-categorias.html",function(response){
        $('#mdlConfirDelete').modal({ show: true, backdrop: 'static', size: 'lg', keyboard:false});
    });
}
function loadEditProduct(id){

    $('#modalContainer1').load("/views/categorias/frm-edit-categoria.html",function(response){
        loadDataCategoria(id);

    });

}

function loadDataCategoria(id){

    $.ajax({
        method: "GET",
        url:"http://daiquiriclub.com/api/categorias/"+id
          })
      .done(function(response){

        $("#txtId").val(response.data.id);
        $("#txtCodigo").val(response.data.codigo);
        $("#txtNombre").val(response.data.nombre);

        $('#mdlEditCategoria').modal({ show: true, backdrop: 'static', size: 'lg', keyboard:false});

      });      


    

}