"use client"
import type { Metadata } from "next"
import { siteData } from "@/lib/data"
import Link from "next/link"
import { ExternalLink, ChevronDown, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

// export const metadata: Metadata = {
//   title: "Learning Resources | TechPath",
//   description: "Curated collection of high-quality resources to help you on your learning journey.",
// }

export default function ResourcesPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Extract all unique tags from resources
  const allTags = Array.from(
    new Set(
      siteData.resources.flatMap(category => 
        category.items.flatMap(item => item.tags || [])
      )
    )
  ).sort();

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // Remove a single tag
  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  // Clear all tags
  const clearTags = () => {
    setSelectedTags([]);
  };

  // Filter resources based on selected tags
  const getFilteredItems = (items: any[]) => {
    if (selectedTags.length === 0) return items;
    
    return items.filter(item => 
      item.tags && selectedTags.every(tag => item.tags.includes(tag))
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-gray-400 mb-8">
            Curated collection of high-quality resources to help you on your learning journey.
          </p>

          {/* Dropdown filter */}
          <div className="mb-8 relative" ref={dropdownRef}>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2 bg-gray-800 rounded-2xl flex items-center justify-between min-w-44"
              >
                <span>{selectedTags.length ? `${selectedTags.length} tags selected` : "Filter by tags"}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              
              {/* Selected tags display */}
              {selectedTags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-lg">
                  {selectedTags.map(tag => (
                    <div key={tag} className="bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                      {tag}
                      <button onClick={() => removeTag(tag)} className="ml-2">
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  {selectedTags.length > 0 && (
                    <button 
                      className="text-sm text-gray-400 hover:text-primary px-3 py-1"
                      onClick={clearTags}
                    >
                      Clear all
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute mt-2 z-10 w-64 max-h-80  bg-gray-900 border rounded-2xl border-gray-800 shadow-lg left-1/2 transform -translate-x-1/2 overflow-y-auto no-scrollbar">
                <div className="p-2">
                  {allTags.length > 0 ? (
                    allTags.map(tag => (
                      <div key={tag} className="flex items-center p-2 hover:bg-gray-800 rounded">
                        <input
                          type="checkbox"
                          id={`tag-${tag}`}
                          checked={selectedTags.includes(tag)}
                          onChange={() => toggleTag(tag)}
                          className="mr-2"
                        />
                        <label htmlFor={`tag-${tag}`} className="flex-1 cursor-pointer">
                          {tag}
                        </label>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-400 p-2">No tags available</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-16">
          {siteData.resources.map((category) => {
            const filteredItems = getFilteredItems(category.items);
            
            // Skip categories with no matching items
            if (filteredItems.length === 0 && selectedTags.length > 0) {
              return null;
            }
            
            return (
              <section key={category.id}>
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2">
                  {category.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, index) => (
                    <div key={index} className="card p-6">
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      {"author" in item && <p className="text-gray-400 text-sm mb-1">by {item.author}</p>}
                      {"platform" in item && <p className="text-gray-400 text-sm mb-1">on {item.platform}</p>}
                      {"provider" in item && <p className="text-gray-400 text-sm mb-1">by {item.provider}</p>}
                      
                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 my-2">
                          {item.tags.map((tag: string) => (
                            <span 
                              key={tag} 
                              className="bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <Link href={item.link} target="_blank" className="text-primary hover:underline flex items-center">
                        View Resource
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
          
          {/* Show message when no results match filters */}
          {selectedTags.length > 0 && 
           siteData.resources.every(category => getFilteredItems(category.items).length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-400">No resources match the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}