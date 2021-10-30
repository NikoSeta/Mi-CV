export const proyectos = [
    {id:1, name: "HTML", imgUrl:""},
    {id:1, name: "JavaScript", imgUrl:""},
    {id:1, name: "React Js", imgUrl:""},
    {id:1, name: "Proximanete", imgUrl:""},
]
export function getId(id) {
    if (id===undefined) {
        return proyectos
    }else{
        return proyectos.find( proyectos=> proyectos.id === id)
    }
}
export const getProyectos = new Promise((resolve)=>{
    resolve(proyectos)
});//esta funcion me trae un array