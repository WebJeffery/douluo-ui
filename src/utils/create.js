export function createNamespace(name, { prefix = 'dl' }) {
  return prefix + name.charAt(0).toUpperCase() + name.substr(1);
}

