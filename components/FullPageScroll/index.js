import React, { useEffect, useCallback } from 'react';

export const dartPalettes = [
    {
        layer1: '#0a2463',
        layer2: '#3e92cc',
        layer3: '#fffaff',
        layer4: '#d8315b',
    },
    {
        layer1: '#09263f',
        layer2: '#393E46',
        layer3: '#626262',
        layer4: '#EEEEEE',
    },
    {
        layer1: '#100720',
        layer2: '#31087B',
        layer3: '#FA2FB5',
        layer4: '#FFC23C',
    },
];

const litePalettes = [
    {
        layer1: '#F8F6F6',
        layer2: '#F5D061',
        layer3: '#2A363B',
        layer4: '#CF4647',
    },
    {
        layer1: '#ffffff',
        layer2: '#393E46',
        layer3: '#626262',
        layer4: '#000000',
    },
    {
        layer1: '#ffffff',
        layer2: '#393E46',
        layer3: '#000000',
        layer4: '#ff0000',
    },
    {
        layer1: '#ffffff',
        layer2: '#393E46',
        layer3: '#626262',
        layer4: '#59a2e5',
    },
    {
        layer1: '#ffffff',
        layer2: '#1d1c23',
        layer3: '#ffffff',
        layer4: '#EEEEEE',
    },
    {
        layer1: '#ffffff',
        layer2: '#EEEEEE',
        layer3: '#626262',
        layer4: '#393E46',
    },
    {
        layer1: '#ffffff',
        layer2: '#b2b8c0',
        layer3: '#626262',
        layer4: '#000000',
    },
    {
        layer1: '#F8F8F8',
        layer2: '#434343',
        layer3: '#FAEBCD',
        layer4: '#F7C873',
    },
    {
        layer1: '#F8F6F6',
        layer2: '#F5D061',
        layer3: '#2A363B',
        layer4: '#CF4647',
    },
];

export const getPelettes = () => litePalettes;

function FullPageScroll() {
    const changeColors = useCallback((color) => {
        const root = document.documentElement;
        root.style.setProperty('--themeColor1', color.layer1);
        root.style.setProperty('--themeColor2', color.layer2);
        root.style.setProperty('--themeColor3', color.layer3);
        root.style.setProperty('--themeColor4', color.layer4);

        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta?.setAttribute && meta?.content !== color.layer2) {
            meta.setAttribute('content', color.layer2);
        }
    }, []);

    const getColorIndex = useCallback(() => {
        const height = window.innerHeight;
        const currentLocation = window.pageYOffset;
        const scrollPosition = currentLocation + height / 2;

        const views = document.getElementsByClassName('view-element');

        let index = 0;
        if (views.length === 0) return index;

        if (views[0]?.scrollHeight && scrollPosition < views[0].scrollHeight) {
            return index;
        }

        for (let i = 0; i < views.length; i++) {
            const current = views[i];
            const after = views[i + 1];

            if (!current) continue;

            if (!after) {
                index = i;
                break;
            }

            if (
                scrollPosition > current.offsetTop &&
                scrollPosition < after.offsetTop
            ) {
                index = i;
                break;
            }
        }

        return index;
    }, []);

    const scrollColor = useCallback(() => {
        const index = getColorIndex();
        const pelettes = getPelettes();
        changeColors(pelettes[index] || pelettes[0]);
    }, [getColorIndex, changeColors]);

    useEffect(() => {
        window.addEventListener('scroll', scrollColor);
        scrollColor();
        return () => window.removeEventListener('scroll', scrollColor);
    }, [scrollColor]);

    return <div />;
}

export default FullPageScroll;
