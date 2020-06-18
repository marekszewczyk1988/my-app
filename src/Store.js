import React, {useEffect, useRef} from 'react';

export function Store()
{
    const STORE_ID_NUMBER = '30191088';
    const STORE_ID = `my-store-${STORE_ID_NUMBER}`;

    const storeDiv = useRef(null);

    window.localStorage.setItem("show_ecwid_logs", "true")
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;
    window.ec = window.ec || Object();
    window.ec.storefront = window.ec.storefront || Object();
    window.ec.enable_catalog_on_one_page = true;

    //TU se cos pozmieniaj
    window._xnext_initialization_scripts = [{
        widgetType: 'ProductBrowser',
        id: "my-store-30191088",
        arg: ["id=productBrowser", "views=grid(20,3)"],
    },
        {
            widgetType: 'SearchWidget',
            id: 'my-search-####',
            arg: ["id=searchWidget"]
        }
    ];

    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = `https://app.ecwid.com/script.js?${STORE_ID_NUMBER}&data_platform=code&data_date=2020-06-16`;
    script.defer = true;

    useEffect(() => {
        storeDiv.current.appendChild(script);
    }, []);

    return (
                <div ref={storeDiv} className="dupa"/>
    );
}

