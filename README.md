## aplikacje-inte-22689-195IC
# Lab4 - REST API z DRF

##### Migracja modelu *Post* z aplikacji posts w celu tworzenia nowych postów dla użytkowników
![widok1](/zrzuty/1.PNG)
##### Widok modelu postu w panelu */admin* - tutaj jeszcze nie korzystamy z DRF
![widok2](/zrzuty/1.PNG)
##### W celu skorzystania z API DRF musimy zainstalować pakiet *rest-framework* i wpisać go do INSTALLED_APPS. Dodatkowo uzupełniamy plik urls.py w głównym katalogu o ścieżke do naszego API (w naszym wypadku będzie to */api/v1/*).  Korzystamy również z serializacji dzięki której możemy serializować dane JSON i wyświetlać je w API.  Jak widać na poniższym zrzucie ekranu mamy do dyspozycji takie same pola jak z pozycji admin'a lecz w zupełnie innej formie. Widzimy odpowiedź html na nasze zapytanie (HTTP 200 OK - w tym wypadku znalazł nasz post)
![widok3](/zrzuty/4.PNG)
##### Dodajemy wzorzec URL w głównym pliku urls.py aby móc dodać adresy korzystającego z naszego Rest Framework'a  Jednym z dodatkowych elementów jest opcja wylogowywania się i zalogowywania poprzez nowe API
![widok4](/zrzuty/5.PNG)
##### Widok logowania w DRF po utworzeniu nowego użytkownika w starym widoku admin'a
![widok5](/zrzuty/6.PNG)
##### Dodawanie nowych postów dla użytkownika *user1*, który nie jest administratorem. Po wpisaniu danych na dole i kliknięciu *POST* dostaniemy serializowane dane w postaci JSON'a
![widok6](/zrzuty/7.PNG)
##### Przy użyciu url */api/v1/ID_POSTU* możemy podejrzeć obiekt jednego postu - będąc zalogowanym na użytkowniku który utworzył ten post możemy usunąć lub edytować go
![widok9](/zrzuty/10.PNG)
##### Po zmienieniu na inny post - którego obecny użytkownik nie utworzył nie możemy usunąć ani edytować.
![widok10](/zrzuty/11.PNG)
##### Po doinstalowaniu *dj-rest-auth* i dodaniu odpowiednich urls oraz ustawień w settings.py możemy również podejrzeć API do rejestrowania nowego użytkownika
![widok11](/zrzuty/12.PNG)
##### Po wejściu na ścieżkę *api/v1/dj-rest-auth/registration/* możemy dodać nowego użytkownika i przy użyciu e-mail backendu w konsoli zatwierdzić i zarejestrować go.
![widok12](/zrzuty/13.PNG)
##### Po zarejestrowaniu użytkownika dostajemy klucz oraz możemy sprawdzić w konsoli czy dostaliśmy wiadomość
![widok13](/zrzuty/14.PNG)
##### Jak widać API działa poprawnie i dostaliśmy w konsoli email odnośnie utworzenia nowego konta, które trzeba potwierdzić w wygenerowanym URL
![widok14](/zrzuty/15.PNG)
##### Po wejściu na stronę możemy sprawdzić czy stworzył się taki użytkownik - widać informacje o wysłaniu email'u oraz o poprawnym zarejestrowaniu nowego użytkownika
![widok15](/zrzuty/16.PNG)
##### Podgląd wszystkich użytkowników w panelu admina
![widok16](/zrzuty/17.PNG)
##### Podgląd wszystkich użytkowników w DRF przy pomocy utworzonego nowego widoku do listy użytkowników
![widok17](/zrzuty/18.PNG)

##### Możemy również w łatwy sposób zmienić widok wyświetlania postów lub użytkowników. Aby filtrować pola wystarczy z *rest_framework* zaimportować filters i użyć ich metod.
![widok20](/zrzuty/20.PNG)
##### Widok kodu - w *filter_backeds* zdefiniowane są metody według krórych posty powinny się filtrować
![widok21](/zrzuty/21.PNG)
##### Przy pomocy OpenAPI możemy obsługiwać URL do pokazywania dokumentacji DRF. Dzięki temu w łatwy sposób możemy podpiąć API do naszej aplikacji i uczyć się DRF.
![widok19](/zrzuty/19.PNG)
##### W taki sam sposób możemy utworzyć API do dokumentacji *Swagger*. Możemy również w nim przeglądać dokumentację, testować i uczyć się pisać aplikacje w DRF
![widok22](/zrzuty/22.PNG)

