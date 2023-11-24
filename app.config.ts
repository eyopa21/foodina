export default defineAppConfig({
  ui: {
    primary: 'orange',
    gray: 'cool',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 bottom-auto'
    },
    dropdown: {
      background: 'bg-white dark:bg-gray-900',
      item:
      {
        active:
          'bg-primary dark:bg-primary'
      }


    }


  }
})