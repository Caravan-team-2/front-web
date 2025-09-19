import { Link, useLocation } from '@tanstack/react-router'
import { 
  LayoutDashboard, 
  CreditCard, 
  Users, 
  FileText, 
  UserCheck,
  LogOut,KeyRound 
} from 'lucide-react'
import Logo from '../../../logo.svg'

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Paiment', href: '/dashboard/payment', icon: CreditCard },
  { name: 'Clients', href: '/dashboard/clients', icon: Users },
  { name: 'Constats', href: '/dashboard/constats', icon: FileText },
  { name: 'Utilisateurs', href: '/dashboard/users', icon: UserCheck },
]

function SidebarLogo() {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-8 h-8"  />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Assurini service</h2>
          <p className="text-sm text-gray-500">Saa</p>
        </div>
      </div>
    </div>
  )
}

function SidebarNav() {
  const location = useLocation()
  const extendedNavigationItems = [
    ...navigationItems,
    {
      name: 'API Key',
      href: '/dashboard/api-key',
      icon: KeyRound,
    },
  ]
  return (
    <nav className="flex-1 p-4 space-y-2">
      {extendedNavigationItems.map((item) => {
        const isActive = location.pathname === item.href
        const Icon = item.icon
        return (
          <Link
            key={item.name}
            to={item.href}
            className ={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="font-medium">{item.name}</span>
            {item.name === 'Constats' && (
              <div className="ml-auto w-2 h-2 bg-red-500 rounded-full"></div>
            )}
          </Link>
        )
      })}
    </nav>
  )
}

function SidebarLogout() {
  return (
    <div className="p-4 border-t border-gray-200">
      <button className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors w-full">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Log out</span>
      </button>
    </div>
  )
}

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <SidebarLogo />
      <SidebarNav />
      <SidebarLogout />
    </div>
  )
}