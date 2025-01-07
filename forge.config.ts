import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { VitePlugin } from '@electron-forge/plugin-vite';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { FuseV1Options, FuseVersion } from '@electron/fuses';

const config: ForgeConfig = {
  packagerConfig: {
    icon: "./src/public/logo/logo-i",
    protocols: [
      {
        name: 'Quick Course',
        schemes: ['electron-quick-course-xyz']
      }
    ],
    asar: true,
  },
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'loarsaw',
          name: 'devtool'
        },
        prerelease: true
      }
    }
  ],
  rebuildConfig: {},
  makers: [new MakerSquirrel({}), new MakerZIP({}, ['darwin']), new MakerRpm({}), new MakerDeb({}),
  {
    name: '@electron-forge/maker-squirrel',
    config: {
      // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
      iconUrl: 'https://url/to/icon.ico',
      // The ICO file to use as the icon for the generated Setup.exe
      setupIcon: './src/public/logo/logo-i.ico'
    }
  },
  {
    // Path to a single image that will act as icon for the application
    name: '@electron-forge/maker-deb',
    config: {
      options: {
        icon: './src/public/logo/logo.png'
      }
    }
  },
  {
    // Path to the icon to use for the app in the DMG window
    name: '@electron-forge/maker-dmg',
    config: {
      icon: './src/public/logo/logo.icns'
    }
  },
    // {
    //   name: '@electron-forge/maker-wix',
    //   config: {
    //     icon: './src/public/logo/logo-i.ico'
    //   }
    // }
  ],
  plugins: [
    new VitePlugin({
      // `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
      // If you are familiar with Vite configuration, it will look really familiar.
      build: [
        {
          // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
          entry: 'src/main.ts',
          config: 'vite.main.config.ts',
          target: 'main',
        },
        {
          entry: 'src/preload.ts',
          config: 'vite.preload.config.ts',
          target: 'preload',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: 'vite.renderer.config.ts',
        },
      ],
    }),
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};

export default config;
