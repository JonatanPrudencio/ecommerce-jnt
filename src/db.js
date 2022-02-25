export const list = [{
    id: 1,
    titulo: "Campera 1",
    precio: 1500,
    stock: 15,
    descripcion: "una descripcion de una remera",
    imagen:require("./images/img1.jpg"),
    categoryId: 3,
    
    
    },{
    id: 2,
    titulo: "Remera 2",
    precio: 1600,
    stock: 4,
    descripcion: "una descripcion de una remera 2",
    imagen:require("./images/img2.jpg"),
    categoryId: 2,
    
    }, {
    id: 3,  
    titulo: "Remera 3",
    precio: 1700,
    stock: 10,
    descripcion: "una descripcion de una remera 3",
    imagen:require("./images/img3.jpg"),
    categoryId: 2,
    },{
    id:  4,
    titulo: "Buzo 1",
    precio: 1500,
    stock: 8,
    descripcion: "una descripcion de una remera 4",
    imagen:require("./images/img4.jpg"),
    categoryId: 4,
    
    },
    {
        id:  5,
        titulo: "Remera 5",
        precio: 2500,
        stock: 4,
        descripcion: "una descripcion de una remera 5",
        imagen:require("./images/img5.jpg"),
        categoryId: 2,
    }

    ,
    {
        id: 6,
        titulo: "Remera 6",
        precio: 3500,
        stock: 4,
        descripcion: "una descripcion de una remera 6",
        imagen:require("./images/img6.jpg"),
        categoryId: 2,
    }

    ,
    {
        id: 7,
        titulo: "Remera 7",
        precio: 2500,
        stock: 4,
        descripcion: "una descripcion de una remera 7",
        imagen:require("./images/img7.jpg"),
        categoryId: 2,
    }

    ,
    {
        id: 8,
        titulo: "Pantalón 1",
        precio: 1500,
        stock: 4,
        descripcion: "una descripcion de una remera 8",
        imagen:require("./images/img8.jpg"),
        categoryId: 5,
    }

    ,
    {
        id: 9,
        titulo: "Campera 2",
        precio: 1500,
        stock: 4,
        descripcion: "una descripcion de una remera 9",
        imagen:require("./images/img9.jpg"),
        categoryId: 3,
    }


];
    export const getList = (data, timeout) => new Promise((res) => 
            setTimeout(() => {
               res(data)
           }, timeout)
       );