//Selection sort with objects that contain a String name property
let sortByName = function(obj)
{
    //not affecting original function
    let copy = obj

    //holds the existing object at index i before the object at the index is replaced
    let duplicate = null

    for (let i = 0; i < copy.length; i++)
    {
        for (let j = i+1; j < copy.length; j++)
        {
            //takes two strings, sorts them
            //basesd of off the position of each sorted word, if the word used for comparison in the parenthesis comes before the word being compared
            //then the fucntion returns -1 since it's to the left of the word
            
            // if its after the word then it's 1
            
            if(copy[j].getName().localeCompare(copy[i].getName()) == -1)
            {

                //preserving the object at index i before it is modified
                duplicate = copy[i]

                //setting object at index i to current object at index j
                copy[i] = copy[j] 

                //swapping object at index j with the previous object at i
                copy[j] = duplicate 
                continue
            }
        }
    }
    return copy

}
