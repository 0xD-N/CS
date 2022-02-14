import java.io.* ;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Random;

class MultiplyMatrixes
{
 	
  public static void main ( String[] args ) throws IOException
  {
	Scanner input = new Scanner(System.in);	  
	// Complete main	

	int rows = 0;
	int columns = 0;  

	System.out.println();
	System.out.print("Enter rows and colums for A: ");
	
	rows = input.nextInt();
	columns = input.nextInt();

	int[][] matrixA = new int[rows][columns];

	
	System.out.print("Enter rows and colums for B: ");


	rows = input.nextInt();
	columns = input.nextInt();
	

	int[][] matrixB = new int[rows][columns];

	initializedMatrix(matrixA);
	initializedMatrix(matrixB);

	System.out.println("\nMatrix A");
	display(matrixA);
	
	System.out.println("\nMatrix B");
	display(matrixB);

	System.out.println();
	int[][] matrixC = multiplyMatrixes(matrixA, matrixB);

	System.out.println("\nMatrix C = A * B");
	display(matrixC);
	input.close();

   }// end of main

   
   
    /* Preconditions: parameters m has been initialized
	 * Postconditions: fills matrix with random numbers in the range [1..4]
	 */
 	public static void initializedMatrix(int m[][])
	{	/* Completed  do not change anything here*/ 		
		Random rand = new Random(12345);
	
		for(int r = 0; r < m.length; r++)
		{
			for(int c = 0; c < m[r].length; c++)
			{
				int num = rand.nextInt(4) + 1;
				m[r][c] = num;
			}
				
		}	
	}  
   
	/* Preconditions: parameters m has been initialized
	 * Postconditions: displays matrix m in the format shown in the sample run
	 */
	public static void display(int m[][])	
	{
		/* to be completed */

		for(int i = 0; i < m.length; i++)
		{
			for(int j = 0; j < m[i].length; j++)
			{
				System.out.print(m[i][j] + " ");
			}
			System.out.println();
		}
  	
	}
	


	/* Preconditions: parameters m1 and m2 have been initialized
	 * Postconditions: returns a matrix that represents the multiplication
	 *                 of m1xm2
	 */	
	public static int[][] multiplyMatrixes(int m1[][], int m2[][])	
	{	/* to be completed */

		// first we need a variable to hold the output matrix
		int[][] output;

		//and one to dynamically hold an array of sums
		ArrayList<int[]> matrix = new ArrayList<int[]>();
		

		//make an if statement that checks if the rows of m1 is the same amount of columns in m2
		// (if they are different sizes, return null since they can't be multiplied)
		//else

		/**
		 * First for loop controls m1 array rows
		 * 
		 * second for loop controls m2 array columns
		 * 
		 * third for loop controls second m2 array rows
		 */
		
		//loops through m1 rows
		for(int h = 0; h < m1.length; h++)
		{
			//arraylist to hold sums
			ArrayList<Integer> sums = new ArrayList<Integer>();

			//columns x rows
			//loops through m2 columns
			for(int i = 0; i < m2[0].length; i++)
			{
				//holds sum
				int sum = 0;
				//loops through m2 rows
				for(int j = 0; j < m2.length; j++)
				{ 

					//j is the column for m1 and also the row for m2
					//i is the column for m2
					//h is just the rows for m1 
					
					//add the element at m1[h][j] times the element at m2[j][i]
					sum += m1[h][j] * m2[j][i];
				}
				
				sums.add(sum);
			}
			
			//below code is used to convert arraylist to int array
			int[] out = new int[sums.size()];

			for(int i = 0; i < out.length; i++)
			{
				out[i] = sums.get(i);
			}

			//add array to matrix
			matrix.add(out);
		}

		//below code is used to convert matrix arraylist into 2 dimensional int array 
		output = new int[matrix.size()][];

		for(int i = 0; i < matrix.size(); i++)
		{
			output[i] = matrix.get(i);
		}

		return output;
  	} 	  
   
   
  }
  
  