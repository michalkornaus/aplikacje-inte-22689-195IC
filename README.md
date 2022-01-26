## aplikacje-inte-22689-195IC
# Lab9 - Django + React (aplikacja CRUD)

#### Aplikacja CRUD to taka gdzie możemy tworzyć (Create), pozyskiwać (Retrieve), aktualizować (Update) oraz usuwać (Delete) obiekty. 
##### W mojej aplikacji skorzystałem z poradnika ze strony *https://www.bezkoder.com/django-react-axios-rest-framework/* - wprowadziłem również parę modyfikacji w modelu Django i komponentach React.

#### Widok głównej aplikacji po odpaleniu obu serwerów Django oraz React, jak i po skonfigurowaniu portów oraz ustawień obu aplikacji. Zmieniłem motyw aplikacji z tutoriali, na zbiór użytkowników. W tym miejscu dodałem dynamiczny przycisk do usuwania wszystkich użytkowników (nie pokazuje się jeżeli nie ma użytkowników) oraz komunikat po prawej stronie zmienia swoją treść również jeżeli nie ma użytkowników.
![screen0](/screeny/0.PNG)
#### Kod chowający przycisk do usuwania wszystkich użytkowników. W utworzonej zmiennej *length* przechowuje długość tablicy użytkowików, dzięki której wiem czy jest jakiś użytkownik. Jeżeli nie ma użytkowników na stronę wstawia się pusty div.
![screen1](/screeny/1.PNG)
#### Inną podstroną aplikacji CRUD jest podstrona dodawania nowego użytkownika - zmodyfikowałem pierwotny model tutoriala na użytkownika tworząc pola imienia, nazwiska, daty urodzin oraz opisu użytkownika (np. jego rola, zawód, profesja w firmie)
![screen2](/screeny/2.PNG)
#### Widok ustawiania daty urodzin użytkownika - jak widać wbudowany formularz dobrze się sprawdza - dodatkowo ograniczyłem wybór daty urodzin od dnia 26.01.2022 do 01.01.1900 w celu poprawnej walidacji danych.
![screen3](/screeny/3.PNG)
#### Przykładowe wypełnienie danymi formularza nowego użytkownika.
![screen4](/screeny/4.PNG)
#### Widok po utworzeniu nowego użytkownika - mamy opcję utworzenia od razu nowego użytkownika lub przejścia do zakładki użytkowników i podejrzenia nowo utworzonego użytkownika na liście.
![screen5](/screeny/5.PNG)
#### Podgląd backendu serwera Django po utworzeniu nowego użytkownika - w miejscu POST utworzono został nowy użytkownik. Metody GET wydobywają z bazy danych potrzebne informacje lub obiekty użytkowników.
![screen6](/screeny/6.PNG)
#### Pogląd listy wszystkich użytkowników. W tym miejscu również zmieniłem sporo rzeczy, które opisze na następnych screenach.
![screen7](/screeny/7.PNG)
#### Po kliknięciu na użytkownika dostajemy z prawej strony dokładniejsze informacje o nim. Dodatkowo dodałem przycisk usunięcia z tego poziomu, który był wcześniej dostępny jedynie podczas edycji użytkownika. Oprócz tego dodałem funkcjonalność odklikiwania danego usera (stan powraca do listy bez zaznaczonego użytkownika) - lecz ciężko pokazać to na zrzucie ekranu ;)
![screen8](/screeny/8.PNG)
#### Pokazanie filtrowania/szukania użytkowników po nazwisku - po wpisaniu *wa*, pokazały się dwa nazwiska z danym ciągiem wewnątrz.
![screen9](/screeny/9.PNG)
![screen10](/screeny/10.PNG)
#### Pogląd metod HTTP z poziomu konsoli serwerowej - jak widać po filtrowaniu dostajemy metody GET z odpowiednią frazą na końcu po znaku ?
![screen11](/screeny/11.PNG)
#### Po usunięciu wszystkich użytkowników lub ich brak w pierwszej kolejności znika przycisk usunięcia wszystkich użytkowników oraz wyświetla się odpowiedni komunikat o braku użytkowników po prawej stronie.
![screen12](/screeny/12.PNG)
#### Pokazanie HTTP po usunięciu użytkownika.
![screen13](/screeny/13.PNG)
#### Oprócz usunięcia użytkownika możemy zacząć edytować jego dane, dodatkowo możemy zmienić status jego konta. Domyślnie konta są nieaktywne ale możemy je aktywować przyciskiem. Dodatkowo można zmienić wszystkie pola i po edycji po kliknięciu przycisku Zaktualizuj wszystkie pola się zaktualizują.
![screen14](/screeny/14.PNG)
#### Komunikat po edycji opisu użytkownika
![screen15](/screeny/15.PNG)
#### Widok z serwera Django po edycji użytkownika. Jak widać metoda PUT modyfikuje istniejące obiekty.
![screen16](/screeny/16.PNG)
#### Widok zmienionego użytkownika na liście użytkowników. Jak widać status konta w tym miejscu jest ustawiony na aktywny.
![screen17](/screeny/17.PNG)
#### Podgląd modelu użytkownika w Django. Dodałem 3 nowe pola - *first_name*, *last_name* oraz *birth_date*
![screen18](/screeny/18.PNG)
#### Dodatkowo na podstronie tworzenia nowego użytkownika dodałem walidację - jeżeli któreś z pól jest puste wyświetla się komunikat aby wpisac poprawne dane użytkownika.
![screen19](/screeny/19.PNG)
#### Podgląd kawałku kodu, który dodaje walidację do kreatora nowego użytkownika. Komunikat pokazuje się w momencie kiedy metoda *then* napotkała jakiś błąd i metoda *catch* go wychwyci. Po pokazaniu błędu w konsoli zmienia się tekst komunikatu z błędem.
![screen20](/screeny/20.PNG)
