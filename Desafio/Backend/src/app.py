from flask import Flask, json, request, jsonify #modulo flask es un framework del servidor recibe las peticiones 
from flask_pymongo import PyMongo, ObjectId #flask_PyMongo es un driver de conexion de mongodb
from flask_cors import CORS #flask_cors es un servidor 
from flask_mail import Mail,Message

app = Flask(__name__) 
app.config['MONGO_URI']='mongodb://localhost/ProyectoPractica' #direccion local
Conexion = PyMongo(app) #Conexion
CORS(app)
db = Conexion.db.users #Coleccion de usuarios


app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'asistenciamedica777@gmail.com'
app.config['MAIL_PASSWORD'] = 'asistenciamedica'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app) 

#rutas para interactuar con la base de datos
@app.route('/users', methods=['POST']) #ruta
def CrearUsuario():   #Creo funcion CrearUsuario.
    id = db.insert({
        'nombre': request.json['nombre'],
        'apellidop': request.json['apellidop'],
        'apellidom': request.json['apellidom'],
        'rut': request.json['rut'],
        'edad': request.json['edad'],
        'sexo': request.json['sexo'],
        'nombreMed': request.json['nombreMed'],
        'fecha': request.json['fecha'],
        'hora': request.json['hora'],
        'correo': request.json['correo']
        
    })
    return jsonify(str(ObjectId(id)))
    

@app.route('/users', methods=['GET']) #ruta
def getUsuarios():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'nombre': doc['nombre'],
            'apellidop': doc['apellidop'],
            'apellidom': doc['apellidom'],
            'rut': doc['rut'],
            'edad': doc['edad'],
            'sexo': doc['sexo'],
            'nombreMed': doc['nombreMed'],
            'fecha':doc['fecha'],
            'hora': doc['hora'],
            'correo': doc['correo']
            
        })

    return jsonify(users)

@app.route('/user/<id>', methods=['GET']) #ruta
def getUsuario(id):
    usuario = db.find_one({'_id' : ObjectId(id)})
    return jsonify({
        '_id':str(ObjectId(usuario['_id'])),
        'nombre': usuario['nombre'],
        'apellidop': usuario['apellidop'],
        'apellidom': usuario['apellidom'],
        'rut': usuario['rut'],
        'edad': usuario['edad'],
        'sexo': usuario['sexo'],
        'nombreMed': usuario['nombreMed'],
        'fecha': usuario['fecha'],
        'hora': usuario['hora'],
        'correo': usuario['correo']
        

    })

@app.route('/users/<id>', methods=['DELETE']) #ruta
def eliminarUsiario(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'USUARIO ELIMINADO'})

@app.route('/users/<id>', methods=['PUT']) #ruta
def actualizarUsuario(id):
    db.update_one({'_id': ObjectId(id)}, {'$set': {
        'nombre': request.json['nombre'],
        'apellidop': request.json['apellidop'],
        'apellidom': request.json['apellidom'],
        'rut': request.json['rut'],
        'edad': request.json['edad'],
        'sexo': request.json['sexo'],
        'nombreMed': request.json['nombreMed'],
        'fecha': request.json['fecha'],
        'hora': request.json['hora'],
        'correo': request.json['correo']
    }}) 
    return jsonify({'msg': 'USUARIO ACTUALIZADO'})


@app.route("/email", methods =['POST'])
def enviar():
    msg = Message("nombre", sender='asistenciamedica777@gmail.com', recipients=['udechile97matias@gmail.com'])
    msg.body = "Se ha confirmado su agenda para el dia y hora con el medico"
    mail.send(msg)
    return "Send"


if(__name__ == "__main__"): #inicializar paquete
    app.run(debug = True)





