export const list = [{
    id: "01",
    titulo: "Remera 1",
    precio: 1500,
    stock: 4,
    descripcion: "una descripcion de una remera",
    imagen: "images/img1.jpg"
    
    },{
    id: "02",
    titulo: "Remera 2",
    precio: 1600,
    stock: 4,
    descripcion: "una descripcion de una remera 2",
    imagen: "./images/img2.jpg"
    
    }, {
    id: "03",  
    titulo: "Remera 3",
    precio: 1700,
    stock: 4,
    descripcion: "una descripcion de una remera 3",
    imagen: "./images/img3.jpg"
    },{
    id:  "04",
    titulo: "Remera 4",
    precio: 1500,
    stock: 4,
    descripcion: "una descripcion de una remera 4",
    imagen: "./images/img4.jpg"
    
    },
    {
        id:  "05",
        titulo: "Remera 5",
        precio: 2500,
        stock: 4,
        descripcion: "una descripcion de una remera 5",
        imagen: "./images/img5.jpg" 
    }

    ,
    {
        id:  "06",
        titulo: "Remera 6",
        precio: 3500,
        stock: 4,
        descripcion: "una descripcion de una remera 6",
        imagen: "./images/img6.jpg" 
    }

    ,
    {
        id:  "07",
        titulo: "Remera 7",
        precio: 2500,
        stock: 4,
        descripcion: "una descripcion de una remera 7",
        imagen: "./images/img7.jpg" 
    }

    ,
    {
        id:  "08",
        titulo: "Remera 8",
        precio: 1500,
        stock: 4,
        descripcion: "una descripcion de una remera 8",
        imagen: "./images/img8.jpg" 
    }

    ,
    {
        id:  "09",
        titulo: "Remera 9",
        precio: 1500,
        stock: 4,
        descripcion: "una descripcion de una remera 9",
        imagen: "./images/img9.jpg" 
    }


];
    export const getList = (data, timeout) => new Promise((res) => 
            setTimeout(() => {
               res(data)
           }, timeout)
       );