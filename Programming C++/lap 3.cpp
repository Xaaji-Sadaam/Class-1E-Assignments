#include <iostream>

int main() {
    double gallons, cubicFeet;
    const double GALLONS_TO_CUBIC_FEET = 7.48052;

    std::cout << "Enter Gallons: ";
    std::cin >> gallons;

    cubicFeet = gallons / GALLONS_TO_CUBIC_FEET;

    std::cout << gallons << " Gallons = " << cubicFeet << " Cubic Feet." << std::endl;

    return 0;
}
