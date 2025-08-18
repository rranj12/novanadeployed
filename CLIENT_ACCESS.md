# Client Access Guide - Novana

## 🔐 Login Credentials

**URL**: `https://www.novanainsights.com/login`

**Username**: `client`
**Password**: `novana2025`

## 📱 How to Access

1. **Go to**: `https://www.novanainsights.com/login`
2. **Enter credentials** above
3. **Click "Sign In"**
4. **Access all private research** and articles

## 🚫 What's Protected

- **All Research Articles** - `/research`
- **Market Analysis** - `/markets`
- **Scientific Tools** - `/scientific`
- **Individual Articles** - `/articles/*`
- **Research Page** - `/research` (redirects to login if not authenticated)

## ✅ What's Public

- **Homepage** - `/` (marketing landing page)
- **About Page** - `/about`
- **Login Page** - `/login`

## 🔄 Session Management

- **Login persists** until browser is closed or logout is clicked
- **Logout button** appears in header when logged in
- **Automatic redirect** to login for protected pages

## 📋 For Client Meeting

1. **Share the login URL** with clients
2. **Provide credentials** above
3. **Demonstrate the research** and insights
4. **Show the professional, gated access** to premium content

## 🛡️ Security Notes

- This is a **client-side authentication** system for demonstration
- **Not production-ready** for high-security applications
- **Perfect for client presentations** and controlled access
- **Easy to customize** credentials as needed

---

**Need to change credentials?** Update the login form in `src/pages/login.astro`
