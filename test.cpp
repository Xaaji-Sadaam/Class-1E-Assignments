/*Write a program that prints the squares of the numbers from 1 to 20, using a two-column format using
for loop.*/

#include <iostream>
#include <iomanip>

int main() {
    const int bilow = 1;
    const int dhamad = 20;
    const int columns = 2;

    std::cout << "Square ka tiroyinka 1 ilaa 20:" << std::endl;
    std::cout << "-------------------" << std::endl;

    for (int s = bilow; s <= dhamad; ++s) {
        int square = s * s;

        //labadi column format
        std::cout << std::setw(5) << s << ":" << std::setw(5) << square;

        //isku dhufashada line ka xiga ee columns ka
        if (s % columns == 0 || s == dhamad) {
            std::cout << std::endl;
        }
    }

    return 0;
}
