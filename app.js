// Application data and state management
class DirectoryRoadmapApp {
    constructor() {
        this.data = {
            freeDirectories: [
                {
                    id: 1,
                    name: "PropTech Scout Directory",
                    niche: "Global prop-tech",
                    seoStrength: "High",
                    cost: "FREE",
                    url: "https://theproptechscout.com/the-proptech-directory/",
                    notes: "DA 64 est., frequent media citations. Claim profile; accepts backlinks.",
                    priority: "High",
                    estimatedTime: "15 min"
                },
                {
                    id: 2,
                    name: "CrowdSpace",
                    niche: "EU / global crowdfunding",
                    seoStrength: "High", 
                    cost: "FREE",
                    url: "https://crowdspace.com/add-platform",
                    notes: "300+ platforms listed, topical authority. Real-estate filter boosts relevance.",
                    priority: "High",
                    estimatedTime: "15 min"
                },
                {
                    id: 3,
                    name: "Built In Company Pages",
                    niche: "US tech & fintech talent",
                    seoStrength: "High",
                    cost: "FREE",
                    url: "https://builtin.com",
                    notes: "DA 88, 1.8M monthly users. Free 'Claim Company' then optimize.",
                    priority: "High",
                    estimatedTime: "20 min"
                },
                {
                    id: 4,
                    name: "MLS PropTech Directory",
                    niche: "US MLS technology",
                    seoStrength: "Medium",
                    cost: "FREE",
                    url: "https://mlsproptech.com",
                    notes: "Niche authority for brokers. Free after vetting; backlinks allowed.",
                    priority: "Medium",
                    estimatedTime: "15 min"
                },
                {
                    id: 5,
                    name: "Ascendix PropTech Market Map",
                    niche: "Global RE tech map",
                    seoStrength: "Medium",
                    cost: "FREE",
                    url: "https://ascendixtech.com/proptech-market-map/",
                    notes: "DA 59, link from CRE blogs. Submit form for map inclusion.",
                    priority: "Medium",
                    estimatedTime: "10 min"
                },
                {
                    id: 6,
                    name: "US PropTech Council – Startup Tier",
                    niche: "US network",
                    seoStrength: "Medium",
                    cost: "FREE",
                    url: "https://bit.ly/usptc-apply",
                    notes: "600+ members; directory backlink. Free for < $1m ARR (code STARTUP).",
                    priority: "Medium",
                    estimatedTime: "20 min"
                },
                {
                    id: 7,
                    name: "PropTech Collective – Individual Seat",
                    niche: "Canada prop-tech",
                    seoStrength: "Medium",
                    cost: "FREE",
                    url: "https://proptechcollective.com/proptech-employee-membership-signup",
                    notes: "6K community; report mentions. Use free employee code if partner joins.",
                    priority: "Medium",
                    estimatedTime: "15 min"
                },
                {
                    id: 8,
                    name: "Proptech for Good Alliance",
                    niche: "ESG / impact RE",
                    seoStrength: "Medium",
                    cost: "FREE",
                    url: "https://proptechforgood.com/directory",
                    notes: "25K LinkedIn followers. Simple form submission.",
                    priority: "Medium",
                    estimatedTime: "10 min"
                },
                {
                    id: 9,
                    name: "PropTech List (basic)",
                    niche: "Global company index",
                    seoStrength: "High",
                    cost: "FREE",
                    url: "https://proptechlist.com",
                    notes: "DA 70+; 12K backlinks. Free record, paid upgrades optional.",
                    priority: "High",
                    estimatedTime: "15 min"
                },
                {
                    id: 10,
                    name: "PropTech Innovation Norway",
                    niche: "EU start-ups",
                    seoStrength: "Medium",
                    cost: "FREE",
                    url: "https://proptechinnovation.com",
                    notes: "Directory + trade missions. Free for firms ≤10 staff.",
                    priority: "Low",
                    estimatedTime: "15 min"
                },
                {
                    id: 11,
                    name: "CrowdFund Insider Directory",
                    niche: "Alt-finance media",
                    seoStrength: "High",
                    cost: "FREE",
                    url: "https://crowdfundinsider.com",
                    notes: "DA 71, 150K visits/mo. Basic editorial listing is free.",
                    priority: "High",
                    estimatedTime: "20 min"
                },
                {
                    id: 12,
                    name: "TechDirectory.io – Basic",
                    niche: "Fintech / tech",
                    seoStrength: "Medium",
                    cost: "FREE",
                    url: "https://techdirectory.io",
                    notes: "27.9K visits/mo, DA 46. Do-follow link allowed.",
                    priority: "Medium",
                    estimatedTime: "10 min"
                },
                {
                    id: 13,
                    name: "LinkedIn PropTech Groups",
                    niche: "Various",
                    seoStrength: "Medium",
                    cost: "FREE",
                    url: "https://linkedin.com",
                    notes: "50–100K members. Post Groundfloor content weekly.",
                    priority: "Medium",
                    estimatedTime: "30 min"
                },
                {
                    id: 14,
                    name: "Google Business Profile",
                    niche: "Local SEO",
                    seoStrength: "High",
                    cost: "FREE",
                    url: "https://business.google.com",
                    notes: "Map pack visibility. Optimize for 'Real-estate Investment Service'.",
                    priority: "High",
                    estimatedTime: "25 min"
                },
                {
                    id: 15,
                    name: "F6S & BetaList",
                    niche: "Start-up discovery",
                    seoStrength: "Medium",
                    cost: "FREE",
                    url: "https://f6s.com",
                    notes: "High DA backlinks. List Groundfloor as 'Fintech/PropTech'.",
                    priority: "Medium",
                    estimatedTime: "20 min"
                }
            ],
            paidDirectories: [
                {
                    id: 16,
                    name: "PropTech Collective – Company",
                    niche: "Canada prop-tech",
                    seoStrength: "High",
                    cost: "CA$500/yr",
                    url: "https://proptechcollective.com/membership-signup-proptech",
                    notes: "Featured in annual report (10K downloads); do-follow link; unlimited seats.",
                    priority: "High",
                    estimatedTime: "30 min"
                },
                {
                    id: 17,
                    name: "PropTech Collective – Industry",
                    niche: "Canada prop-tech",
                    seoStrength: "High",
                    cost: "CA$1,250/yr",
                    url: "https://proptechcollective.com/membership-signup-proptech",
                    notes: "Same SEO perks + deeper real-estate network.",
                    priority: "Medium",
                    estimatedTime: "30 min"
                },
                {
                    id: 18,
                    name: "Singapore FinTech Association",
                    niche: "APAC fintech",
                    seoStrength: "Medium",
                    cost: "S$763 + S$100",
                    url: "https://singaporefintech.org/membership",
                    notes: "MAS-recognised; logo in member list DA 56; Asia-Pac trust.",
                    priority: "Medium",
                    estimatedTime: "45 min"
                },
                {
                    id: 19,
                    name: "PropTech Consortium Philippines",
                    niche: "PH prop-tech",
                    seoStrength: "Medium",
                    cost: "₱20,000/yr (~US$350)",
                    url: "https://proptech.ph/plans-pricing",
                    notes: "Fast-growing PH prop-tech hub; backlinks from gov't partners.",
                    priority: "High",
                    estimatedTime: "30 min"
                },
                {
                    id: 20,
                    name: "TechDirectory.io – Premium",
                    niche: "Fintech / tech",
                    seoStrength: "Medium",
                    cost: "US$29/mo (US$348)",
                    url: "https://techdirectory.io",
                    notes: "Ranks top of directory, do-follow links, 4× traffic vs free.",
                    priority: "Medium",
                    estimatedTime: "20 min"
                },
                {
                    id: 21,
                    name: "Crowdfund Insider – Featured",
                    niche: "Alt-finance media",
                    seoStrength: "High",
                    cost: "US$199 one-off",
                    url: "https://crowdfundinsider.com",
                    notes: "DA 71 article w/ backlink; syndication to Google News.",
                    priority: "High",
                    estimatedTime: "45 min"
                },
                {
                    id: 22,
                    name: "PropTech List – Featured",
                    niche: "Global company index",
                    seoStrength: "High",
                    cost: "≤ €300/yr",
                    url: "https://proptechlist.com",
                    notes: "DA 70+, 100+ outbound links from industry blogs.",
                    priority: "High",
                    estimatedTime: "30 min"
                },
                {
                    id: 23,
                    name: "US PropTech Council – Corporate",
                    niche: "US network",
                    seoStrength: "Medium",
                    cost: "US$500/yr",
                    url: "https://bit.ly/usptc-apply",
                    notes: "Directory + investor demo days.",
                    priority: "Medium",
                    estimatedTime: "35 min"
                },
                {
                    id: 24,
                    name: "PropTech Angel Group",
                    niche: "Investor group",
                    seoStrength: "Low",
                    cost: "US$200/mo",
                    url: "Contact required",
                    notes: "Deal flow Slack; backlink negligible.",
                    priority: "Low",
                    estimatedTime: "60 min"
                },
                {
                    id: 25,
                    name: "Built In – Premium Jobs",
                    niche: "US tech & fintech talent",
                    seoStrength: "High",
                    cost: "US$3–8K/yr",
                    url: "https://builtin.com",
                    notes: "Boosted SERP jobs, DA 88. SEO moderate, talent high.",
                    priority: "Low",
                    estimatedTime: "45 min"
                },
                {
                    id: 26,
                    name: "Proptech Innovation – Growth",
                    niche: "EU start-ups",
                    seoStrength: "Medium",
                    cost: "€1,500+/yr",
                    url: "https://proptechinnovation.com",
                    notes: "EU trade missions, directory backlink. Pricey.",
                    priority: "Low",
                    estimatedTime: "40 min"
                },
                {
                    id: 27,
                    name: "TechCrunch Crunchbase Pro",
                    niche: "Tech media",
                    seoStrength: "High",
                    cost: "US$588/yr",
                    url: "https://crunchbase.com",
                    notes: "DA 92 backlink; investors scrape data.",
                    priority: "Medium",
                    estimatedTime: "30 min"
                }
            ]
        };
        
        this.state = {
            completedItems: new Set(),
            itemNotes: new Map(),
            itemDates: new Map(),
            currentFilter: 'all',
            searchTerm: ''
        };
        
        this.init();
    }

