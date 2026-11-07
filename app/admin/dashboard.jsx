'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, Reorder, useDragControls } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  LayoutGrid, User, FolderKanban, Briefcase, Layers, Award, GraduationCap,
  Plus, Copy, Trash2, GripVertical, ExternalLink, Check, Loader2, X, ArrowUpRight, Terminal,
} from 'lucide-react';
import { ModeToggle } from '../../src/components/theme/mode-toggle';
import { cn } from '../../src/lib/utils';

/* ---------- configuration ---------- */

const SECTIONS = [
  { key: 'overview', label: 'Overview', icon: LayoutGrid },
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'projects', label: 'Projects', icon: FolderKanban, title: 'title', sub: 'category', noun: 'project' },
  { key: 'experience', label: 'Experience', icon: Briefcase, title: 'title', sub: 'company', noun: 'role' },
  { key: 'skills', label: 'Skills', icon: Layers, title: 'title', sub: (s) => `${s.items?.length || 0} tools`, noun: 'category' },
  { key: 'certifications', label: 'Certifications', icon: Award, title: 'name', sub: 'issuer', noun: 'certification' },
  { key: 'education', label: 'Education', icon: GraduationCap, title: 'degree', sub: 'institution', noun: 'entry' },
];
const LISTS = SECTIONS.filter((s) => s.title);

const PROFILE_GROUPS = [
  { title: 'Identity', fields: ['name', 'role', 'title', 'company', 'companyShort'] },
  { title: 'Hero', fields: ['headline', 'headlineAccent', 'introRole', 'intro', 'stack', 'featuredProject'] },
  { title: 'Availability', fields: ['available', 'availabilityLabel'] },
  { title: 'Location', fields: ['location', 'locationShort', 'timezone'] },
  { title: 'Contact & links', fields: ['email', 'phone', 'resumeUrl', 'github', 'linkedin', 'x'] },
  { title: 'Hero stats', fields: ['stats'] },
  { title: 'Search engines', fields: ['seoDescription'] },
];

const LABELS = {
  id: 'ID (unique, used in URLs and keys)', domainUrl: 'Domain URL', codeCl: 'Client code', codeSv: 'Server code',
  resumeUrl: 'Resume URL', x: 'X (Twitter)', seoDescription: 'Meta description', headlineAccent: 'Headline accent',
  introRole: 'Intro role', companyShort: 'Company (short)', locationShort: 'Location (short)', featuredProject: 'Featured project label',
  availabilityLabel: 'Availability badge', mono: 'Black logo (invert in dark mode)', github: 'GitHub', linkedin: 'LinkedIn',
};
const HINTS = {
  headline: 'Main hero sentence. The accent follows it in gradient.',
  available: 'Turns the "Available for hire" badges on or off across the site.',
  email: 'Also where the contact form sends messages. A new address needs re-activating on formsubmit.co.',
  image: 'Path inside /public, e.g. /assets/proj-1.webp',
  icon: 'Image URL',
  link: 'Leave empty to hide the "Verify" link.',
};
const LONG = new Set(['intro', 'description', 'seoDescription', 'headline']);

/* ---------- helpers ---------- */

let uid = 0;
const withKeys = (arr) => arr.map((item) => ({ ...item, __k: ++uid }));
const stripKeys = (arr) => arr.map(({ __k, ...rest }) => rest);
const payloadOf = (key, value) => (key === 'profile' ? value : stripKeys(value));

const humanize = (k) => LABELS[k] || k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());

// Union of every item's keys, so each entry shows every field any entry has (e.g. all four project links).
function shapeOf(values) {
  const objs = values.filter((v) => v && typeof v === 'object' && !Array.isArray(v));
  if (!objs.length) return values.find((v) => v !== undefined && v !== '') ?? '';
  const out = {};
  for (const o of objs) for (const k of Object.keys(o)) if (k !== '__k') out[k] = undefined;
  for (const k of Object.keys(out)) out[k] = shapeOf(objs.map((o) => o[k]));
  return out;
}
function blank(t) {
  if (Array.isArray(t)) return [];
  if (t && typeof t === 'object') return Object.fromEntries(Object.entries(t).map(([k, v]) => [k, blank(v)]));
  return typeof t === 'number' ? 0 : typeof t === 'boolean' ? false : '';
}
const fieldTitle = (section, item) => {
  const v = item?.[section.title];
  return v ? String(v) : `Untitled ${section.noun}`;
};
const fieldSub = (section, item) => (typeof section.sub === 'function' ? section.sub(item) : item?.[section.sub] || '');

