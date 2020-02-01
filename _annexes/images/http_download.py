# -*- coding: utf-8 -*-

import re
import requests
import shutil

url = input("Enter image link: ")
file_name = input("Enter image file name: ")

regex = r"(^http).+(.png|.jpg)$"

# If regex match in url
if re.match(regex, url):
    # Launch download
    r = requests.get(url, stream=True)

    if re.search(r"(.png)", url): ext = ".png"
    elif re.search(r"(.jpg)", url): ext = ".jpg"

    # Write on file
    with open(file_name + ext, mode='wb') as file:
        shutil.copyfileobj(r.raw, file)
else:
    print("Invalid url.")
