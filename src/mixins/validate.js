export default class Validate {
  get base() {
    return {
      'email': /^(([\w\.\-_]+)@[\w\-\_]+(\.\w+){1,}|)$/i,
      'number': /^(\d+|)$/i,
      'tel': /^((\+|\d)?([\d\-\(\)\#])|)+$/i,
      'url': /([--:\w?@%&+~#=]*\.[a-z]{2,4}\/{0,2})((?:[?&](?:\w+)=(?:\w+))+|[--:\w?@%&+~#=]+)?/i,
    };
  }
  constructor(opts) {
    if (!opts) console.debug('Sorry, but for using validate mixin you should add an opts argument');
    this.type = opts.type;
    if (opts.valid) {
      this.validationType = typeof this[opts.valid] == 'function' ? 'Function' : 'Regexp';
      if (this.validationType === 'Regexp') {
        try {
          this.validationRegexp = new RegExp(opts.valid);
        } catch (e) {
          throw new Error(`Something wrong with your regular expression!. Checkout --- ${e}`);
        }
      }
      if (this.validationType === 'Function') {
        this.validationFunction = this[opts.valid] || false;
      }
    } else if (opts && Object.keys(this.base).indexOf(this.type) != -1) {
      this.validationType = 'Type';
    }
  }
  validate(value) {
    if (this.validationType) {
      return this['validateBy' + this.validationType](value);
    }
    return true;
  }
  validateByFunction(value) {
    if (this.validationFunction) {
      return this.validationFunction(value);
    }
  }
  validateByRegexp(value) {
    if (this.validationRegexp) {
      return this.validationRegexp.test(value);
    }
  }
  validateByType(value) {
    return this.base[this.type].test(value);
  }
}
