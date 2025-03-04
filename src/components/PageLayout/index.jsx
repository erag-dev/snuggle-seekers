
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import usePageTitle from "hooks/usePageTitle"

import AppLoader from "components/AppLoader"
import Header from "components/Header"
import Footer from "components/Footer"
import { AppModalLetter } from "components/AppModal"

import "./_styles.sass"

const PageLayout = ({
    pageClass,
    pageName,
    isAdopt,
    isLoading,
    showSponsor,
    hideFooterEdge,
    hideGetInTouch,
    callbackIsAdopt,
    children
}) => {

    const location = useLocation();

    usePageTitle(`${pageName}`);

    /**
     * @scroll_top
     * => ensure that the top of the page is shown when page changes..
     */
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [location]);

    return <>

        <Header />

        <main 
            className={`${pageClass} snuggle-page`}
        >

            {children}

            {
                isLoading && <AppLoader />
            }

        </main>

        <Footer 
            hideEdge={hideFooterEdge}
            hideGetInTouch={hideGetInTouch}
            showSponsor={showSponsor}
        />


        <AppModalLetter 
            modalState={isAdopt}
            callbackIsOpen={callbackIsAdopt}
        />
    </>
}

export default PageLayout;