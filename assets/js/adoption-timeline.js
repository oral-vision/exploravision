// Adoption Timeline Animation using anime.js v4
(function() {
    function initTimeline() {
        // Check if timeline elements exist
        const item1 = document.getElementById('timeline-item-1');
        const item2 = document.getElementById('timeline-item-2');
        const item3 = document.getElementById('timeline-item-3');

        if (!item1 || !item2 || !item3) {
            return; // Elements don't exist on this page
        }

        // Check if anime.js is loaded
        if (typeof anime === 'undefined' || !anime.createTimeline) {
            console.error('anime.js v4 is not loaded. Please include anime.js before this script.');
            return;
        }

        // Create timeline with defaults using anime.js v4 API
        const timeline = anime.createTimeline({
            defaults: { 
                duration: 800,
                easing: 'easeOutExpo'
            },
            autoplay: true
        });

        // Add animations to timeline with staggered timing
        timeline
            .add('#timeline-item-1', {
                opacity: [0, 1],
                x: [-30, 0]
            }, 200)
            .add('#timeline-item-2', {
                opacity: [0, 1],
                x: [-30, 0]
            }, '+=300')
            .add('#timeline-item-3', {
                opacity: [0, 1],
                x: [-30, 0]
            }, '+=300');
    }

    // Wait for DOM and anime.js to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Wait a bit for anime.js to load if it's loaded asynchronously
            setTimeout(initTimeline, 100);
        });
    } else {
        setTimeout(initTimeline, 100);
    }
})();

