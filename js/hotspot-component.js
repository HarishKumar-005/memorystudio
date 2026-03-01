(function () {
  if (typeof AFRAME === 'undefined') {
    return;
  }

  AFRAME.registerComponent('hotspot-component', {
    schema: {
      id: { type: 'string', default: '' },
      title: { type: 'string', default: 'Memory' },
      image: { type: 'string', default: '' },
      caption: { type: 'string', default: '' }
    },

    init: function () {
      const el = this.el;
      const data = this.data;

      const baseScale = { x: 1, y: 1, z: 1 };
      const hoverScale = { x: 1.18, y: 1.18, z: 1.18 };

      const openHotspot = () => {
        document.dispatchEvent(
          new CustomEvent('memory:hotspot-open', {
            detail: {
              id: data.id,
              title: data.title,
              image: data.image,
              caption: data.caption
            }
          })
        );
      };

      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', data.title || 'Memory hotspot');

      el.addEventListener('mouseenter', function () {
        el.object3D.scale.set(hoverScale.x, hoverScale.y, hoverScale.z);
      });

      el.addEventListener('mouseleave', function () {
        el.object3D.scale.set(baseScale.x, baseScale.y, baseScale.z);
      });

      el.addEventListener('click', openHotspot);

      el.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openHotspot();
        }
      });
    }
  });
})();