    init() {
        this.renderDirectories();
        this.updateDashboard();
        this.bindEvents();
    }

    bindEvents() {
        // Filter buttons
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.setSearchTerm(e.target.value);
            });
        }

        // Export button
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.exportToCSV();
            });
        }

        // Quick action buttons
        const markAllFreeBtn = document.getElementById('markAllFreeBtn');
        if (markAllFreeBtn) {
            markAllFreeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.markAllComplete('free');
            });
        }

        const markAllPaidBtn = document.getElementById('markAllPaidBtn');
        if (markAllPaidBtn) {
            markAllPaidBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.markAllComplete('paid');
            });
        }

        const resetProgressBtn = document.getElementById('resetProgressBtn');
        if (resetProgressBtn) {
            resetProgressBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.resetProgress();
            });
        }
    }

    renderDirectories() {
        this.renderDirectorySection('freeDirectoriesGrid', this.data.freeDirectories, 'free');
        this.renderDirectorySection('paidDirectoriesGrid', this.data.paidDirectories, 'paid');
    }

    renderDirectorySection(containerId, directories, type) {
        const container = document.getElementById(containerId);
        const template = document.getElementById('directoryCardTemplate');
        
        if (!container || !template) return;
        
        container.innerHTML = '';
        
        directories.forEach(directory => {
            const card = template.content.cloneNode(true);
            const cardElement = card.querySelector('.directory-card');
            
            // Set data attributes
            cardElement.dataset.id = directory.id;
            cardElement.dataset.type = type;
            cardElement.dataset.status = this.state.completedItems.has(directory.id) ? 'completed' : 'pending';
            
            // Populate card content
            card.querySelector('.directory-name').textContent = directory.name;
            card.querySelector('.directory-cost').textContent = directory.cost;
            card.querySelector('.directory-niche').textContent = directory.niche;
            card.querySelector('.estimated-time').textContent = directory.estimatedTime;
            card.querySelector('.directory-url').href = directory.url;
            
            // Set badges
            const seoBadge = card.querySelector('.seo-badge');
            seoBadge.textContent = directory.seoStrength;
            seoBadge.className = `seo-badge ${directory.seoStrength.toLowerCase()}`;
            
            const priorityBadge = card.querySelector('.priority-badge');
            priorityBadge.textContent = directory.priority;
            priorityBadge.className = `priority-badge ${directory.priority.toLowerCase()}`;
            
            // Set completion status
            const checkbox = card.querySelector('.completion-checkbox');
            const status = card.querySelector('.status');
            
            if (this.state.completedItems.has(directory.id)) {
                checkbox.checked = true;
                status.textContent = 'Complete';
                status.className = 'status status--complete';
                cardElement.classList.add('completed');
            } else {
                status.textContent = 'Pending';
                status.className = 'status status--pending';
            }
            
            // Set notes and date if they exist
            const notesTextarea = card.querySelector('.notes-textarea');
            const dateInput = card.querySelector('.date-input');
            
            if (this.state.itemNotes.has(directory.id)) {
                notesTextarea.value = this.state.itemNotes.get(directory.id);
            }
            
            if (this.state.itemDates.has(directory.id)) {
                dateInput.value = this.state.itemDates.get(directory.id);
            }
            
            // Add default notes
            notesTextarea.placeholder = directory.notes;
            
            // Bind checkbox event
            checkbox.addEventListener('change', () => {
                this.toggleCompletion(directory.id);
            });
            
            // Bind notes event
            notesTextarea.addEventListener('blur', () => {
                this.updateNotes(directory.id, notesTextarea.value);
            });
            
            // Bind date event
            dateInput.addEventListener('change', () => {
                this.updateDate(directory.id, dateInput.value);
            });
            
            container.appendChild(card);
        });
    }

    toggleCompletion(id) {
        if (this.state.completedItems.has(id)) {
            this.state.completedItems.delete(id);
        } else {
            this.state.completedItems.add(id);
            // Auto-set completion date to today
            if (!this.state.itemDates.has(id)) {
                const today = new Date().toISOString().split('T')[0];
                this.state.itemDates.set(id, today);
            }
        }
        
        this.updateCardStatus(id);
        this.updateDashboard();
        this.applyFilters();
    }

    updateCardStatus(id) {
        const card = document.querySelector(`[data-id="${id}"]`);
        if (!card) return;
        
        const checkbox = card.querySelector('.completion-checkbox');
        const status = card.querySelector('.status');
        const dateInput = card.querySelector('.date-input');
        
        if (this.state.completedItems.has(id)) {
            checkbox.checked = true;
            status.textContent = 'Complete';
            status.className = 'status status--complete';
            card.classList.add('completed');
            card.dataset.status = 'completed';
            
            // Set date if not already set
            if (this.state.itemDates.has(id)) {
                dateInput.value = this.state.itemDates.get(id);
            }
        } else {
            checkbox.checked = false;
            status.textContent = 'Pending';
            status.className = 'status status--pending';
            card.classList.remove('completed');
            card.dataset.status = 'pending';
        }
    }

    updateNotes(id, notes) {
        this.state.itemNotes.set(id, notes);
    }

    updateDate(id, date) {
        this.state.itemDates.set(id, date);
    }

    updateDashboard() {
        const totalDirectories = this.data.freeDirectories.length + this.data.paidDirectories.length;
        const completedCount = this.state.completedItems.size;
        const freeCompleted = this.data.freeDirectories.filter(d => this.state.completedItems.has(d.id)).length;
        const paidCompleted = this.data.paidDirectories.filter(d => this.state.completedItems.has(d.id)).length;
        
        // Update overall progress
        const overallPercent = Math.round((completedCount / totalDirectories) * 100);
        const overallProgress = document.getElementById('overallProgress');
        const overallProgressText = document.getElementById('overallProgressText');
        
        if (overallProgress) overallProgress.style.width = `${overallPercent}%`;
        if (overallProgressText) overallProgressText.textContent = `${overallPercent}% Complete`;
        
        // Update summary cards
        const completedTasks = document.getElementById('completedTasks');
        const remainingTasks = document.getElementById('remainingTasks');
        
        if (completedTasks) completedTasks.textContent = completedCount;
        if (remainingTasks) remainingTasks.textContent = totalDirectories - completedCount;
        
        // Update section progress
        const freePercent = Math.round((freeCompleted / this.data.freeDirectories.length) * 100);
        const paidPercent = Math.round((paidCompleted / this.data.paidDirectories.length) * 100);
        
        const freeProgress = document.getElementById('freeProgress');
        const freeProgressText = document.getElementById('freeProgressText');
        const paidProgress = document.getElementById('paidProgress');
        const paidProgressText = document.getElementById('paidProgressText');
        
        if (freeProgress) freeProgress.style.width = `${freePercent}%`;
        if (freeProgressText) freeProgressText.textContent = `${freeCompleted}/${this.data.freeDirectories.length} Complete`;
        
        if (paidProgress) paidProgress.style.width = `${paidPercent}%`;
        if (paidProgressText) paidProgressText.textContent = `${paidCompleted}/${this.data.paidDirectories.length} Complete`;
    }

    setFilter(filter) {
        // Update active button
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
        if (activeBtn) activeBtn.classList.add('active');
        
        this.state.currentFilter = filter;
        this.applyFilters();
    }

    setSearchTerm(term) {
        this.state.searchTerm = term.toLowerCase();
        this.applyFilters();
    }

    applyFilters() {
        document.querySelectorAll('.directory-card').forEach(card => {
            let show = true;
            
            // Apply filter
            if (this.state.currentFilter !== 'all') {
                if (this.state.currentFilter === 'free' && card.dataset.type !== 'free') show = false;
                if (this.state.currentFilter === 'paid' && card.dataset.type !== 'paid') show = false;
                if (this.state.currentFilter === 'completed' && card.dataset.status !== 'completed') show = false;
                if (this.state.currentFilter === 'pending' && card.dataset.status !== 'pending') show = false;
            }
            
            // Apply search
            if (show && this.state.searchTerm) {
                const nameElement = card.querySelector('.directory-name');
                const nicheElement = card.querySelector('.directory-niche');
                
                if (nameElement && nicheElement) {
                    const name = nameElement.textContent.toLowerCase();
                    const niche = nicheElement.textContent.toLowerCase();
                    if (!name.includes(this.state.searchTerm) && !niche.includes(this.state.searchTerm)) {
                        show = false;
                    }
                }
            }
            
            if (show) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    markAllComplete(type) {
        const directories = type === 'free' ? this.data.freeDirectories : this.data.paidDirectories;
        const today = new Date().toISOString().split('T')[0];
        
        directories.forEach(directory => {
            this.state.completedItems.add(directory.id);
            if (!this.state.itemDates.has(directory.id)) {
                this.state.itemDates.set(directory.id, today);
            }
            this.updateCardStatus(directory.id);
        });
        
        this.updateDashboard();
        this.applyFilters();
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.state.completedItems.clear();
            this.state.itemNotes.clear();
            this.state.itemDates.clear();
            
            // Reset all cards
            document.querySelectorAll('.directory-card').forEach(card => {
                const id = parseInt(card.dataset.id);
                this.updateCardStatus(id);
                const notesTextarea = card.querySelector('.notes-textarea');
                const dateInput = card.querySelector('.date-input');
                if (notesTextarea) notesTextarea.value = '';
                if (dateInput) dateInput.value = '';
            });
            
            this.updateDashboard();
        }
    }

    exportToCSV() {
        const allDirectories = [...this.data.freeDirectories, ...this.data.paidDirectories];
        
        // CSV headers
        const headers = [
            'Directory Name',
            'Type',
            'Cost',
            'Niche/Audience',
            'SEO Strength',
            'Priority',
            'Status',
            'Date Completed',
            'Estimated Time',
            'URL',
            'Notes'
        ];
        
        // CSV rows
        const rows = allDirectories.map(directory => {
            const isCompleted = this.state.completedItems.has(directory.id);
            const type = directory.cost === 'FREE' ? 'Free' : 'Paid';
            const dateCompleted = this.state.itemDates.get(directory.id) || '';
            const notes = this.state.itemNotes.get(directory.id) || directory.notes;
            
            return [
                `"${directory.name}"`,
                type,
                `"${directory.cost}"`,
                `"${directory.niche}"`,
                directory.seoStrength,
                directory.priority,
                isCompleted ? 'Complete' : 'Pending',
                dateCompleted,
                directory.estimatedTime,
                directory.url,
                `"${notes.replace(/"/g, '""')}"`
            ];
        });
        
        // Create CSV content
        const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
        
        // Create and download file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', 'groundfloor-directory-roadmap.csv');
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up URL
        URL.revokeObjectURL(url);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new DirectoryRoadmapApp();
});