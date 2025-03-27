"use client";

import React, { useState, useRef } from 'react';
import { Download } from 'lucide-react';

const ChromeExtensionGenerator = () => {
  const [name, setName] = useState('My Chrome Extension');
  const [description, setDescription] = useState('A custom Chrome extension');
  const [version, setVersion] = useState('1.0');
  const [url, setUrl] = useState('https://wondersites.co');
  const [icon, setIcon] = useState(null);
  const [iconPreview, setIconPreview] = useState(null);
  const fileInputRef = useRef(null);
  
  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIcon(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setIconPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const generateZipFile = async () => {
    try {
      // Import JSZip from the installed package
      const JSZip = (await import('jszip')).default;
      
      const zip = new JSZip();
      
      // Create manifest.json
      const manifest = {
        manifest_version: 3,
        name: name,
        version: version,
        description: description,
        permissions: ["sidePanel"],
        side_panel: {
          default_path: "sidepanel.html"
        },
        action: {
          default_title: name
        },
        background: {
          service_worker: "background.js"
        }
      };
      
      // Add icon to manifest if provided
      if (icon) {
        manifest.action.default_icon = {
          "16": "icon16.png",
          "48": "icon48.png",
          "128": "icon128.png"
        };
        manifest.icons = {
          "16": "icon16.png",
          "48": "icon48.png",
          "128": "icon128.png"
        };
        
        // Add icon to the zip file
        zip.file("icon16.png", icon);
        zip.file("icon48.png", icon);
        zip.file("icon128.png", icon);
      }
      
      // Add files to zip
      zip.file("manifest.json", JSON.stringify(manifest, null, 2));
      zip.file("background.js", `chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ tabId: tab.id });
});`);
      
      // Process URL to add ref parameter if not present
      let processedUrl = url;
      if (!url.includes('ref=')) {
        const urlObj = new URL(url);
        urlObj.searchParams.append('ref', 'chrome-extension');
        processedUrl = urlObj.toString();
      }
      
      zip.file("sidepanel.html", `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name}</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <iframe src="${processedUrl}" allow="fullscreen"></iframe>
</body>
</html>`);
      
      // Create styles.css and script.js from the provided code
      zip.file("styles.css", `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  height: 100vh;
  overflow: hidden;
  background-color: #f8f8f8;
  color: #333;
}

.container {
  display: flex;
  height: 100vh;
  position: relative;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;
}

.sidebar {
  width: 250px;
  background-color: #f2f2f7;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  transform: translateX(-250px);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
}

.sidebar.expanded {
  transform: translateX(0);
}

.sidebar-toggle {
  position: absolute;
  top: 15px;
  left: 100%;
  width: 28px;
  height: 28px;
  background-color: #f2f2f7;
  border: 1px solid #e0e0e0;
  border-left: none;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 11;
  transition: all 0.2s ease;
}

.sidebar-toggle:hover {
  background-color: #e5e5ea;
}

.sidebar-header {
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
}

.sidebar-header h2 {
  font-size: 18px;
  font-weight: 500;
  color: #555;
}

.search-container {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
}

#search {
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  font-size: 14px;
  transition: all 0.2s ease;
}

#search:focus {
  outline: none;
  border-color: #007aff;
  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.1);
}

.notes-list {
  flex-grow: 1;
  overflow-y: auto;
}

.note-item {
  padding: 14px 16px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.note-item.active {
  background-color: #e8e8ed;
}

.note-item:hover:not(.active) {
  background-color: #f5f5fa;
}

.note-item h3 {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
}

.note-item p {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.editor {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-left: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  position: relative;
}

.editor.with-sidebar {
  margin-left: 250px;
  width: calc(100% - 250px);
}

.editor-header {
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  z-index: 5;
}

#note-title {
  width: 100%;
  padding: 8px 0;
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 500;
  border: none;
  outline: none;
  color: #333;
}

.toolbar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tool-button {
  width: 32px;
  height: 32px;
  background: #f8f8f8;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #555;
  transition: all 0.2s ease;
}

.tool-button:hover {
  background: #f0f0f0;
  border-color: #d0d0d0;
}

.note-content {
  flex-grow: 1;
  padding: 20px;
  outline: none;
  overflow-y: auto;
  font-size: 15px;
  line-height: 1.5;
  color: #333;
  background-image: linear-gradient(#f0f0f0 1px, transparent 1px);
  background-size: 100% 26px;
  background-position: 0 25px;
  padding-top: 25px;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.icon-button:hover {
  background-color: #e8e8ed;
}

/* Checklist Styles */
.checklist-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  padding-left: 5px;
}

.checklist-checkbox {
  margin-right: 8px;
  margin-top: 3px;
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.checklist-checkbox:checked {
  background-color: #007aff;
  border-color: #007aff;
}

.checklist-checkbox:checked::after {
  content: '✓';
  position: absolute;
  color: white;
  font-size: 12px;
  top: 0;
  left: 4px;
}

.checklist-text {
  flex-grow: 1;
  min-height: 22px;
  padding: 1px 0;
}

.checklist-item.checked .checklist-text {
  text-decoration: line-through;
  color: #999;
}`);

      // Add script.js file to the zip
      zip.file("script.js", `document.addEventListener('DOMContentLoaded', function() {
    let notes = [];
    let activeNoteId = null;
    let sidebarVisible = false;
    
    // DOM Elements
    const sidebar = document.querySelector('.sidebar');
    const editor = document.querySelector('.editor');
    const notesList = document.getElementById('notes-list');
    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');
    const newNoteBtn = document.getElementById('new-note');
    const searchInput = document.getElementById('search');
    const toolButtons = document.querySelectorAll('[data-command]');
    const insertChecklistBtn = document.getElementById('insert-checklist');
    const menuToggleBtn = document.getElementById('menu-toggle');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    
    // Load notes from storage
    function loadNotes() {
      chrome.storage.local.get(['notes', 'activeNoteId', 'sidebarVisible'], function(result) {
        if (result.notes) {
          notes = result.notes;
          activeNoteId = result.activeNoteId || (notes.length > 0 ? notes[0].id : null);
          sidebarVisible = result.sidebarVisible !== undefined ? result.sidebarVisible : false;
          updateSidebarVisibility();
          renderNotesList();
          if (activeNoteId) {
            displayNote(activeNoteId);
          } else if (notes.length === 0) {
            createNewNote();
          }
        } else {
          createNewNote();
        }
      });
    }
    
    // Save notes to storage
    function saveNotes() {
      chrome.storage.local.set({
        'notes': notes,
        'activeNoteId': activeNoteId,
        'sidebarVisible': sidebarVisible
      });
    }
    
    // Update sidebar visibility with smooth animation
    function updateSidebarVisibility() {
      if (sidebarVisible) {
        sidebar.classList.add('expanded');
        setTimeout(() => {
          editor.classList.add('with-sidebar');
        }, 50);
      } else {
        editor.classList.remove('with-sidebar');
        setTimeout(() => {
          sidebar.classList.remove('expanded');
        }, 50);
      }
    }
    
    // Toggle sidebar
    function toggleSidebar() {
      sidebarVisible = !sidebarVisible;
      updateSidebarVisibility();
      saveNotes();
    }
    
    // Create a new note
    function createNewNote() {
      const newNote = {
        id: Date.now(),
        title: 'Untitled Note',
        content: '',
        createdAt: new Date().toISOString()
      };
      
      notes.unshift(newNote);
      activeNoteId = newNote.id;
      saveNotes();
      renderNotesList();
      displayNote(newNote.id);
      
      // Focus on title
      noteTitle.focus();
      noteTitle.select();
    }
    
    // Initialize
    loadNotes();
});`);

      // Now we need to handle the image properly for different icon sizes
      if (icon) {
        // Convert the base64 string to a Blob
        const response = await fetch(iconPreview);
        const blob = await response.blob();
        
        // Add the blob directly to the zip
        zip.file("icon16.png", blob);
        zip.file("icon48.png", blob);
        zip.file("icon128.png", blob);
      }
      
      // Generate zip file
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      
      // Create download link
      const a = document.createElement('a');
      a.href = url;
      a.download = `${name.replace(/\s+/g, '-').toLowerCase()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error generating zip file:', error);
      alert('Error generating extension. Please try again.');
    }
  };
  
  return (
    <div className="flex flex-col space-y-6 w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="text-center mb-4">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/main-desktop-browser-logos.png" className='max-w-64 m-auto'/>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Chrome Extension Generator</h1>
        <p className="text-gray-600">Create your custom Chrome extension in seconds</p>
      </div>
      
      <div className="grid gap-4">
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Extension Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="My Chrome Extension"
          />
        </div>
        
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 h-24"
            placeholder="A description of what your extension does"
          />
        </div>
        
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Version</label>
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="1.0"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">URL to open in side panel</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="https://example.com"
          />
          <p className="text-xs text-gray-500 mt-1">A referral parameter (?ref=chrome-extension) will be automatically added if not present</p>
        </div>
        
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Icon (Square PNG recommended)</label>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => fileInputRef.current.click()}
              className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              Upload Icon
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleIconChange}
              className="hidden"
              accept="image/*"
            />
            {iconPreview && (
              <div className="flex items-center space-x-2">
                <img src={iconPreview} alt="Icon Preview" className="w-12 h-12 object-contain border rounded" />
                <span className="text-sm text-gray-600">Icon uploaded</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-md">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Extension Preview</h3>
        <div className="flex items-center space-x-3 p-3 bg-white border rounded-md">
          {iconPreview ? (
            <img src={iconPreview} alt="Extension Icon" className="w-10 h-10 object-contain" />
          ) : (
            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-xs">Icon</span>
            </div>
          )}
          <div className="flex-1">
            <div className="text-base font-medium text-gray-800">{name || 'My Chrome Extension'}</div>
            <div className="text-sm text-gray-600 line-clamp-1">{description || 'A custom Chrome extension'}</div>
          </div>
        </div>
      </div>
      
      <button
        onClick={generateZipFile}
        className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-600 text-white font-medium rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
      >
        <Download size={20} />
        <span>Generate Extension</span>
      </button>
      
      <div className="text-sm text-gray-600 mt-4">
        <p className="mb-1"><strong>How to install:</strong></p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Extract the downloaded ZIP file</li>
          <li>Go to chrome://extensions in your browser</li>
          <li>Enable "Developer Mode" (top right)</li>
          <li>Click "Load unpacked" and select the extracted folder</li>
        </ol>
      </div>
    </div>
  );
};

export default ChromeExtensionGenerator;