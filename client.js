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
    500,
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
    0.5,
    0
  );

  igorPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  igorPanel.setAngle(
    Math.PI / 2 + 0.1,
    0
  );

  hushPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  hushPanel.setAngle(
    -Math.PI / 2,
    0
  );

  museumPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  museumPanel.setAngle(
    3.6,
    0
  );




  r360.compositor.setBackground(r360.getAssetURL('artist_workshop_8k.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  resizeSurface(width, height, id) {
  if ( id === 'banksy') {
    banksyPanel.resize(width, height);
  } else if
    (id === 'igor') {
      igorPanel.resize(width, height);
    } else if
    (id === 'hush') {
      hushPanel.resize(width, height);
    } else if (id === 'museum') {
    museumPanel.resize(width, height);
    }
}

  start() {
    r360.renderToSurface(
      r360.createRoot('InfoPanel', {id: 'banksy', text: 'His satirical street art and subversive epigrams combine dark humour with graffiti executed in a distinctive stenciling technique.', site: '5b21ca3eeb7f6fbccd471816'}),
      banksyPanel
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {id: 'igor', text: 'Igor work has been seen across Europe thanks to his incredible talent and innovative approach to raising awareness of social and political issues.', site: '5b21ca3eeb7f6fbccd47181f'}),
      igorPanel
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {id: 'hush', text: 'Hush’s unique style, recognisable through its focus on the female form set within backgrounds filled with an expressionist’s freedom of layering and colour.', site: '5b21ca3eeb7f6fbccd47181a'}),
      hushPanel
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {id: 'Hush', text: 'Hush’s unique style, recognisable through its focus on the female form set within backgrounds filled with an expressionist’s freedom of layering and colour.', site: '5b21ca3eeb7f6fbccd47181e'}),
      museumPanel
    );

    r360.detachRoot(introRoot);
  }
}


window.React360 = {init};
