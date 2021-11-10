## aplikacje-inte-22689-195IC
# Lab2 - Rejestracja użytkowników

### Link do mojej aplikacji internetowej z rejestracją użytkowników:  
[michalkornaus.pythonanywhere.com](http://michalkornaus.pythonanywhere.com/)

### Główny widok
![mainPage](https://user-images.githubusercontent.com/56958103/141152312-68489df2-14bf-4555-b895-f8cda9eacec6.PNG)
Po wejściu na stronę poprzez główny adres *[mainPage](michalkornaus.pythonanywhere.com)* lub poprzez podstronę *[mainPage2](michalkornaus.pythonanywhere.com/account)*
ukazuje nam się widok logowania się użytkownika. Mamy z tej pozycji do dyspozycji parę widoków uwierzytelniających - możemy się zalogować przy pomocy istniejących danych, zarejestrować nowego użytkownika lub przypomnieć hasło przy pomocy wiadomości mail na email użytkownika.  

### Rejestracja użytkownika
![Rejestracja](https://user-images.githubusercontent.com/56958103/141155212-3d540c60-0cd1-412b-a05d-1f5ba5a76635.PNG)
Bez żadnych dostępnych użytkowników musimy stworzyć nowego użytkownika.  W powyższym formie mamy parę inputów, dzięki którym stworzymy unikalnego użytkownika. Username i hasło to jedyne pola, które musimy wypełnić - imię oraz adres email możemy zostawić puste lecz bez adresu email nie odzyskamy hasła więc możemy wpisać przykładowe dane użytkownika.  
![wpisanieDanychRejestracja](https://user-images.githubusercontent.com/56958103/141156607-6280a49c-2297-4eab-9e5b-0ec695ecb421.PNG)
Po wpisaniu przykładowych danych możemy utworzyć tego użytkownika - w celu przypomnienia hasła i wykorzystaniu funkcji wysyłania maili do użytkowników należy zapamiętać tego użytkownika i jego adres email.

### Widok po rejestracji
![poRejestracji](https://user-images.githubusercontent.com/56958103/141157313-6fa90906-c65b-4997-a6e0-e0aa022daed4.PNG)
Po pomyślnej rejestracji użytkownika dostajemy powyższy komunikat wraz z odnośnikiem do zalogowania się. Po utworzeniu użytkownika możemy to wykonać.

### Logowanie 
Po zarejestrowaniu się, strona przenosi nas do pierwotnego widoku w którym możemy wpisać login i hasło i zalogować się.

### Widok po zalogowaniu się
![poLogowaniu](https://user-images.githubusercontent.com/56958103/141159987-73b0977e-2ce5-4a12-b46a-e3a7d4d184a5.PNG)
Jak widzimy na powyższym zrzucie ekranu po zalogowaniu widzimy dużo nowych dostępnych opcji - na górnym pasku mamy dodatkowe zakładki oraz opcję *wyloguj się*.  
Widać również powitanie użytkownika przy opcji wylogowania się
Poniżej pod napisem *Dashboard - 195IC_A Michał Kornaus* mamy dostępne dwie opcje - edytować swoje konto oraz zmienić hasło.

### Wylogowywanie
Będąc zalogowanym mamy opcję wylogowania się, poniższy zrzut prezentuje widok wylogowania się.
![wylogowanie](https://user-images.githubusercontent.com/56958103/141160572-d4895254-8a9e-433e-85cd-ec9304e82b52.PNG)

### Edycja profilu
Kolejną opcją po zalogowaniu oprócz wylogowania jest edycja profilu. Można tu zmienić imię, nazwisko, adres email dodać zdjęcie oraz zmienieć adres email.  
Po dodaniu zmian możemy je zapisać.
![edycja](https://user-images.githubusercontent.com/56958103/141164035-9684f590-0e1d-40eb-ae86-bbbff5d7cdcf.PNG)

### Zmiana hasła
Przy użyciu widoku uwierzytelniającego do zmiany hasła możemy z łatwością utworzyć formularz do tego. Wystarczy podać stare hasło i dwa razy wpisać nowe.  
Domyślny formularz z Django daje podpowiedzi do hasła, jak powinno hasło być zbudowane.
![zmianaHasła](https://user-images.githubusercontent.com/56958103/141164176-1c454226-8196-48fe-bcd8-96f3be880459.PNG)  
Widok po zmienieniu hasła:
![widokPoZmianie](https://user-images.githubusercontent.com/56958103/141165209-aea598bc-aac5-41d2-ad57-8d9dc05e427f.PNG)

### Reset hasła
Ostatnią funkcjonalnością mojej aplikacji internetowej jest resetowanie hasła.  Podczas logowania mamy opcję przypomnienia hasła - potrzebujemy do niego adresu email wpisanego w danych użytkownika.
![przypomnijHaslo](https://user-images.githubusercontent.com/56958103/141165630-e924d620-4ef2-4a4a-84a4-7686c2e413a3.PNG)  
Wiedząc jaki email ma nasz jedyny użytkownik możemy wpisać tu jego adres i wysłać email z instrukcją do resetowania hasła.  
W wypadku mojej strony, email nie zostaje publicznie wysłany lecz lokalnie i możemy go podejrzeć w konsoli.
![wyslanyEmail](https://user-images.githubusercontent.com/56958103/141166058-71418ab5-e53e-4069-9651-6d710732e5cc.PNG)  

Aby podejrzeć wysłany email muszę uruchomić serwer lokalnie a nie na PaaS, ponieważ nie mam dostępu na pythonanywhere do komunikatów serwerowych http.
![localWpisanieEmail](https://user-images.githubusercontent.com/56958103/141167909-430953b3-5e79-400b-b509-96cc32307f23.PNG)  

Po zmianie środowiska na lokalny serwer możemy podejrzeć w konsoli wysłaną wiadomość. Jak widać dostaliśmy link do zresetowania hasła, który możemy wkleić do przeglądarki.
![konsolaEmail](https://user-images.githubusercontent.com/56958103/141168043-25fc8ad0-bf3d-4707-bbe7-1b9910188581.PNG)  
Po wklejeniu linku do przeglądarki strona przekierowuje nas do strony z resetowaniem hasła.
![resetHasla](https://user-images.githubusercontent.com/56958103/141168552-154a2c9a-0668-49c9-8d01-4c4811556306.PNG)
