// Shared by the /admin dashboard and its API route: which files exist, how to clean and check them.

export const COLLECTIONS = ['profile', 'projects', 'experience', 'skills', 'certifications', 'education'];

// Fields the public site needs to render an entry without crashing or showing blanks.
export const REQUIRED = {
  profile: ['name', 'email', 'headline'],
  projects: ['id', 'title', 'image'],
  experience: ['title', 'company'],
  skills: ['title'],
  certifications: ['name', 'issuer'],
  education: ['degree', 'institution'],
};

// Drop empty strings and empty lists so optional fields (a missing video link) disappear instead of rendering empty.
export function prune(value) {
  if (Array.isArray(value)) {
    return value.map(prune).filter((v) => v !== '' && v !== undefined);
  }
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const p = prune(v);
      if (p === '' || p === undefined || (Array.isArray(p) && p.length === 0)) continue;
      out[k] = p;
    }
    return out;
  }
  return typeof value === 'string' ? value.trim() : value;
}

// Returns a list of human-readable problems; empty means valid.
export function validate(key, data) {
  if (!COLLECTIONS.includes(key)) return [`Unknown collection "${key}"`];
  const isProfile = key === 'profile';
  if (isProfile ? !data || typeof data !== 'object' || Array.isArray(data) : !Array.isArray(data)) {
    return [`${key} must be ${isProfile ? 'an object' : 'a list'}`];
  }
  const items = isProfile ? [data] : data;
  const errors = [];
  items.forEach((item, i) => {
    if (!item || typeof item !== 'object') return errors.push(`Item ${i + 1} is not an object`);
    for (const field of REQUIRED[key]) {
      if (item[field] === undefined || item[field] === '') {
        errors.push(isProfile ? `"${field}" is required` : `Item ${i + 1}: "${field}" is required`);
      }
    }
  });
  if (key === 'projects') {
    const ids = data.map((p) => p.id);
    const dup = ids.find((id, i) => ids.indexOf(id) !== i);
    if (dup) errors.push(`Two projects share the id "${dup}"`);
  }
  return errors;
}

export function toModuleSource(key, data) {
  return `export const ${key} = ${JSON.stringify(data, null, 2)};\n`;
}
