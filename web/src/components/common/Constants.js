// export const HOSTNAME = 'http://localhost:8086';
export const HOSTNAME_DEFAULT = 'http://localhost:8080/v1';
export const HOSTNAME_NOTIFICATION = 'http://localhost:8080/v2';
// export const HOSTNAME_DEFAULT = 'https://atcoffee-web.herokuapp.com';
export const JWT_NAME = 'jwt';
export const TOKEN_FCM = 'AAAA-YQwquE:APA91bGUSX9_WqJauv3VE2AECILzW-NNUWEt_h8D8IcsednX6eMUSAR465RtKwDAa_WqGQ34SYwMHz8Xbg8sjdsf9149t_iJn1ZZEogZOmnYzsHocg21fyiDLLYxMpeLQUff2AF_qw9Z';
export const ROLE = { 
  ROLE_ADMIN:'ADMIN',
  ROLE_STAFF: 'STAFF',
  ROLE_USER: 'USER'
};
export const STATUS_BILL = {
  REQUESTED: 'REQUESTED',
  APPROVED: 'APPROVED',
  UNAPPROVED: 'UNAPPROVED',
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  CANCELED: 'CANCELED',
  DELIVERING: 'DELIVERING',
  COMPLETED: 'COMPLETED'
};

export const STATUS_BILL_VI = {
  REQUESTED: 'Đã yêu cầu',
  APPROVED: 'Đã duyệt',
  UNAPPROVED: 'Không được duyệt',
  PAID: 'Đã thanh toán',
  UNPAID: 'Chưa thanh toán',
  CANCELED: 'Đã hủy', 
  DELIVERING: 'Đang giao',
  COMPLETED: 'Hoàn thành'
}
export const PAGE_SIZE_MAX = 10000;
export const PAGE_SIZE_PRODUCT = 10;
export const PAGE_SIZE_STAFF = 10;
export const PAGE_SIZE_STORE = 10;
export const PAGE_SIZE_ORDER = 10;
export const PAGE_SIZE_ORDER_STATISTICS = 10;
export const PAGE_SIZE_REWARD = 10;
export const PAGE_SIZE_RATE = 10;
export const PAGE_SIZE_CATEGORY = 10;
export const PAGE_SIZE_PROMOTION = 10;
export const ITEM_NUMBER_PAGINATION = 5;
export const LIMIT_NOTIFICATION_SHOW = 5;
export const POINTS_REFUND = 0.001;
export const COMPONENT_NAME_ADMIN = 'ADMIN';
export const COMPONENT_NAME_STAFF = 'STAFF';
export const COMPONENT_NAME_LOGIN = 'LOGIN';
export const COMPONENT_NAME_FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const COMPONENT_NAME_DASHBOARD = 'DASHBOARD';
export const COMPONENT_NAME_DASHBOARD_STATISTICS = 'DASHBOARD_STATISTICS';
export const COMPONENT_NAME_REVENUE_DASHBOARD = 'REVENUE_DASHBOARD';
export const COMPONENT_NAME_ORDER_STATISTICS = 'ORDER_STATISTICS';
export const COMPONENT_NAME_TABLE_ORDER_STATISTICS = 'TABLE_ORDER_STATISTICS';
export const COMPONENT_NAME_STAFF_STATISTICS = 'STAFF_STATISTICS';
export const COMPONENT_NAME_TABLE_STAFF_STATISTICS = 'TABLE_STAFF_STATISTICS';
export const COMPONENT_NAME_ORDER_INFO_STATISTICS = 'ORDER_INFO_STATISTICS';
export const COMPONENT_NAME_ORDER_INFO_STATISTICS_HEADER = 'ORDER_INFO_STATISTICS_HEADER';
export const COMPONENT_NAME_STATISTICS = 'STATISTICS';
export const COMPONENT_NAME_SIDE_BAR = 'SIDE_BAR';
export const COMPONENT_NAME_NAVBAR = 'NAVBAR';
export const COMPONENT_NAME_ERROR = 'ERROR';
export const COMPONENT_NAME_PRODUCTS = 'PRODUCTS';
export const COMPONENT_NAME_SECTION_HEADER = 'SECTION_HEADER';
export const COMPONENT_NAME_TABLE_PRODUCTS = 'TABLE_PRODUCTS';
export const COMPONENT_NAME_ADD_PRODUCT = 'ADD_PRODUCT';
export const COMPONENT_NAME_ACTION_PRODUCT = 'ACTION_PRODUCT';
export const COMPONENT_NAME_PRODUCT_INFO = 'PRODUCT_INFO';
export const COMPONENT_NAME_BASIC_PRODUCT_INFO = 'BASIC_PRODUCT_INFO';
export const COMPONENT_NAME_STAFFS = 'STAFFS';
export const COMPONENT_NAME_ADD_STAFF= 'ADD_STAFF';
export const COMPONENT_NAME_ACTION_STAFF = 'ACTION_STAFF';
export const COMPONENT_NAME_STAFF_INFO = 'STAFF_INFO';
export const COMPONENT_NAME_TABLE_STAFFS = 'TABLE_STAFFS';
export const COMPONENT_NAME_STORES = 'STORES';
export const COMPONENT_NAME_TABLE_STORES = 'TABLE_STORES';
export const COMPONENT_NAME_BASIC_STORE_INFO = 'BASIC_STORE_INFO';
export const COMPONENT_NAME_ACTION_STORE = 'ACTION_STORE';
export const COMPONENT_NAME_CATEGORIES = 'CATEGORIES';
export const COMPONENT_NAME_TABLE_CATEGORIES = 'TABLE_CATEGORIES';
export const COMPONENT_NAME_BASIC_CATEGORY_INFO = 'BASIC_CATEGORY_INFO';
export const COMPONENT_NAME_ACTION_CATEGORY = 'ACTION_CATEGORY';
export const COMPONENT_NAME_CATEGORY_STATISTICS = 'BASIC_CATEGORY_STATISTICS';
export const COMPONENT_NAME_ITEM_STATISTICS = 'ITEM_STATISTICS';
export const COMPONENT_NAME_SPINNER = 'SPINNER';
export const COMPONENT_NAME_SPINNER_SUCCESS = 'SPINNER_SUCCESS';
export const COMPONENT_NAME_ALERT_POPUP = 'ALERT_POPUP';
export const COMPONENT_NAME_SELECT_POPUP = 'SELECT_POPUP';
export const COMPONENT_NAME_SELECT_CART_POPUP = 'SELECT_CART_POPUP';
export const COMPONENT_NAME_CART_POPUP = 'CART_POPUP';
export const COMPONENT_NAME_CART_POPUP_ITEM = 'CART_POPUP_ITEM';
export const COMPONENT_NAME_VIEW_IMAGE = 'VIEW_IMAGE';
export const COMPONENT_NAME_PAGINATION = 'PAGINATION';
export const COMPONENT_NAME_PROFILE = 'PROFILE';
export const COMPONENT_NAME_PERSONAL_INFO = 'PERSONAL_INFO';
export const COMPONENT_NAME_CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const COMPONENT_NAME_PROMOTIONS = 'PROMOTIONS';
export const COMPONENT_NAME_TABLE_PROMOTIONS = 'TABLE_PROMOTIONS';
export const COMPONENT_NAME_ACTION_PROMOTION = 'ACTION_PROMOTION';
export const COMPONENT_NAME_BASIC_PROMOTION_INFO = 'BASIC_PROMOTION_INFO';
export const COMPONENT_NAME_REWARDS = 'REWARDS';
export const COMPONENT_NAME_RATES = 'RATES';
export const COMPONENT_NAME_TABLE_REWARDS = 'TABLE_REWARDS';
export const COMPONENT_NAME_TABLE_RATES = 'TABLE_RATES';
export const COMPONENT_NAME_ACTION_REWARD = 'ACTION_REWARD';
export const COMPONENT_NAME_REWARD_INFO = 'ACTION_REWARD';
export const COMPONENT_NAME_BASIC_REWARD_INFO = 'BASIC_REWARD_INFO';

