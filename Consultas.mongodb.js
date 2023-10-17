use('TiendasD1');


// $EQ : 
 db.getCollection('Clientes').find({Edad : {$eq:23}});

 db.getCollection('Clientes').find({Edad : {$eq:21}});

 db.getCollection('Clientes').find({Edad : {$eq:33}});


 //$LT :
 db.getCollection('Clientes').find({Edad : {$lt:33}});

 db.getCollection('Clientes').find({Edad : {$lt:23}});

 db.getCollection('Clientes').find({Edad : {$lt:13}});


 //$GT : 
 db.getCollection('Clientes').find({Edad : {$gt:13}});

 db.getCollection('Clientes').find({Edad : {$gt:29}});

 db.getCollection('Clientes').find({Edad : {$gt:18}});

 //$GTE : 
 db.getCollection('Clientes').find({Edad : {$gte:33}});

 db.getCollection('Clientes').find({Edad : {$gte:23}});

 db.getCollection('Clientes').find({Edad : {$gte:13}});


 //$NE : diferente que : 
 db.getCollection('Proveedores').find({name:{$ne:'luis'}});

 db.getCollection('Proveedores').find({name:{$ne:'Leonardo'}});

 db.getCollection('Proveedores').find({name:{$ne:'Eduardo'}});

 //$in : donde en un campo incluya un dato especifico 
 db.getCollection('Proveedores').find({Direccion:{$in:['Calle 123, Ciudad A']}});

 db.getCollection('Proveedores').find({Direccion:{$in:['Avenida 456, Ciudad B']}});

 db.getCollection('Proveedores').find({Telefono:{$in:['3018881122']}});

//$NIN : que no pertenecen 
 db.getCollection('Productos').find({categoria:{$nin:['lacteos']}});

 db.getCollection('Productos').find({categoria:{$nin:['aseo']}});

 db.getCollection('Productos').find({categoria:{$nin:['dulces']}});

//$AND
 db.getCollection('Clientes').find({$and: [{Nombre:'Leonardo'},{Edad:'19'}] });

 db.getCollection('Clientes').find({$and: [{Nombre:'Juan'},{Edad:'35'}] });

 db.getCollection('Clientes').find({$and: [{Nombre:'Miguel'},{Edad:'32'}] });


//$OR
 db.getCollection('Clientes').find({$or: [{Nombre:'Leonardo'},{Nombre:'Juan'}] });

 db.getCollection('Clientes').find({$or: [{Nombre:'Leonardo'},{Nombre:'Valentina'}] });

 db.getCollection('Clientes').find({$or: [{Nombre:'Valentina'},{Nombre:'Juan'}] });


 //$NOT : 
 db.getCollection('Clientes').find({name:{$not: {$eq:'Leonardo'} }});

 db.getCollection('Clientes').find({name:{$not: {$eq:'Luis'} }});

 db.getCollection('Clientes').find({name:{$not: {$eq:'Vero'} }});


 //$createIndex 

 db.getCollection('Clientes').createIndex( { Nombre: "text" } )
 db.getCollection('Clientes').find( { $text: { $search: 'Leonardo' } } );

 db.getCollection('Clientes').createIndex( { Nombre: "text" } )
 db.getCollection('Clientes').find( { $text: { $search: 'Juan' } } );

 db.getCollection('Clientes').createIndex( { Nombre: "text" } )
 db.getCollection('Clientes').find( { $text: { $search: 'Sofía' } } );

//address : 
 db.getCollection('Proveedores').find( {Direccion:{ $regex: /Calle 123/ }} );
 db.getCollection('Proveedores').find( { address: { $regex: /Avenida 456/ }} );
 db.getCollection('Proveedores').find( { address: { $regex: /Carrera 456/ }} );

 //$Where 
 db.getCollection('Productos').find( { $where: function() {
     return (hex_md5(this.categoria) == "57107ee8342bff2df4e694a08c2c133e")
  } } );

 db.getCollection('Productos').find( { $where: function() {
     return (hex_md5(this.categoria) == "c12c9c65d35bd1e3a5ef3cb628af55af")
  } } );

 db.getCollection('Productos').find( { $where: function() {
     return (hex_md5(this.categoria) == "8568270cb6aa14f2133d61729e055194")
  } } );

//$exists : 
 db.getCollection('Clientes').find( { Nombre: { $exists: true } } );

 db.getCollection('Productos').find( { Precio: { $exists: true } } );

 db.getCollection('Proveedores').find( { Direccion: { $exists: true } } );


//Type : 
 db.getCollection('Proveedores').find( { "Direccion" : { $type : "string" } }); 

 db.getCollection('Clientes').find( { "Nombre" : { $type : "string" } }) ;

 db.getCollection('Productos').find( { "precio" : { $type : "int" } });

//elemMatch 
 db.getCollection('Productos').find( {
     productos: { $all: [
                    { "$elemMatch" :
                     {Pnombre: 'Andador para bebés',
                      precio: { $gte: 26500} } },
                  ] }
   } )

 //size
 db.getCollection('Productos').find( {productos: { $size: 3 } } );

 db.getCollection('Productos').find( {productos: { $size: 4 } } );

 db.getCollection('Productos').find( {productos: { $size: 5 } } );



















