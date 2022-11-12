import { response } from "../helpers/response.js";

let data = [
    {
        _id: "1",
        nombre: "Luisa",
        apellido: "Morales",
        edad: 18,
    },
    {
        _id: "2",
        nombre: "Dana",
        apellido: "Carrillo",
        edad: 17,
    },
    {
        _id: "3",
        nombre: "Nathalie",
        apellido: "Pareja",
        edad: 18,
    },
]

export const getData = (req, res) => {

    try {

        res.status(200).json({
            ok:true,
            data,
            message: "Lista de usuarios"
        })
        
    } catch (error) {
        
        res.status(500).json({
            ok:false,
            data: "",
            message: error.message,
        })
    }   
};

export const getDataById = (req, res) => {
    try {
        const {id} = req.params;
        // const {search} = req.query;

        const usuario = data.find((item) => item._id === id);

        if (!usuario) {
            return response(res, 404, false, "", "El usuario no existe.")
        }

        res.json({
            ok: true,
            data: usuario,
            message: "El usuario ha sido encontrado con éxito."
            // query: search,
        })
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
}

export const saveData = (req, res) => {

    try {
        const {_id, nombre, apellido, edad} = req.body;

        data.push({ _id, nombre, apellido, edad: parseInt(edad)});

        response(res, 201, true, {
            nombre,
            apellido,
            edad,
        }, "El usuario se ha creado con éxito.")
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            data: "",
            message: error.message,
        })
    }
};

export const actualizarData = (req, res) => {
    try {
        const {id} = req.params;

        const {_id, nombre, apellido, edad} = req.body;

        const nuevaData = data.map((item) => item._id === id ? {_id, nombre, apellido, edad: parseInt(edad)} : item);

        data = nuevaData;

        response(res, 200, true, "", "El usuario se ha actualizado con éxito.") 


    } catch (error) {
        response(res, 500, false, id, error.message);
    }
}

export const eliminarData = (req, res) => {
    try {

        const {id} = req.params;

        const nuevaData = data.filter((item) => item._id !== id);

        // if (!data) {
        //     return response(res, 404, false, "", "El usuario no existe.")

        data = nuevaData;

        response(res, 200, true, "", "El usuario se ha eliminado con éxito.")

    } catch (error) {
        response(res, 500, false, id, error.message);
    }
}
