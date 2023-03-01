# web scrape to download images from websites
# to web scrape a given url, add url into "urlList.txt"

import requests
from bs4 import BeautifulSoup 
import os
import re

def getdata(url): 
  r = requests.get(url) 
  return r.text 

webUrlList = None

# get list of websites that can be used to extract images
with open("./web-scrap/urlList.txt", "r") as f:
  webUrlList = f.readlines()

# download images for each website
for webUrl in webUrlList:
  htmldata = getdata(webUrl) 
  soup = BeautifulSoup(htmldata, 'html.parser') 
  imgUrlList = []
  biblioInfo = {}
  
  titleData = soup.find("div", {"class": "item-info"})
  title = titleData.h1.text
  
  ratingData = soup.find("div", {"class": "rating-wrap"})
  ratingVal = ratingData.span
  print(ratingVal)
  
  ulData = soup.find("ul", {"class": "biblio-info"})
  for li in ulData.find_all("li"):
    val = re.sub(r"\s+", " ", li.span.text).strip()
    biblioInfo[li.label.text] = val

  imgData = soup.find("div", "item-img-content")
  bookcoverImg = imgData.img['src']

  excerptData = soup.find("div", {"class": "item-excerpt"})


  

  # # get image url for each image on the website
  # for imgTag in soup.find_all("img"):
  #   if "productimg" in imgTag["src"]:
  #     imgUrlList.append(imgTag["src"])

  # # download image given image url
  # for imgUrl in imgUrlList:
  #   filename = imgUrl.split("/")[-1]
  #   filepath = "./dataset/product-img/" + filename
    
  #   # if image url is not valid, dont attempt to download
  #   imgUrlSyntax = re.search(r'/([\w_-]+[.](jpg|gif|png))$', imgUrl)
  #   if not imgUrlSyntax:
  #     print("Does not match regular url syntax: {}".format(imgUrl))
  #     continue
    
  #   # if file already exists, dont download
  #   if os.path.isfile(filepath):
  #     continue
    
  #   # download image
  #   with open(filepath, 'wb') as f:
  #     response = requests.get(imgUrl)
  #     f.write(response.content)
  #     print("Successful: Image is downloaded and saved at {}".format(filepath))