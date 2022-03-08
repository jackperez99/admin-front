$(document).ready(function(){
    $(document).ready(function() {
        $('#listClientes').DataTable( {
            "ajax": {
                type:'get',
                url:"http://daiquiriclub.com/api/clientes",
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
                {data: 'nombres'},
                {data: 'apellidos'},
                {data: 'correo_electronico'},
                {data: 'telefono'},
                {
                    "targets": 6,
                    "render": function ( data, type, row ) {
                        return "<a href='#'>Editar</a> | <a href='#'>Eliminar</a>";
                    },            
                },
            ]
        } );
    } );
});
