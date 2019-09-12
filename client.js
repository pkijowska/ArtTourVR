// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"


import {ReactInstance, Surface, Module} from 'react-360-web';

function init(bundle, parent, options = {}) {
r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  introPanel = new Surface(
    8500,
    400,
    Surface.SurfaceShape.Cylinder
  );

  introRoot = r360.renderToSurface(
    r360.createRoot('ArtTour', {}),
    introPanel
  );

  banksyPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  banksyPanel.setAngle(
    Math.PI / 2 + 2,
    0.4
  );

  igorPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  igorPanel.setAngle(
    Math.PI / 2 + 1.4,
    0
  );

  hushPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  hushPanel.setAngle(
    -Math.PI / 2  ,
    0
  );

  museumPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  museumPanel.setAngle(
    4,
    0
  );




  r360.compositor.setBackground(r360.getAssetURL('artist_workshop_8k.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  resizeSurface(width, height, id) {
  if ( id === 'birds') {
    banksyPanel.resize(width, height);
  } else if
    (id === 'sitting') {
      igorPanel.resize(width, height);
    } else if
    (id === 'flowers') {
      hushPanel.resize(width, height);
    } else if (id === 'church') {
    museumPanel.resize(width, height);
    }
}

  start() {
    r360.renderToSurface(
      r360.createRoot('InfoPanel', {id: 'birds', text: 'Oil paint on heavy duty 100% linen stretched and double-stapled over kiln-dried bars, D-rings and wire, ready to hang..', site: '5b21ca3eeb7f6fbccd471825'}),
      banksyPanel
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {id: 'sitting', text: 'Painting by Marc Novak, Oil Paint on canvas, stretched and ready to hang.Signed with a certificate of authenticity', site: '5b21ca3eeb7f6fbccd471822'}),
      igorPanel
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {id: 'flowers', text: 'Photographic fine art print - archival pigment ink on aquarelle cotton rag.', site: '5b21ca3eeb7f6fbccd471823'}),
      hushPanel
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {id: 'church', text: 'PASTEL RAIN using a combination of soft pinks, mint and greys, very much the pallet for 2017. Delightful to add to a bedroom with any of these colors. ', site: '5b21ca3eeb7f6fbccd471824'}),
      museumPanel
    );

    r360.detachRoot(introRoot);
  }
}


window.React360 = {init};
