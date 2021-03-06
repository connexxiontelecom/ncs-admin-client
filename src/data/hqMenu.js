export default {
  'main': [
    {
      name: 'NCS Admin Dashboard',
      icon: 'fa fa-home',
      to: '/dashboard',
    },
    {
      name: 'Administration',
      heading: true
    },
    {
      name: 'Operations',
      icon: 'fa fa-archive',
      to: '/operations'
    },
    {
      name: 'Reports',
      icon: 'fa fa-chart-pie',
      sub: [
        {
          name: 'Activity Logs'
        },
        {
          name: 'Inmate Reports'
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
      name: 'Config',
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
          name: 'Custodial Center Types',
          to: '/custodial_center_types'
        },
        {
          name: 'Custodial Centers',
          to: '/custodial_centers'
        },
      ]
    },
    {
      name: 'User Accounts',
      icon: 'fa fa-user',
      sub: [
        {
          name: 'Manage Users',
          to: ''
        },
        {
          name: 'Manage Ranks',
          to: ''
        },
        {
          name: 'Manage Titles'
        },
        {
          name: 'Manage Permissions',
          to: ''
        }
      ]
    },
    {
      name: 'Setup',
      icon: 'fa fa-cogs'
    },
  ],
}