/**
 * Chart
 */
 export const COMPONENT_NAME_LINE_CHART = 'LINE_CHART';
 export const COMPONENT_NAME_PIE_CHART = 'PIE_CHART';
 export const COMPONENT_NAME_BAR_CHART = 'BAR_CHART';


/**
 * Staff Design
 */
export const COMPONENT_NAME_SIDE_BAR_STAFF = 'SIDE_BAR_STAFF';

export const COMPONENT_NAME_DASHBOARD_STAFF = 'DASHBOARD_STAFF';
export const COMPONENT_NAME_PRODUCTS_STAFF = 'PRODUCTS_STAFF';
export const COMPONENT_NAME_PRODUCTS_ITEM = 'PRODUCTS_ITEM';
export const COMPONENT_NAME_PRODUCT_ITEM = 'PRODUCT_ITEM';
export const COMPONENT_NAME_PROFILE_STAFF = 'PROFILE_STAFF';
export const COMPONENT_NAME_CHANGE_PASSWORD_STAFF = 'CHANGE_PASSWORD_STAFF';
export const COMPONENT_NAME_PAYMENT_STAFF = 'PAYMENT_STAFF';
export const COMPONENT_NAME_CUSTOMER_PAYMENT_INFO = 'CUSTOMER_PAYMENT_INFO';
export const COMPONENT_NAME_CART_INFO_STAFF = 'CART_INFO_STAFF';
export const COMPONENT_NAME_ORDERS_STAFF = 'ORDERS_STAFF';
export const COMPONENT_NAME_ACTION_ORDER_STAFF = '_ACTION_ORDER_STAFF';
export const COMPONENT_NAME_TABLE_ORDERS_STAFF = 'TABLE_ORDERS_STAFF';
export const COMPONENT_NAME_TABLE_ORDER_DETAILS_STAFF = 'TABLE_ORDER_DETAILS_STAFF';
export const COMPONENT_NAME_LIST_NOTIFICATION_STAFF = 'LIST_NOTIFICATION_STAFF';
export const COMPONENT_NAME_ORDER_INFO_STAFF = 'ORDER_INFO_STAFF';
export const COMPONENT_NAME_BASIC_ORDER_INFO_STAFF = 'BASIC_ORDER_INFO_STAFF';
export const COMPONENT_NAME_NOTIFICATION_STAFF = 'NOTIFICATION_STAFF';
