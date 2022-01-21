let funcc = function()
{
   main.innerHTML = "<font size = \"5\">Which column is it in?<br><br></font><br><br><br><br><br><div id=\"button-div\"><button id=\"main-start-button\" onclick=one()>Column one</button> <button id=\"main-start-button\" onclick=two()>Column Two</button> <button id=\"main-start-button\" onclick=three()> Column three</button></div>"
   buttonBox.style.backgroundColor = "black"
}

let one = function()
{
    count += 1

   if(count == 1)
   {
      let copy = shuffle(images, 0)
      images = [...copy]
      shuffleImages()
      main.innerHTML =  "<font size = \"5\">Alright, where is it now?<br><br></font><br><br><br><br><br><div id=\"button-div\"><button id=\"main-start-button\" onclick=one()>Column one</button> <button id=\"main-start-button\" onclick=two()>Column Two</button> <button id=\"main-start-button\" onclick=three()> Column three</button></div>"
   
   }
   else if(count == 2)
   {
      let copy = shuffle(images, 0)
      images = [...copy]
      shuffleImages()
      main.innerHTML =  "<font size = \"5\">Alright last time I promise. Now where is it?<br><br></font><br><br><br><br><br><div id=\"button-div\"><button id=\"main-start-button\" onclick=one()>Column one</button> <button id=\"main-start-button\" onclick=two()>Column Two</button> <button id=\"main-start-button\" onclick=three()> Column three</button></div>"
   }
   else if(count == 3)
   {
      let copy = shuffle(images, 0)
      images = [...copy]
      shuffleImages()
      getResult()
   }
}

let two = function()
{
   count += 1

   if(count == 1)
   {
      let copy = shuffle(images, 1)
      images = [...copy]
      shuffleImages()
      main.innerHTML =  "<font size = \"5\">Alright, where is it now?<br><br></font><br><br><br><br><br><div id=\"button-div\"><button id=\"main-start-button\" onclick=one()>Column one</button> <button id=\"main-start-button\" onclick=two()>Column Two</button> <button id=\"main-start-button\" onclick=three()> Column three</button></div>"
   
   }
   else if(count == 2)
   {
      let copy = shuffle(images, 1)
      images = [...copy]
      shuffleImages()
      main.innerHTML =  "<font size = \"5\">Alright, last time I promise. Now where is it?<br><br></font><br><br><br><br><br><div id=\"button-div\"><button id=\"main-start-button\" onclick=one()>Column one</button> <button id=\"main-start-button\" onclick=two()>Column Two</button> <button id=\"main-start-button\" onclick=three()> Column three</button></div>"
   }
   else if(count == 3)
   {
      let copy = shuffle(images, 1)
      images = [...copy]
      shuffleImages()
      getResult()
   }
}

let three = function()
{
    count += 1

   if(count == 1)
   {
      let copy = shuffle(images, 2)
      images = [...copy]
      shuffleImages()
      main.innerHTML =  "<font size = \"5\">Alright, now where is it?<br><br></font><br><br><br><br><br><div id=\"button-div\"><button id=\"main-start-button\" onclick=one()>Column one</button> <button id=\"main-start-button\" onclick=two()>Column Two</button> <button id=\"main-start-button\" onclick=three()> Column three</button></div>"
   
   }
   else if(count == 2)
   {
      let copy = shuffle(images, 2)
      images = [...copy]
      shuffleImages()
      main.innerHTML =  "<font size = \"5\">Alright, last time I promise. Now where is it?<br><br></font><br><br><br><br><br><div id=\"button-div\"><button id=\"main-start-button\" onclick=one()>Column one</button> <button id=\"main-start-button\" onclick=two()>Column Two</button> <button id=\"main-start-button\" onclick=three()> Column three</button></div>"
   }
   else if(count == 3)
   {
      let copy = shuffle(images, 2)
      images = [...copy]
      shuffleImages()
      getResult()
   }
}

let getImages = function()
{
   let output = new Array()

   let a = []

   for(let i = 1; i <= 21; i++)
   {
      if(a.length == 3)
      {
         output.push([...a])
         a = []

         let image = new Image()
         image.src = `assets/images/${i}.png`
         image.alt = `${i}`
         a.push(image)
      }
      else
      {
         let image = new Image()
         image.src = `assets/images/${i}.png`
         image.alt = `${i}`
         a.push(image)
      }
   }
   output.push(a)

   return output

}

let shuffleImages = function()
{

   for(let i = 1; i <= 7; i++)
   {
      table.deleteRow(-1)
   }

   for (let i = 1; i <= 7; i++)
   {
      
      let row = table.insertRow(-1)
      
      for(let j = 0; j < 3; j++)
      {
         let cell = row.insertCell(j)

         cell.innerHTML = `<img src= "${images[i-1][j].src}" style = "max-width: 100%; max-width=100%;">`
      }


   }

}


let getColumn = function(arr, column)
{
   output = []

   for(let i = 0; i < arr.length; i++)
   {
      for(let j = 0; j < arr[i].length; j++)
      {
         if(j == column)
            output.push(arr[i][j])
      }
   }

   return output
}


let shuffle = function(arr, column)
{
   let output = []
    

   if(column + 1 == 3)
   {
      let first = getColumn(arr, 0)
      let second = getColumn(arr, 1)
      let selected = getColumn(arr, column)

      output.push(second)
      output.push(selected)
      output.push(first)
   }
   else if(column+1 == 2)
   {

      let first = getColumn(arr, 0)
      let third = getColumn(arr, 2)
      let selected = getColumn(arr, column)

      output.push(third)
      output.push(selected)
      output.push(first)
   }  
   else if(column+1 == 1)
   {

      let second = getColumn(arr, 1)
      let third = getColumn(arr, 2)
      let selected = getColumn(arr, column)

      output.push(second)
      output.push(selected)
      output.push(third)
   }
   
   let final = []
   let a = []

   for(let i = 0; i < output.length; i++)
   {

      for(let j = 0; j < output[i].length; j++)
      {
   
         if(a.length == 3)
         {
         
            final.push([...a])
            a = []
            a.push(output[i][j])
         }
         else
            a.push(output[i][j])
      }

      if(i == 2)
         final.push([...a])
   }
   return final

}

let getResult = function()
{
   let tableDiv = document.getElementById("cards")
   tableDiv.innerHTML = ""

   tableDiv.innerHTML = `<img src = "${winner(images).src}">`
   main.innerHTML = `<font size = \"5\">I think ${winner(images).getAttribute("alt")} is a cool number too.<br><br></font>`

}
let winner = function(arr)
{

   let a = []

   for(let i = 0; i < arr.length; i++)
   {
      for(let j = 0; j < arr[i].length; j++)
      {
         if(j == 1)
               a.push(arr[i][j])
      }
   }
   
   return a[Math.floor(a.length/2)]

}


//global variables
let main = document.getElementById("main")
let table = document.getElementById("magic-table")
let images = getImages()
let buttonBox = document.getElementById("button-div")
let count = 0

for (let i = 1; i <= 7; i++)
{
   let row = table.insertRow(i)
   
   for(let j = 0; j < 3; j++)
   {
      let cell = row.insertCell(j)

      cell.innerHTML = `<img src= "${images[i-1][j].src}" style = "max-width: 100%; max-width=100%;">`
   }


}


//let arr = [[1,2,3], [4,5,6], [7, 8, 9], [10,11,12], [13,14,16], [10,17,18], [19,20,21]]