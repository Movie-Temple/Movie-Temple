import { useEffect, useState } from "react";

const Tabs = () => {

    const [selectedTab, setSelectedTab] = useState(1);

  

    useEffect(() => {
        handleClick();
    }, [selectedTab])

    function handleClick() {
        let tabs = document.getElementsByClassName('tab');
        console.log(tabs)
        tabs.forEach(element => {
            element.className = '';
            element.classList.add('tab')

        });
        let selected = document.getElementById(`tab${selectedTab}`)
        selected.classList.add('tabsBarItem-selected')
        
    }

    return (
        <section id='tabsBar'>
            <p id='tab1' className='tabsBarItem-selected tab' onClick={setSelectedTab(1)}>Featured</p>;
            <p id='tab2' className='tab' onClick={setSelectedTab(2)}>Categories</p>;
            <p id='tab3' className='tab' onClick={setSelectedTab(3)}>Watchlist</p>;
            <p id='tab4' className='tab' onClick={setSelectedTab(4)}>Rented</p>;
            <p id='tab5' className='tab' onClick={setSelectedTab(5)}>Purchased</p>;
        </section>
    )
}

export default Tabs;