import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import SignupFormDemo from './pages/forms/SignUpForm.tsx'
import SignInForm from './pages/forms/SignInForm.tsx'
import RoomsList from './pages/RoomsList.tsx'
import { Provider } from 'react-redux'
import { store } from './stores/store.tsx'

const route=createBrowserRouter([
{
    path: "/",
    element: <App />, 
  },
  {
    path: "/login",
    element: <SignInForm />, 
  },
  {
    path: "/singup",
    element: <SignupFormDemo />, 
  },
  {
    path:"rooms",
    element:<RoomsList/>
  }

])

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <Provider store={store} >
          <RouterProvider router={route}/>
        </Provider>
    </ThemeProvider>
)
