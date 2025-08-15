// Authentication utility for protecting private content

export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('novana-auth') === 'true';
}

export function getCurrentUser() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('novana-user');
}

export function logout() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('novana-auth');
  localStorage.removeItem('novana-user');
  window.location.href = '/login';
}

export function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = '/login';
    return false;
  }
  return true;
}

// Check auth on page load
if (typeof window !== 'undefined') {
  // Protect article pages
  const currentPath = window.location.pathname;
  const isArticlePage = currentPath.includes('/articles/') || 
                       currentPath.includes('/research') || 
                       currentPath.includes('/markets') ||
                       currentPath.includes('/scientific');
  
  if (isArticlePage && !isAuthenticated()) {
    window.location.href = '/login';
  }
}
