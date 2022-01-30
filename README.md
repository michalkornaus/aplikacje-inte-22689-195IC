## aplikacje-inte-22689-195IC
# Lab10 - Django + React (aplikacja ToDo)

#### Aplikacja ToDo to aplikacja gdzie możemy dodawać wpisy/zadania do wykonania oraz zmieniać ich stan na zakończone jeżeli je wykonaliśmy.
##### W tej aplikacji również skorzystałem z poradnika oraz dodatkowo dodałem parenaście własnych modyfikacji do wzbogacenia aplikacji.

#### Widok główny po odpaleniu aplikacji - można dodawać w niej nowe zadania todo oraz wybierać kategorię zadań - wykonane lub w trakcie. Poniżej znajduje się lista wybranych zadań todo. Dodatkowo dodałem komunikat ile zostało dni do końca planowego zakończenia zadania - dzięki zmodyfikowaniu modelu oraz serializatora w django. Wyświetlam również ilość wszystkich zadań na samym dole.
![screen1](/screeny/1.PNG)
#### Podstawową akcją w aplikacji ToDo jest przede wszystkim dodawanie nowego taska. Po wciśnięciu przycisku *Dodaj nowe zadanie* ukazuje się formularz dodania nowego zadania. Możemy wprowadzić tytuł, opis stan zadania oraz planową datę zakończenia. Dzięki dacie zakończenia użytkownik może określić kiedy mniej więcej chce ukończyć dane zadanie dzięki czemu będzie bardziej efektywny.
![screen2](/screeny/2.PNG)
#### Widok kodu źródłowego pliku *models.py* z backendu django. Dodałem jedno więcej pole completionDate, w którym użytkownik może zapisać zaplanowaną datę zakończenia taska.
![screen3](/screeny/3.PNG)
#### Dodatkowo oprócz zmiany w modelu należy dodać nowo utworzone pole w serializatorze, który przekazuje dane frontendowi dzięki API.
![screen4](/screeny/4.PNG)
#### Przykładowo wypełnione dane w formularzu nowego zadania. 
![screen5](/screeny/5.PNG)
#### Widok wszystkich zadań w trakcie włącznie z nowo dodanym taskiem. Jak widać komunikat na dole o ilości zadań dobrze się aktualizuje i po dodaniu zmienił się na 3 zadania. Dodatkowo widać, że po najechaniu na jakiś task wyświetla się jego opis.
![screen6](/screeny/6.PNG)
#### Na prawo mamy dwie akcje do wykonania - edycja i usunięcie zadania - możemy przetestować edycję danego zadania. W tym wypadku zmienię jedynie stan taska ze stanu w trakcie wykonywania na zakończone. Po zapisaniu task powininen zniknąć z listy w trakcie oraz pojawić się na liście tasków zakończonych.
![screen7](/screeny/7.PNG)
#### Jak widać po przejściu na zakładkę zakończonych zadań widzimy, nowo dodane zadanie na dole listy, które jest przekreślone. Dodatkowo komunikat na dole zmienił swoją treść z *Posiadasz obecnie zadania w trakcie!* na *Posiadasz obecnie zakończone zadania*.
![screen8](/screeny/8.PNG)
#### Po usunięciu wszystkich zakończonych zadań otrzymujemy również inny komunikat o braku zakończonych zadań. Tak samo wygląda to w przypadku zadań w trakcie wykonywania.
![screen9](/screeny/9.PNG)
#### Fragment kodu wyświetlający dni do zakończenia taska. Korzystam z własnej metody, które zwraca dni różnicy między teraźniejszą datą, a zapisaną.
![screen10](/screeny/10.PNG)
#### Wewnątrz metody korzystam z biblioteki *moment* (obsługującej daty i czas), dzięki której sprawdzam czy zmienne są datami oraz zmieniam je na momenty po czym mogę użyć metody *diff* która może porównywać te momenty. Przy użyciu parametry *days* otrzymam różnicę w dniach co mogę potem wykorzystać.
![screen11](/screeny/11.PNG)
#### Dodatkowo nowa funkcja, która podlicza i zwraca długość listy tasków (nie wszystkich lecz zależnie na ich kategorię)
![screen12](/screeny/12.PNG)
#### Fragment kodu pod listą wszystkich zadań, który wyświetla komunikat o ilości tasków. Jak widać kod jest dość złożony i uwzględnia wybraną kategorię zadań oraz to czy są jakiekolwiek taski na liście.
![screen13](/screeny/13.PNG)
#### Modyfikacja formularza aby dodać dodatkowe pole daty. W obiekcie Input zmieniłem typ inputu na *date* oraz dodatkowo dodałem atrybut *min*, który nie pozwala użytkownikowi wybrać daty mniejszą niż dzisiejszą datę 30.01.2022. Jest to wprowadzone aby użytkownik nie mógł zaplanować sobie zadania i wybrać daty wstecz.
![screen14](/screeny/14.PNG)
