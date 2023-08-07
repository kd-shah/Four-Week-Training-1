namespace AnimalClass
{
 public abstract class Animal
  {
        public required string Name { get; set; }
        public int Age { get; set; }

        public abstract void MakeSound();
  }

    public class Dog : Animal {

        public override void MakeSound()
        {
            Console.WriteLine("Woof");
        }
        public void Move()
        {
            Console.WriteLine("Running");
        }


    }

    public class Cat : Animal
    {
        public override void MakeSound()
        {
            Console.WriteLine("Meow");
        }

        public void Move()
        {
            Console.WriteLine("Jumping");
        }
    }
    

     interface IMovable
    {
        void Move();
    }


    

    internal class Program
    {
        
        static void Main()
        {
            List<Animal> animals = new List<Animal>();
            animals.Add(new Dog { Name= "Tom", Age= 5 });
            animals.Add(new Cat { Name = "Milo", Age = 6 });

            foreach (Animal animal in animals)
            {
                Console.WriteLine($"Name of Animal: {animal.Name}");
                Console.WriteLine($"Age of Animal: {animal.Age}");
                animal.MakeSound();

                if (animal is IMovable mo)
                {
                    mo.Move();
                }

                Console.WriteLine();
            }
        }
    }
}