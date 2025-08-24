import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/components/complete.css';
import { ThemeProvider, IconProvider } from '@momentum-design/components/react'

function App() {
  return (
    <ThemeProvider themeclass="mds-theme-stable-darkWebex">
      <IconProvider iconSet='momentum-icons'>
        <MainLayout>
          {/* TODO: Add switcher for pages here */}
          <HomePage />
        </MainLayout>
      </IconProvider>
    </ThemeProvider>
  )
}

export default App
