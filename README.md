# സർഗവസന്തം ഫോട്ടോ ഗാലറി – സെറ്റപ്പ്

ഫയലുകൾ: `index.html` (രക്ഷിതാക്കൾക്ക്), `admin.html` (അഡ്മിൻ), `config.js`, `style.css`, `firestore.rules`, രണ്ട് ലോഗോ PNG.

## 1. Firebase
1. Build > **Firestore Database** > Create database (production mode).
2. Firestore > **Rules** > `firestore.rules` ലെ ഉള്ളടക്കം paste ചെയ്ത് **Publish**.
3. Build > **Authentication** > Get started > **Email/Password** enable ചെയ്യുക.
4. Users > **Add user**: Email `admin@sargavasantham.app`, Password `controller`.
5. Authentication > Settings > **Authorized domains** ൽ നിങ്ങളുടെ ഹോസ്റ്റിംഗ് ഡൊമൈൻ ചേർക്കുക.

## 2. Cloudinary
Settings > Upload > Upload presets > `dvtnmwnx` എടുത്ത് **Signing mode = Unsigned** ആണെന്ന് ഉറപ്പാക്കുക.

## 3. ഹോസ്റ്റിംഗ്
എല്ലാ ഫയലുകളും ഒരേ ഫോൾഡറിൽ വെച്ച് Firebase Hosting (`firebase deploy`) അല്ലെങ്കിൽ Netlify/Vercel ൽ ഇടുക. ഫയൽ നേരിട്ട് തുറന്നാൽ (file://) പ്രവർത്തിക്കില്ല.

## 4. ഉപയോഗം
1. `/admin.html` > പാസ്‌വേഡ് `controller`.
2. ആദ്യം സ്റ്റേജ് തിരഞ്ഞെടുത്ത് **പരിപാടികൾ** ചേർക്കുക.
3. സ്റ്റേജ് + പരിപാടി തിരഞ്ഞെടുത്ത് ഫോട്ടോകൾ അപ്‌ലോഡ് ചെയ്യുക.
4. `/index.html` ന്റെ ലിങ്കിന് QR കോഡ് ഉണ്ടാക്കി സ്റ്റേജിൽ വെക്കുക.

## ശ്രദ്ധിക്കാൻ
- `controller` എന്ന പാസ്‌വേഡ് ലളിതമാണ്. പരിപാടി കഴിഞ്ഞാൽ Firebase Console ൽ മാറ്റുക.
- അഡ്മിൻ "നീക്കുക" ഗാലറിയിൽ നിന്ന് മാത്രമാണ് ഒഴിവാക്കുന്നത്; Cloudinary ൽ ഫയൽ നിലനിൽക്കും.
