# Elevate!
![logo](./logo.png)

## 1. Idee
Du stehst schon wieder morgens mit dem Kinderwagen vor dem Fahrstuhl - außer Betrieb! Das wird wohl nichts mehr mit dem 9 Uhr Meeting. Hättest du das bloß früher gewusst, dann hättest du die Tram genommen! 

Hier kommt Elevate! ins Spiel. Gib einfach an, welche Haltestellen du regelmäßig nutzt, und wann du benachrichtigt werden willst. Und wenn der Fahstuhl oder die Rolltreppe außer Betrieb ist, bekommst du eine Nachricht - und stehst nie wieder vor verschlossenen Fahrstuhltüren. Eine Alternative kannst du natürlich auch gleich aus der App heraus buchen.

### User Stories
- Anmelden und Registrieren in mobiler App oder Web App
- Finden der relevanten Facilities über Karte, Stationssuche oder Streckensuche
- Anlegen, ändern und löschen eines Alarms mit Präferenzen (Uhrzeiten usw.)
- Einsehen von Statistiken über Status meiner relevanten Facilities und darüber hinaus
- Buchen eines alternativen Verkehrsmittels bei einem unserer Partnerunternehmen

### Zielgruppen:
Regelmäßige Kund:innen der S-Bahnen, insbesondere:
- Menschen mit Kindern (v.a.: Kinderwägen etc.)
- Menschen mit Mobilitätseinschränkungen
- Menschen mit Gepäck, Fahrrädern etc.

## 2. Systemkomponenten
### Hardware
- Cloud-Server
- Mobile Endgeräte

### Software
- App (Mobile)
- Weboberfläche (Browser)

### Services und Packages
- React Framework + Node Environment
- CI/CD über GitHub Actions
- Getestet mit Cra/Jest
- Deployed auf Netlify
- Monitoring mit Sentry  

Außerdem benötigt:
- User Authentification 
- Datenbank für User Data
- Email-Server

### Quellsysteme
Beruht auf Daten der [FaSta API](https://developers.deutschebahn.com/db-api-marketplace/apis/product/fasta) der Deutschen Bahn.

### Ausgangsschnittstellen
- RESTful webservice

## 3. Netzwerkkonzept
- Bandbreite (Carrier, QoS) -  5 mbit

## 4. Cloud-Bedarf
- 2 virtuelle Server (Mirror)
- 2 virtuelle Datenbanken (Mirror)

## 5. Betriebskonzept
Hardware – Wartungsbedarf:
- n/a, keine eigenen Server, nur mobile Endgeräte und PCs

Betriebssystem: 
- Cloud: Red Hat Enterprise Linux
- Mobilgeräte: Android, IOS
- PCs: Windows, MacOS

Updateverfahren:
- Update der Cloud über den Anbieter
- Softwarepflege User überlassen

## 6. Notfallkonzeption
- Datenbanken und Server gespiegelt vorhanden, Umschaltung bei Ausfall
- Daily BackUps, nightly tests

#### Datensicherung  / Logs 
- Erstellung eines Backups alle 24h
- Erstellung von Logs und Sicherung für 90 Tage
- Dashboards in new relic

## 7. Support
- Monitoring mit Sentry
- Kontaktformular auf Website oder info@elevate.me
- Reaktionszeiten 1 Arbeitsstunde (Prio 1) bis 1 Arbeitstag (Prio 3)
- Supportzeiten Mo-Fr 8-18 Uhr, Sa 10-15 Uhr