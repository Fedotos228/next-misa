
interface INav {
  href: string
  label: string
}

const nav: INav[] = [
  {
    href: '#home',
    label: 'Home'
  },
  {
    href: '#products',
    label: 'products'
  },
  {
    href: '#gallery',
    label: 'Gallery'
  }
]

export default function Navigation() {
  return (
    <div>
      <ul>
        {
          nav.map((item: INav) => (
            <li key={item.href}>
              <button>
                {item.label}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
