import { useState, useEffect } from 'react';

export interface SettingsData {
  siteName: string;
  siteDescription: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

const defaultSettings: SettingsData = {
  siteName: 'Kawan Curhat',
  siteDescription: 'Konsultan Hukum Bisnis Terpercaya',
  phone: '08567886251',
  email: 'info@kawancurhat.com',
  address: 'Jakarta, Indonesia',
  whatsapp: '08567886251',
  facebook: 'https://facebook.com/kawancurhat',
  instagram: 'https://instagram.com/kawancurhat',
  linkedin: 'https://linkedin.com/company/kawancurhat',
  youtube: 'https://youtube.com/@kawancurhat'
};

export const useSettings = () => {
  const [settings, setSettings] = useState<SettingsData>(defaultSettings);

  useEffect(() => {
    const loadSettings = () => {
      const savedSettings = localStorage.getItem('admin_settings');
      if (savedSettings) {
        try {
          setSettings(JSON.parse(savedSettings));
        } catch (error) {
          console.error('Error parsing settings:', error);
          setSettings(defaultSettings);
        }
      }
    };

    // Load settings on mount
    loadSettings();

    // Listen for storage changes (when settings are updated in admin)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'admin_settings' && e.newValue) {
        try {
          setSettings(JSON.parse(e.newValue));
        } catch (error) {
          console.error('Error parsing settings from storage event:', error);
        }
      }
    };

    // Listen for custom event (for same-tab updates)
    const handleSettingsUpdate = () => {
      loadSettings();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('settingsUpdated', handleSettingsUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('settingsUpdated', handleSettingsUpdate);
    };
  }, []);

  return settings;
};
