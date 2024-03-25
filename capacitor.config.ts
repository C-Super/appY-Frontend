import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'xyz.kuasar.appy',
  appName: 'AppY',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
