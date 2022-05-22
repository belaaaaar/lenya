declare global {
    interface Window {
        VK: {
            init: (props: {apiId: string}) => void
            Widgets: {
                Article: (target: string, name: string) => void
            }
        }
    }
}

export default window.VK