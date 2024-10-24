import React from 'react';
import { motion } from "framer-motion";

let tabs = [
    { id: "All", label: "All" },
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools" },
    { id: "miscellaneous", label: "Miscellaneous" },
];

const FilterSkillBtn = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex space-x-1">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)} // Change activeTab when clicked
                    className={`${activeTab === tab.id ? "" : "hover:text-white/60"
                        } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-white mix-blend-difference"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default FilterSkillBtn;
