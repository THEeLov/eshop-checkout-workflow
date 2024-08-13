import { Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
import OrderLayout from "../layouts/OrderLayout"
import Home from "../pages/Home"
import OrderOverview from "../pages/order/OrderOverview"
import OrderConfirmation from "../pages/order/OrderConfirmation"
import OrderGift from "../pages/order/OrderGift"
import OrderPayment from "../pages/order/OrderPayment"
import OrderBillInfo from "../pages/order/OrderBillInfo"


const orderLayoutRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="./order-overview" relative="path" />,
  },
  {
    path: 'billing-info',
    Component: OrderBillInfo
  },
  {
    path: 'payment-method',
    Component: OrderPayment
  },
  {
    path: 'order-overview',
    Component: OrderOverview
  },
  {
    path: 'confirmation',
    Component: OrderConfirmation
  },
  {
    path: 'order-gift',
    Component: OrderGift
  }
]

const mainLayoutRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="./home" relative="path" />,
  },
  {
    path: 'home',
    Component: Home,
  },
  {
    path: 'order',
    Component: OrderLayout,
    children: orderLayoutRoutes
  },
]


const routes: RouteObject[] = [
  {
    path: '/',
    children: mainLayoutRoutes
  },
]

export default routes