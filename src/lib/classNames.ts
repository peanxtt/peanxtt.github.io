export default function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
    .replace(/\s\s+/g, ' ').trim()
}

export function sanitizeClassName(className?: string | null) {
  return className?.replace(/[~@'"<>]/g, '')
}