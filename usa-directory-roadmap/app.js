// Application data and state management
class DirectoryRoadmapApp {
    constructor() {
        this.data = {
            directories: [
                // FREE USA-BASED DIRECTORIES
                {
                    id: 1,
                    name: "Google Business Profile",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 100,
                    signupUrl: "https://business.google.com",
                    notes: "Essential for local SEO. Optimize for 'Real Estate Investment Service'",
                    priority: 1,
                    estimatedTime: "20 minutes",
                    completed: false
                },
                {
                    id: 2,
                    name: "Built In Company Directory",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A", 
                    domainAuthority: 88,
                    signupUrl: "https://builtin.com",
                    notes: "Claim company profile - DA 88, 1.8M monthly users",
                    priority: 1,
                    estimatedTime: "15 minutes",
                    completed: false
                },
                {
                    id: 3,
                    name: "AngelList Startups",
                    type: "Free",
                    category: "Investment",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 85,
                    signupUrl: "https://angellist.com/startups",
                    notes: "Create startup profile for investor network exposure",
                    priority: 1,
                    estimatedTime: "25 minutes",
                    completed: false
                },
                {
                    id: 4,
                    name: "Crunchbase Company Profile",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 92,
                    signupUrl: "https://crunchbase.com",
                    notes: "Claim and optimize company profile - high DA backlink",
                    priority: 1,
                    estimatedTime: "30 minutes",
                    completed: false
                },
                {
                    id: 5,
                    name: "Yelp Business",
                    type: "Free",
                    category: "General Business", 
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 93,
                    signupUrl: "https://biz.yelp.com",
                    notes: "High DA, good for financial services visibility",
                    priority: 1,
                    estimatedTime: "20 minutes",
                    completed: false
                },
                {
                    id: 6,
                    name: "Better Business Bureau",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 91,
                    signupUrl: "https://bbb.org",
                    notes: "Trust signals and credibility for financial services",
                    priority: 1,
                    estimatedTime: "30 minutes",
                    completed: false
                },
                {
                    id: 7,
                    name: "Yellow Pages",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 86,
                    signupUrl: "https://yellowpages.com",
                    notes: "Free basic listing, high domain authority",
                    priority: 1,
                    estimatedTime: "15 minutes",
                    completed: false
                },
                {
                    id: 8,
                    name: "Facebook Business",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 96,
                    signupUrl: "https://business.facebook.com",
                    notes: "Social media presence + business directory functionality",
                    priority: 1,
                    estimatedTime: "20 minutes",
                    completed: false
                },
                {
                    id: 9,
                    name: "LinkedIn Company Pages",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 98,
                    signupUrl: "https://linkedin.com/company/setup",
                    notes: "Professional network, valuable for B2B fintech companies",
                    priority: 1,
                    estimatedTime: "25 minutes",
                    completed: false
                },
                {
                    id: 10,
                    name: "Manta Business Directory",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 80,
                    signupUrl: "https://manta.com",
                    notes: "Small business focused, 1M+ registered companies",
                    priority: 1,
                    estimatedTime: "15 minutes",
                    completed: false
                },
                {
                    id: 11,
                    name: "US Fintech Directory",
                    type: "Free",
                    category: "Fintech",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 45,
                    signupUrl: "https://usfintech.co/directory-all/",
                    notes: "USA's comprehensive fintech directory",
                    priority: 1,
                    estimatedTime: "15 minutes",
                    completed: false
                },
                {
                    id: 12,
                    name: "Apple Business Connect",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 99,
                    signupUrl: "https://register.apple.com/placesonmaps",
                    notes: "Essential for iOS users, Apple Maps visibility",
                    priority: 1,
                    estimatedTime: "20 minutes",
                    completed: false
                },
                {
                    id: 13,
                    name: "Bing Places for Business",
                    type: "Free",
                    category: "General Business",
                    cost: "Free",
                    seoValue: "N/A",
                    domainAuthority: 52,
                    signupUrl: "https://www.bingplaces.com",
                    notes: "Microsoft's business directory, 1B monthly searches",
                    priority: 1,
                    estimatedTime: "15 minutes",
                    completed: false
                },
                // PAID USA-BASED DIRECTORIES
                {
                    id: 14,
                    name: "Crunchbase Pro",
                    type: "Paid",
                    category: "General Business",
                    cost: "$588/year",
                    seoValue: "Good",
                    domainAuthority: 92,
                    signupUrl: "https://crunchbase.com/pricing",
                    notes: "Enhanced profile, DA 92 backlink, investor visibility",
                    priority: 2,
                    estimatedTime: "30 minutes",
                    completed: false
                },
                {
                    id: 15,
                    name: "Built In Premium Features",
                    type: "Paid",
                    category: "General Business",
                    cost: "$3,000-8,000/year",
                    seoValue: "Marginal",
                    domainAuthority: 88,
                    signupUrl: "https://builtin.com/solutions",
                    notes: "Premium jobs/company features, only if hiring justifies cost",
                    priority: 2,
                    estimatedTime: "45 minutes",
                    completed: false
                },
                {
                    id: 16,
                    name: "Angel Capital Association Directory",
                    type: "Paid",
                    category: "Investment",
                    cost: "$500-1,500/year",
                    seoValue: "Good",
                    domainAuthority: 65,
                    signupUrl: "https://angelcapitalassociation.org/membership",
                    notes: "Access to angel investor network, niche authority",
                    priority: 2,
                    estimatedTime: "60 minutes",
                    completed: false
                },
                {
                    id: 17,
                    name: "REIT Directory (Nareit)",
                    type: "Paid",
                    category: "Real Estate",
                    cost: "$1,200-2,500/year",
                    seoValue: "Good",
                    domainAuthority: 75,
                    signupUrl: "https://reit.com/membership",
                    notes: "Real estate investment trust directory, industry authority",
                    priority: 2,
                    estimatedTime: "45 minutes",
                    completed: false
                }
            ]
        };
        
        this.state = {
            completedItems: new Set(),
            itemNotes: new Map(),
            itemDates: new Map(),
            currentFilter: 'all',
            searchTerm: '',
            sortColumn: null,
            sortDirection: 'asc'
        };
        
        this.init();
    }

