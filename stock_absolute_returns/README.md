# Hack23-FireFighters

**Idea**: <b>Smart Stock Returns Calculators</b>


**Problems**: <p> Whenever we want to check performance of any stock, we are getting only percentage(%) changes, but as investor there are multiple things that will play vital role like divident, split, bonus.
So if we want to check all of these parameters, need to search one parameter at a time.</p>

<p> Introducing "Smart Stock Returns Calculators" where you will get all the information at one clicked.</p>

<p> Concept is implemented using MoneyControl data.</p>


**Input**
AMOUNT = 1000
SYMBOL = "HAL"
FROM = calendar.timegm(datetime.datetime(2023, 6, 1).timetuple())

**Output**

`{'symbol': 'HAL', 'investedAmount': 1000, 'initialPrice': 1887.95, 'currentPrice': 1961.6, 'totalPercChange': 3.9, 'marketPrice': 103900.0, 'corporatesEvents': [{'Dividend': 'Final Dividend of Rs.15.00   Ex-Date:  24 Aug, 2023'}, {'Split': '10:5   Ex-Date:  28 Sep, 2023'}]}`

<img width="393" alt="Screenshot 2023-10-13 at 8 43 48 AM" src="https://github.com/rahul-panzade/Hack23-FireFighters/assets/91452939/f31709e6-7dbe-4075-a151-7c28cf674589">
