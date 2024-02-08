const onChange = (object: object, onChange: any, thisArg: any) => {
  const handler = {
    defineProperty(target: any, property: any, descriptor: any) {
      if (!Object.is(descriptor.value, target[property])) {
        if (typeof onChange === 'function') {
          // propName, newValue, previousValue, updatedObject
          onChange.call(thisArg || this, property, descriptor.value, target[property], object);
        } else {
          // Separate listener for each property
          // newValue, previousValue, updatedObject
          onChange[property].call(thisArg || this, descriptor.value, target[property], object);
        }
      }
      return Reflect.defineProperty(target, property, descriptor);
    }
  };

  return new Proxy(object, handler);
};

export { onChange };
