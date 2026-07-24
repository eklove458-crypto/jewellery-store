import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
driver = webdriver.Firefox()
driver.maximize_window()
driver.get("https://www.google.com")

time.sleep(2)
driver.find_element(By.XPATH, "//textarea[@class='gLFyf']").send_keys("flower picture")
time.sleep(2)
driver.send_keys(Keys.ENTER)
time.sleep(2)
driver.find_element(By.CLASS_NAME, "gNO89b").click()
time.sleep(2)
