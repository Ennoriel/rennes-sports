# TODO

- [x] les icones des liens doivent se colorer
- [ ] décimales des nombres des input range
- [x] précision des latitutdes / longitudes
- [ ] afficher un lieu par défaut

# DB Graph

## Indexes

2 indexes:

- collection sports:
  - slots.location.coordinates: 2dsphere
- collection locations:
  - coordinates: 2dsphere

## Schema

```mermaid
erDiagram
    TRAINING ||--|{ SLOT : "est consituté de"
    SLOT ||--|| LOCATION : "se tient à"
    TRAINING }|--|{ ASSOCIATION : "est géré par"
    ASSOCIATION }o..o{ LOCATION : "utilitse"
    USER }|--|{ ASSOCIATION : "gère"

    TRAINING {
        string sport
        array_int birthYear
        boolean adult
        string otherYear
        string sex
        string level
        array_slot slots
    }

    SLOT {
        string details
        string day
        int_int hour
    }

    LOCATION {
        string name
        int_int coordinates
    }

    ASSOCIATION {
        string name
        string website
    }

    USER {
        string email
        string password

		string associationName
		string website
    }
```
