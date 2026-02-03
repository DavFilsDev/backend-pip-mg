# 🚀 Backend PIP-MG - Plateforme d'Insertion Professionnelle Madagascar

Backend API pour la plateforme d'insertion professionnelle à Madagascar. Application open source et 100% gratuite pour aider les talents malgaches à se préparer aux entretiens d'embauche.

## 🎯 Fonctionnalités
- ✅ Authentification sécurisée (JWT)
- ✅ Gestion des utilisateurs et profils
- ✅ Analyse de CV avec IA (Gemini API)
- ✅ Simulation d'entretiens professionnels
- ✅ Feedback personnalisé avec analyse vocale/posture
- ✅ Suivi de progression des utilisateurs

## 🛠️ Stack Technique
- **Runtime** : Node.js 18+
- **Framework** : Express.js avec TypeScript
- **Base de données** : PostgreSQL (Neon.tech - serverless)
- **ORM** : Prisma
- **Validation** : Zod
- **Authentification** : JWT + bcrypt
- **Documentation** : Swagger/OpenAPI
- **Tests** : Jest + Supertest

## 📁 Structure du Projet
```
backend-pip-mg/
├── src/
│   ├── config/          # Configurations
│   ├── controllers/     # Contrôleurs métier
│   ├── routes/         # Définition des routes
│   ├── middleware/     # Middlewares personnalisés
│   ├── services/       # Services métier
│   ├── repositories/   # Accès aux données
│   ├── utils/         # Utilitaires
│   ├── types/         # Types TypeScript
│   └── server.ts      # Point d'entrée
├── prisma/            # Schéma et migrations BDD
├── tests/             # Tests unitaires et d'intégration
└── ...configurations
```

## 🚀 Installation Locale

### 1. Prérequis
- Node.js 18+ 
- PostgreSQL ou compte [Neon.tech](https://neon.tech)
- Git

### 2. Cloner le projet
```bash
git clone https://github.com/ton-username/backend-pip-mg.git
cd backend-pip-mg
```

### 3. Installer les dépendances
```bash
npm install
```

### 4. Configuration
1. Copier `.env.example` vers `.env`
```bash
cp .env.example .env
```

2. Modifier les variables dans `.env` :
```env
DATABASE_URL="votre-url-postgresql"
JWT_SECRET="votre-clé-secrète"
```

### 5. Initialiser la base de données
```bash
# Créer les tables
npx prisma db push

# Lancer Prisma Studio (interface admin)
npx prisma studio
```

### 6. Lancer le serveur
```bash
# Mode développement (avec hot reload)
npm run dev

# Mode production
npm run build
npm start
```

## 📡 API Endpoints
- `GET /` - Page d'accueil API
- `GET /health` - Health check
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/users/me` - Profil utilisateur

## 🧪 Tests
```bash
# Lancer tous les tests
npm test

# Lancer les tests avec coverage
npm run test:cov

# Lancer les tests en mode watch
npm run test:watch
```

## 🔧 Développement

### Code Quality
- ESLint pour le linting
- Prettier pour le formatting
- Husky pour les git hooks
- Tests automatisés avec Jest

### Git Workflow
1. Créer une branche feature : `git checkout -b feature/nom-feature`
2. Développer et commit régulièrement
3. Pousser la branche : `git push origin feature/nom-feature`
4. Créer une Pull Request vers `develop`
5. Attendre la revue de code
6. Merge après approbation

### Conventions de code
- TypeScript strict mode
- Nommage camelCase pour fonctions/variables
- Nommage PascalCase pour classes/interfaces
- Anglais pour le code, français pour les commentaires
- Commentaires JSDoc pour les fonctions publiques

## 🚢 Déploiement

### Sur Render.com (gratuit)
1. Créer un compte sur [Render.com](https://render.com)
2. Créer un "Web Service"
3. Connecter le repository GitHub
4. Configurer les variables d'environnement
5. Déployer

### Variables d'environnement production
```env
NODE_ENV=production
DATABASE_URL=your-neon-database-url
JWT_SECRET=secure-random-string
CORS_ORIGIN=https://votre-frontend.com
```

## 🤝 Contribution
1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements
- Équipe de développement PIP-MG
- Communauté open source
- Tous les contributeurs

---

**Made with ❤️ for Madagascar** 🇲🇬