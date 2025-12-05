import { getFirestore, collection, getDocs } from "firebase/firestore";
import {app} from "../firebase";

const db= getFirestore(app);

export const obtenerProductos= async() =>{
    try{
        const productosRef = collection(db,"productos");
        const snapshot = await getDocs(productosRef);

        const productos = snapshot.docs.map(doc =>({
            id:doc.id,
            ...doc.data()
        }));
        return productos;
        }catch (error){
        console.error("Error al obtener productos:",error);
        return[];
    }
};