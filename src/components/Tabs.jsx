
const Tabs = () => {

    return (
        <section id='tabsBar'>
            <p className='tabsBarItem-showing tabs'>Featured</p>;
            <p className='tabsBarItem-hidden tabs'>Categories</p>;
            <p className='tabsBarItem-hidden tabs'>Watchlist</p>;
            <p className='tabsBarItem-hidden tabs'>Rented</p>;
            <p className='tabsBarItem-hidden tabs'>Purchased</p>;
        </section>
    )
}

export default Tabs;