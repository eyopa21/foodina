export default function() {
    return useState('layout', () => {
        return {
            showSearchPopUp: false,
            showSidebar: false,
            showFilterSideBar: true
            

        }
    })
}