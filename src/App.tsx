import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/components/complete.css';
import { ThemeProvider, IconProvider } from '@momentum-design/components/react'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  return (
    <ThemeProvider themeclass={`mds-theme-stable-${theme}Webex`}>
      <IconProvider iconSet='momentum-icons'>
        <MainLayout theme={theme} setTheme={setTheme}>
          {/* TODO: Add switcher for pages here */}
          <HomePage />
        </MainLayout>
      </IconProvider>
    </ThemeProvider>
  )
}

export default App
