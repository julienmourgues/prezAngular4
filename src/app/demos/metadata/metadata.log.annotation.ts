export function log(target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>) {

  var originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    var result = originalMethod.apply(this, args);
    alert("The method args are: " + JSON.stringify(args) + " \nThe return value is: " + result);
    return result;
  };

  return descriptor;
}