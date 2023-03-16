const input_name = document.querySelector("#input_name");
const input_color = document.querySelector("#input_color");
const container_square = document.querySelector("#square_container");



// array squares
let squares = [
    {
    backgroundcolor: "orange",
    name: "laranja"
    },
    {
    backgroundcolor: "blue",
    name: "azul"
    },
    {
    backgroundcolor:"red",
    name: "vermelho"
    }
];

// Put the Local Storage in squares array
let square_storage = JSON.parse(localStorage.getItem("squares_colors"));

if (square_storage != null) {
    
    squares = square_storage;
}

console.log(squares);


// function reload the page and create the squares
updateview();


function updateview() {
    // Clean the div square_container
    container_square.innerHTML = "";

    // Create squares in for loop

    for (i = 0; i < squares.length; i++) {
        const square = squares[i];

        const square_element = document.createElement("div");
        square_element.classList.add("square_element");

        square_element.style.width = "100px";
        square_element.style.height = "100px";
        square_element.style.backgroundColor = square.backgroundcolor

        container_square.appendChild(square_element);

        
        
    }
}
 
// add the squares from input

function addsquare(){

    event.preventDefault();

    if (!input_name.value) {
        
        alert("insert a name")

        return;
    }

    const square =  {
        backgroundcolor: input_color.value,
        name: input_name.value,
        with: "100px",
        height: "100px"
    }

    squares.push(square);

    localStorage.setItem("squares_colors", JSON.stringify(squares));

    input_name.value = "";

    updateview();

   
}