    init() {
        this.renderDirectories();
        this.renderTable();
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
        const freeDirectories = this.data.directories.filter(d => d.type === 'Free');
        const paidDirectories = this.data.directories.filter(d => d.type === 'Paid');
        
        this.renderDirectorySection('freeDirectoriesGrid', freeDirectories, 'free');
        this.renderDirectorySection('paidDirectoriesGrid', paidDirectories, 'paid');
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
            card.querySelector('.directory-category').textContent = directory.category;
            card.querySelector('.estimated-time').textContent = directory.estimatedTime;
            card.querySelector('.directory-url').href = directory.signupUrl;
            card.querySelector('.domain-authority').textContent = directory.domainAuthority;
            
            // Set SEO badge
            const seoBadge = card.querySelector('.seo-badge');
            if (directory.seoValue === 'N/A') {
                seoBadge.textContent = 'N/A';
                seoBadge.className = 'seo-badge';
            } else {
                seoBadge.textContent = directory.seoValue;
                seoBadge.className = `seo-badge ${directory.seoValue.toLowerCase()}`;
            }
            
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

    renderTable() {
        const tbody = document.getElementById('directoryTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        this.data.directories.forEach(directory => {
            const row = document.createElement('tr');
            row.dataset.id = directory.id;
            row.dataset.type = directory.type.toLowerCase();
            row.dataset.status = this.state.completedItems.has(directory.id) ? 'completed' : 'pending';
            
            if (this.state.completedItems.has(directory.id)) {
                row.classList.add('completed');
            }
            
            row.innerHTML = `
                <td><strong>${directory.name}</strong></td>
                <td><span class="category-badge">${directory.type}</span></td>
                <td>${directory.category}</td>
                <td>${directory.cost}</td>
                <td>${directory.seoValue === 'N/A' ? 'N/A' : `<span class="seo-badge ${directory.seoValue.toLowerCase()}">${directory.seoValue}</span>`}</td>
                <td><strong>${directory.domainAuthority}</strong></td>
                <td>
                    <div class="flex items-center gap-8">
                        <input type="checkbox" class="table-checkbox" ${this.state.completedItems.has(directory.id) ? 'checked' : ''}>
                        <span class="status ${this.state.completedItems.has(directory.id) ? 'status--complete' : 'status--pending'}">
                            ${this.state.completedItems.has(directory.id) ? 'Complete' : 'Pending'}
                        </span>
                    </div>
                </td>
                <td>${directory.estimatedTime}</td>
                <td>
                    <a href="${directory.signupUrl}" target="_blank" class="table-link">Sign Up</a>
                </td>
            `;
            
            // Bind table checkbox event
            const checkbox = row.querySelector('.table-checkbox');
            checkbox.addEventListener('change', () => {
                this.toggleCompletion(directory.id);
            });
            
            tbody.appendChild(row);
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
        this.updateTableRowStatus(id);
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

    updateTableRowStatus(id) {
        const row = document.querySelector(`#directoryTableBody tr[data-id="${id}"]`);
        if (!row) return;
        
        const checkbox = row.querySelector('.table-checkbox');
        const status = row.querySelector('.status');
        
        if (this.state.completedItems.has(id)) {
            checkbox.checked = true;
            status.textContent = 'Complete';
            status.className = 'status status--complete';
            row.classList.add('completed');
            row.dataset.status = 'completed';
        } else {
            checkbox.checked = false;
            status.textContent = 'Pending';
            status.className = 'status status--pending';
            row.classList.remove('completed');
            row.dataset.status = 'pending';
        }
    }

    updateNotes(id, notes) {
        this.state.itemNotes.set(id, notes);
    }

    updateDate(id, date) {
        this.state.itemDates.set(id, date);
    }

    updateDashboard() {
        const totalDirectories = this.data.directories.length;
        const completedCount = this.state.completedItems.size;
        const freeDirectories = this.data.directories.filter(d => d.type === 'Free');
        const paidDirectories = this.data.directories.filter(d => d.type === 'Paid');
        const freeCompleted = freeDirectories.filter(d => this.state.completedItems.has(d.id)).length;
        const paidCompleted = paidDirectories.filter(d => this.state.completedItems.has(d.id)).length;
        
        // Update overall progress
        const overallPercent = Math.round((completedCount / totalDirectories) * 100);
        const overallProgress = document.getElementById('overallProgress');
        const overallProgressText = document.getElementById('overallProgressText');
        
        if (overallProgress) overallProgress.style.width = `${overallPercent}%`;
        if (overallProgressText) overallProgressText.textContent = `${overallPercent}% Complete`;
        
        // Update summary cards
        const totalDirElement = document.getElementById('totalDirectories');
        const freeDirElement = document.getElementById('freeDirectories');
        const paidDirElement = document.getElementById('paidDirectories');
        const completedTasks = document.getElementById('completedTasks');
        const remainingTasks = document.getElementById('remainingTasks');
        
        if (totalDirElement) totalDirElement.textContent = totalDirectories;
        if (freeDirElement) freeDirElement.textContent = freeDirectories.length;
        if (paidDirElement) paidDirElement.textContent = paidDirectories.length;
        if (completedTasks) completedTasks.textContent = completedCount;
        if (remainingTasks) remainingTasks.textContent = totalDirectories - completedCount;
        
        // Update section progress
        const freePercent = Math.round((freeCompleted / freeDirectories.length) * 100);
        const paidPercent = paidDirectories.length > 0 ? Math.round((paidCompleted / paidDirectories.length) * 100) : 0;
        
        const freeProgress = document.getElementById('freeProgress');
        const freeProgressText = document.getElementById('freeProgressText');
        const paidProgress = document.getElementById('paidProgress');
        const paidProgressText = document.getElementById('paidProgressText');
        
        if (freeProgress) freeProgress.style.width = `${freePercent}%`;
        if (freeProgressText) freeProgressText.textContent = `${freeCompleted}/${freeDirectories.length} Complete`;
        
        if (paidProgress) paidProgress.style.width = `${paidPercent}%`;
        if (paidProgressText) paidProgressText.textContent = `${paidCompleted}/${paidDirectories.length} Complete`;
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
        // Filter cards
        document.querySelectorAll('.directory-card').forEach(card => {
            let show = this.shouldShowItem(card);
            
            if (show) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        // Filter table rows
        document.querySelectorAll('#directoryTableBody tr').forEach(row => {
            let show = this.shouldShowItem(row);
            
            if (show) {
                row.classList.remove('hidden');
            } else {
                row.classList.add('hidden');
            }
        });
    }

    shouldShowItem(element) {
        let show = true;
        
        // Apply filter
        if (this.state.currentFilter !== 'all') {
            if (this.state.currentFilter === 'free' && element.dataset.type !== 'free') show = false;
            if (this.state.currentFilter === 'paid' && element.dataset.type !== 'paid') show = false;
            if (this.state.currentFilter === 'completed' && element.dataset.status !== 'completed') show = false;
            if (this.state.currentFilter === 'pending' && element.dataset.status !== 'pending') show = false;
        }
        
        // Apply search
        if (show && this.state.searchTerm) {
            const nameElement = element.querySelector('.directory-name') || element.querySelector('td:first-child');
            const categoryElement = element.querySelector('.directory-category') || element.querySelector('td:nth-child(3)');
            
            if (nameElement && categoryElement) {
                const name = nameElement.textContent.toLowerCase();
                const category = categoryElement.textContent.toLowerCase();
                if (!name.includes(this.state.searchTerm) && !category.includes(this.state.searchTerm)) {
                    show = false;
                }
            }
        }
        
        return show;
    }

    markAllComplete(type) {
        const directories = this.data.directories.filter(d => d.type === (type === 'free' ? 'Free' : 'Paid'));
        const today = new Date().toISOString().split('T')[0];
        
        directories.forEach(directory => {
            this.state.completedItems.add(directory.id);
            if (!this.state.itemDates.has(directory.id)) {
                this.state.itemDates.set(directory.id, today);
            }
            this.updateCardStatus(directory.id);
            this.updateTableRowStatus(directory.id);
        });
        
        this.updateDashboard();
        this.applyFilters();
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.state.completedItems.clear();
            this.state.itemNotes.clear();
            this.state.itemDates.clear();
            
            // Reset all cards and table rows
            this.data.directories.forEach(directory => {
                this.updateCardStatus(directory.id);
                this.updateTableRowStatus(directory.id);
                
                const card = document.querySelector(`[data-id="${directory.id}"]`);
                if (card) {
                    const notesTextarea = card.querySelector('.notes-textarea');
                    const dateInput = card.querySelector('.date-input');
                    if (notesTextarea) notesTextarea.value = '';
                    if (dateInput) dateInput.value = '';
                }
            });
            
            this.updateDashboard();
            this.applyFilters();
        }
    }

    exportToCSV() {
        // CSV headers
        const headers = [
            'Directory Name',
            'Type',
            'Category',
            'Annual Cost',
            'SEO Value Rating',
            'Domain Authority',
            'Status',
            'Date Completed',
            'Estimated Time',
            'Signup URL',
            'Notes/Key Benefits'
        ];
        
        // CSV rows
        const rows = this.data.directories.map(directory => {
            const isCompleted = this.state.completedItems.has(directory.id);
            const dateCompleted = this.state.itemDates.get(directory.id) || '';
            const notes = this.state.itemNotes.get(directory.id) || directory.notes;
            
            return [
                `"${directory.name}"`,
                directory.type,
                `"${directory.category}"`,
                `"${directory.cost}"`,
                directory.seoValue,
                directory.domainAuthority,
                isCompleted ? 'Complete' : 'Pending',
                dateCompleted,
                directory.estimatedTime,
                directory.signupUrl,
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
        link.setAttribute('download', 'groundfloor-usa-directory-listing-strategy.csv');
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