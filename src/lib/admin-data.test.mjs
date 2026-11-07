// Run: node --test src/lib/admin-data.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { prune, validate, toModuleSource } from './admin-data.mjs';

test('prune drops empty optional fields but keeps booleans and numbers', () => {
  assert.deepEqual(
    prune({ title: ' A ', links: { demo: 'x', video: '' }, tags: ['a', ''], mono: false, id: 0, bullets: [] }),
    { title: 'A', links: { demo: 'x' }, tags: ['a'], mono: false, id: 0 }
  );
});

test('validate catches missing required fields, wrong shapes, bad keys and duplicate ids', () => {
  assert.deepEqual(validate('projects', [{ id: 'a', title: 'A', image: '/a.webp' }]), []);
  assert.deepEqual(validate('projects', [{ id: 'a', title: 'A' }]), ['Item 1: "image" is required']);
  assert.deepEqual(validate('projects', [{ id: 'a', title: 'A', image: 'x' }, { id: 'a', title: 'B', image: 'y' }]), ['Two projects share the id "a"']);
  assert.deepEqual(validate('profile', []), ['profile must be an object']);
  assert.deepEqual(validate('skills', {}), ['skills must be a list']);
  assert.deepEqual(validate('../package', []), ['Unknown collection "../package"']);
});

test('toModuleSource round-trips through JSON', () => {
  const src = toModuleSource('education', [{ degree: 'X "quoted"', institution: 'Y' }]);
  assert.ok(src.startsWith('export const education = '));
  assert.deepEqual(JSON.parse(src.slice('export const education = '.length, -2)), [{ degree: 'X "quoted"', institution: 'Y' }]);
});
