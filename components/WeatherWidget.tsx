"use client";

import { useEffect } from "react";

export default function WeatherWidget() {
    useEffect(() => {
        const id = "weatherwidget-io-js";
        const d = document;

        // Function to re-init if script is already present
        const initWidget = () => {
            if ("__weatherwidget_init" in window && typeof window.__weatherwidget_init === "function") {
                window.__weatherwidget_init();
            }
        };

        if (!d.getElementById(id)) {
            const js = d.createElement("script");
            js.id = id;
            js.src = "https://weatherwidget.io/js/widget.min.js";
            js.async = true;
            js.onload = initWidget;
            const fjs = d.getElementsByTagName("script")[0];
            fjs.parentNode?.insertBefore(js, fjs);
        } else {
            initWidget();
        }
    }, []);

    return (
        <div className="rounded-lg overflow-hidden shadow-md">
            <a
                className="weatherwidget-io block relative h-48 no-underline"
                href="https://forecast7.com/en/43d761d77/giroussens/"
                data-label_1="Giroussens"
                data-label_2="Weather"
                data-theme="original"
            >
                Giroussens Weather
            </a>
        </div>
    );
}
