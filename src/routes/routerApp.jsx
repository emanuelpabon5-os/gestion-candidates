import { createBrowserRouter } from 'react-router-dom'
import AppShell from '../components/layout/AppShell.jsx'
import AuthLayout from '../components/layout/AuthLayout.jsx'
import LoginPage from '../pages/auth/LoginPage.jsx'
import DashboardPage from '../pages/dashboard/DashboardPage.jsx'
import CandidatesListPage from '../pages/candidates/CandidatesListPage.jsx'
import CandidateDetailPage from '../pages/candidates/CandidateDetailPage.jsx'
import CandidateFormPage from '../pages/candidates/CandidateFormPage.jsx'
import OffersListPage from '../pages/offers/OffersListPage.jsx'
import OfferDetailPage from '../pages/offers/OfferDetailPage.jsx'
import OfferFormPage from '../pages/offers/OfferFormPage.jsx'
import UsersListPage from '../pages/users/UsersListPage.jsx'
import UserDetailPage from '../pages/users/UserDetailPage.jsx'
import UserFormPage from '../pages/users/UserFormPage.jsx'
import NotFoundPage from '../pages/not-found/NotFoundPage.jsx'

const routerApp = createBrowserRouter([
  {
    path: '/login',
    element: <AuthLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'candidates', element: <CandidatesListPage /> },
      { path: 'candidates/new', element: <CandidateFormPage /> },
      { path: 'candidates/:candidateId', element: <CandidateDetailPage /> },
      { path: 'candidates/:candidateId/edit', element: <CandidateFormPage /> },
      { path: 'offers', element: <OffersListPage /> },
      { path: 'offers/new', element: <OfferFormPage /> },
      { path: 'offers/:offerId', element: <OfferDetailPage /> },
      { path: 'offers/:offerId/edit', element: <OfferFormPage /> },
      { path: 'users', element: <UsersListPage /> },
      { path: 'users/new', element: <UserFormPage /> },
      { path: 'users/:userId', element: <UserDetailPage /> },
      { path: 'users/:userId/edit', element: <UserFormPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default routerApp
