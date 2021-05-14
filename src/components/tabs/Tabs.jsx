import { useEffect, useState } from "react";
import '../tabs/tabs.css'

const Tabs = () => {

    const [selectedTab, setSelectedTab] = useState(1);

  

    useEffect(() => {
        handleClick();
    }, [selectedTab])

    function handleClick() {
        for (let i = 1; i <=5; i++) {
            document.getElementById(`tab${i}`).className = 'tab';
        }
        document.getElementById(`tab${selectedTab}`).classList.add('selectedTab');
    }

    return (
        <section id='tabsBar'>
            <div className='tabWrapper'>
                <p id='tab1' className='tab selectedTab' onClick={() => setSelectedTab(1)}>Featured</p>
            </div>
            <div className='tabWrapper'>
                <p id='tab2' className='tab' onClick={() => setSelectedTab(2)}>Categories</p>
            </div>
            <div className='tabWrapper'>
                <p id='tab3' className='tab' onClick={() => setSelectedTab(3)}>Watchlist</p>
            </div>
            <div className='tabWrapper'>
                <p id='tab4' className='tab' onClick={() => setSelectedTab(4)}>Rented</p>
            </div>
            <div className='tabWrapper'>
                <p id='tab5' className='tab' onClick={() => setSelectedTab(5)}>Purchased</p>
            </div>
        </section>
    )
}

export default Tabs;