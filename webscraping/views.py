from django.shortcuts import render, get_object_or_404
from bs4 import BeautifulSoup
from lxml import html
import requests

def examples(request):

    page = requests.get("https://webscraper.io/test-sites/e-commerce/allinone/phones/touch")
    soup = BeautifulSoup(page.content, "html.parser")
	
    # Przykład 1
    all_p_tags = []
    for element in soup.select("p"):
        all_p_tags.append(element.text)

    all_p_tagslen=len(all_p_tags)
    second_p_text = soup.select("p")[1].text


    # Przykład 2
    soup = BeautifulSoup(page.content, "html.parser")
    top_items = []
    products = soup.select("div.thumbnail")
	
    for elem in products:
        title = elem.select("h4 > a.title")[0].text
        review_label = elem.select("div.ratings")[0].text
        info = {"title": title.strip(), "review": review_label.strip()}
        top_items.append(info)


    #Przykład 3
    image_data = []
    images = soup.select("img")
    print("Liczba obrazków =", len(images))
	
    for image in images:
        src = image.get("src")
        alt = image.get("alt")
        image_data.append({"src": src, "alt": alt})


    # Przykład 4
    all_products = []

    products = soup.select('div.thumbnail')
    for product in products:
        name = product.select('h4 > a')[0].text.strip()
        description = product.select('p.description')[0].text.strip()
        price = product.select('h4.price')[0].text.strip()
        reviews = product.select('div.ratings')[0].text.strip()
        image = product.select('img')[0].get('src')

        all_products.append({
            "name": name,
            "description": description,
            "price": price,
            "reviews": reviews,
            "image": image
        })
    return render(request,'examples.html',{'top_items':top_items,'all_p_tagslen':all_p_tagslen,
        'second_p_text':second_p_text, 'image_data':image_data,'all_products':all_products})
		
		
def search(request):
    if request.method == "POST":
        allElements = []
        web_link = request.POST.get('web_link', None)
        element = request.POST.get('element', None)
        url = web_link
        source=requests.get(url).text
        soup = BeautifulSoup(source, "html.parser")
        items = soup.find_all(element)
        amount = len(items)

        for i in items:

            findClass = i.get('class')
            if findClass is None:
                findClass = "Brak"

            findId = i.get('id')
            findId = findId.strip() if findId is not None else "Brak"

            findArticle = i.get('article')
            findArticle = findArticle.strip() if findArticle is not None else "Brak"

            findAlt = i.get('alt')
            findAlt = findAlt.strip() if findAlt is not None else "Brak"

            findText = i.text
            findText = findText.strip() if findText is not None else "Brak"

            findSrc = i.get('src')
            if findSrc is None:
                findSrc = "Brak"

            findHref = i.get('href')
            findHref = findHref.strip() if findHref is not None else "Brak"

            allElements.append({"findId": findId, "findClass": findClass,"findAlt": findAlt, "findArticle": findArticle, "findText": findText,
            'findHref':findHref, 'findSrc': findSrc})
			
        return render(request, 'search.html', {'allElements':allElements, 'amount': amount, 'web_link': web_link, 'element':element})
    return render(request, 'search.html')
		

def xpath(request):

    url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/tablets'
    path = '/html/body/div[2]/div/div[1]/div[4]/ul[1]/li[2]/a'
    response = requests.get(url)
    source = html.fromstring(response.content)
    tree = source.xpath(path)
    lxml1 = tree[0].text_content()

    url = 'https://webscraper.io/pricing'
    path = '//*[@class="row"]'
    response = requests.get(url)
    source = html.fromstring(response.content)
    tree = source.xpath(path)
    lxml2 = tree[0].text_content()

    return render(request, 'xpath.html', {'lxml1': lxml1,'lxml2': lxml2 })
	
	
