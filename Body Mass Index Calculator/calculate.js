let getBMI = function()
{
    let feet = document.getElementsByClassName("BMI-feet")[0].value
    let inches = document.getElementsByClassName("BMI-inches")[0].value
    let weight = document.getElementsByClassName("Weight-inputbox")[0].value


    let ul = document.getElementById("categories").getElementsByTagName("li")

    for (let li = 0; li < ul.length; li++)
    {
        ul[li].style.color = "white"
    }
   
    if(feet.length == 0 || inches.length == 0 || weight.length == 0)
    {
        alert("Please enter a valid number in each textbox!")
        return
    }
    else
    {
        let weightInKg = parseInt(weight) * 0.453592 

        let heightInMeters = (parseInt(feet) + (parseInt(inches) / 12)) * 0.3048
        let BMI = (weightInKg / Math.pow(heightInMeters, 2)).toFixed(2)


        if(BMI == "NaN")
        {
            alert("Something went wrong. Please recheck fields.")
        }
        else
        {
            let category = ""

            if(BMI < 16)
            {
                category = "Severe Thinness"
                document.getElementById("severeThin").style.color = "rgb(255,0,0)"
            }
            else if(BMI >= 16 && BMI < 17)
            {
                category = "Moderate Thinness"
                document.getElementById("moderateThin").style.color = "rgb(200,0,0)"
            }
            else if(BMI >= 17 && BMI < 18.5)
            {
                category = "Mild Thinness"
                document.getElementById("mildThin").style.color = "rgb(145,0,0)"
            }
            else if(BMI >= 18.5 && BMI < 25)
            {
                category = "Normal"
                document.getElementById("normal").style.color = "green"
            }
            else if(BMI >= 25 && BMI < 30)
            {
                category = "Overweight"
                document.getElementById("overweight").style.color = "rgb(100,0,0)"
            }
            else if(BMI >= 30 && BMI < 35)
            {
                category = "Obese Class I"
                document.getElementById("obese1").style.color = "rgb(150,0,0)"
            }
            else if(BMI >= 35 && BMI < 40)
            {
                category = "Obese Class II"
                document.getElementById("obese2").style.color = "rgb(200,0,0)"
            }
            else if(BMI > 40)
            {
                category = "Seek Medical Help"
                document.getElementById("jesus").style.color = "rgb(255,0,0)"
            }

            document.getElementsByClassName("BMI-result")[0].value = "BMI: " + BMI
            document.getElementsByClassName("BMI-category-box")[0].value = "Category: " + category
        }
        
    }
}