use('TiendasD1');

db.Productos.insertOne(
    { 'Pnombre': 'yogurt pack de 6', 'precio': 6000, 'categoria': 'lacteos', 'codigo':"0250", 'sede': 'santo domingo' }
) 
db.Productos.findOne({categoria:"lacteos"});
db.Productos.find();
db.Productos.find({precio:3800});
db.Productos.updateOne( {codigo: "0033"},{ $set: { codigo:"3300" } } )
db.Productos.updateMany({categoria:"lacteos"},{$set:{precio:3800}})
db.Productos.deleteOne({categoria:"lacteos"})
db.Productos.deleteMany({categoria:"bebes"})
db.Productos.drop()
db.dropDatabase("TiendasD1")