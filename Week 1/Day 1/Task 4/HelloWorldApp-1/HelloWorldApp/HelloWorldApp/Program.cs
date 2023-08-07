namespace HelloWorldApp
{
    internal class Program
    {
        static int Sum(int a, int b)
        {
            int c;
            c = a + b;
            return c;
        }

        static int Multiply(int a, int b)
        {
            int c;
            c = a * b;
            return c;
        }

        static float Divide(float  a, float b)
        {
            float c;  
            c = a / b;
            return c;
        }    
        

        static void Main(string[] args)
        {
            Console.Write("Enter first number: ");
            int num1 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter second number: ");
            int num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Sum of two number is : {0}", Sum(num1, num2));
            Console.WriteLine("Multiplication of two number is : {0}", Multiply(num1, num2));
            Console.WriteLine("Division of two number is : {0}", Divide(num1, num2));
            Console.ReadKey(true);
           

        }
    }
}