import requests
import json
import datetime
import calendar
from bs4 import BeautifulSoup
import re

# Input Parameters
AMOUNT = 1000
SYMBOL = "IOC"
FROM = calendar.timegm(datetime.datetime(2022, 6, 1).timetuple())
TO = calendar.timegm(datetime.datetime.now().timetuple())

def getPriceDiffernce():
    url = "https://priceapi.moneycontrol.com/techCharts/indianMarket/stock/history?symbol={symbol}&resolution=1D&from={froms}&to={to}&countback=329&currencyCode=INR".format( symbol=SYMBOL, froms=FROM , to=TO )
    payload = {}
    print(url)
    headers = {
    'authority': 'priceapi.moneycontrol.com',
    'accept': '*/*',
    'accept-language': 'en-GB,en;q=0.9',
    'origin': 'https://www.moneycontrol.com',
    'referer': 'https://www.moneycontrol.com/',
    'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    j = json.loads(response.text)
    return {'start': j['o'][0], 'end': j['o'][-1]}

def getBonusSplitDivident():
    url = "https://priceapi.moneycontrol.com/techCharts/indianMarket/stock/marks?symbol={symbol}&from={froms}&to={to}&resolution=1D".format( symbol=SYMBOL, froms=FROM , to=TO )

    payload = {}
    headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': 'https://www.moneycontrol.com/',
    'Origin': 'https://www.moneycontrol.com',
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'TE': 'trailers'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    j = json.loads(response.text)
    events = []
    for idx, x in enumerate(j['id']):
        if j['time'][idx] >= FROM :
            events.append(getTypeAndDate(j['label'][idx],j['text'][idx]))
    return events
    # print(events)
    # print(response.text)

def getTypeAndDate(type, html):
    soup = BeautifulSoup(html, 'html.parser')
    info_div = soup.find('div')
    div_text = info_div.get_text(separator="\n")

    type_match = ''
    type_desc = ''
    if type == 'B':
       type_desc = 'Bonus'
       type_match = re.search(r"Bonus:\s+([^<]+)", div_text)
    elif type == 'D':
       type_desc = 'Dividend'
       type_match = re.search(r'Dividend:\s+([^<]+)', div_text)
    elif type == 'S':
       type_desc = 'Split'
       type_match = re.search(r"Split:\s+([^<]+)", div_text)
    else:
       type_desc = 'Rights'
       type_match = re.search(r"Rights:\s+([^<]+)", div_text)
    # ex_date_match = re.search(r"Ex-Date:\s+([\d, A-Za-z]+)", div_text)

    type_value = type_match.group(1) if type_match else None
    # ex_date_value = ex_date_match.group(1) if ex_date_match else None

    return {type_desc: type_value.strip().replace('\n',' ')}


startEndPrice = getPriceDiffernce()

perc = round(((startEndPrice['end'] - startEndPrice['start']) / startEndPrice['start']) * 100 , 2)
events = getBonusSplitDivident()

# Output Response
response = {
    "symbol":SYMBOL,
    "investedAmount": AMOUNT,
    "initialPrice": startEndPrice['start'],
    "currentPrice": startEndPrice['end'],
    "totalPercChange": perc,
    "marketPrice": AMOUNT * (100 + perc),
    "corporatesEvents": events
    
}

print(response)


