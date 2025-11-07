# API Agriculture - Plateforme de Commerce Agricole

API RESTful pour une plateforme de commerce agricole connectant producteurs, consommateurs et livreurs.

<<<<<<< HEAD
##  Fonctionnalités
=======
## 🌟 Fonctionnalités
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

- **Authentification & Autorisation** : JWT, gestion des rôles (consommateur, producteur, livreur, admin)
- **Gestion des Produits** : CRUD complet, recherche, catégories, notations
- **Système de Commandes** : Création, suivi, historique complet des transactions
- **Livraisons** : Assignation, suivi en temps réel, preuve de livraison
- **Panier d'Achat** : Gestion complète du panier
- **Historique des Transactions** : Accès pour tous les acteurs (consommateurs, producteurs, livreurs)
- **Gestion de Profil** : Modification du profil adaptée par rôle avec champs spécifiques
- **Changement de Mot de Passe** : Sécurisé avec validation de l'ancien mot de passe
- **Tableau de Bord Admin** : Statistiques, gestion des utilisateurs
- **Documentation API** : Swagger UI intégré

<<<<<<< HEAD
##  Nouvelles Fonctionnalités (21 Oct 2025)

-  **Modification de Profil Adaptée** : Chaque utilisateur peut modifier son profil avec des champs spécifiques selon son rôle
-  **Changement de Mot de Passe** : Fonctionnalité sécurisée avec validation complète
-  **Protection des Champs Sensibles** : Email, rôle et statut ne peuvent pas être modifiés par l'utilisateur
-  **Upload de Photo de Profil** : Support complet avec validation

**Consultez le guide complet** : [GESTION-PROFIL.md](./GESTION-PROFIL.md)  
 **Détails des nouveautés** : [NOUVELLES-FONCTIONNALITES.md](./NOUVELLES-FONCTIONNALITES.md)

##  Technologies
=======
## 🆕 Nouvelles Fonctionnalités (21 Oct 2025)

- ✅ **Modification de Profil Adaptée** : Chaque utilisateur peut modifier son profil avec des champs spécifiques selon son rôle
- ✅ **Changement de Mot de Passe** : Fonctionnalité sécurisée avec validation complète
- ✅ **Protection des Champs Sensibles** : Email, rôle et statut ne peuvent pas être modifiés par l'utilisateur
- ✅ **Upload de Photo de Profil** : Support complet avec validation

📖 **Consultez le guide complet** : [GESTION-PROFIL.md](./GESTION-PROFIL.md)  
📋 **Détails des nouveautés** : [NOUVELLES-FONCTIONNALITES.md](./NOUVELLES-FONCTIONNALITES.md)

## 🛠️ Technologies
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **JWT** pour l'authentification
- **Bcrypt** pour le hashage des mots de passe
- **Multer** pour l'upload de fichiers
- **Swagger** pour la documentation
- **Helmet**, **CORS**, **Rate Limiting** pour la sécurité

<<<<<<< HEAD
##  Installation
=======
## 🚀 Installation
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

### Prérequis

- Node.js >= 14.x
- MongoDB >= 4.x
- npm ou yarn

### Étapes

1. **Cloner le projet**
```bash
cd agriculture-api
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration**
```bash
cp .env.example .env
# Modifiez .env avec vos paramètres
```

4. **Démarrer MongoDB**
```bash
# Sur Linux/Mac
sudo systemctl start mongod

# Ou avec Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

5. **Lancer le serveur**
```bash
# Mode développement
npm run dev

# Mode production
npm start
```

Le serveur sera accessible sur `http://localhost:5000`

<<<<<<< HEAD
##  Documentation API
=======
## 📖 Documentation API
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

Une fois le serveur lancé, accédez à la documentation Swagger :

```
http://localhost:5000/api-docs
```

<<<<<<< HEAD
##  Structure du Projet
=======
## 📁 Structure du Projet
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

```
agriculture-api/
├── src/
│   ├── config/          # Configuration (DB, Swagger, etc.)
│   ├── controllers/     # Logique métier
│   ├── middlewares/     # Middlewares (auth, validation, etc.)
│   ├── models/          # Modèles Mongoose
│   ├── routes/          # Routes API
│   ├── services/        # Services (email, paiement, etc.)
│   ├── utils/           # Utilitaires
│   └── app.js           # Configuration Express
├── server.js          # Point d'entrée
├── package.json
└── .env               # Variables d'environnement
```

<<<<<<< HEAD
##  Rôles et Permissions
=======
## 👥 Rôles et Permissions
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

### Consommateur (consumer/consommateur)
- Consulter les produits
- Passer des commandes
- Gérer son panier
- Consulter l'historique de ses commandes
- Laisser des avis

### Producteur (producer/producteur)
- Gérer ses produits (CRUD)
- Consulter les commandes de ses produits
- Accéder à ses statistiques de vente
- Consulter l'historique de ses transactions

### Livreur (deliverer/livreur)
- Consulter les livraisons disponibles
- Accepter des livraisons
- Mettre à jour le statut de livraison
- Consulter l'historique de ses livraisons

### Administrateur (admin)
- Accès complet à toutes les fonctionnalités
- Gestion des utilisateurs
- Statistiques globales
- Modération

<<<<<<< HEAD
##  Endpoints Principaux
=======
## 🔑 Endpoints Principaux
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

### Authentification
```
POST   /api/v1/auth/register          # Inscription
POST   /api/v1/auth/login             # Connexion
POST   /api/v1/auth/logout            # Déconnexion
GET    /api/v1/auth/me                # Profil actuel
POST   /api/v1/auth/forgot-password   # Mot de passe oublié
POST   /api/v1/auth/reset-password/:token  # Réinitialiser mot de passe
```

