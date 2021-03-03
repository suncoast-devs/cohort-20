export function Icon({ name, style = 'fas' }) {
  return <i className={`${style} fa-${name}`}></i>
}
