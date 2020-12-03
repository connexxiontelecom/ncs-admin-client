export default {
  'main': [
    {
      name: 'Custodial Dashboard',
      icon: 'fa fa-home',
      to: '/dashboard',
    },
    {
      name: 'Prison Management',
      heading: true
    },
    {
      name: 'Inmates',
      icon: 'fa fa-users',
      to: '',
      sub: [
        {
          name: 'Enrollment',
          to: 'enrollment'
        },
        {
          name: 'Manage Inmates',
          to: 'manage_inmates'
        }
      ]
    },
    {
      name: 'Cell Management',
      icon: 'fa fa-bars',
      sub: [
        {
          name: 'Cells'
        },
        {
          name: 'Cell Blocks',
          to: 'cell_blocks'
        },
        {
          name: 'Cell Assignment'
        }
      ]
    },
    {
      name: 'Operations',
      heading: true
    },
    {
      name: 'Transfers & Movements',
      icon: 'fa fa-random'
    },
    {
      name: 'Court',
      icon: 'fa fa-gavel'
    },
    {
      name: 'Discharge',
      icon: 'fa fa-university'
    },
    {
      name: 'Events',
      icon: 'fa fa-calendar'
    },
    {
      name: 'Roll Call',
      icon: 'fa fa-stopwatch'
    },
    {
      name: 'Welfare',
      heading: true
    },
    {
      name: 'Medical',
      icon: 'fa fa-first-aid'
    },
    {
      name: 'Visits',
      icon: 'fa fa-user-friends'
    },
    {
      name: 'Trainings',
      icon: 'fa fa-chalkboard-teacher'
    },
    {
      name: 'Library',
      icon: 'fa fa-book'
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
}
