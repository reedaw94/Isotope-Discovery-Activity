import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {nucleotides} from './IsotopesList';

// determine camera position based on userNumber
let userNumber = useRef()
//<IsotopesList/>
if (userNumber) {
    const maxY = Math.max(...data.map((nucleotides) => nucleotides.y));
    const minY = Math.min(...data.map((nucleotides) => nucleotides.y));
    const userY = data.find((nucleotides) => nucleotides.y === userNumber)?.y;
    if (userY) {
      const zoomY = Math.max(Math.min(userY, maxY - 5), minY + 5);
      camera.position.y = zoomY;
    }
  } else {
    camera.position.z = 5;
  }

   