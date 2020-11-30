export default {
  'main': [
    {
      name: 'Home',
      icon: 'fa fa-home',
      to: '/',
      sub: [
        {
          name: 'NCS Admin Dashboard',
          to: '/',
        },
        {
          name: 'Activities',
          to: ''
        }
      ]
    },
    {
      name: 'General Management',
      heading: true
    },
    {
      name: 'Zones',
      icon: 'fa fa-layer-group',
      to: '',
      sub: [
        {
          name: 'New Zonal Command',
          to: '',
        },
        {
          name: 'Manage Zonal Commands',
          to: ''
        }
      ]
    },
    {
      name: 'States',
      icon: 'fa fa-globe',
      to: '',
      sub: [
        {
          name: 'New State Command',
          to: '',
        },
        {
          name: 'Manage State Commands',
          to: ''
        }
      ]
    },
    {
      name: 'Custodial Centers',
      icon: 'fa fa-university',
      to: '',
      sub: [
        {
          name: 'New Custodial Center',
          to: '',
        },
        {
          name: 'Manage Custodial Centers',
          to: ''
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
      name: 'Document Management',
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
