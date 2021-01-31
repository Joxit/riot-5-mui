import Bound from '../../mixins/bound';
/**
 * Wave class. Contain wave node and
 * all of waves logic.
 */
export default class Wave extends Bound {
  constructor(container, opts, e) {
    super();
    // Initialize
    if (!container) console.error('You should set container to the wave!');
    this.container = container;
    // Throw the components options
    this.maxOpacity = opts.opacity || 0.6;
    this.duration = opts.duration || 750;
    this.color = opts.color || '#fff';
    this.center = opts.center || false;
    // And event
    this.event = e;
    // Find related parameters
    this.containerBound = this.receiveBound();
    this.maxScale = (this.containerBound.size / 100) * 10;
    this.created = Date.now();
    // Start point (center\mouse)
    this.start = {};
    // Startup
    this.createNode();
    this.waveIn();
  }
  /**
   * Create node for wave
   */
  createNode() {
    this.wave = document.createElement('div');
    this.wave.classList.add('wave');
    this.container.appendChild(this.wave);
  }
  /**
   * Starting the wave ripple.
   */
  waveIn() {
    if (this.center && !this.event) console.error('Setup at least mouse event... Or just set center attribute');
    // Starting point
    this.start.x = this.center ? this.containerBound.height / 2 : this.event.pageY - this.containerBound.offsetTop;
    this.start.y = this.center ? this.containerBound.width / 2 : this.event.pageX - this.containerBound.offsetLeft;
    // Set styles at next tick. Add a little delay to lovely retarded IE :D
    var isIE = window.navigator.userAgent.indexOf('Trident') !== -1;
    setTimeout(() => this.setStyles(this.maxOpacity), isIE ? 50 : 0);
  }
  /**
   * Fade out wave ripple. Just disappear...
   */
  waveOut(cb) {
    var delta = Date.now() - this.created;
    var deltaX = Math.round(this.duration / 2) - delta;
    var delay = deltaX > 0 ? deltaX : 0;
    setTimeout(() => {
      this.setStyles(0);
      setTimeout(() => {
        if (this.wave.parentNode === this.container) {
          this.container.removeChild(this.wave);
          cb();
        }
      }, this.duration);
    }, delay);
  }

  /**
   * Set styles to in\out
   * @param opacity - variable
   */
  setStyles(opacity) {
    this.wave.setAttribute(
      'style',
      this.convertStyle({
        'top': `${this.start.x}px`,
        'left': `${this.start.y}px`,
        'transform': `scale(${this.maxScale})`,
        'transition-duration': `${this.duration}ms`,
        'transition-timing-function': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        'background': this.color,
        'opacity': opacity,
      })
    );
  }
  /**
   * Convert object into style string.
   * @param o - object with styles
   * @returns {string}
   */
  convertStyle(o) {
    var style = '';
    Object.keys(o).forEach(function(key) {
      if (o.hasOwnProperty(key)) {
        style += key + ':' + o[key] + ';';
      }
    });
    return style;
  }
}