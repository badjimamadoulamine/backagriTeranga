// src/config/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://backagriteranga.onrender.com/api/v1';

// Configuration API
export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
};

// Helper pour obtenir le token
const getAuthToken = () => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      const userData = JSON.parse(user);
      return userData.token;
    } catch (e) {
      console.error('Error parsing user data:', e);
      return null;
    }
  }
  return null;
};

// Fonction request générique
export const request = async (endpoint, options = {}) => {
  const token = getAuthToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers
    }
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    // Gérer les erreurs HTTP
    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: `HTTP error! status: ${response.status}`
      }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Fonctions API spécifiques
export const api = {
  // Produits
  getProducts: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/products${queryString ? `?${queryString}` : ''}`);
  },
  
  getProduct: (id) => {
    return request(`/products/${id}`);
  },

  createProduct: (productData) => {
    return request('/products', {
      method: 'POST',
      body: JSON.stringify(productData)
    });
  },

  updateProduct: (id, productData) => {
    return request(`/products/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(productData)
    });
  },

  deleteProduct: (id) => {
    return request(`/products/${id}`, {
      method: 'DELETE'
    });
  },

  // Commandes
  getOrders: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/orders${queryString ? `?${queryString}` : ''}`);
  },

  createOrder: (orderData) => {
    return request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  },

  getOrder: (id) => {
    return request(`/orders/${id}`);
  },

  updateOrderStatus: (id, status) => {
    return request(`/orders/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    });
  },

  cancelOrder: (id) => {
    return request(`/orders/${id}/cancel`, {
      method: 'PATCH'
    });
  },

  getProducerOrders: () => {
    return request('/orders/producer/list');
  },

  getDelivererOrders: () => {
    return request('/orders/deliverer/list');
  },

  getTransactionHistory: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/orders/history${queryString ? `?${queryString}` : ''}`);
  },

  // Panier
  getCart: () => {
    return request('/cart');
  },

  addToCart: (productId, quantity) => {
    return request('/cart', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity })
    });
  },

  updateCartItem: (productId, quantity) => {
    return request(`/cart/${productId}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity })
    });
  },

  removeFromCart: (productId) => {
    return request(`/cart/${productId}`, {
      method: 'DELETE'
    });
  },

  clearCart: () => {
    return request('/cart', {
      method: 'DELETE'
    });
  },

  // Auth
  login: (credentials) => {
    return request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },

  register: (userData) => {
    return request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },

  logout: () => {
    return request('/auth/logout', {
      method: 'POST'
    });
  },

  forgotPassword: (email) => {
    return request('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email })
    });
  },

  resetPassword: (token, password) => {
    return request(`/auth/reset-password/${token}`, {
      method: 'POST',
      body: JSON.stringify({ password })
    });
  },

  // User
  getProfile: () => {
    return request('/users/profile');
  },

  updateProfile: (data) => {
    return request('/users/profile', {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  },

  changePassword: (data) => {
    return request('/users/change-password', {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  },

  deleteAccount: () => {
    return request('/users/account', {
      method: 'DELETE'
    });
  },

  getMyStats: () => {
    return request('/users/stats');
  },

  getProducerDashboard: () => {
    return request('/users/producer/dashboard');
  },

  getDelivererStats: () => {
    return request('/users/deliverer/stats');
  },

  getProducers: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/users/producers${queryString ? `?${queryString}` : ''}`);
  },

  updatePreferences: (preferences) => {
    return request('/users/preferences', {
      method: 'PATCH',
      body: JSON.stringify(preferences)
    });
  },

  // Livraisons
  getDeliveries: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/deliveries${queryString ? `?${queryString}` : ''}`);
  },

  getDelivery: (id) => {
    return request(`/deliveries/${id}`);
  },

  updateDeliveryStatus: (id, status, location) => {
    return request(`/deliveries/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, location })
    });
  },

  acceptDelivery: (id) => {
    return request(`/deliveries/${id}/accept`, {
      method: 'POST'
    });
  },

  // Messages
  getMessages: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/messages${queryString ? `?${queryString}` : ''}`);
  },

  sendMessage: (messageData) => {
    return request('/messages', {
      method: 'POST',
      body: JSON.stringify(messageData)
    });
  },

  getConversation: (userId) => {
    return request(`/messages/conversation/${userId}`);
  },

  markAsRead: (messageId) => {
    return request(`/messages/${messageId}/read`, {
      method: 'PATCH'
    });
  },

  // Formations
  getFormations: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/formations${queryString ? `?${queryString}` : ''}`);
  },

  getFormation: (id) => {
    return request(`/formations/${id}`);
  },

  enrollFormation: (id) => {
    return request(`/formations/${id}/enroll`, {
      method: 'POST'
    });
  },

  completeLesson: (formationId, lessonId) => {
    return request(`/formations/${formationId}/lessons/${lessonId}/complete`, {
      method: 'POST'
    });
  },

  // Admin
  adminGetUsers: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/admin/users${queryString ? `?${queryString}` : ''}`);
  },

  adminUpdateUser: (id, data) => {
    return request(`/admin/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  },

  adminDeleteUser: (id) => {
    return request(`/admin/users/${id}`, {
      method: 'DELETE'
    });
  },

  adminGetStats: () => {
    return request('/admin/stats');
  },

  adminGetProducts: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/admin/products${queryString ? `?${queryString}` : ''}`);
  },

  adminGetOrders: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/admin/orders${queryString ? `?${queryString}` : ''}`);
  }
};

export default api;