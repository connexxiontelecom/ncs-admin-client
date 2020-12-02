export default {
  'main': [
    {
      name: 'NCS Admin Dashboard',
      icon: 'fa fa-home',
      to: '/dashboard',
    },
    {
      name: 'Activities',
      icon: 'fa fa-list-alt',
      to: ''
    },
    {
      name: 'General Management',
      heading: true
    },
    {
      name: 'Zonal Commands',
      icon: 'fa fa-layer-group',
      to: '/zonal_commands'
    },
    {
      name: 'State Commands',
      icon: 'fa fa-globe',
      to: '/state_commands'
    },
    {
      name: 'Custodial Centers',
      icon: 'fa fa-university',
      to: '',
      sub: [
        {
          name: 'Custodial Centers',
          to: '/custodial_centers'
        },
        {
          name: 'Custodial Center Types',
          to: '/custodial_center_types'
        }
      ]
    },
    {
      name: 'Administration',
      heading: true
    },
    {
      name: 'Users',
      icon: 'fa fa-users',
      to: '',
      sub: [
        {
          name: 'New User',
          to: '',
        },
        {
          name: 'Manage Users',
          to: ''
        }
      ]
    },
    {
      name: 'Messaging',
      icon: 'fa fa-inbox',
    },
    {
      name: 'Documents',
      icon: 'fa fa-folder-open',
    },
    {
      name: 'Reports',
      icon: 'fa fa-chart-pie',
    },
    {
      name: 'Setup',
      icon: 'fa fa-cogs'
    }
  ],
}
