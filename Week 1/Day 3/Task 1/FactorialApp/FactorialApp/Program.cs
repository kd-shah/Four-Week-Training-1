namespace FactorialApp
{
    public class Program
    {
        /*public static void Main()
        {
            long factorial = 1;
            Console.Write("Enter a number: ");
            int number = int.Parse(Console.ReadLine());


            for (int i = 1; i <= number; i++)
            {
                
                factorial = factorial * i;
                
            }

                Console.WriteLine("Fcatorial of given number is " + factorial);
        

       
        }*/


        public static long CalculateFactorial(int number)
        {
            long factorial = 1;
            for (int i = 1; i <= number; i++)
            {
                factorial = factorial * i;
            }
                return factorial;
        }
        public static void Main()
        {
            Console.Write("Enter a number: ");
            int number = int.Parse(Console.ReadLine());

            long fact = CalculateFactorial(number);

            Console.WriteLine($"The factorial of {number} is: {fact}");
        }

       
    }
}