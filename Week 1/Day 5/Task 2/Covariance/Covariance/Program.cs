namespace Covariance
{
    public interface IProcessor<in Tinput, out TResult>
    {
        public TResult Process(Tinput input);
    }

    public class StringToIntProcessor : IProcessor<string,int>
    {
        public int Process(string input)
        {
            return input.Length;
        } 
    }

    public class DoubleToStringProcessor : IProcessor<double,string> 
    {
        public string Process (double input)
        {
            return input.ToString();
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            IProcessor<string, int> stringToIntProcessor = new StringToIntProcessor();
            //IProcessor<object, int> objectToIntProcessor = stringToIntProcessor;

            string inputString = "Hello, World!";
            int length = stringToIntProcessor.Process(inputString);
            Console.WriteLine($"Length of '{inputString}': {length}");


            IProcessor<double, string> doubleToStringProcessor = new DoubleToStringProcessor();
            IProcessor<double, object> doubleToObjectProcessor = doubleToStringProcessor;

            double inputDouble = 3.14;
            object result = doubleToObjectProcessor.Process(inputDouble);
            Console.WriteLine($"String representation of {inputDouble}: {result}");
        }
    }
}