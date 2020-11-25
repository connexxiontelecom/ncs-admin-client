/*
 * Main and demo navigation arrays
 */

export default {
  'main': [
    {
      name: 'Dashboard',
      to: '/',
      icon: 'si si-speedometer'
    },
    {
      name: 'Page Packs',
      icon: 'si si-layers',
      subActivePaths: '/backend/pages-packs',
      sub: [
        {
          name: 'Boxed Backend',
          icon: 'si si-magnet',
          subActivePaths: '/backend-boxed',
          sub: [
            {
              name: 'Dashboard',
              to: '/backend-boxed/dashboard'
            },
            {
              name: 'Search',
              to: '/backend-boxed/search'
            },
            {
              name: 'Simple 1',
              to: '/backend-boxed/simple1'
            },
            {
              name: 'Simple 2',
              to: '/backend-boxed/simple2'
            },
            {
              name: 'Image 1',
              to: '/backend-boxed/image1'
            },
            {
              name: 'Image 2',
              to: '/backend-boxed/image2'
            }
          ]
        }
      ]
    },
    {
      name: 'User Interface',
      heading: true
    },
    {
      name: 'Blocks',
      icon: 'si si-energy',
      subActivePaths: '/backend/blocks',
      sub: [
        {
          name: 'Styles',
          to: '/backend/blocks/styles'
        },
        {
          name: 'Options',
          to: '/backend/blocks/options'
        },
        {
          name: 'Forms',
          to: '/backend/blocks/forms'
        },
        {
          name: 'Themed',
          to: '/backend/blocks/themed'
        },
        {
          name: 'API',
          to: '/backend/blocks/api'
        }
      ]
    },
    {
      name: 'Elements',
      icon: 'si si-badge',
      subActivePaths: '/backend/elements',
      sub: [
        {
          name: 'Grid',
          to: '/backend/elements/grid'
        },
        {
          name: 'Typography',
          to: '/backend/elements/typography'
        },
        {
          name: 'Icons',
          to: '/backend/elements/icons'
        },
        {
          name: 'Buttons',
          to: '/backend/elements/buttons'
        },
        {
          name: 'Button Groups',
          to: '/backend/elements/button-groups'
        },
        {
          name: 'Dropdowns',
          to: '/backend/elements/dropdowns'
        },
        {
          name: 'Tabs',
          to: '/backend/elements/tabs'
        },
        {
          name: 'Navigation',
          to: '/backend/elements/navigation'
        },
        {
          name: 'Horizontal Navigation',
          to: '/backend/elements/navigation-horizontal'
        },
        {
          name: 'Progress',
          to: '/backend/elements/progress'
        },
        {
          name: 'Alerts',
          to: '/backend/elements/alerts'
        },
        {
          name: 'Tooltips',
          to: '/backend/elements/tooltips'
        },
        {
          name: 'Popovers',
          to: '/backend/elements/popovers'
        },
        {
          name: 'Modals',
          to: '/backend/elements/modals'
        },
        {
          name: 'Images',
          to: '/backend/elements/images'
        },
        {
          name: 'Timeline',
          to: '/backend/elements/timeline'
        },
        {
          name: 'Ribbons',
          to: '/backend/elements/ribbons'
        },
        {
          name: 'Animations',
          to: '/backend/elements/animations'
        },
        {
          name: 'Color Themes',
          to: '/backend/elements/color-themes'
        }
      ]
    },
    {
      name: 'Tables',
      icon: 'si si-grid',
      subActivePaths: '/backend/tables',
      sub: [
        {
          name: 'Styles',
          to: '/backend/tables/styles'
        },
        {
          name: 'Responsive',
          to: '/backend/tables/responsive'
        },
        {
          name: 'Helpers',
          to: '/backend/tables/helpers'
        },
        {
          name: 'Pricing',
          to: '/backend/tables/pricing'
        }
      ]
    },
    {
      name: 'Forms',
      icon: 'si si-note',
      subActivePaths: '/backend/forms',
      sub: [
        {
          name: 'Elements',
          to: '/backend/forms/elements'
        },
        {
          name: 'Custom Controls',
          to: '/backend/forms/custom-controls'
        },
        {
          name: 'Layouts',
          to: '/backend/forms/layouts'
        },
        {
          name: 'Input Groups',
          to: '/backend/forms/input-groups'
        },
        {
          name: 'Plugins',
          to: '/backend/forms/plugins'
        },
        {
          name: 'Editors',
          to: '/backend/forms/editors'
        },
        {
          name: 'Validation',
          to: '/backend/forms/validation'
        }
      ]
    },
    {
      name: 'Develop',
      heading: true
    },
    {
      name: 'Plugins',
      icon: 'si si-wrench',
      subActivePaths: '/backend/plugins',
      sub: [
        {
          name: 'Appear',
          to: '/backend/plugins/appear'
        },
        {
          name: 'Image Cropper',
          to: '/backend/plugins/image-cropper'
        },
        {
          name: 'Charts',
          to: '/backend/plugins/charts'
        },
        {
          name: 'Calendar',
          to: '/backend/plugins/calendar'
        },
        {
          name: 'Carousel',
          to: '/backend/plugins/carousel'
        },
        {
          name: 'Syntax Highlighting',
          to: '/backend/plugins/syntax-highlighting'
        },
        {
          name: 'Rating',
          to: '/backend/plugins/rating'
        },
        {
          name: 'Dialogs',
          to: '/backend/plugins/dialogs'
        },
        {
          name: 'Notifications',
          to: '/backend/plugins/notifications'
        },
        {
          name: 'Gallery',
          to: '/backend/plugins/gallery'
        }
      ]
    },
    {
      name: 'Layout',
      icon: 'si si-magic-wand',
      subActivePaths: '/backend/layout',
      sub: [
        {
          name: 'Page',
          subActivePaths: '/backend/layout/page',
          sub: [
            {
              name: 'Default',
              to: '/backend/layout/page/default'
            },
            {
              name: 'Flipped',
              to: '/backend/layout/page/flipped'
            }
          ]
        },
        {
          name: 'Main Content',
          subActivePaths: '/backend/layout/main-content',
          sub: [
            {
              name: 'Full Width',
              to: '/backend/layout/main-content/full-width'
            },
            {
              name: 'Narrow',
              to: '/backend/layout/main-content/narrow'
            },
            {
              name: 'Boxed',
              to: '/backend/layout/main-content/boxed'
            }
          ]
        },
        {
          name: 'Header',
          subActivePaths: '/backend/layout/header',
          sub: [
            {
              name: 'Fixed',
              heading: true
            },
            {
              name: 'Light',
              to: '/backend/layout/header/fixed-light'
            },
            {
              name: 'Dark',
              to: '/backend/layout/header/fixed-dark'
            },
            {
              name: 'Static',
              heading: true
            },
            {
              name: 'Light',
              to: '/backend/layout/header/static-light'
            },
            {
              name: 'Dark',
              to: '/backend/layout/header/static-dark'
            }
          ]
        },
        {
          name: 'Sidebar',
          subActivePaths: '/backend/layout/sidebar',
          sub: [
            {
              name: 'Mini',
              to: '/backend/layout/sidebar/mini'
            },
            {
              name: 'Light',
              to: '/backend/layout/sidebar/light'
            },
            {
              name: 'Dark',
              to: '/backend/layout/sidebar/dark'
            },
            {
              name: 'Hidden',
              to: '/backend/layout/sidebar/hidden'
            }
          ]
        },
        {
          name: 'Side Overlay',
          subActivePaths: '/backend/layout/side-overlay',
          sub: [
            {
              name: 'Visible',
              to: '/backend/layout/side-overlay/visible'
            },
            {
              name: 'Hover Mode',
              to: '/backend/layout/side-overlay/hover-mode'
            },
            {
              name: 'No Page Overlay',
              to: '/backend/layout/side-overlay/no-page-overlay'
            }
          ]
        },
        {
          name: 'Loaders',
          to: '/backend/layout/loaders'
        },
        {
          name: 'API',
          to: '/backend/layout/api'
        }
      ]
    },
    {
      name: 'Multi Level Menu',
      icon: 'si si-puzzle',
      sub: [
        {
          name: 'Link 1-1',
          to: '#'
        },
        {
          name: 'Link 1-2',
          to: '#'
        },
        {
          name: 'Sub Level 2',
          sub: [
            {
              name: 'Link 2-1',
              to: '#'
            },
            {
              name: 'Link 2-2',
              to: '#'
            },
            {
              name: 'Sub Level 3',
              sub: [
                {
                  name: 'Link 4-1',
                  to: '#'
                },
                {
                  name: 'Link 4-2',
                  to: '#'
                },
                {
                  name: 'Sub Level 5',
                  sub: [
                    {
                      name: 'Link 5-1',
                      to: '#'
                    },
                    {
                      name: 'Link 5-2',
                      to: '#'
                    },
                    {
                      name: 'Sub Level 6',
                      sub: [
                        {
                          name: 'Link 6-1',
                          to: '#'
                        },
                        {
                          name: 'Link 6-2',
                          to: '#'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Pages',
      heading: true
    },
    {
      name: 'Generic',
      icon: 'si si-layers',
      subActivePaths: '/backend/pages/generic',
      sub: [
        {
          name: 'Blank',
          to: '/backend/pages/generic/blank'
        },
        {
          name: 'Blank (Block)',
          to: '/backend/pages/generic/blank-block'
        },
        {
          name: 'Search',
          to: '/backend/pages/generic/search'
        },
        {
          name: 'Profile',
          to: '/backend/pages/generic/profile'
        },
        {
          name: 'Invoice',
          to: '/backend/pages/generic/invoice'
        },
        {
          name: 'FAQ',
          to: '/backend/pages/generic/faq'
        },
        {
          name: 'Maintenance',
          to: '/maintenance'
        },
        {
          name: 'Status',
          to: '/status'
        },
        {
          name: 'Coming Soon',
          to: '/coming-soon'
        }
      ]
    },
    {
      name: 'Authentication',
      icon: 'si si-lock',
      subActivePaths: '/backend/pages/auth',
      sub: [
        {
          name: 'All',
          to: '/backend/pages/auth/all'
        },
        {
          name: 'Sign In',
          to: '/auth/signin'
        },
        {
          name: 'Sign In 2',
          to: '/auth/signin2'
        },
        {
          name: 'Sign Up',
          to: '/auth/signup'
        },
        {
          name: 'Sign Up 2',
          to: '/auth/signup2'
        },
        {
          name: 'Lock Screen',
          to: '/auth/lock'
        },
        {
          name: 'Lock Screen 2',
          to: '/auth/lock2'
        },
        {
          name: 'Pass Reminder',
          to: '/auth/reminder'
        },
        {
          name: 'Pass Reminder 2',
          to: '/auth/reminder2'
        }
      ]
    },
    {
      name: 'Error Pages',
      icon: 'si si-fire',
      subActivePaths: '/backend/pages/errors',
      sub: [
        {
          name: 'All',
          to: '/backend/pages/errors/all'
        },
        {
          name: '400',
          to: '/errors/400'
        },
        {
          name: '401',
          to: '/errors/401'
        },
        {
          name: '403',
          to: '/errors/403'
        },
        {
          name: '404',
          to: '/errors/404'
        },
        {
          name: '500',
          to: '/errors/500'
        },
        {
          name: '503',
          to: '/errors/503'
        }
      ]
    }
  ],
  'demo': [
    {
      name: 'Home',
      to: '#',
      icon: 'fa fa-home',
      badge: 5
    },
    {
      name: 'Manage',
      heading: true
    },
    {
      name: 'Products',
      icon: 'fa fa-briefcase',
      sub: [
        {
          name: 'HTML Templates',
          icon: 'fab fa-html5',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 320
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 18
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 32
            }
          ]
        },
        {
          name: 'WordPress Themes',
          icon: 'fab fa-wordpress',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 680
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 15
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 20
            }
          ]
        },
        {
          name: 'Web Applications',
          icon: 'fab fa-medapps',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 158
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 65
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 78
            }
          ]
        },
        {
          name: 'Video Templates',
          icon: 'fab fa-youtube',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 920
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 7
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 19
            }
          ]
        },
        {
          name: 'Add Product',
          to: '#',
          icon: 'fa fa-plus'
        }
      ]
    },
    {
      name: 'Payments',
      icon: 'fa fa-money-bill-wave',
      sub: [
        {
          name: 'Scheduled',
          to: '#',
          badge: 3,
          'badge-variant': 'success'
        },
        {
          name: 'Recurring',
          to: '#'
        },
        {
          name: 'Manage',
          to: '#'
        },
        {
          name: 'New Payment',
          to: '#',
          icon: 'fa fa-plus'
        }
      ]
    },
    {
      name: 'Services',
      icon: 'fa fa-globe-americas',
      sub: [
        {
          name: 'Hosting',
          to: '#'
        },
        {
          name: 'Web Design',
          to: '#'
        },
        {
          name: 'Web Development',
          to: '#'
        },
        {
          name: 'Graphic Design',
          to: '#'
        },
        {
          name: 'Legal',
          to: '#'
        },
        {
          name: 'Consulting',
          to: '#'
        }
      ]
    },
    {
      name: 'Personal',
      heading: true
    },
    {
      name: 'Profile',
      icon: 'far fa-user',
      sub: [
        {
          name: 'Edit',
          to: '#'
        },
        {
          name: 'Settings',
          to: '#'
        },
        {
          name: 'Log out',
          to: '#'
        }
      ]
    }
  ],
  'ncs': [
    {
      name: 'Home',
      icon: 'fa fa-home',
      to: '/',
      sub: [
        {
          name: 'Custodial Dashboard',
          to: '/',
        },
        {
          name: 'State Dashboard',
          to: '',
        },
        {
          name: 'Zonal Dashboard',
          to: '',
        },
        {
          name: 'Activities',
          to: ''
        }
      ]
    },
    {
      name: 'Prison Management',
      heading: true
    },
    {
      name: 'Inmates',
      icon: 'fa fa-users',
      sub: [
        {
          name: 'Enrollment',
          to: ''
        },
        {
          name: 'Manage Inmates',
          to: ''
        }
      ]
    },
    {
      name: 'Cell Management',
      icon: 'fa fa-bars',
      sub: [
        {
          name: 'Cell Assignment',
          to: ''
        },
        {
          name: 'Manage Cells',
          to: ''
        }
      ]
    },
    {
      name: 'Operations',
      icon: 'fa fa-archive',
      sub: [
        {
          name: 'Transfers & Movements',
          to: ''
        },
        {
          name: 'Court',
          to: ''
        },
        {
          name: 'Discharge',
          to: ''
        },
        {
          name: 'Events',
          to: ''
        },
        {
          name: 'Roll Call',
          to: ''
        }
      ]
    },
    {
      name: 'Welfare',
      icon: 'fa fa-cross',
      sub: [
        {
          name: 'Medical',
          to: ''
        },
        {
          name: 'Visits',
          to: ''
        },
        {
          name: 'Training',
          to: ''
        },
        {
          name: 'Library',
          to: ''
        }
      ]
    },
    {
      name: 'Administration',
      heading: true
    },
    {
      name: 'Inventory',
      to: '',
      icon: 'fa fa-box',
      sub: [
        {
          name: 'Category Setup',
          to: ''
        },
        {
          name: 'Reorder Level',
          to: ''
        },
        {
          name: 'Stock Entry',
          to: ''
        },
        {
          name: 'Adjustment',
          to: ''
        },
        {
          name: 'Dispense',
          to: ''
        }
      ]
    },
    {
      name: 'Document Management',
      to: '',
      icon: 'fa fa-folder'
    },
    {
      name: 'Central Reporting',
      to: '',
      icon: 'fa fa-chart-pie'
    },
    {
      name: 'Setup',
      to: '',
      icon: 'fa fa-cogs'
    }
  ],

  'ncszone': [
    {
      name: 'Home',
      icon: 'fa fa-home',
      to: '/',

    },
    {
      name: 'General Management',
      heading: true
    },
    {
      name: 'Document Management',
      icon: 'fa fa-users',
        },
    {
      name: 'Judgements',
      icon: 'fa fa-users',
    },
    {
      name: 'Calendar',
      icon: 'fa fa-users',
    },

    {
      name: 'Messaging',
      icon: 'fa fa-users',
    },

    {
      name: 'Reports',
      icon: 'fa fa-users',
    },

  ],

  'ncsstate': [
    {
      name: 'Home',
      icon: 'fa fa-home',
      to: '/',

    },
    {
      name: 'General Management',
      heading: true
    },
    {
      name: 'Judgements',
      icon: 'fa fa-users',
    },
    {
      name: 'Document Management',
      icon: 'fa fa-users',
    },
    {
      name: 'Calendar',
      icon: 'fa fa-users',
    },

    {
      name: 'Messaging',
      icon: 'fa fa-users',
    },

    {
      name: 'Reports',
      icon: 'fa fa-users',
    },

  ],

  'ncshq': [
    {
      name: 'Home',
      icon: 'fa fa-home',
      to: '/',

    },
    {
      name: 'General Management',
      heading: true
    },
    {
      name: 'Document Management',
      icon: 'fa fa-users',
    },
    {
      name: 'Calendar',
      icon: 'fa fa-users',
    },

    {
      name: 'Messaging',
      icon: 'fa fa-users',
    },

    {
      name: 'Reports',
      icon: 'fa fa-users',
    },

  ],
}
