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

`
{
'symbole': 'HAL',
'investedAmount': 1000,
'initialPrice': 1899.5,
'currentPrice': 1964.8,
'totalPercChange': 3.44,
'marketPrice': 103440.0,
'corporatedEvents': [
{
'Dividend': 'Interim Dividend of Rs.19.80   Ex-Date:  28 Mar, 2019'
},
{
'Dividend': 'Interim Dividend of Rs.33.25   Ex-Date:  23 Mar, 2020'
},
{
'Dividend': 'Final Dividend of Rs.15.00   Ex-Date:  17 Dec, 2020'
},
{
'Dividend': 'Interim Dividend of Rs.15.00   Ex-Date:  05 Mar, 2021'
},
{
'Dividend': 'Interim Dividend of Rs.14.00   Ex-Date:  23 Nov, 2021'
},
{
'Dividend': 'Interim Dividend of Rs.26.00   Ex-Date:  17 Feb, 2022'
},
{
'Dividend': 'Final Dividend of Rs.10.00   Ex-Date:  19 Aug, 2022'
},
{
'Dividend': 'Interim Dividend of Rs.20.00   Ex-Date:  18 Nov, 2022'
},
{
'Dividend': 'Interim Dividend of Rs.20.00   Ex-Date:  20 Mar, 2023'
},
{
'Dividend': 'Final Dividend of Rs.15.00   Ex-Date:  24 Aug, 2023'
},
{
'Split': '10:5   Ex-Date:  28 Sep, 2023'
}
]
}

`
