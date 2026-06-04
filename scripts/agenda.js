/**
 * Scripts specifically for the Agenda page interactive functionality.
 */
document.addEventListener("DOMContentLoaded", () => {
    // Placeholder for future agenda interactions (e.g., day switching, filters)

    // Timeline Cards Interactive State for Itinerary pages
    const timelineCards = document.querySelectorAll('.timeline-content');
    
    timelineCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent theme toggle if the user is explicitly clicking the external link
            if (e.target.closest('.external-link-icon')) return;
            
            const isFeatured = card.classList.contains('dark-card');

            // Reset all cards to normal light theme
            timelineCards.forEach(c => {
                c.classList.remove('dark-card');
                c.classList.add('light-card');
            });

            // If the clicked card wasn't already featured, apply the featured dark theme
            if (!isFeatured) {
                card.classList.remove('light-card');
                card.classList.add('dark-card');
            }
        });
    });
});