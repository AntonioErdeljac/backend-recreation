const string = (properties?: Record<string, any>): Record<string, any> => ({
  type: String,
  ...properties,
});

const number = (properties?: Record<string, any>): Record<string, any> => ({
  type: Number,
  ...properties,
});

const date = (properties?: Record<string, any>): Record<string, any> => ({
  type: Date,
  ...properties,
});

const array = (properties?: Record<string, any>): Record<string, any> => ({
  type: Array,
  ...properties,
});

const object = (properties?: Record<string, any>): Record<string, any> => ({
  type: Object,
  ...properties,
});

const boolean = (properties?: Record<string, any>): Record<string, any> => ({
  type: Boolean,
  ...properties,
});

export default {
  array,
  boolean,
  date,
  string,
  number,
  object,
};
