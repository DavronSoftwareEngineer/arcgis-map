import React, { useEffect, useRef } from 'react';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import SceneLayer from '@arcgis/core/layers/SceneLayer';

function EsriMap() {
  const mapDiv = useRef(null);

  useEffect(() => {
    const map = new Map({
      basemap: 'topo-vector',
      ground: 'world-elevation',
    });

    const sceneLayer = new SceneLayer({
      url: "/models/zdanie_slpk.slpk" 
    });
    map.add(sceneLayer);

    const view = new SceneView({
      container: mapDiv.current,
      map: map
    });

    return () => {
      if (view.current) {
        view.current.destroy();
      }
    };
  }, []);

  return <div ref={mapDiv} style={{ height: 500, width: '100%' }} />;
}

export default EsriMap;
