# TODO

- [x] sport multi select
- [x] filtre conservé au changement de page
- [ ] implémenter la recherche (petit écran)
- [x] régler le problème des salles
- [x] formulaire de création de cours
- [ ] formulaire de création de lieu

# DB Graph

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
