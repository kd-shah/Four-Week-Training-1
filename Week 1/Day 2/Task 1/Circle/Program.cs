namespace Circle
{
    class Circle
    {
        public double Radius;

        public Circle(double radius)
        {
            Radius = radius;
        }

        public double GetArea()
        {
            double area = Math.PI * Math.Pow(Radius, 2);
            return area;
        }

        public double GetCircumference()
        {
            double circumference = 2 * Math.PI * Radius;
            return circumference;
        }
    }

    class Program
    {
        static void Main()
        {
            double radius = 5.0;
            Circle circle = new Circle(radius);

            double area = circle.GetArea();
            double circumference = circle.GetCircumference();

            Console.WriteLine("Circle Properties:");
            Console.WriteLine("Radius: " + circle.Radius);
            Console.WriteLine("Area: " + area);
            Console.WriteLine("Circumference: " + circumference);
        }
    }
}