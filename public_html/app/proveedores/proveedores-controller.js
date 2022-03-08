$(document).ready(function(){
    $(document).ready(function() {
        $('#listProveedores').DataTable( {
            "ajax": {
                type:'get',
                url:"http://daiquiriclub.com/api/proveedores",
                dataSrc: 'data',
                cache: true
            },
            columns:[
                {
                    "targets": 0,
                    "render": function ( data, type, row ) {

                        //console.log(row);

                        return moment(row.created_at).format('DD/MM/YYYY HH:MM:SS');
                    },            
                },
                {data: 'codigo'},
                {data: 'razon_social'},
                {data: 'ruc'},
                {data: 'direccion'},
                {data: 'correo_electronico'},
                {data: 'telefono'},
                {
                    "targets": 7,
                    "render": function ( data, type, row ) {
                        return "<a href='#'>Editar</a> | <a href='#'>Eliminar</a>";
                    },            
                },
            ]
        } );
    } );
});
