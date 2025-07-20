// js/components/Sidebar.js
export function renderSidebar(parentElementId) {
    const parentElement = document.getElementById(parentElementId);
    if (!parentElement) {
        console.error(`Element with ID "${parentElementId}" not found for Sidebar.`);
        return;
    }

    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <h3>Categories</h3> <!-- Translated -->
        </div>
        <ul class="sidebar-menu">
            <li><a href="#"><i class="fas fa-book"></i> Novels</a></li> <!-- Translated -->
            <li><a href="#"><i class="fas fa-brain"></i> Science</a></li> <!-- Translated -->
            <li><a href="#"><i class="fas fa-history"></i> History</a></li> <!-- Translated -->
            <li><a href="#"><i class="fas fa-hand-holding-heart"></i> Self-Help</a></li> <!-- Translated -->
            <li><a href="#"><i class="fas fa-ellipsis-h"></i> Others</a></li> <!-- Translated -->
        </ul>
    `;
    parentElement.appendChild(sidebar);
}