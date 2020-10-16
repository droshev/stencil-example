import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-example',
  globalStyle: 'src/global/styles.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: './../node_modules/@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/fonts/SAP-icons.woff',
          dest: 'fonts/SAP-icons.woff'
        },
        {
          src: './../node_modules/@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Regular-full.woff',
          dest: 'fonts/72-Regular-full.woff'
        }
      ]
    },
  ],
};
