const form = document.querySelector("#form_input");
const input_name = document.querySelector("#input_name");
const input_color = document.querySelector("#input_color");
const container_square = document.querySelector("#square_container");

var localstorage = JSON.parse(localStorage.getItem('squarescolors'));
console.log(localstorage);

const orange = document.createElement('div');
orange.id = 'square';
orange.value = "orange"
orange.style.backgroundColor = "orange";
container_square.appendChild(orange);

const blue = document.createElement('div');
blue.id = 'square';
blue.value = "blue"
blue.style.backgroundColor = "blue";
container_square.appendChild(blue);

const red = document.createElement('div');
red.id = 'square';
red.value = "red"
red.style.backgroundColor = "red";
container_square.appendChild(red);

var squares = [
    {
    color: orange.value ,
    name: 'Laranja' 
    },
    {
    color: blue.value ,
    name: 'Azul'
    },
    {
    color: red.value ,
    name: 'Vermelho'
    }
];

container_square.append(localstorage);

form.addEventListener('submit', (e) => {
    e.preventDefault()


     if (!input_color.value) {
        alert("please write a color");
        return;

    } else if (!input_name.value) {
        alert("please write a name");
        return;
    }

    const square_id = document.createElement("div");
    square_id.id = "square";
    square_id.style.backgroundColor = input_color.value;

    container_square.appendChild(square_id);

    const square = {
        color: input_color.value,
        name: input_name.value
    }

    // adds the squares

    squares.push(square);

      
    // saving to localStorage
    localStorage.setItem('squarescolors',JSON.stringify(square));
    
    

    // reset the form
    form.reset(); 
     

    
   
   
    
   
   



    
})

