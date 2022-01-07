# JS-Exercises

Daily exercise of Js -> Elevator distance 7 Kyu.

## Description(1)

Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').

Examples:
-solution('abc') -> Should return ['ab', 'c_']
-solution('abcdef') -> Should return ['ab', 'cd', 'ef']

## Description(2)

Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.
Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.
## Description(3)

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
## Description (4)

--Description (ASCII Total)

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291

--Description (Elevator distance)

Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

--Description (Binary Addition)

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
Daily exercise using Js -> Find the odd int total 6 Kyu.

## Description(5)

Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

## Description(6)

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
## Description(7)

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:
n= 5, m=5: 25
n=-5, m=5:  0
## Description(8)

Very simple, given an integer or a floating-point number, find its opposite.
Examples:
1: -1
14: -14
-34: 34

## Description(9)

You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.

--Description (Twice as old)
Your function takes two arguments:
-1-Current father's age (years)
-2-Current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

--Description (Hero)
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return True if yes, False otherwise :)

## Description(10)

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Notes:
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

## Description(11)

We need a function that can transform a number into a string.
Notes:
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
What ways of achieving this do you know?
Examples:
123 --> "123"
999 --> "999"

--Description (Remove First and Last Character)
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

--Description (Find the smallest integer in the array)
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

--Description (Grasshopper - Summation)
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
For example:
summation(2) -> 3
1 + 2
summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
## Description(12)

Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

--Description (Remove String Spaces)
Simple, remove the spaces from the string, then return the resultant string.## Description(13)

Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
## Description(13)

Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5

## Description(14)

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
## Description(15)

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

--Description (Returning Strings)
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

--Description (Convert number to reversed array of digits)
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

--Description (Beginner - Lost Without a Map)
Given an array of integers, return a new array with each value doubled.

## Description(16)

Create a function called shortcut to remove all the lowercase vowels in a given string.
## Description(17)

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

## Description(18)

Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

--Description(Reversed Words)
Complete the solution so that it reverses all of the words within the string passed in.

## Description(19)

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

--Description(I love you, a little , a lot, passionately ... not at all)
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

## Description(20)

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

## Description(21)

Write a function which converts the input string to uppercase.
