# Abinaya L S — Portfolio (React + Vite)

## 1. Create the Web3Forms access key
1. Go to https://web3forms.com and click **Create your Access Key**.
2. Enter **lsabinaya001@gmail.com** and submit.
3. Web3Forms emails the access key to that address. Copy it.

## 2. Add the key to the project
1. In the project root (next to `package.json`), copy `.env.example` to a new file named **`.env`**.
2. Put your key in it, using exactly this variable name:

```
VITE_WEB3FORMS_ACCESS_KEY=paste_your_access_key_here
```

`.env` is already listed in `.gitignore`, so it will not be committed to GitHub.

## 3. Run the project
```
npm install
npm run dev
```
Open the local URL shown in the terminal (usually http://localhost:5173).
If you edit `.env` while the server is running, stop it (Ctrl+C) and run `npm run dev` again.

## 4. Test the contact form
1. Scroll to **Contact**, fill in Name, Email and Message, click **Send Message**.
2. You should see "Sending...", then a green success message, and the form clears.
3. Check the inbox of lsabinaya001@gmail.com (also check Spam the first time).
4. Try submitting an empty form or a bad email to see the validation messages.

## 5. Deploy to Vercel
1. Push the project to GitHub (`.env` is ignored, which is correct).
2. In Vercel: **Add New → Project →** import the repo (Framework preset: Vite).
3. Before clicking Deploy, open **Environment Variables** and add:
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: your Web3Forms access key
   - Environments: Production, Preview, Development
4. Click **Deploy**. If you add the variable after deploying, click **Redeploy** —
   Vite reads variables at build time, so a redeploy is required.
5. Send a test message from the live site.

Note: Vite variables starting with `VITE_` are bundled into the site, so the key is visible in the
browser. That is normal for Web3Forms (the key can only send messages to your registered email).
The `.env` file just keeps it out of your source code and GitHub.
