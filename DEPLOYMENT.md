# 🚀 Vercel Deployment Guide

## Quick Deploy to Vercel

Your Graphic Design Portfolio is now ready for deployment on Vercel!

### Method 1: Deploy from GitHub (Recommended)

1. **Visit Vercel**: Go to [vercel.com](https://vercel.com)
2. **Sign In**: Use your GitHub account to sign in
3. **Import Project**: Click "New Project"
4. **Select Repository**: Choose `afro_gen_site` from your GitHub repositories
5. **Configure Settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. **Deploy**: Click "Deploy"

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

### Method 3: Deploy from Local Directory

1. **Navigate to project**:

   ```bash
   cd afro_gen_site
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

## 🎯 Configuration Details

### Build Settings

- **Framework**: Vite + React
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (auto-detected)

### Environment Variables

No environment variables required for this project.

### Custom Domain

After deployment, you can add a custom domain in your Vercel dashboard.

## 📁 Project Structure for Vercel

```
afro_gen_site/
├── src/                    # Source code
├── public/                 # Static assets
├── dist/                   # Build output (auto-generated)
├── vercel.json            # Vercel configuration
├── .vercelignore          # Files to ignore
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🔧 Vercel Configuration

The `vercel.json` file includes:

- ✅ **SPA Routing**: All routes redirect to index.html
- ✅ **Asset Caching**: Optimized caching for static assets
- ✅ **Security Headers**: XSS protection and content type options
- ✅ **Build Optimization**: Proper build directory configuration

## 🚀 Post-Deployment

After successful deployment:

1. **Test Your Site**: Visit the provided Vercel URL
2. **Custom Domain**: Add your custom domain if desired
3. **Analytics**: Enable Vercel Analytics for insights
4. **Performance**: Monitor Core Web Vitals in Vercel dashboard

## 🔄 Automatic Deployments

Once connected to GitHub:

- ✅ **Auto-deploy** on every push to main branch
- ✅ **Preview deployments** for pull requests
- ✅ **Rollback** to previous versions if needed

## 📞 Support

If you encounter any issues:

1. Check Vercel deployment logs
2. Verify build settings match the configuration
3. Ensure all dependencies are in package.json
4. Contact Vercel support if needed

---

**Your Graphic Design Portfolio will be live at**: `https://your-project-name.vercel.app`

🎨 **Happy Deploying!**
