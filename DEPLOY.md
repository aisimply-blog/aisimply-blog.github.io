# Guide de Déploiement AISimply - GitHub Pages

## Bienvenue!

AISimply est un blog gratuit sur l'IA et la Tech pour les débutants (50 articles EN + 50 articles FR). Ce guide vous accompagnera à travers chaque étape du déploiement sur GitHub Pages.

---

## Étape 1: Créer un compte GitHub (si vous n'en avez pas)

1. Allez sur [github.com](https://github.com)
2. Cliquez sur **Sign up**
3. Entrez votre email, créez un mot de passe
4. Choisissez un nom d'utilisateur (par exemple: `aisimply`)
5. Vérifiez votre email
6. Bravo! Votre compte GitHub est créé.

---

## Étape 2: Créer un repository GitHub Pages

1. Connecté à votre compte GitHub
2. Allez sur [github.com/new](https://github.com/new)
3. **Repository name**: `aisimply-blog.github.io` (TRÈS IMPORTANT: doit être exactement `[votreusername].github.io`)
   - Exemple: Si votre username est `cyril`, le repo doit s'appeler `cyril.github.io`
   - Si vous avez créé le compte avec le username `aisimply`, utilisez `aisimply-blog.github.io`
4. **Description** (optionnel): "A beginner's blog about AI & Tech / Un blog pour les débutants sur l'IA et la Tech"
5. **Public** (important: le repo doit être public pour GitHub Pages)
6. **Cliquez sur "Create repository"**

Vous avez maintenant un repo GitHub Pages vide!

---

## Étape 3: Uploader les fichiers du site

### Option A: Via l'interface GitHub (plus simple)

1. Allez sur votre repo `aisimply-blog.github.io`
2. Cliquez sur **Add file > Upload files**
3. Drag & drop TOUS les fichiers du dossier `aisimply/` à la racine du repo
   - **Important**: Uploadez directement les fichiers à la racine, PAS dans un sous-dossier
   - Les fichiers doivent être: `index.html`, `about.html`, `privacy.html`, `sitemap.xml`, etc.
   - Les dossiers doivent être: `blog/`, `fr/`, `categories/`, `css/`, `js/`, `images/`, etc.
4. Écrivez un message dans la boîte de commit (par exemple: "Initial site upload")
5. Cliquez sur **Commit changes**

### Option B: Via git (pour développeurs)

Ouvrez votre terminal dans le dossier `aisimply/`:

```bash
git init
git add .
git commit -m "Initial site upload"
git branch -M main
git remote add origin https://github.com/aisimply/aisimply-blog.github.io.git
git push -u origin main
```

Remplacez `aisimply` par votre username GitHub si différent.

---

## Étape 4: Activer GitHub Pages

1. Allez sur votre repo `aisimply-blog.github.io`
2. Cliquez sur l'onglet **Settings**
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Source", assurez-vous que c'est défini sur:
   - **Deploy from branch**
   - **Branch: main** (ou master si plus ancien)
   - **Folder: / (root)**
5. Cliquez sur **Save**

GitHub Pages va maintenant construire votre site. Attendez 1-2 minutes.

---

## Étape 5: Vérifier que le site fonctionne

1. Allez sur `https://aisimply-blog.github.io` (ou votre URL GitHub Pages)
2. Vous devez voir la homepage d'AISimply
3. Testez quelques liens (About, Blog, Articles, etc.)
4. Testez aussi la version française (`/fr/`)

Si vous voyez une page 404, attendez quelques minutes que le site soit publié. Parfois c'est plus lent.

---

## Étape 6: Google Search Console (SEO)

### 6a: Créer/accéder à Google Search Console

1. Allez sur [search.google.com/search-console](https://search.google.com/search-console)
2. Cliquez sur **Start now** ou **+ Ajouter une propriété**
3. Sélectionnez le type: **URL prefix** (pas Domain)
4. Entrez: `https://aisimply-blog.github.io`
5. Cliquez sur **Continuer**

### 6b: Vérifier la propriété du site (HTML tag)

1. Dans Google Search Console, cliquez sur **Vérification HTML**
2. Vous verrez un code ressemblant à:
   ```html
   <meta name="google-site-verification" content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
   ```
3. **COPIEZ ce code complet**

### 6c: Ajouter la balise meta au site

4. Allez dans votre repo `aisimply-blog.github.io`
5. Ouvrez le fichier `index.html`
6. Trouvez la section `<head>` (tout en haut)
7. Collez la balise meta que vous avez copiée juste après la balise `<meta charset="UTF-8">`
8. Cliquez sur **Commit changes**

Exemple:
```html
<head>
  <meta charset="UTF-8">
  <meta name="google-site-verification" content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
  <!-- autres meta -->
</head>
```

### 6d: Confirmer la vérification

9. Retournez sur Google Search Console
10. Cliquez sur le bouton **Vérifier** en bas à droite
11. Google va vérifier que le code meta est présent
12. Si succès, vous verrez "Vérification réussie"

### 6e: Soumettre le sitemap

1. Dans Google Search Console, cliquez sur **Sitemaps** (menu de gauche)
2. Dans la boîte de texte, entrez: `sitemap.xml`
3. Cliquez sur **Envoyer**
4. Google va crawler le sitemap et indexer automatiquement toutes les pages

**Bravo!** Google va maintenant indexer votre site progressivement (24h à quelques jours).

---

## Étape 7: Monétisation avec Google AdSense

### 7a: Attendre 15-20 articles indexés

Avant de demander AdSense, attendez que ~15-20 articles soient indexés par Google. Vous pouvez vérifier dans Google Search Console:
- Menu **Rapport de couverture**
- Vous devez voir au minimum 15-20 URLs indexées

Cela prend généralement **7-14 jours**.

### 7b: Demander AdSense

1. Allez sur [adsense.google.com](https://adsense.google.com)
2. Cliquez sur **Commencer**
3. Connectez-vous avec votre compte Google
4. Entrez le URL de votre site: `https://aisimply-blog.github.io`
5. Remplissez les infos demandées (pays, adresse, etc.)
6. Acceptez les conditions
7. Cliquez sur **Envoyer pour validation**

Google va vérifier votre site. Cela prend **24h à 3 jours** généralement.

### 7c: Validation et ajout des annonces

Une fois approuvé par Google AdSense:

1. Vous recevrez un email de confirmation
2. Allez dans AdSense > **Annonces > Par code**
3. Cliquez sur **Créer un bloc d'annonces** ou utilisez du code existant
4. Copiez le code d'annonce (ressemble à `<script async src="//pagead2.googlesyndication.com/..."></script>`)

### 7d: Intégrer AdSense dans le site

1. Allez dans votre repo `aisimply-blog.github.io`
2. Cherchez les emplacements pour annonces (recherchez `class="ad-slot"` dans le code HTML)
3. Pour chaque placement d'annonce:
   - Remplacez le placeholder par le vrai code AdSense
   - Exemple:
     ```html
     <!-- Avant (placeholder) -->
     <div class="ad-slot">
       <!-- AdSense will go here -->
     </div>

     <!-- Après (code réel AdSense) -->
     <div class="ad-slot">
       <script async src="//pagead2.googlesyndication.com/..."></script>
     </div>
     ```
4. Commit et push les changements

**Important**: Attendez quelques jours avant que les annonces commencent à générer des revenus.

---

## Étape 8: Buy Me a Coffee (Donations optionnelles)

### 8a: Créer un compte

1. Allez sur [buymeacoffee.com](https://buymeacoffee.com)
2. Cliquez sur **Sign up**
3. Entrez votre email et créez un mot de passe
4. Complétez votre profil:
   - **Name**: Cyril (ou votre nom)
   - **Bio**: "AI & Tech blog for beginners"
   - **URL**: https://aisimply-blog.github.io
5. Cliquez sur **Save**

### 8b: Lien Buy Me a Coffee

Le lien Buy Me a Coffee est déjà intégré dans le footer du site: `https://buymeacoffee.com/aisimply`

Vous pouvez personaliser avec votre propre URL (par exemple: `https://buymeacoffee.com/cyril`). Pour ce faire:

1. Allez dans les fichiers HTML (par exemple `index.html`)
2. Cherchez le lien Buy Me a Coffee dans le footer
3. Remplacez `aisimply` par votre username Buy Me a Coffee

Les dons sont OPTIONNELS et aident à couvrir les coûts (même s'il n'y en a pas sur GitHub Pages).

---

## Étape 9: Calendrier des revenus (réaliste)

### Mois 1-2
- **Visites**: 10-50 par jour
- **Revenus estimés**: 0€ (site en phase de croissance)
- **Focus**: SEO, indexation Google, premiers articles

### Mois 3-6
- **Visites**: 50-200 par jour
- **Revenus estimés**: 10-50€ par mois
- **Focus**: Continuer à publier, améliorer SEO, créer du contenu viral

### Mois 6-12
- **Visites**: 200-1000 par jour
- **Revenus estimés**: 50-200€ par mois
- **Focus**: Stratégie de contenu, backlinks, promotion sur réseaux sociaux

### Année 2+
- **Visites**: 1000+ par jour
- **Revenus estimés**: 200-500€+ par mois
- **Focus**: Monétisation multi-canal (AdSense, affiliates, Buy Me a Coffee)

---

## Points clés à retenir

1. **GitHub Pages est 100% gratuit**
   - Pas de frais d'hébergement
   - Pas de limite de bande passante
   - Domaine gratuit: `.github.io`

2. **Pas besoin d'acheter de domaine**
   - Vous pouvez utiliser le domaine gratuit `aisimply-blog.github.io`
   - Plus tard, si vous voulez un domaine custom (ex: `aisimply.com`), vous pouvez l'ajouter sans quitter GitHub Pages

3. **L'indexation Google prend du temps**
   - Soyez patient. Les premiers articles apparaissent après 1-2 semaines
   - À mesure que vous publiez, l'indexation s'accélère

4. **Google AdSense a des critères**
   - Vous avez besoin de ~15-20 articles de qualité
   - Contenu original (pas du copié-collé)
   - Site actif avec du trafic régulier
   - Les approbations prennent généralement 3-7 jours

5. **Maintenance régulière**
   - Publiez régulièrement du contenu (1-2 fois par semaine idéalement)
   - Mettez à jour les anciens articles si l'info change
   - Répondez aux commentaires
   - Partagez sur réseaux sociaux

---

## Besoin d'aide?

Si vous rencontrez des problèmes:

1. **GitHub Pages ne s'affiche pas?**
   - Attendez 5 minutes après le commit
   - Allez dans **Settings > Pages** et vérifiez que la source est bien configurée
   - Essayez de vider le cache du navigateur (Ctrl+Shift+Del)

2. **Google Search Console n'indexe pas?**
   - Vérifiez que la balise meta est bien présente
   - Attendez 24-48h
   - Cliquez sur **Demander l'indexation** dans GSC

3. **AdSense refuse ma demande?**
   - Assurez-vous d'avoir au moins 15 articles de qualité
   - Vérifiez que votre site n'a pas de contenu interdit (violence, haine, etc.)
   - Attendez quelques semaines et réessayez

4. **Les annonces ne s'affichent pas?**
   - Attendez 24-48h après l'approbation AdSense
   - Vérifiez le code AdSense (pas d'erreurs de copie/colle)
   - Attendez 24h pour les statistiques de révenu

---

## Prochaines étapes (après déploiement)

Une fois le site déployé:

1. **Lancer sur les réseaux sociaux** (voir ACTION-PLAN.md)
2. **Soumettre sur Product Hunt** (voir ACTION-PLAN.md)
3. **Obtenir des backlinks** (voir SEO-BACKLINKS.md)
4. **Monitorer les performances** dans Google Search Console
5. **Publier régulièrement** pour maintenir le momentum

---

Bonne chance avec AISimply! 🚀
