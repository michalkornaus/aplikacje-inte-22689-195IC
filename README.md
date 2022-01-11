## aplikacje-inte-22689-195IC
# Lab5 - Web scraping

##### Rozpoczynamy wyciąganie danych z innych stron od znalezienia naszej docelowej strony z której będziemy pobierać znaczniki i inne dane.  W moim wypadku skorzystałem ze strony webscraper.io, która posiada dużo podstron do testowania web scrapingu.
![screen1](/zrzuty/1.PNG)
##### Pokazane działanie pierwszych dwóch przykładów scrapingu danych z powyższej strony.  Jak widać w drugim przykładzie nazwy telefonów i liczba ich recenzji zgadzają się ze stroną źródłową.
![screen2](/zrzuty/2.PNG)
##### Przykład. 3 znajduje wszystkie na wybranej stronie obrazki (znaczniki img) i wypisuje ich ścieżkę oraz alternatywny tekst.
![screen3](/zrzuty/3.PNG)
##### Przykład. 4 jest podobny do przykładu. 2 - wypisuje 9 telefonów lecz tym razem z większą ilością informacji - dodatkowo jest opis, cena oraz źródło obrazka.
![screen4](/zrzuty/4.PNG)
##### Wyszukiwarka elementów do scrapingu - po podaniu URL strony, znacznika HTML którego szukamy oraz przycisku Wyszukaj dostaniemy listę wszystkim takich elementów na danej stronie. Tak jak w poprzednich etapach, korzystamy z BeautifulSoup do znalezienia wszystkich elementów do scrapingu lecz tym razem wyszukujemy jedynie jeden nas interesujący.
![screen5](/zrzuty/5.PNG)
##### Po wpisaniu strony oraz znacznika (w tym przykładzie *a*) dostajemy listę wszystkich elementów. Dodatkowo strona wypisuje nam wszystkie możliwe atrybuty danego znacznika takie jak id, klasa, tekst oraz źródło zdjęcia.
![screen6](/zrzuty/6.PNG)
##### Miejsce z którego przy pomocy xPath będziemy wyciągać dane. 
![screen8](/zrzuty/8.PNG)
##### Strona z której będziemy scrapować element przy pomocy klasy.
![screen10](/zrzuty/10.PNG)
##### Jak widzimy przy pomocy xPath, po wskazaniu dokładnej ścieżki do elementu stopki oraz konkretnego tekstu dostaliśmy jego zawartość.  Przy pomocy klasy zadanie wyciągnięcia danych było znacznie prostsze - ponieważ wystarczyło podać jaka klasa nas interesuje i strona sama zwróciła mi pierwszy napotkany element z daną klasą.
![screen9](/zrzuty/9.PNG)
##### Widok podglądu strony z kodem źródłowym - interesowała mnie klasa *row* i zaznaczony element na zrzucie ekranu był pierwszym wystąpieniem tego elementu. Na poprzednim zrzucie dobrze widzimy że wypisał się tekst znajdujący się na środku strony.
![screen11](/zrzuty/11.PNG)
