# _Galactic Calculator Logic_

#### _Business logic that can take a persons age and return a different age on another planet , 09/04/2020_

#### By _Jeff Dinsmore_

## Description

_This business logic will take a persons age and return a different age based on the plants solar year. It will have five different calculations for planets in our solar system. The logic will also determine how many years a user has left to live in these respective solar years based on a random calculation between 72 and 97 Earth years of age._

Describe: solarYearCalculator()

Spec 1: The program returns an inputted age and calculates a new age in Mercery solar years @ .24 Earth years.
* Input: "10"
* Output: "41.5"

Spec 2: The program returns an inputted age and calculates a new age in Venus solar years @ .62 Earth years.
* Input: "10"
* Output: "16.2"

Spec 3: The program returns an inputted age and calculates a new age in Mars solar years @ 1.88 Earth years.
* Input: "10"
* Output: "5.3"

Spec 4: The program returns an inputted age and calculates a new age in Jupiter solar years @ 11.86 Earth years.
* Input: "10"
* Output: "0.84"

Spec 5: The program returns an inputted age and calculates a new age random between 72 and 97 Earth years.
* Input: "53"
* Output: "Expected life expectancy on all planets is 342.2, 133.9, 82.4, 43.8, 6.94 years respectively."


Spec 6: The program takes inputted age and subtracts from the the random age from spec 5 of 82.4 years and returns in solar years of all the planets listed in the previous tests.
* Input: "53"
* Output: "You have 29.4, 122.1, 47.8, 15.6, and 2.48 years to live on each planet respectively"

Spec 7: If a user has already surpassed the average life expectancy, the program returns the number of years they have already lived past the life expectancy for each planet respectively.
* Input: "92.4"
* Output: "You have already lived passed the life expectancy of 82.4 years. You surpassed the life expectancy by 41.5, 16.2, 10, 5.3, and 0.84 years respectively."

## Setup/Installation Requirements

* _Clone this repository._
* _In the cloned folder, double click on index or index.html. If the file doesn't open, right click on index or index.html and "open with" your browser of choice._

## Known Bugs

_Not bugs at the moment._

## Support and contact details

_Any known issues, please reach out to Jeff Dinsmore by email at hello@jeffdinsmore.com._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _JavaScript_
* _Node_
* _Jest_

## License

Copyright (c) 2020, **_Jeff Dinsmore_**

This software is licensed under the MIT license.