#include <iostream>

int main() {
    int firstNumber, secondNumber;
    
    std::cout << "Enter First Number: ";
    std::cin >> firstNumber;
    
    std::cout << "Enter Second Number: ";
    std::cin >> secondNumber;
    
    int addition = firstNumber + secondNumber;
    int subtraction = firstNumber - secondNumber;
    int multiplication = firstNumber * secondNumber;
    double division = static_cast<double>(firstNumber) / secondNumber;
    int modulus = firstNumber % secondNumber;
    
    std::cout << firstNumber << " + " << secondNumber << " = " << addition << std::endl;
    std::cout << firstNumber << " - " << secondNumber << " = " << subtraction << std::endl;
    std::cout << firstNumber << " * " << secondNumber << " = " << multiplication << std::endl;
    std::cout << firstNumber << " / " << secondNumber << " = " << division << std::endl;
    std::cout << firstNumber << " % " << secondNumber << " = " << modulus << std::endl;
    
    return 0;
}
