import setAttributes from '../utils/setAttributes';
import normalizeColor from '../utils/normalizeColor';

/**
 * Create SVGPathElement from an annotation definition.
 * This is used for anntations of type `drawing`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGPathElement} The path to be rendered
 */
export default function renderPath(a) {
  let d = [];
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  
  for (let i=0, l=a.lines.length; i<l; i++) {
    var p1 = a.lines[i];
    var p2 = a.lines[i+1];
    if (p2) {
      d.push(`M${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]}`);
    }
  }
  
  setAttributes(path, {
    d: `${d.join(' ')}Z`,
    stroke: normalizeColor(a.color || '#000'),
    strokeWidth: a.width || 1,
    fill: 'none'
  });

  return path;
}
