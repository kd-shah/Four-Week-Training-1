using System.IO;

namespace FileLoggerDisposableApp
{
    

    class FileLogger : IDisposable
    {
        private StreamWriter _writer;

        public FileLogger(string filePath)
        {
            _writer = new StreamWriter(filePath);
        }

        public void Dispose()
        {
            Dispose(true);
            
            GC.SuppressFinalize(this);
        }


        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_writer != null)
                {
                    _writer.Dispose();
                    _writer = null;
                }
            }
        }
            public void Log(string message)
        {
            _writer.WriteLine($"{DateTime.Now} - {message}");
            
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            using (FileLogger logger = new FileLogger("file.txt"))
            {
                logger.Log("Log entry 1");
                logger.Log("Log entry 2");
                logger.Log("Log entry 3");
            }
            Console.WriteLine("Logging complete. FileLogger disposed.");
        }
    }
}