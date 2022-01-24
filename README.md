## aplikacje-inte-22689-195IC
# Lab6 - Zezwolenia i uwierzytelnianie w DRF
#### Przy pomocy uwierzytelnień w DRF możemy zarządzać użytkownikami w łatwy i przejrzysty sposób. Pierwszym sposobem zarządzania użytkownikami przy pomocy *dj-rest-auth* jest rejestracja nowych użytkowników.
![screen1](/screeny/1.PNG)
#### Pokazany *token* po utworzeniu konta nowego użytkownika
![screen2](/screeny/2.PNG)
#### Pokazanie potwierdzenie emailowe utworzenia nowego konta użytkownika, poprzez link wyświetlony na zrzucie ekranu można potwierdzić konto.
![screen3](/screeny/3.PNG)
#### Dodatkowo utworzyłem podstronę testową do testowania licznika wizyt z użyciem cookies. Jak widać po wejściu na stronę pokazuje się ilość wszystkich wejść zapisaną w zmiennej cookie.
![screen4](/screeny/4.PNG)
#### Widok kodu implementującego licznik wizyt. Funkcja ta sprawdza, czy minął jeden dzień od ostatniej wizyty - jeżeli tak to można zwiększyć licznik o jeden.
![screen5](/screeny/5.PNG)
#### Można również sprawdzić czy zmienne te są zapisane w ustawieniach cookies - jak widać mamy widoczne dwie zmienne visits oraz last_visit, jedna zapisuje sumę wszystkich wizyt, a druga ma zapisaną datę ostatniej wizyty.
![screen6](/screeny/6.PNG)
#### Widok viewset'ów dla postów oraz użytkowników, pozwalają one przy pomocy filtrów, szukać i sortować tych elementów które chcemy.
![screen7](/screeny/7.PNG)
#### Widok routera w pliku *urls.py* aplikacji, pozwala on zarządzać widokami i URL aplikacji w wydajny i zwarty sposób. Sposób działania jest podobny jak bez używania *SimpleRouter'a* - w tym wypadku rejestrujemy do routera nasze widoki.
![screen8](/screeny/8.PNG)
#### W aplikacji możemy podejrzeć listę użytkowników i przetestować utworzone viewsety.
![screen9](/screeny/9.PNG)
#### Po użyciu filtra na pasku adresu na górze zrzutu ekranu oraz w sekcji *GET /api/...* widzimy po znaku zapytania nasz sposób sortowania danych - w tym wypadku porządkujemy użytkowników po ich nazwie użytkownika.
![screen10](/screeny/10.PNG)
#### Aby sprawdzić uwierzytelnienie mogę się wylogować z konta administratora i widzimy, że nie mamy dostępu do listy użytkowników ani postów. Dostajemy komunikat - *Authentication credentials were not provided* - co oznacza, że nasz obecny użytkownik (lub jego brak) nie ma dostatecznych uprawnień.
![screen11](/screeny/11.PNG)
#### Z powrotem na administratorze możemy sprawdzić również listę postów oraz viewsety do nich - w tym wypadku porządkuje posty po autorze posta w kolejności odwrotnej (widać to po minusie przed *author*). Widać, że sortowanie działa ponieważ autorzy schodzą w kolejności malejącej, najpierw jest autor z id: 2, potem dopiero na samym końcu z id: 1.
![screen12](/screeny/12.PNG)
#### Możemy przy pomocy DRF sprawdzić logowanie użytkownika. Jak widać trzeba jedynie podać nazwę użytkownika lub email oraz hasło. Po poprawnym wpisaniu dostaniemy Token obiektu.
![screen13](/screeny/13.PNG)
#### Dodatkowo można również sprawdzić wylogowywanie się - jak widać w opisie, metoda ta wywołuje funkcję Django oraz usuwa token danego obiektu przypisanego do użytkownika. Nic nie musimy przyjmować ani nic nie zwraca, ponieważ jedynie wylogowuje użytkownika.
![screen14](/screeny/14.PNG)