### Utilisateurs (Gestion de Profil)
```
GET    /api/v1/users/me               # Mon profil
GET    /api/v1/users/profile/:id      # Profil d'un utilisateur
PUT    /api/v1/users/profile          # Modifier mon profil (adapté au rôle)
PUT    /api/v1/users/change-password  # Changer mon mot de passe
PUT    /api/v1/users/preferences      # Modifier mes préférences
DELETE /api/v1/users/account          # Désactiver mon compte
GET    /api/v1/users/stats            # Mes statistiques (producteur)
GET    /api/v1/users/deliverer/stats  # Mes statistiques (livreur)
```

### Produits
```
GET    /api/v1/products               # Liste des produits
GET    /api/v1/products/:id           # Détails d'un produit
POST   /api/v1/products               # Créer un produit (producteur)
PUT    /api/v1/products/:id           # Modifier un produit (producteur)
DELETE /api/v1/products/:id           # Supprimer un produit (producteur)
POST   /api/v1/products/:id/reviews   # Ajouter un avis
```

### Commandes
```
GET    /api/v1/orders                 # Mes commandes
POST   /api/v1/orders                 # Créer une commande
GET    /api/v1/orders/:id             # Détails d'une commande
PATCH  /api/v1/orders/:id/status      # Mettre à jour le statut
PATCH  /api/v1/orders/:id/cancel      # Annuler une commande
GET    /api/v1/orders/producer/list   # Commandes du producteur
GET    /api/v1/orders/deliverer/list  # Commandes du livreur
GET    /api/v1/orders/history         # Historique complet des transactions
```

### Panier
```
GET    /api/v1/cart                   # Mon panier
POST   /api/v1/cart                   # Ajouter au panier
PUT    /api/v1/cart/:productId        # Modifier quantité
DELETE /api/v1/cart/:productId        # Retirer du panier
DELETE /api/v1/cart                   # Vider le panier
```

### Livraisons
```
GET    /api/v1/deliveries             # Liste des livraisons
GET    /api/v1/deliveries/available   # Livraisons disponibles (livreur)
GET    /api/v1/deliveries/:id         # Détails
POST   /api/v1/deliveries/:id/accept  # Accepter une livraison (livreur)
PATCH  /api/v1/deliveries/:id/status  # Mettre à jour le statut (livreur)
```

### Admin
```
GET    /api/v1/admin/dashboard        # Statistiques globales
GET    /api/v1/admin/users            # Liste des utilisateurs
PATCH  /api/v1/admin/users/:id/toggle # Activer/Désactiver un utilisateur
GET    /api/v1/admin/orders           # Toutes les commandes
GET    /api/v1/admin/stats/sales      # Statistiques de ventes
```

<<<<<<< HEAD
##  Authentification
=======
## 🔒 Authentification
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

L'API utilise JWT (JSON Web Tokens) pour l'authentification.

### Obtenir un token

```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "motdepasse123"
  }'
```

### Utiliser le token

```bash
curl -X GET http://localhost:5000/api/v1/orders \
  -H "Authorization: Bearer VOTRE_TOKEN_JWT"
```

<<<<<<< HEAD
##  Historique des Transactions
=======
## 📊 Historique des Transactions
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

Tous les acteurs peuvent consulter leur historique de transactions via l'endpoint `/api/v1/orders/history`.

### Pour un Consommateur
```bash
GET /api/v1/orders/history
# Retourne toutes ses commandes avec l'historique des statuts
```

### Pour un Producteur
```bash
GET /api/v1/orders/history
# Retourne toutes les commandes contenant ses produits
```

### Pour un Livreur
```bash
GET /api/v1/orders/history
# Retourne toutes les commandes qu'il a livrées
```

### Filtres disponibles
- `status` : Filtrer par statut (pending, confirmed, shipped, delivered, cancelled)
- `startDate` : Date de début (YYYY-MM-DD)
- `endDate` : Date de fin (YYYY-MM-DD)
- `page` : Numéro de page (pagination)
- `limit` : Nombre d'éléments par page

Exemple :
```bash
GET /api/v1/orders/history?status=delivered&startDate=2025-01-01&limit=20
```

<<<<<<< HEAD
##  Notes Importantes
=======
## ⚠️ Notes Importantes
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

1. **Noms de champs** : Les modèles utilisent des noms en anglais (`producer`, `consumer`, `deliverer`) mais les rôles peuvent être spécifiés en français (`producteur`, `consommateur`, `livreur`)

2. **Sécurité** : 
   - Changez le `JWT_SECRET` en production
   - Utilisez HTTPS en production
   - Configurez correctement CORS

3. **Base de données** : Les données sont persistées dans MongoDB avec validation des schémas

<<<<<<< HEAD
##  Débogage
=======
## 🐛 Débogage
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

Pour activer les logs détaillés :

```bash
NODE_ENV=development npm run dev
```

<<<<<<< HEAD

##  Auteurs

Ndeye Koria Dramé, 
Mamadou Lamine Badji
=======
## 📝 Licence

Ce projet est sous licence MIT.

## 👥 Auteur

MiniMax Agent
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487

---

**Version**: 1.0.0  
<<<<<<< HEAD
**Dernière mise à jour**: 2025-11-07
=======
**Dernière mise à jour**: 2025-10-21
>>>>>>> 105e8042eb2abd590f1cfc35ef14a4800ec91487
