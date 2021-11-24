## aplikacje-inte-22689-195IC
# Lab3 - Uwierzytelnianie

### Link do mojej aplikacji internetowej z uwierzytelnianiem użytkowników:  
[michalkornaus.pythonanywhere.com](http://michalkornaus.pythonanywhere.com/)

### Oprócz standardowego logowania nazwą użytkownika dodatkowo celem tych laboratoriów było dodanie uwierzytelniania poprzez social media
#### Do tego celu wybrałem 3 backendy uwierzytelniające - Facebook, Google oraz Github

###### Po prawej stronie widzimy dodatkowe przyciski do logowania się wybranymi social media
![widok1](/zrzuty/1.PNG)

###### Widok po naciśnięciu przycisku z logowaniem się poprzez aplikację Facebook - po wpisaniu naszych danych powiniśmy otrzymać komunikat o tym jakie dane nasza aplikacja będzie pobierać z danego konta aplikacji. W moim wypadku zalogowałem się już na każdym z tych portali moim kontem na localhost,  więc nie dostałem tego komunikatu. 
![widok2](/zrzuty/2.PNG)

###### Po zalogowaniu widzimy następujący widok z dashboardem użytkownika i komunikatem czy chcemy zapisać hasło od przeglądarki.
![widok3](/zrzuty/3.PNG)

###### W prawym górnym rogu możemy zaobserwować nazwę użytkownika pobraną z danego portalu.
![widok4](/zrzuty/4.PNG)

###### Po wejściu w panel administracyjny Django możemy podejrzeć naszych wszystkich użytkowników z różnych portali. Jak widać jest ich tu 4 (jeden z nich to domyślny admin).  Widać, że Facebook (nazwa użytkownika MichaKornaus) pobrała imię i nazwisko lecz nie wpisała adresu email.  Portal Google (michal9990909) pobrał wszystkie dane jakie chcieliśmy.  Portal Github natomiast nie pobrał ani imienia, nazwisko oraz adresu email. Być może jest to poprzez brak wpisanych danych w samych portalach lub brak dokładnej konfiguracji danej aplikacji w portalu.
![widok5](/zrzuty/5.PNG)

###### Możemy również podejrzeć jaki użytkownik podlega któremu portalowi. Jak widać narzędzia uwierzytelniania w Django są dość proste do implementacji i oferują potężne możliwości.
![widok6](/zrzuty/6.PNG)
