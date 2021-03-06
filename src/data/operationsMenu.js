export default {
  'main': [
    {
      name: 'Dashboard',
      to: '/operations',
      icon: 'si si-compass'
    },
    {
      name: 'Custodial Centers',
      to: '',
      icon: 'si si-lock'
    },
    {
      name: 'States',
      to: '',
      icon: 'si si-globe'
    },
    {
      name: 'Zones',
      to: '/zonal_operations',
      icon: 'si si-layers'
    },
    // {
    //   name: 'Variations',
    //   icon: 'si si-puzzle',
    //   sub: [
    //     {
    //       name: 'Simple 1',
    //       to: '/backend-boxed/simple1'
    //     },
    //     {
    //       name: 'Simple 2',
    //       to: '/backend-boxed/simple2'
    //     },
    //     {
    //       name: 'Image 1',
    //       to: '/backend-boxed/image1'
    //     },
    //     {
    //       name: 'Image 2',
    //       to: '/backend-boxed/image2'
    //     }
    //   ]
    // },
    {
      name: 'Go Back',
      to: '/dashboard',
      icon: 'si si-action-undo'
    }
  ]
}
