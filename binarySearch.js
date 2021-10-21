let binarySearch = function(obj, searchItem)
{
    
    let min = 0
    let max = obj.length - 1
    let median = Math.floor((max + min) / 2)
    
    //while min less than or equal to max and obj str property not equal to searchItem
    while(min <= max && obj[median].getNameReversed().toLowerCase() != searchItem.toLowerCase())
    {
        //if searchItem is to the left of obj str property in sorted order 
        if(searchItem.toLowerCase().localeCompare(obj[median].getNameReversed().toLowerCase()) == -1)
        {
            //setting new maximum bounds 
            max = obj.indexOf(obj[median]) - 1
        }
        //if searchItem is to the right of obj str property in sorted order
        else if(searchItem.toLowerCase().localeCompare(obj[median].getNameReversed().toLowerCase()) == 1)
        {
            //setting new minimum bounds
            min = obj.indexOf(obj[median]) + 1
        }
        
        //recalculating new median since boundaries were changed
        median = Math.floor((max + min) / 2)
    }
    
    //final comparison
    if(searchItem.toLowerCase() == obj[median].getNameReversed().toLowerCase())
    {
        return median
    }
    else
    {
        return "Not found"
    }
    
}
