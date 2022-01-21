# if letter is a, then the encrypted letter is c
# if letter is H, the letter is J
# c has the value of 2 (0,1,2, with 0 being a)
# an encrypted letter is its own value + the value of c
# H has a value of 7, and 7 + 2 (value of c) = 9 (which is equal to J)


#removes whitespaces, and other non letter symbols and returns a clean string 
def cleanUpMessage(message: str):
    
    notAllowed = "!.,/?'\":;[]{}\\-_=+@#$%^&*()|`~"
    
    for i in range(len(notAllowed)):
        if (message.find(notAllowed[i]) != -1):
            message = message.replace(notAllowed[i] , "")
        
    message = message.replace(" ", "")
    
    return message.lower()

# converts each letter into its index value with a being 0
def numericConvert(plaintext: str):
    
    plaintext = plaintext.lower()
    letters = "abcdefghijklmnopqrstuvwxyz"
    numericList: int = []
    
    for char in range(len(plaintext)):
        for l in range(len(letters)):
            if(letters[l] == plaintext[char]):
                numericList.append(letters.index(plaintext[char]))
    
    return numericList

#shifting numbers from function above to specified shift amount. Pretty useless honestly and could be done in the cipher function all together
def shiftList(l: list, shift: str):
    
            
    letters = "abcdefghijklmnopqrstuvwxyz"
    
    numericShift: int = 0
    
    for i in letters:
        if i == shift:
            numericShift = letters.index(i)
            
    letterShift = letters[numericShift]
    
    print(f"\nMessage will be encrypted with the key of \"{letterShift.upper()}.\"")
            
    for i in range(len(l)):
        l[i] += numericShift
    
    return l

#unshifts shifted letters to original position. shift parameter is necessary to know shift
def unShift(l: list, shift: str):
    
    output = []
    
    numericShift: int = 0

    letters = "abcdefghijklmnopqrstuvwxyz"
    for i in letters:
        if i == shift:
            numericShift = letters.index(i)
            
    for i in range(len(l)):
        output.append(l[i] - numericShift)
    
    return output

#cipers the text based on the shift
def getCipher(numList, shift: str):
    
    #output string
    output = ""
    
    #alphabet
    letters = "abcdefghijklmnopqrstuvwxyz"
    
    numericShift = 0
    for i in letters:
        if i == shift:
            numericShift = letters.index(i)
    
    #string to hold shifted alphabet
    new_letters = ""
    
    #starting from the letter value of shift to the length of the alphabet, add each letter to new_letters
    for i in range(numericShift, len(letters)):
        new_letters += letters[i]
    
    #append letters that were before the letter value of shift to the end of the shifted alphabet 
    for i in range(numericShift):
        new_letters += letters[i]
    
    #with the new shifted alphabet, take the value of the original letter (numList[i]) and replace it with the corresponding letter at the index of the shifted alphabet
    # if the index of h is 7 in the original index, and the numericShift is 2, then the new letter at index 7 will be j. (numericShift is c (2) so the start of the new alphabet will be c,d and so on)
    for i in range(len(numList)):
        output += new_letters[numList[i] - numericShift]
    
    return output.upper()

#to be used after the unshift function. Gets the original ciphered text
def deCipher(numList: list):
    
    output = ""
    letters = "abcdefghijklmnopqrstuvwxyz"
    
    for i in range(len(numList)):
            output += letters[numList[i]]
    
    return output

def run():
    
    answer = ""
    print()

    #runs until empty input
    while True:
        
        
        answer = input("Would you like to encrypt or decrypt a message? (Press enter to exit): ").lower()
        
        #repeats until either encrypt or decrypt is entered
        if answer == "encrypt":
            
            message = input("\nEnter message to be encrypted: ")
            
            key = ""
            
            #runs until a valid key is accepted
            while True:
                key = input("\nEnter key to use for encryption (a single letter): ").lower()
                
                #if key is apart of the alphabet and is only one character
                if(key.isalpha() and len(key) == 1):
                    break
                else:
                    print("\nPlease enter a valid encryption key (a single letter)")
                    
            #encrypted text
            encrypted = getCipher(shiftList(numericConvert(cleanUpMessage(message)), key), key)
            
            print(f"\nEncrypted message: {encrypted}\n")
            
        #decryp
        elif answer == "decrypt":
            
            message = input("\nEnter message to be decrypted: ")
            
            key = ""
            
            #runs until valid key is accepted
            while True:
                key = input("\nEnter key used for deciphering (a single letter): ").lower()
                #spent an hour wondering why output was blan
                
                #if key is apart of the alphabet and is only one character
                if(key.isalpha() and len(key) == 1):
                    break
                else:
                    print("\nPlease enter a valid encryption key (a single letter)")
            
                
            decrypted = deCipher(unShift(numericConvert(cleanUpMessage(message)), key))
            
            print(f"\nDecrypted message: {decrypted}\n")
        
        #if blank exit loop
        elif len(answer) == 0:
            break
        else:
            print("\nThat's not a valid option. Try again\n")
            
run()