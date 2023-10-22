import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'users',
    title: 'users',
    translate: 'users',
    type: 'item',
    icon: 'users',
    url: '/pages/users'
  },
  {
    id: 'groups',
    title: 'groups',
    translate: 'groups',
    type: 'item',
    icon: 'users',
    url: '/pages/chat'
  },
  
  {
    id: 'categories',
    title: 'Categories',
    translate: 'Categories',
    type: 'collapsible', // Use 'collapse' for a dropdown
    icon: 'folder', // Icon for the main menu item
    children: [
      {
        id: 'view-categories',
        title: 'View Categories',
        type: 'item',
        icon: 'circle',
        url: '/categories', // URL for the first dropdown item
      },
      {
        id: 'add-category',
        title: 'Add Category',
        type: 'item',
        icon: 'circle',
        url: '/add-category', // URL for the second dropdown item
      },
      // Add more dropdown items as needed
    ]
  },
  {
    id: 'quizzes',
    title: 'Quizzes',
    translate: 'Quizzes',
    type: 'collapsible', // Use 'collapse' for a dropdown
    icon: 'star', // Icon for the main menu item
    children: [
      {
        id: 'view-quizzes',
        title: 'View Quizzes',
        type: 'item',
        icon: 'circle',
        url: '/quizzes', // URL for the first dropdown item
      },
      {
        id: 'add-quiz',
        title: 'Add Quiz',
        type: 'item',
        icon: 'circle',
        url: '/add-quiz', // URL for the second dropdown item
      },
      {
        id: 'load-quiz',
        title: 'Load Quizzes',
        type: 'item',
        icon: 'circle',
        url: '/load-quiz/0', // URL for the second dropdown item
      },
      // Add more dropdown items as needed
    ]
  },
  {
    id: 'posts',
    title: 'Posts',
    translate: 'Posts',
    type: 'collapsible', // Use 'collapse' for a dropdown
    icon: 'folder', // Icon for the main menu item
    children: [
      {
        id: 'view-posts',
        title: 'View Posts',
        type: 'item',
        icon: 'circle',
        url: '/view-posts', // URL for the first dropdown item
      },
      {
        id: 'add-Post',
        title: 'Add Post',
        type: 'item',
        icon: 'circle',
        url: '/create-posts', // URL for the second dropdown item
      },
      // Add more dropdown items as needed
    ]
  },
  {
    id: 'formations',
    title: 'Formations',
    translate: 'Formations',
    type: 'collapsible', // Use 'collapse' for a dropdown
    icon: 'file', // Icon for the main menu item
    children: [
      {
        id: 'view-formations',
        title: 'View Formations',
        type: 'item',
        icon: 'circle',
        url: '/formation', // URL for the first dropdown item
      },
      {
        id: 'add-Formation',
        title: 'Add Formation',
        type: 'item',
        icon: 'circle',
        url: '/formation/add', // URL for the second dropdown item
      },
      // Add more dropdown items as needed
    ]
  },
  {
    id: 'courses',
    title: 'Courses',
    translate: 'Courses',
    type: 'collapsible', // Use 'collapse' for a dropdown
    icon: 'file', // Icon for the main menu item
    children: [
      {
        id: 'view-Courses',
        title: 'View Courses',
        type: 'item',
        icon: 'circle',
        url: '/cours', // URL for the first dropdown item
      },
      {
        id: 'add-Cours',
        title: 'Add Cours',
        type: 'item',
        icon: 'circle',
        url: '/cours/add', // URL for the second dropdown item
      },
      // Add more dropdown items as needed
      {
        id: 'edit-Cours',
        title: 'Edit Cours',
        type: 'item',
        icon: 'circle',
        url: 'cours/edit', // URL for the second dropdown item
      },
    ]
  },
  {
    id: 'order',
    title: 'Order',
    translate: 'Order',
    type: 'collapsible', // Use 'collapse' for a dropdown
    icon: 'folder', // Icon for the main menu item
    children: [
      {
        id: 'add-Orders',
        title: 'View Orders',
        type: 'item',
        icon: 'circle',
        url: '/formationsC', // URL for the first dropdown item
      },
      {
        id: 'view-Orders',
        title: 'Add Post',
        type: 'item',
        icon: 'circle',
        url: '/Admin-commande', // URL for the second dropdown item
      },
      // Add more dropdown items as needed
    ]
  },
  

]
