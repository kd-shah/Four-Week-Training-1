using System;

namespace Bank_Account
{
    public abstract class Bank_Account
    {
        public string Account_Number { get; }
        public double Balance { get; protected set; }

        public Bank_Account(string accountNumber, double balance)
        {
            Account_Number = accountNumber;
            Balance = balance;
        }

        public virtual double Deposit(double amount)
        {
            Balance += amount;
            return Balance;
        }

        public abstract double Withdraw(double amount);
    }

    class Savings_Account : Bank_Account
    {
        public double Interest_Rate { get; }

        public Savings_Account(string accountNumber, double balance, double interestRate) : base(accountNumber, balance)
        {
            Interest_Rate = interestRate;
        }

        public override double Withdraw(double amount)
        {
            // Add any specific logic for withdrawal from savings account
            Balance -= amount;
            return Balance;
        }
    }

    class Checking_Account : Bank_Account
    {
        public double Overdraft_Limit { get; }

        public Checking_Account(string accountNumber, double balance, double overdraftLimit) : base(accountNumber, balance)
        {
            Overdraft_Limit = overdraftLimit;
        }

        public override double Withdraw(double amount)
        {
            // Add any specific logic for withdrawal from checking account
            if (Balance - amount >= -Overdraft_Limit)
            {
                Balance -= amount;
            }
            else
            {
                Console.WriteLine("Insufficient funds!");
            }
            return Balance;
        }
    }

    internal class Program
    {
        static void Main()
        {
            double balance = 10000;

            Savings_Account account = new Savings_Account("KD01", balance, 0.05);
            double new_balance = account.Deposit(5000);
            Console.WriteLine(new_balance);

            Checking_Account checkingAccount = new Checking_Account("CA01", balance, 1000);
            double withdrawal_balance = checkingAccount.Withdraw(15000);
            Console.WriteLine(withdrawal_balance);

            Console.ReadKey(true);
        }
    }
}
