namespace Sum
{
    internal class Program
    {
        static int Sum(int a, int b) {
            int c;
            c = a + b;
            return c;
        }
        static void Main(string[] args)
        {
            Console.Write("Enter first number: ");
            int num1 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter second number: ");
            int num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Sum of two number is : {0}", Sum(num1, num2));
            Console.ReadLine();
        }
       
    }
}