/* ---------- dashboard ---------- */

export default function Dashboard({ initial }) {
  const [data, setData] = useState(() => ({
    ...initial,
    ...Object.fromEntries(LISTS.map((s) => [s.key, withKeys(initial[s.key])])),
  }));
  const [saved, setSaved] = useState(() =>
    Object.fromEntries(['profile', ...LISTS.map((s) => s.key)].map((k) => [k, JSON.stringify(initial[k])]))
  );
  const [active, setActive] = useState('overview');
  const [saving, setSaving] = useState(false);

  const dirty = useMemo(
    () => Object.keys(saved).filter((k) => JSON.stringify(payloadOf(k, data[k])) !== saved[k]),
    [data, saved]
  );

  const update = useCallback((key, value) => setData((d) => ({ ...d, [key]: value })), []);

  const save = useCallback(async () => {
    if (!dirty.length || saving) return;
    setSaving(true);
    const failures = [];
    for (const key of dirty) {
      try {
        const res = await fetch('/api/admin', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'x-portfolio-admin': '1' },
          body: JSON.stringify({ key, data: payloadOf(key, data[key]) }),
        });
        const json = await res.json().catch(() => ({ errors: [`Server answered ${res.status}`] }));
        if (!res.ok) throw new Error(json.errors?.join(' · ') || `Server answered ${res.status}`);
        // Keep the server's cleaned copy (empty optional fields removed) so "unsaved" resets correctly.
        setSaved((s) => ({ ...s, [key]: JSON.stringify(json.data) }));
        setData((d) => ({
          ...d,
          [key]: key === 'profile' ? json.data : json.data.map((item, i) => ({ ...item, __k: d[key][i]?.__k ?? ++uid })),
        }));
      } catch (e) {
        failures.push(`${key}: ${e.message}`);
      }
    }
    setSaving(false);
    if (failures.length) toast.error(failures.join('\n'), { duration: 6000 });
    else toast.success(`Saved ${dirty.map((k) => `${k}.js`).join(', ')}`);
  }, [dirty, data, saving]);

  const discard = () => {
    setData((d) => {
      const next = { ...d };
      for (const k of dirty) {
        const orig = JSON.parse(saved[k]);
        next[k] = k === 'profile' ? orig : withKeys(orig);
      }
      return next;
    });
  };

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        save();
      }
    };
    const onLeave = (e) => {
      if (dirty.length) e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('beforeunload', onLeave);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('beforeunload', onLeave);
    };
  }, [save, dirty.length]);

  const section = SECTIONS.find((s) => s.key === active);

  return (
    // data-lenis-prevent: the site's smooth scroller must not hijack the dashboard's own scroll panes
    <div data-lenis-prevent className="admin flex h-dvh overflow-hidden bg-paper-white text-obsidian text-sm">
      <Sidebar active={active} setActive={setActive} data={data} dirty={dirty} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 shrink-0 flex items-center gap-3 px-4 sm:px-6 border-b border-graphite-hairline">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-ash hidden sm:inline">Portfolio</span>
            <span className="text-graphite-hairline hidden sm:inline">/</span>
            <span className="font-medium truncate">{section.label}</span>
          </div>

          <MobileNav active={active} setActive={setActive} />

          <div className="ml-auto flex items-center gap-2">
            <AnimatePresence initial={false} mode="wait">
              {dirty.length ? (
                <motion.span
                  key="dirty"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-ash"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {dirty.length} unsaved
                </motion.span>
              ) : (
                <motion.span
                  key="clean"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-ash"
                >
                  <Check size={13} className="text-mint-signal" /> All changes saved
                </motion.span>
              )}
            </AnimatePresence>
            {dirty.length > 0 && (
              <button onClick={discard} className="h-8 px-3 rounded-md text-smoke hover:text-obsidian hover:bg-lilac-wash">
                Discard
              </button>
            )}
            <button
              onClick={save}
              disabled={!dirty.length || saving}
              className="h-8 px-3 rounded-md bg-plasma-violet text-white font-medium inline-flex items-center gap-2 shadow-sm hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : null}
              Save
              <kbd className="hidden sm:inline text-[11px] font-mono opacity-70">⌘S</kbd>
            </button>
          </div>
        </header>

        <main className="flex-1 min-h-0 overflow-y-auto">
          {/* Switch instantly (no exit-then-enter wait); the new view just fades in */}
          <div key={active} className="h-full animate-in fade-in duration-150">
              {active === 'overview' && <Overview data={data} update={update} setActive={setActive} dirty={dirty} />}
              {active === 'profile' && <ProfileEditor value={data.profile} onChange={(v) => update('profile', v)} />}
              {section.title && (
                <CollectionEditor section={section} items={data[section.key]} onChange={(v) => update(section.key, v)} />
              )}
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- navigation ---------- */

function Sidebar({ active, setActive, data, dirty }) {
  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-graphite-hairline bg-lilac-wash/40">
      <div className="h-14 flex items-center gap-2.5 px-4 border-b border-graphite-hairline">
        <div className="w-7 h-7 rounded-md bg-obsidian text-paper-white flex items-center justify-center font-mono text-xs">MK</div>
        <div className="leading-tight">
          <div className="font-medium">Portfolio</div>
          <div className="text-[11px] text-ash">Local admin</div>
        </div>
      </div>

      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
        {SECTIONS.map((s) => {
          const count = Array.isArray(data[s.key]) ? data[s.key].length : null;
          const isActive = active === s.key;
          return (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={cn(
                'relative w-full h-8 px-2.5 rounded-md flex items-center gap-2.5 text-left',
                isActive ? 'text-obsidian' : 'text-smoke hover:text-obsidian hover:bg-obsidian/5'
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
                  className="absolute inset-0 rounded-md bg-paper-white border border-graphite-hairline shadow-sm"
                />
              )}
              <s.icon size={15} className="relative shrink-0" />
              <span className="relative flex-1">{s.label}</span>
              {dirty.includes(s.key) && <span className="relative w-1.5 h-1.5 rounded-full bg-amber-500" title="Unsaved" />}
              {count !== null && <span className="relative text-[11px] text-ash tabular-nums">{count}</span>}
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-graphite-hairline flex items-center justify-between">
        <a href="/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 h-8 px-2 rounded-md text-smoke hover:text-obsidian hover:bg-obsidian/5">
          View site <ArrowUpRight size={13} />
        </a>
        <ModeToggle />
      </div>
    </aside>
  );
}

function MobileNav({ active, setActive }) {
  return (
    <select
      value={active}
      onChange={(e) => setActive(e.target.value)}
      aria-label="Section"
      className="md:hidden h-8 rounded-md border border-graphite-hairline bg-paper-white px-2 text-sm"
    >
      {SECTIONS.map((s) => (
        <option key={s.key} value={s.key}>{s.label}</option>
      ))}
    </select>
  );
}

/* ---------- overview ---------- */

function Overview({ data, update, setActive, dirty }) {
  const p = data.profile;
  const toolCount = data.skills.reduce((n, c) => n + (c.items?.length || 0), 0);
  const stats = [
    { key: 'projects', label: 'Projects', value: data.projects.length },
    { key: 'skills', label: 'Skills', value: toolCount, sub: `${data.skills.length} categories` },
    { key: 'experience', label: 'Roles', value: data.experience.length },
    { key: 'certifications', label: 'Certifications', value: data.certifications.length },
    { key: 'education', label: 'Education', value: data.education.length },
  ];
  const publish = 'git add src/data && git commit -m "Update portfolio content" && git push';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Good to see you, {p.name.split(' ').find((w) => w.length > 2) || p.name}.</h1>
        <p className="text-smoke mt-1">Edit any section, press Save, then push to publish.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {stats.map((s) => (
          <button
            key={s.key}
            onClick={() => setActive(s.key)}
            className="text-left p-4 rounded-lg border border-graphite-hairline bg-paper-white hover:border-obsidian/30 hover:shadow-sm transition-shadow"
          >
            <div className="text-xs text-ash">{s.label}</div>
            <div className="text-2xl font-semibold tabular-nums mt-1">{s.value}</div>
            {s.sub && <div className="text-[11px] text-ash mt-0.5">{s.sub}</div>}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card title="Availability" desc="Shown in the hero, contact section and status badges.">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-medium">{p.available ? 'Open to work' : 'Not available'}</div>
              <div className="text-xs text-ash mt-0.5">{p.available ? p.availabilityLabel : 'Badges hidden on the site'}</div>
            </div>
            <Switch checked={!!p.available} onChange={(v) => update('profile', { ...p, available: v })} label="Available for hire" />
          </div>
        </Card>

        <Card title="Quick links" desc="Where visitors land from your hero and header.">
          <div className="space-y-1.5">
            {[['Resume', p.resumeUrl], ['GitHub', p.github], ['LinkedIn', p.linkedin], ['X', p.x]].map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 h-8 px-2 -mx-2 rounded-md hover:bg-lilac-wash">
                <span className="text-smoke">{label}</span>
                <span className="truncate text-xs text-ash max-w-[60%] inline-flex items-center gap-1">{url?.replace(/^https?:\/\/(www\.)?/, '')} <ExternalLink size={11} className="shrink-0" /></span>
              </a>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Publish" desc="Saving writes to src/data on this machine. Nothing goes live until you push.">
        <div className="flex items-center gap-2 rounded-md border border-graphite-hairline bg-lilac-wash/50 px-3 py-2 font-mono text-xs">
          <Terminal size={13} className="text-ash shrink-0" />
          <code className="flex-1 overflow-x-auto whitespace-nowrap">{publish}</code>
          <button
            onClick={() => navigator.clipboard.writeText(publish).then(() => toast.success('Command copied'))}
            className="h-7 px-2 rounded-md hover:bg-paper-white text-smoke hover:text-obsidian inline-flex items-center gap-1"
          >
            <Copy size={12} /> Copy
          </button>
        </div>
        {dirty.length > 0 && <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">Save your {dirty.length} unsaved section{dirty.length > 1 ? 's' : ''} first.</p>}
      </Card>
    </div>
  );
}

function Card({ title, desc, children }) {
  return (
    <section className="rounded-lg border border-graphite-hairline bg-paper-white p-5">
      <h2 className="font-medium">{title}</h2>
      {desc && <p className="text-xs text-ash mt-0.5 mb-4">{desc}</p>}
      {children}
    </section>
  );
}

/* ---------- profile ---------- */

function ProfileEditor({ value, onChange }) {
  const set = (k, v) => onChange({ ...value, [k]: v });
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 space-y-4">
      {PROFILE_GROUPS.map((g) => (
        <Card key={g.title} title={g.title}>
          <div className="space-y-4">
            {g.fields.map((k) => (
              <Field key={k} name={k} value={value[k]} template={value[k]} onChange={(v) => set(k, v)} />
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ---------- collections (master / detail) ---------- */

function CollectionEditor({ section, items, onChange }) {
  const [selected, setSelected] = useState(items[0]?.__k);
  const template = useMemo(() => shapeOf(items), [section.key]); // eslint-disable-line react-hooks/exhaustive-deps
  const current = items.find((i) => i.__k === selected) || items[0];

  const replace = (k, next) => onChange(items.map((i) => (i.__k === k ? next : i)));

  const add = () => {
    const item = { ...blank(template), __k: ++uid };
    onChange([item, ...items]);
    setSelected(item.__k);
  };
  const duplicate = (item) => {
    const copy = { ...structuredClone(item), __k: ++uid };
    if ('id' in copy && typeof copy.id === 'string') copy.id = `${copy.id}-copy`;
    const idx = items.indexOf(item);
    onChange([...items.slice(0, idx + 1), copy, ...items.slice(idx + 1)]);
    setSelected(copy.__k);
  };
  // Forgiveness over confirmation: delete immediately, offer undo.
  const remove = (item) => {
    const idx = items.indexOf(item);
    const rest = items.filter((i) => i !== item);
    onChange(rest);
    setSelected(rest[Math.min(idx, rest.length - 1)]?.__k);
    toast(
      (t) => (
        <span className="flex items-center gap-3">
          Deleted “{fieldTitle(section, item)}”
          <button
            className="font-medium text-plasma-violet"
            onClick={() => {
              onChange([...rest.slice(0, idx), item, ...rest.slice(idx)]);
              setSelected(item.__k);
              toast.dismiss(t.id);
            }}
          >
            Undo
          </button>
        </span>
      ),
      { duration: 6000 }
    );
  };

  return (
    <div className="h-full flex flex-col lg:flex-row min-h-0">
      {/* List */}
      <div className="lg:w-80 shrink-0 border-b lg:border-b-0 lg:border-r border-graphite-hairline flex flex-col min-h-0 max-h-[40vh] lg:max-h-none">
        <div className="h-12 shrink-0 flex items-center justify-between px-4 border-b border-graphite-hairline">
          <span className="text-xs text-ash">{items.length} {section.label.toLowerCase()} · drag to reorder</span>
          <button onClick={add} className="h-7 px-2 rounded-md inline-flex items-center gap-1 text-smoke hover:text-obsidian hover:bg-lilac-wash">
            <Plus size={14} /> New
          </button>
        </div>
        <Reorder.Group axis="y" values={items} onReorder={onChange} className="flex-1 overflow-y-auto p-2 space-y-1">
          {items.map((item) => (
            <ListRow
              key={item.__k}
              item={item}
              section={section}
              active={current?.__k === item.__k}
              onSelect={() => setSelected(item.__k)}
            />
          ))}
        </Reorder.Group>
      </div>

      {/* Detail */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {current ? (
          <div key={current.__k} className="max-w-3xl mx-auto px-4 sm:px-8 py-6 animate-in fade-in duration-150">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="min-w-0">
                  <h1 className="text-xl font-semibold tracking-tight truncate">{fieldTitle(section, current)}</h1>
                  <p className="text-ash text-xs mt-0.5 truncate">{fieldSub(section, current)}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <IconButton label="Duplicate" onClick={() => duplicate(current)}><Copy size={14} /></IconButton>
                  <IconButton label="Delete" onClick={() => remove(current)} danger><Trash2 size={14} /></IconButton>
                </div>
              </div>
              <div className="space-y-5">
                {Object.keys({ ...template, ...current })
                  .filter((k) => k !== '__k')
                  .map((k) => (
                    <Field
                      key={k}
                      name={k}
                      value={current[k]}
                      template={template[k]}
                      onChange={(v) => replace(current.__k, { ...current, [k]: v })}
                    />
                  ))}
              </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-3 text-ash p-8">
            <p>No {section.label.toLowerCase()} yet.</p>
            <button onClick={add} className="h-8 px-3 rounded-md border border-graphite-hairline text-obsidian inline-flex items-center gap-1.5">
              <Plus size={14} /> Add {section.noun}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ListRow({ item, section, active, onSelect }) {
  const controls = useDragControls();
  const thumb = item.image;
  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      whileDrag={{ scale: 1.02, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
      transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
      className={cn(
        'group flex items-center gap-2 rounded-md border px-2 py-2 cursor-pointer select-none bg-paper-white',
        active ? 'border-plasma-violet/50 ring-1 ring-plasma-violet/20' : 'border-transparent hover:bg-lilac-wash'
      )}
      onPointerDown={onSelect}
    >
      <span
        onPointerDown={(e) => controls.start(e)}
        className="touch-none cursor-grab active:cursor-grabbing text-ash opacity-40 group-hover:opacity-100 -ml-0.5"
        aria-hidden="true"
      >
        <GripVertical size={14} />
      </span>
      {thumb && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={thumb} alt="" className="w-9 h-9 rounded object-cover object-top border border-graphite-hairline shrink-0" />
      )}
      <button type="button" onClick={onSelect} className="min-w-0 flex-1 text-left">
        <div className="truncate font-medium text-[13px]">{fieldTitle(section, item)}</div>
        <div className="truncate text-xs text-ash">{fieldSub(section, item)}</div>
      </button>
    </Reorder.Item>
  );
}

/* ---------- generic fields ---------- */

function Field({ name, value, template, onChange }) {
  const v = value ?? blank(template);
  const label = humanize(name);
  const hint = HINTS[name];

  if (typeof v === 'boolean') {
    return (
      <div className="flex items-center justify-between gap-4">
        <FieldLabel label={label} hint={hint} />
        <Switch checked={v} onChange={onChange} label={label} />
      </div>
    );
  }

  if (Array.isArray(v)) {
    const sample = v.length ? v : Array.isArray(template) ? template : [];
    const ofObjects = sample.some((x) => x && typeof x === 'object') || (!v.length && template && typeof template === 'object' && !Array.isArray(template));
    if (ofObjects) return <ObjectList label={label} value={v} template={shapeOf(sample)} onChange={onChange} />;
    if (name === 'tags') return <ChipInput label={label} value={v} onChange={onChange} />;
    return <StringList label={label} value={v} onChange={onChange} />;
  }

  if (v && typeof v === 'object') {
    const keys = Object.keys({ ...(template || {}), ...v });
    return (
      <fieldset className="rounded-lg border border-graphite-hairline p-4">
        <legend className="px-1 text-xs font-medium text-smoke">{label}</legend>
        <div className="grid sm:grid-cols-2 gap-4">
          {keys.map((k) => (
            <Field key={k} name={k} value={v[k]} template={template?.[k]} onChange={(nv) => onChange({ ...v, [k]: nv })} />
          ))}
        </div>
      </fieldset>
    );
  }

  if (typeof v === 'number') {
    return (
      <label className="block">
        <FieldLabel label={label} hint={hint} />
        <input type="number" value={v} onChange={(e) => onChange(e.target.valueAsNumber || 0)} className={inputCls} />
      </label>
    );
  }

  const isLong = LONG.has(name) || String(v).length > 90;
  const isImage = name === 'image' || name === 'icon';
  return (
    <label className="block">
      <FieldLabel label={label} hint={hint} />
      <div className="flex items-start gap-3">
        {isLong ? (
          <AutoTextarea value={v} onChange={onChange} />
        ) : (
          <input type="text" value={v} onChange={(e) => onChange(e.target.value)} className={inputCls} spellCheck={!/url|link|id|email|image|icon|github|linkedin|^x$|code|demo|video/i.test(name)} />
        )}
        {isImage && v && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={v} alt="" className="mt-1.5 w-9 h-9 rounded border border-graphite-hairline object-contain bg-lilac-wash shrink-0" />
        )}
      </div>
    </label>
  );
}

const inputCls =
  'mt-1.5 w-full h-9 rounded-md border border-graphite-hairline bg-paper-white px-3 text-sm text-obsidian placeholder:text-ash/70 shadow-[0_1px_0_rgba(0,0,0,0.02)] focus:outline-none focus:border-plasma-violet focus:ring-2 focus:ring-plasma-violet/20';

function FieldLabel({ label, hint }) {
  return (
    <span className="block">
      <span className="text-xs font-medium text-smoke">{label}</span>
      {hint && <span className="block text-[11px] text-ash mt-0.5">{hint}</span>}
    </span>
  );
}

function AutoTextarea({ value, onChange, className }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight + 2}px`;
  }, [value]);
  return (
    <textarea
      ref={ref}
      rows={2}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(inputCls, 'h-auto py-2 resize-none leading-relaxed', className)}
    />
  );
}

function StringList({ label, value, onChange }) {
  const set = (i, s) => onChange(value.map((x, j) => (j === i ? s : x)));
  return (
    <div>
      <FieldLabel label={label} />
      <div className="space-y-2 mt-1.5">
        {value.map((s, i) => (
          <div key={i} className="flex items-start gap-2 group">
            <span className="mt-[18px] w-1 h-1 rounded-full bg-ash shrink-0" />
            <AutoTextarea value={s} onChange={(nv) => set(i, nv)} className="mt-0" />
            <IconButton label="Remove" onClick={() => onChange(value.filter((_, j) => j !== i))} className="mt-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
              <X size={13} />
            </IconButton>
          </div>
        ))}
        <button type="button" onClick={() => onChange([...value, ''])} className="h-7 px-2 -ml-2 rounded-md text-xs text-smoke hover:text-obsidian hover:bg-lilac-wash inline-flex items-center gap-1">
          <Plus size={13} /> Add line
        </button>
      </div>
    </div>
  );
}

function ChipInput({ label, value, onChange }) {
  const [draft, setDraft] = useState('');
  const commit = () => {
    const t = draft.trim();
    if (t && !value.includes(t)) onChange([...value, t]);
    setDraft('');
  };
  return (
    <div>
      <FieldLabel label={label} />
      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 rounded-md border border-graphite-hairline bg-paper-white p-1.5 focus-within:border-plasma-violet focus-within:ring-2 focus-within:ring-plasma-violet/20">
        {value.map((t) => (
          <span key={t} className="inline-flex items-center gap-1 h-6 pl-2 pr-1 rounded bg-lilac-wash border border-graphite-hairline text-xs">
            {t}
            <button type="button" aria-label={`Remove ${t}`} onClick={() => onChange(value.filter((x) => x !== t))} className="text-ash hover:text-obsidian">
              <X size={12} />
            </button>
          </span>
        ))}
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ',') {
              e.preventDefault();
              commit();
            } else if (e.key === 'Backspace' && !draft && value.length) {
              onChange(value.slice(0, -1));
            }
          }}
          onBlur={commit}
          placeholder="Add and press Enter"
          className="flex-1 min-w-[120px] h-6 bg-transparent px-1 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
}

function ObjectList({ label, value, template, onChange }) {
  const keys = Object.keys(template || {});
  return (
    <div>
      <FieldLabel label={label} />
      <div className="mt-1.5 rounded-lg border border-graphite-hairline divide-y divide-graphite-hairline">
        {value.map((row, i) => (
          <div key={i} className="flex items-start gap-3 p-3 group">
            <div className="flex-1 grid sm:grid-cols-2 gap-3">
              {keys.map((k) => (
                <Field key={k} name={k} value={row[k]} template={template[k]} onChange={(nv) => onChange(value.map((r, j) => (j === i ? { ...r, [k]: nv } : r)))} />
              ))}
            </div>
            <IconButton label="Remove" onClick={() => onChange(value.filter((_, j) => j !== i))} className="mt-5 opacity-0 group-hover:opacity-100 focus:opacity-100">
              <X size={13} />
            </IconButton>
          </div>
        ))}
        <div className="p-2">
          <button type="button" onClick={() => onChange([...value, blank(template)])} className="h-7 px-2 rounded-md text-xs text-smoke hover:text-obsidian hover:bg-lilac-wash inline-flex items-center gap-1">
            <Plus size={13} /> Add row
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- primitives ---------- */

function Switch({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn('relative w-10 h-6 shrink-0 rounded-full transition-colors', checked ? 'bg-mint-signal' : 'bg-graphite-hairline')}
    >
      <motion.span
        layout
        transition={{ type: 'spring', bounce: 0, duration: 0.25 }}
        className={cn('absolute top-0.5 w-5 h-5 rounded-full bg-white shadow', checked ? 'right-0.5' : 'left-0.5')}
      />
    </button>
  );
}

function IconButton({ label, onClick, children, danger, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(
        'w-8 h-8 inline-flex items-center justify-center rounded-md text-ash hover:bg-lilac-wash',
        danger ? 'hover:text-red-500' : 'hover:text-obsidian',
        className
      )}
    >
      {children}
    </button>
  );
}
