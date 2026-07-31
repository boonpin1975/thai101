import React from 'react';

// SVG Artwork Generator for all 44 Vocabulary Words
export const ConsonantIllustration = ({ id, className = "w-20 h-20" }) => {
  switch (id) {
    case 1: // Gor Kai - Chicken
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="55" r="32" fill="#FF8A65" />
          <path d="M45 25 C45 15, 55 15, 55 25 Z" fill="#E53935" />
          <path d="M35 28 C35 18, 43 18, 45 28 Z" fill="#E53935" />
          <path d="M55 28 C57 18, 65 18, 65 28 Z" fill="#E53935" />
          <polygon points="50,48 68,52 50,58" fill="#FFB300" />
          <circle cx="42" cy="45" r="4" fill="#212121" />
          <circle cx="43" cy="43" r="1.5" fill="#FFFFFF" />
          <path d="M42 62 Q50 70 58 62" stroke="#D84315" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M40 85 L35 95 M40 85 L40 95 M40 85 L45 95" stroke="#FFB300" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 85 L55 95 M60 85 L60 95 M60 85 L65 95" stroke="#FFB300" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 2: // Khor Khai - Egg
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="52" rx="32" ry="40" fill="#FFE0B2" stroke="#FB8C00" strokeWidth="3" />
          <ellipse cx="38" cy="35" rx="10" ry="16" transform="rotate(-20 38 35)" fill="#FFFFFF" opacity="0.6" />
          <circle cx="60" cy="65" r="2" fill="#F57C00" opacity="0.5" />
          <circle cx="65" cy="58" r="1.5" fill="#F57C00" opacity="0.5" />
          <circle cx="56" cy="72" r="2.5" fill="#F57C00" opacity="0.5" />
        </svg>
      );
    case 3: // Khor Khuat - Bottle
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <rect x="42" y="15" width="16" height="12" rx="2" fill="#8D6E63" />
          <path d="M38 27 H62 V38 Q62 45 70 52 V85 Q70 92 62 92 H38 Q30 92 30 85 V52 Q38 45 38 38 Z" fill="#80DEEA" stroke="#00ACC1" strokeWidth="3" />
          <path d="M35 55 Q50 62 65 55" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" fill="none" />
          <rect x="42" y="65" width="16" height="16" rx="3" fill="#E0F7FA" />
        </svg>
      );
    case 4: // Khor Khwai - Buffalo
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M20 30 Q10 10 40 38" stroke="#5D4037" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M80 30 Q90 10 60 38" stroke="#5D4037" strokeWidth="8" strokeLinecap="round" fill="none" />
          <ellipse cx="50" cy="58" rx="28" ry="24" fill="#795548" />
          <ellipse cx="50" cy="66" rx="16" ry="12" fill="#D7CCC8" />
          <circle cx="44" cy="64" r="3" fill="#4E342E" />
          <circle cx="56" cy="64" r="3" fill="#4E342E" />
          <circle cx="38" cy="48" r="4" fill="#212121" />
          <circle cx="62" cy="48" r="4" fill="#212121" />
          <circle cx="39" cy="46" r="1.5" fill="#FFF" />
          <circle cx="63" cy="46" r="1.5" fill="#FFF" />
        </svg>
      );
    case 5: // Khor Khon - Person
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="42" r="24" fill="#FFCC80" />
          <path d="M26 40 C26 22 74 22 74 40 Z" fill="#42A5F5" />
          <circle cx="40" cy="42" r="3.5" fill="#212121" />
          <circle cx="60" cy="42" r="3.5" fill="#212121" />
          <path d="M42 54 Q50 62 58 54" stroke="#E65100" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M20 92 Q50 70 80 92" fill="#42A5F5" />
        </svg>
      );
    case 6: // Khor Ra-khang - Temple Bell
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M50 15 C30 15 25 50 22 75 H78 C75 50 70 15 50 15 Z" fill="#FFD54F" stroke="#FFB300" strokeWidth="3" />
          <circle cx="50" cy="12" r="6" fill="#FFB300" />
          <rect x="25" y="60" width="50" height="6" fill="#FFB300" />
          <circle cx="50" cy="84" r="7" fill="#FFA000" />
          <line x1="50" y1="75" x2="50" y2="84" stroke="#FFA000" strokeWidth="3" />
        </svg>
      );
    case 7: // Ngo Ngu - Snake
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M25 75 Q40 90 60 75 T70 45 Q70 25 50 25 T30 45" stroke="#66BB6A" strokeWidth="14" strokeLinecap="round" fill="none" />
          <circle cx="35" cy="40" r="12" fill="#81C784" />
          <circle cx="32" cy="38" r="2.5" fill="#1B5E20" />
          <path d="M25 44 L15 46 M25 44 L17 40" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 8: // Jor Jan - Plate
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="50" rx="42" ry="32" fill="#90CAF9" stroke="#1E88E5" strokeWidth="3" />
          <ellipse cx="50" cy="50" rx="30" ry="20" fill="#E3F2FD" stroke="#90CAF9" strokeWidth="2" />
          <path d="M30 42 Q50 35 70 42" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.7" fill="none" />
        </svg>
      );
    case 9: // Chor Ching - Cymbals
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <ellipse cx="35" cy="58" rx="24" ry="14" fill="#FFCA28" stroke="#FFA000" strokeWidth="2" />
          <ellipse cx="35" cy="54" rx="8" ry="6" fill="#FFE082" />
          <ellipse cx="65" cy="42" rx="24" ry="14" fill="#FFCA28" stroke="#FFA000" strokeWidth="2" />
          <ellipse cx="65" cy="38" rx="8" ry="6" fill="#FFE082" />
          <path d="M35 52 Q50 30 65 36" stroke="#D32F2F" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 10: // Chor Chang - Elephant
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="28" fill="#90A4AE" />
          <circle cx="22" cy="45" r="14" fill="#78909C" />
          <circle cx="78" cy="45" r="14" fill="#78909C" />
          <circle cx="42" cy="44" r="3.5" fill="#212121" />
          <circle cx="58" cy="44" r="3.5" fill="#212121" />
          <path d="M50 54 Q50 78 64 70" stroke="#78909C" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 11: // Sor So - Chain
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <rect x="20" y="32" width="36" height="20" rx="10" stroke="#78909C" strokeWidth="6" fill="none" />
          <rect x="44" y="48" width="36" height="20" rx="10" stroke="#B0BEC5" strokeWidth="6" fill="none" />
        </svg>
      );
    case 12: // Chor Cher - Tree
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <rect x="44" y="55" width="12" height="35" rx="3" fill="#6D4C41" />
          <circle cx="50" cy="40" r="26" fill="#4CAF50" />
          <circle cx="34" cy="46" r="18" fill="#66BB6A" />
          <circle cx="66" cy="46" r="18" fill="#66BB6A" />
          <circle cx="50" cy="28" r="18" fill="#81C784" />
        </svg>
      );
    case 13: // Yor Ying - Woman
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="42" r="22" fill="#FFE0B2" />
          <path d="M24 45 C24 20 76 20 76 45 Z" fill="#EC407A" />
          <circle cx="70" cy="30" r="6" fill="#FFEB3B" />
          <circle cx="43" cy="42" r="3" fill="#212121" />
          <circle cx="57" cy="42" r="3" fill="#212121" />
          <path d="M44 52 Q50 58 56 52" stroke="#C2185B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 14: // Dor Cha-da - Crown
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M50 10 L62 45 L78 50 L64 65 L50 88 L36 65 L22 50 L38 45 Z" fill="#FFD54F" stroke="#FFA000" strokeWidth="3" />
          <circle cx="50" cy="10" r="5" fill="#E91E63" />
          <circle cx="50" cy="45" r="6" fill="#2196F3" />
        </svg>
      );
    case 15: // Tor Pa-tak - Spear
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M50 10 L60 30 L50 25 L40 30 Z" fill="#B0BEC5" stroke="#546E7A" strokeWidth="2" />
          <line x1="50" y1="25" x2="50" y2="90" stroke="#795548" strokeWidth="5" strokeLinecap="round" />
          <path d="M42 40 L50 35 L58 40" stroke="#FFD54F" strokeWidth="4" />
        </svg>
      );
    case 16: // Thor Than - Pedestal
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <rect x="25" y="30" width="50" height="15" rx="3" fill="#FFD54F" stroke="#FFA000" strokeWidth="2" />
          <rect x="18" y="48" width="64" height="18" rx="3" fill="#FFCA28" stroke="#FFA000" strokeWidth="2" />
          <rect x="10" y="69" width="80" height="20" rx="4" fill="#FFB300" stroke="#FF8F00" strokeWidth="2" />
        </svg>
      );
    case 17: // Thor Mon-tho - Queen Montho
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="45" r="20" fill="#FFE0B2" />
          <path d="M50 12 L60 32 L40 32 Z" fill="#FFD54F" stroke="#FFA000" strokeWidth="2" />
          <circle cx="44" cy="44" r="2.5" fill="#212121" />
          <circle cx="56" cy="44" r="2.5" fill="#212121" />
          <path d="M45 54 Q50 58 55 54" stroke="#E91E63" strokeWidth="2" fill="none" />
          <path d="M25 90 Q50 65 75 90" fill="#26A69A" />
        </svg>
      );
    case 18: // Thor Phu-thao - Elder
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="48" cy="38" r="20" fill="#FFCC80" />
          <path d="M35 28 Q48 18 61 28" stroke="#ECEFF1" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="42" cy="38" r="5" stroke="#37474F" strokeWidth="2" fill="none" />
          <circle cx="54" cy="38" r="5" stroke="#37474F" strokeWidth="2" fill="none" />
          <line x1="47" y1="38" x2="49" y2="38" stroke="#37474F" strokeWidth="2" />
          <path d="M72 50 V90 M72 50 Q77 40 82 50" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 19: // Nor Nen - Novice Monk
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="38" r="20" fill="#FFCC80" />
          <circle cx="44" cy="38" r="2.5" fill="#212121" />
          <circle cx="56" cy="38" r="2.5" fill="#212121" />
          <path d="M44 48 Q50 54 56 48" stroke="#E65100" strokeWidth="2" fill="none" />
          <path d="M22 90 Q50 58 78 90" fill="#FB8C00" />
        </svg>
      );
    case 20: // Dor Dek - Child
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="38" r="22" fill="#FFE0B2" />
          <path d="M40 18 Q50 12 60 18 L58 26 L42 26 Z" fill="#29B6F6" />
          <circle cx="42" cy="38" r="3.5" fill="#212121" />
          <circle cx="58" cy="38" r="3.5" fill="#212121" />
          <path d="M42 48 Q50 58 58 48" stroke="#D84315" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M25 85 Q50 62 75 85" fill="#FF7043" />
        </svg>
      );
    case 21: // Tor Tao - Turtle
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="55" rx="30" ry="24" fill="#66BB6A" stroke="#2E7D32" strokeWidth="3" />
          <circle cx="80" cy="55" r="10" fill="#81C784" />
          <circle cx="83" cy="53" r="2" fill="#1B5E20" />
          <circle cx="28" cy="40" r="6" fill="#81C784" />
          <circle cx="28" cy="70" r="6" fill="#81C784" />
          <circle cx="72" cy="40" r="6" fill="#81C784" />
          <circle cx="72" cy="70" r="6" fill="#81C784" />
          <polygon points="50,38 40,50 60,50" fill="#388E3C" />
          <polygon points="50,72 40,60 60,60" fill="#388E3C" />
        </svg>
      );
    case 22: // Thor Thung - Bag
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M38 35 Q50 15 62 35" stroke="#EC407A" strokeWidth="5" fill="none" strokeLinecap="round" />
          <rect x="26" y="35" width="48" height="52" rx="10" fill="#F48FB1" stroke="#D81B60" strokeWidth="3" />
          <circle cx="50" cy="60" r="10" fill="#FFF" />
          <path d="M46 60 L54 60 M50 56 L50 64" stroke="#D81B60" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 23: // Thor Tha-han - Soldier
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="42" r="20" fill="#FFCC80" />
          <path d="M26 38 C26 22 74 22 74 38 Z" fill="#388E3C" />
          <rect x="24" y="36" width="52" height="6" rx="2" fill="#2E7D32" />
          <circle cx="43" cy="42" r="3" fill="#212121" />
          <circle cx="57" cy="42" r="3" fill="#212121" />
          <path d="M45 52 Q50 56 55 52" stroke="#1B5E20" strokeWidth="2.5" fill="none" />
          <path d="M25 90 L32 60 H68 L75 90 Z" fill="#4CAF50" />
        </svg>
      );
    case 24: // Thor Thong - Flag
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <line x1="25" y1="15" x2="25" y2="90" stroke="#78909C" strokeWidth="5" strokeLinecap="round" />
          <rect x="25" y="20" width="55" height="8" fill="#E53935" />
          <rect x="25" y="28" width="55" height="8" fill="#FFFFFF" />
          <rect x="25" y="36" width="55" height="16" fill="#1E88E5" />
          <rect x="25" y="52" width="55" height="8" fill="#FFFFFF" />
          <rect x="25" y="60" width="55" height="8" fill="#E53935" />
        </svg>
      );
    case 25: // Nor Nu - Mouse
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <ellipse cx="45" cy="55" rx="26" ry="20" fill="#B0BEC5" />
          <circle cx="68" cy="45" r="12" fill="#CFD8DC" />
          <circle cx="62" cy="34" r="8" fill="#FF8A80" />
          <circle cx="72" cy="43" r="2.5" fill="#212121" />
          <polygon points="80,48 85,50 80,52" fill="#FF8A80" />
          <path d="M20 58 Q10 65 15 80" stroke="#B0BEC5" strokeWidth="4" strokeLinecap="round" fill="none" />
          <polygon points="50,68 62,60 62,75" fill="#FFD54F" />
        </svg>
      );
    case 26: // Bor Bai-mai - Leaf
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M20 80 Q20 20 80 20 Q80 80 20 80 Z" fill="#66BB6A" stroke="#2E7D32" strokeWidth="3" />
          <line x1="20" y1="80" x2="70" y2="30" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
          <path d="M35 65 L48 68 M48 52 L62 55 M32 48 L42 38" stroke="#2E7D32" strokeWidth="2" />
        </svg>
      );
    case 27: // Por Pla - Fish
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <ellipse cx="52" cy="50" rx="30" ry="22" fill="#FF7043" stroke="#D84315" strokeWidth="3" />
          <polygon points="24,50 10,32 10,68" fill="#FF5722" />
          <circle cx="68" cy="44" r="4" fill="#FFFFFF" />
          <circle cx="69" cy="44" r="2" fill="#212121" />
          <path d="M68 56 Q62 60 56 56" stroke="#D84315" strokeWidth="2" fill="none" />
          <path d="M45 28 C55 20 60 30 52 32 Z" fill="#FF8A65" />
        </svg>
      );
    case 28: // Phor Phung - Bee
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="55" rx="26" ry="22" fill="#FFD54F" stroke="#FFA000" strokeWidth="3" />
          <rect x="38" y="35" width="6" height="40" fill="#212121" rx="2" />
          <rect x="54" y="35" width="6" height="40" fill="#212121" rx="2" />
          <circle cx="70" cy="50" r="3" fill="#212121" />
          <ellipse cx="42" cy="28" rx="10" ry="16" transform="rotate(-30 42 28)" fill="#E0F7FA" stroke="#80DEEA" strokeWidth="2" />
          <ellipse cx="58" cy="28" rx="10" ry="16" transform="rotate(30 58 28)" fill="#E0F7FA" stroke="#80DEEA" strokeWidth="2" />
        </svg>
      );
    case 29: // For Fa - Lid
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M15 65 Q50 35 85 65 Z" fill="#EF5350" stroke="#C62828" strokeWidth="3" />
          <circle cx="50" cy="40" r="8" fill="#B71C1C" />
          <rect x="10" y="65" width="80" height="8" rx="3" fill="#C62828" />
          <path d="M30 25 Q35 15 32 10" stroke="#B0BEC5" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M65 25 Q70 15 67 10" stroke="#B0BEC5" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 30: // Phor Phan - Tray
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M15 35 Q50 50 85 35 L75 55 H25 Z" fill="#FFD54F" stroke="#FFA000" strokeWidth="2" />
          <path d="M35 55 L30 85 H70 L65 55 Z" fill="#FFCA28" stroke="#FFA000" strokeWidth="2" />
          <rect x="20" y="85" width="60" height="8" rx="2" fill="#FFB300" />
        </svg>
      );
    case 31: // For Fan - Tooth
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M30 25 C30 15 70 15 70 25 C70 50 62 85 50 85 C38 85 30 50 30 25 Z" fill="#FFFFFF" stroke="#29B6F6" strokeWidth="4" />
          <circle cx="42" cy="40" r="3" fill="#212121" />
          <circle cx="58" cy="40" r="3" fill="#212121" />
          <path d="M44 52 Q50 60 56 52" stroke="#0288D1" strokeWidth="3" strokeLinecap="round" fill="none" />
          <polygon points="25,20 28,26 22,26" fill="#FFD54F" />
          <polygon points="75,20 78,26 72,26" fill="#FFD54F" />
        </svg>
      );
    case 32: // Phor Sam-phao - Junk Boat
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M15 65 Q50 88 85 65 L75 80 H25 Z" fill="#8D6E63" stroke="#4E342E" strokeWidth="3" />
          <line x1="50" y1="20" x2="50" y2="65" stroke="#4E342E" strokeWidth="4" />
          <path d="M50 20 L80 40 L50 55 Z" fill="#E53935" />
          <path d="M50 25 L25 42 L50 52 Z" fill="#FF7043" />
        </svg>
      );
    case 33: // Mor Ma - Horse
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M30 75 Q30 45 50 30 L70 25 Q80 35 70 50 L55 55 V75 Z" fill="#A1887F" />
          <polygon points="68,18 78,26 65,30" fill="#6D4C41" />
          <circle cx="62" cy="34" r="3" fill="#212121" />
          <path d="M48 28 C42 15 35 30 38 45" stroke="#4E342E" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 34: // Yor Yak - Giant
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <rect x="25" y="25" width="50" height="50" rx="12" fill="#66BB6A" stroke="#2E7D32" strokeWidth="3" />
          <circle cx="38" cy="42" r="6" fill="#FFF" />
          <circle cx="62" cy="42" r="6" fill="#FFF" />
          <circle cx="38" cy="42" r="3" fill="#E53935" />
          <circle cx="62" cy="42" r="3" fill="#E53935" />
          <path d="M38 60 Q50 68 62 60" stroke="#1B5E20" strokeWidth="3" fill="none" />
          <polygon points="36,58 39,52 42,58" fill="#FFF" />
          <polygon points="58,58 61,52 64,58" fill="#FFF" />
        </svg>
      );
    case 35: // Ror Ruea - Boat
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M10 50 Q30 80 85 55 L90 40 Q40 50 10 50 Z" fill="#FF7043" stroke="#D84315" strokeWidth="3" />
          <path d="M85 55 Q95 30 90 20" stroke="#FFCA28" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M10 80 Q50 95 90 80" stroke="#29B6F6" strokeWidth="4" fill="none" />
        </svg>
      );
    case 36: // Lor Ling - Monkey
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="48" r="24" fill="#8D6E63" />
          <circle cx="24" cy="44" r="10" fill="#8D6E63" />
          <circle cx="76" cy="44" r="10" fill="#8D6E63" />
          <circle cx="24" cy="44" r="6" fill="#D7CCC8" />
          <circle cx="76" cy="44" r="6" fill="#D7CCC8" />
          <ellipse cx="50" cy="54" rx="16" ry="12" fill="#D7CCC8" />
          <circle cx="42" cy="44" r="3" fill="#212121" />
          <circle cx="58" cy="44" r="3" fill="#212121" />
          <ellipse cx="50" cy="52" rx="4" ry="2.5" fill="#4E342E" />
          <path d="M44 58 Q50 64 56 58" stroke="#4E342E" strokeWidth="2" fill="none" />
        </svg>
      );
    case 37: // Wor Waen - Ring
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="58" r="26" stroke="#FFD54F" strokeWidth="8" fill="none" />
          <polygon points="50,18 64,32 50,42 36,32" fill="#29B6F6" stroke="#0288D1" strokeWidth="2" />
          <line x1="36" y1="32" x2="64" y2="32" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      );
    case 38: // Sor Sa-la - Gazebo
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M50 15 L88 45 H12 Z" fill="#E53935" stroke="#B71C1C" strokeWidth="3" />
          <rect x="22" y="45" width="8" height="40" fill="#8D6E63" />
          <rect x="70" y="45" width="8" height="40" fill="#8D6E63" />
          <rect x="15" y="85" width="70" height="8" rx="2" fill="#A1887F" />
        </svg>
      );
    case 39: // Sor Rue-si - Hermit
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="40" r="18" fill="#FFCC80" />
          <path d="M32 45 Q50 80 68 45 Z" fill="#ECEFF1" />
          <circle cx="44" cy="38" r="2.5" fill="#212121" />
          <circle cx="56" cy="38" r="2.5" fill="#212121" />
          <path d="M30 90 L50 55 L70 90 Z" fill="#FB8C00" stroke="#E65100" strokeWidth="2" />
        </svg>
      );
    case 40: // Sor Suea - Tiger
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="28" fill="#FF9800" />
          <polygon points="26,24 38,32 24,42" fill="#FF9800" />
          <polygon points="74,24 62,32 76,42" fill="#FF9800" />
          <circle cx="40" cy="45" r="3.5" fill="#212121" />
          <circle cx="60" cy="45" r="3.5" fill="#212121" />
          <polygon points="50,52 46,57 54,57" fill="#E53935" />
          <line x1="28" y1="50" x2="42" y2="52" stroke="#212121" strokeWidth="2" />
          <line x1="72" y1="50" x2="58" y2="52" stroke="#212121" strokeWidth="2" />
          <line x1="50" y1="24" x2="50" y2="34" stroke="#212121" strokeWidth="3" />
        </svg>
      );
    case 41: // Hor Hip - Chest
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <rect x="18" y="42" width="64" height="42" rx="4" fill="#8D6E63" stroke="#4E342E" strokeWidth="3" />
          <path d="M15 42 Q50 25 85 42 Z" fill="#A1887F" stroke="#4E342E" strokeWidth="3" />
          <rect x="44" y="48" width="12" height="16" rx="2" fill="#FFD54F" stroke="#FFA000" strokeWidth="2" />
          <circle cx="50" cy="54" r="2" fill="#212121" />
        </svg>
      );
    case 42: // Lor Chu-la - Kite
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <polygon points="50,12 80,48 50,88 20,48" fill="#E91E63" stroke="#C2185B" strokeWidth="3" />
          <line x1="50" y1="12" x2="50" y2="88" stroke="#FFF" strokeWidth="2" />
          <line x1="20" y1="48" x2="80" y2="48" stroke="#FFF" strokeWidth="2" />
          <path d="M50 88 Q65 95 80 90" stroke="#FFD54F" strokeWidth="3" fill="none" />
        </svg>
      );
    case 43: // Or Ang - Basin
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M18 45 L25 85 H75 L82 45 Z" fill="#80DEEA" stroke="#00ACC1" strokeWidth="3" />
          <ellipse cx="50" cy="45" rx="32" ry="10" fill="#B2EBF2" stroke="#00ACC1" strokeWidth="2" />
          <circle cx="40" cy="35" r="5" fill="#E0F7FA" stroke="#80DEEA" />
          <circle cx="55" cy="30" r="7" fill="#E0F7FA" stroke="#80DEEA" />
          <circle cx="66" cy="36" r="4" fill="#E0F7FA" stroke="#80DEEA" />
        </svg>
      );
    case 44: // Hor Nok-huk - Owl
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="55" rx="26" ry="30" fill="#7E57C2" />
          <circle cx="38" cy="44" r="10" fill="#FFF" />
          <circle cx="62" cy="44" r="10" fill="#FFF" />
          <circle cx="38" cy="44" r="4" fill="#212121" />
          <circle cx="62" cy="44" r="4" fill="#212121" />
          <polygon points="50,48 46,56 54,56" fill="#FFB300" />
          <path d="M30 24 Q36 35 44 32" stroke="#5E35B1" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M70 24 Q64 35 56 32" stroke="#5E35B1" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    default:
      return <div className="text-4xl">🇹🇭</div>;
  }
};

export const CONSONANTS = [
  {
    id: 1,
    char: "ก",
    name: "ก ไก่",
    phonetic: "Gor Kai",
    vocabThai: "ไก่",
    vocabEng: "Chicken",
    class: "mid",
    classNameThai: "อักษรกลาง",
    initial: "k / g",
    final: "k",
    obsolete: false,
    funFact: "The very first letter of the Thai alphabet! Notice it has no initial head loop.",
    tracingGuide: "Start from bottom left, draw up, form the beak curve to the right, arch over the top, and drop straight down."
  },
  {
    id: 2,
    char: "ข",
    name: "ข ไข่",
    phonetic: "Khor Khai",
    vocabThai: "ไข่",
    vocabEng: "Egg",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "kh",
    final: "k",
    obsolete: false,
    funFact: "High class consonant! Its initial head loop looks like a little egg shell.",
    tracingGuide: "Loop the head at the top left, curve down, make a sharp horizontal bottom, and pull straight up."
  },
  {
    id: 3,
    char: "ฃ",
    name: "ฃ ขวด",
    phonetic: "Khor Khuat",
    vocabThai: "ขวด",
    vocabEng: "Bottle",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "kh",
    final: "k",
    obsolete: true,
    funFact: "Obsolete letter! Has an indented cleft on top of its head. Replaced by ข in modern Thai.",
    tracingGuide: "Start with a notched head loop at top left, dip down, extend right, and go straight up."
  },
  {
    id: 4,
    char: "ค",
    name: "ค ควาย",
    phonetic: "Khor Khwai",
    vocabThai: "ควาย",
    vocabEng: "Water Buffalo",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "kh",
    final: "k",
    obsolete: false,
    funFact: "Extremely common Low class consonant. The head loop points outwards!",
    tracingGuide: "Circle the head loop outward, pull down to the bottom, arch high over to the right, and drop straight down."
  },
  {
    id: 5,
    char: "ฅ",
    name: "ฅ คน",
    phonetic: "Khor Khon",
    vocabThai: "คน",
    vocabEng: "Person",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "kh",
    final: "k",
    obsolete: true,
    funFact: "Obsolete letter! Replaced by ค in modern spellings.",
    tracingGuide: "Make an indented head loop facing outward, pull down, arch over the top, and line down."
  },
  {
    id: 6,
    char: "ฆ",
    name: "ฆ ระฆัง",
    phonetic: "Khor Ra-khang",
    vocabThai: "ระฆัง",
    vocabEng: "Temple Bell",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "kh",
    final: "k",
    obsolete: false,
    funFact: "Used in formal words of Sanskrit origin like temple bell (ระฆัง).",
    tracingGuide: "Start with a cleft head loop, curve down, form a bottom loop loop-the-loop, and pull straight up."
  },
  {
    id: 7,
    char: "ง",
    name: "ง งู",
    phonetic: "Ngo Ngu",
    vocabThai: "งู",
    vocabEng: "Snake",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "ng",
    final: "ng",
    obsolete: false,
    funFact: "Starts with the 'ng' sound like in 'siNGer'! Shaped like a slithering snake tail.",
    tracingGuide: "Circle head loop at top right, line straight down, then tail slash diagonally down left."
  },
  {
    id: 8,
    char: "จ",
    name: "จ จาน",
    phonetic: "Jor Jan",
    vocabThai: "จาน",
    vocabEng: "Plate",
    class: "mid",
    classNameThai: "อักษรกลาง",
    initial: "j / ch",
    final: "t",
    obsolete: false,
    funFact: "Mid class consonant. Looks like a spoon dipping into a plate!",
    tracingGuide: "Loop the head at top right, slant down left, then make a big round belly arching to the top right."
  },
  {
    id: 9,
    char: "ฉ",
    name: "ฉ ฉิ่ง",
    phonetic: "Chor Ching",
    vocabThai: "ฉิ่ง",
    vocabEng: "Cymbals",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "ch",
    final: "t",
    obsolete: false,
    funFact: "Represents brass Thai finger cymbals. Has a bottom loop knot!",
    tracingGuide: "Head loop inside top left, pull down, form a loop knot at bottom left, arch over top to right."
  },
  {
    id: 10,
    char: "ช",
    name: "ช ช้าง",
    phonetic: "Chor Chang",
    vocabThai: "ช้าง",
    vocabEng: "Elephant",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "ch",
    final: "t",
    obsolete: false,
    funFact: "The elephant letter! Looks like ข but has a tail flicking up like an trunk.",
    tracingGuide: "Make top head loop, curve down, line right, straight up, then flick a tail diagonally right."
  },
  {
    id: 11,
    char: "ซ",
    name: "ซ โซ่",
    phonetic: "Sor So",
    vocabThai: "โซ่",
    vocabEng: "Chain",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "s",
    final: "t",
    obsolete: false,
    funFact: "Identical to ช (elephant), but with a cleft notched head loop like a chain link!",
    tracingGuide: "Make a notched head loop at top, pull down, bottom right line, up, and tail flick."
  },
  {
    id: 12,
    char: "ฌ",
    name: "ฌ เฌอ",
    phonetic: "Chor Cher",
    vocabThai: "เฌอ",
    vocabEng: "Tree",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "ch",
    final: "t",
    obsolete: false,
    funFact: "'เฌอ' is an ancient Khmer word for tree. Combines shapes of พ and ณ!",
    tracingGuide: "Start with outer head loop, go up like a beak, drop down, loop inward at bottom, and line up."
  },
  {
    id: 13,
    char: "ญ",
    name: "ญ หญิง",
    phonetic: "Yor Ying",
    vocabThai: "หญิง",
    vocabEng: "Woman",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "y",
    final: "n",
    obsolete: false,
    funFact: "Has a small foot pedestal attached underneath that drops off when adding certain vowels!",
    tracingGuide: "Head loop top left, beak top, drop down, loop bottom, line up, plus a small bottom pedestal curve."
  },
  {
    id: 14,
    char: "ฎ",
    name: "ฎ ชฎา",
    phonetic: "Dor Cha-da",
    vocabThai: "ชฎา",
    vocabEng: "Headdress / Crown",
    class: "mid",
    classNameThai: "อักษรกลาง",
    initial: "d",
    final: "t",
    obsolete: false,
    funFact: "Represents the ornate Thai dance crown. Has 1 loop tail below the baseline.",
    tracingGuide: "Top head loop, arch over, drop straight down below baseline, and form 1 curly loop tail."
  },
  {
    id: 15,
    char: "ฏ",
    name: "ฏ ปฏัก",
    phonetic: "Tor Pa-tak",
    vocabThai: "ปฏัก",
    vocabEng: "Spear / Goad",
    class: "mid",
    classNameThai: "อักษรกลาง",
    initial: "t",
    final: "t",
    obsolete: false,
    funFact: "Looks almost like ฎ (crown), but has 2 loops on its tail below the line!",
    tracingGuide: "Top head loop, arch right, drop below baseline, make 2 zig-zag loops, and swoop up."
  },
  {
    id: 16,
    char: "ฐ",
    name: "ฐ ฐาน",
    phonetic: "Thor Than",
    vocabThai: "ฐาน",
    vocabEng: "Pedestal",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "th",
    final: "t",
    obsolete: false,
    funFact: "Sits atop a separate ornate pedestal drawn underneath!",
    tracingGuide: "Draw top main body like a arching hook, then draw the ornate double-loop pedestal underneath."
  },
  {
    id: 17,
    char: "ฑ",
    name: "ฑ มณโฑ",
    phonetic: "Thor Mon-tho",
    vocabThai: "มณโฑ",
    vocabEng: "Queen Montho",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "th",
    final: "t",
    obsolete: false,
    funFact: "Named after Queen Montho from the epic Ramakien. Has a notched head!",
    tracingGuide: "Notched head loop at top left, diagonal down right, slant up, and line straight down."
  },
  {
    id: 18,
    char: "ฒ",
    name: "ฒ ผู้เฒ่า",
    phonetic: "Thor Phu-thao",
    vocabThai: "ผู้เฒ่า",
    vocabEng: "Elder",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "th",
    final: "t",
    obsolete: false,
    funFact: "Represents a wise grandfather with a walking cane.",
    tracingGuide: "Start with outer head loop, slant down, top arch, drop down to form a bottom loop knot, and line up."
  },
  {
    id: 19,
    char: "ณ",
    name: "ณ เณร",
    phonetic: "Nor Nen",
    vocabThai: "เณร",
    vocabEng: "Novice Monk",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "n",
    final: "n",
    obsolete: false,
    funFact: "Represents a novice Buddhist monk in saffron robes.",
    tracingGuide: "Head loop top left, line down, bottom loop knot towards the middle, arch up, line down."
  },
  {
    id: 20,
    char: "ด",
    name: "ด เด็ก",
    phonetic: "Dor Dek",
    vocabThai: "เด็ก",
    vocabEng: "Child",
    class: "mid",
    classNameThai: "อักษรกลาง",
    initial: "d",
    final: "t",
    obsolete: false,
    funFact: "Very high frequency letter! Head loop points inside toward the child.",
    tracingGuide: "Head loop pointing inward at top, line down left, arch smooth roof over top right, line straight down."
  },
  {
    id: 21,
    char: "ต",
    name: "ต เต่า",
    phonetic: "Tor Tao",
    vocabThai: "เต่า",
    vocabEng: "Turtle",
    class: "mid",
    classNameThai: "อักษรกลาง",
    initial: "t",
    final: "t",
    obsolete: false,
    funFact: "Identical to ด (child), but with a dent on its roof like a bumpy turtle shell!",
    tracingGuide: "Inside head loop at top, line down left, make a notched dented roof over top, and drop straight down."
  },
  {
    id: 22,
    char: "ถ",
    name: "ถ ถุง",
    phonetic: "Thor Thung",
    vocabThai: "ถุง",
    vocabEng: "Bag",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "th",
    final: "t",
    obsolete: false,
    funFact: "Shaped like a pouch bag with an inward head loop handle.",
    tracingGuide: "Inward head loop at bottom left, line straight up, form top beak curve, drop straight down."
  },
  {
    id: 23,
    char: "ท",
    name: "ท ทหาร",
    phonetic: "Thor Tha-han",
    vocabThai: "ทหาร",
    vocabEng: "Soldier",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "th",
    final: "t",
    obsolete: false,
    funFact: "Stands tall and straight like a brave soldier!",
    tracingGuide: "Head loop top left pointing outward, drop down, slant up right, and drop straight down."
  },
  {
    id: 24,
    char: "ธ",
    name: "ธ ธง",
    phonetic: "Thor Thong",
    vocabThai: "ธง",
    vocabEng: "Flag",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "th",
    final: "t",
    obsolete: false,
    funFact: "Unique letter with NO head loop! Looks like a waving flag pole.",
    tracingGuide: "Start at top middle, draw left horizontal line, drop down, bottom horizontal right, and straight up."
  },
  {
    id: 25,
    char: "น",
    name: "น หนู",
    phonetic: "Nor Nu",
    vocabThai: "หนู",
    vocabEng: "Mouse",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "n",
    final: "n",
    obsolete: false,
    funFact: "Has a loop at the bottom right corner like a cute mouse tail!",
    tracingGuide: "Head loop top left, drop straight down, slant up to bottom right loop knot, pull straight up."
  },
  {
    id: 26,
    char: "บ",
    name: "บ ใบไม้",
    phonetic: "Bor Bai-mai",
    vocabThai: "ใบไม้",
    vocabEng: "Leaf",
    class: "mid",
    classNameThai: "อักษรกลาง",
    initial: "b",
    final: "p",
    obsolete: false,
    funFact: "Wide U-shape like a broad green leaf.",
    tracingGuide: "Head loop top left, line straight down, horizontal right, pull straight up to top line."
  },
  {
    id: 27,
    char: "ป",
    name: "ป ปลา",
    phonetic: "Por Pla",
    vocabThai: "ปลา",
    vocabEng: "Fish",
    class: "mid",
    classNameThai: "อักษรกลาง",
    initial: "p",
    final: "p",
    obsolete: false,
    funFact: "Same shape as บ (leaf), but with a tail fin extending high above!",
    tracingGuide: "Head loop top left, drop down, horizontal right, pull up high past the top line."
  },
  {
    id: 28,
    char: "ผ",
    name: "ผ ผึ้ง",
    phonetic: "Phor Phung",
    vocabThai: "ผึ้ง",
    vocabEng: "Bee",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "ph",
    final: "-",
    obsolete: false,
    funFact: "Inward head loop with a low middle V point like a buzzing bee!",
    tracingGuide: "Head loop inside top left, drop down, half V up, half V down, pull straight up."
  },
  {
    id: 29,
    char: "ฝ",
    name: "ฝ ฝา",
    phonetic: "For Fa",
    vocabThai: "ฝา",
    vocabEng: "Lid",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "f",
    final: "-",
    obsolete: false,
    funFact: "Same as ผ (bee), but with an extended right stem like a pot lid!",
    tracingGuide: "Head loop inside top left, drop down, half V up, half V down, pull high past top line."
  },
  {
    id: 30,
    char: "พ",
    name: "พ พาน",
    phonetic: "Phor Phan",
    vocabThai: "พาน",
    vocabEng: "Tray",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "ph",
    final: "p",
    obsolete: false,
    funFact: "Outward head loop with a full-height middle peak matching top line.",
    tracingGuide: "Head loop outside top left, drop down, full V up to top line, full V down, pull straight up."
  },
  {
    id: 31,
    char: "ฟ",
    name: "ฟ ฟัน",
    phonetic: "For Fan",
    vocabThai: "ฟัน",
    vocabEng: "Teeth",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "f",
    final: "p",
    obsolete: false,
    funFact: "Same as พ (tray), but with a high tail stick reaching up like a tall tooth!",
    tracingGuide: "Outward head loop top left, drop down, full V up, full V down, pull high past top line."
  },
  {
    id: 32,
    char: "ภ",
    name: "ภ สำเภา",
    phonetic: "Phor Sam-phao",
    vocabThai: "สำเภา",
    vocabEng: "Sailboat",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "ph",
    final: "p",
    obsolete: false,
    funFact: "Looks like ถ (bag) with an outward head loop, billowing like a sail!",
    tracingGuide: "Outward head loop bottom left, line straight up, form top beak curve, drop straight down."
  },
  {
    id: 33,
    char: "ม",
    name: "ม ม้า",
    phonetic: "Mor Ma",
    vocabThai: "ม้า",
    vocabEng: "Horse",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "m",
    final: "m",
    obsolete: false,
    funFact: "Front bottom loop crisscrosses like a galloping horse leg!",
    tracingGuide: "Head loop top left, line straight down, loop forward at bottom left, slant across right, pull up."
  },
  {
    id: 34,
    char: "ย",
    name: "ย ยักษ์",
    phonetic: "Yor Yak",
    vocabThai: "ยักษ์",
    vocabEng: "Giant",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "y",
    final: "y",
    obsolete: false,
    funFact: "Has a bumpy double curve nose like the Temple Guardian Giant (Yaksha)!",
    tracingGuide: "Head loop top left, bump out right, bump in left, line down, horizontal right, pull straight up."
  },
  {
    id: 35,
    char: "ร",
    name: "ร เรือ",
    phonetic: "Ror Ruea",
    vocabThai: "เรือ",
    vocabEng: "Boat",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "r",
    final: "n",
    obsolete: false,
    funFact: "Top wave curve like a longtail boat riding over ocean waves!",
    tracingGuide: "Head loop bottom left, line straight up, arch roof right, and flick a wave crest at top right."
  },
  {
    id: 36,
    char: "ล",
    name: "ล ลิง",
    phonetic: "Lor Ling",
    vocabThai: "ลิง",
    vocabEng: "Monkey",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "l",
    final: "n",
    obsolete: false,
    funFact: "Playful rounded letter like a cheeky monkey swinging on vines!",
    tracingGuide: "Head loop bottom left, curve up right, line down, arch over top right, drop straight down."
  },
  {
    id: 37,
    char: "ว",
    name: "ว แหวน",
    phonetic: "Wor Waen",
    vocabThai: "แหวน",
    vocabEng: "Ring",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "w",
    final: "w",
    obsolete: false,
    funFact: "Clean curved loop like a sparkling gemstone ring!",
    tracingGuide: "Head loop bottom left, curve up along the right side, and arch over top to left."
  },
  {
    id: 38,
    char: "ศ",
    name: "ศ ศาลา",
    phonetic: "Sor Sa-la",
    vocabThai: "ศาลา",
    vocabEng: "Pavilion",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "s",
    final: "t",
    obsolete: false,
    funFact: "Looks like ค (buffalo) with a little roof flag spire on top!",
    tracingGuide: "Outward head loop, drop down, arch over top, line down, then add a top flag stroke at top right."
  },
  {
    id: 39,
    char: "ษ",
    name: "ษ ฤๅษี",
    phonetic: "Sor Rue-si",
    vocabThai: "ฤๅษี",
    vocabEng: "Hermit",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "s",
    final: "t",
    obsolete: false,
    funFact: "Looks like บ (leaf) with a small inner loop like a forest sage's beard!",
    tracingGuide: "Head loop top left, line down, right, straight up, then draw an inner loop knot in the middle."
  },
  {
    id: 40,
    char: "ส",
    name: "ส เสือ",
    phonetic: "Sor Suea",
    vocabThai: "เสือ",
    vocabEng: "Tiger",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "s",
    final: "t",
    obsolete: false,
    funFact: "Same as ล (monkey), but with a sharp tiger tail sticking up on top right!",
    tracingGuide: "Head loop bottom left, curve up, drop down, arch top, drop down, add a top tail slash."
  },
  {
    id: 41,
    char: "ห",
    name: "ห หีบ",
    phonetic: "Hor Hip",
    vocabThai: "หีบ",
    vocabEng: "Chest",
    class: "high",
    classNameThai: "อักษรสูง",
    initial: "h",
    final: "-",
    obsolete: false,
    funFact: "Double loops like a lock on a wooden treasure chest! Also acts as silent tone modifier.",
    tracingGuide: "Head loop top left, line down, slant up to top right loop knot, drop straight down."
  },
  {
    id: 42,
    char: "ฬ",
    name: "ฬ จุฬา",
    phonetic: "Lor Chu-la",
    vocabThai: "จุฬา",
    vocabEng: "Kite",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "l",
    final: "n",
    obsolete: false,
    funFact: "Top curly loop flutters like a traditional Thai star kite soaring!",
    tracingGuide: "Head loop top left, drop down, full V up, full V down, line up high, loop-the-loop tail at top."
  },
  {
    id: 43,
    char: "อ",
    name: "อ อ่าง",
    phonetic: "Or Ang",
    vocabThai: "อ่าง",
    vocabEng: "Basin",
    class: "mid",
    classNameThai: "อักษรกลาง",
    initial: "silent glottal / vowel bearer",
    final: "-",
    obsolete: false,
    funFact: "The essential vowel bearer letter! Round like a water tub basin.",
    tracingGuide: "Head loop top left, drop down, horizontal bottom right, pull straight up, arch roof left."
  },
  {
    id: 44,
    char: "ฮ",
    name: "ฮ นกฮูก",
    phonetic: "Hor Nok-huk",
    vocabThai: "นกฮูก",
    vocabEng: "Owl",
    class: "low",
    classNameThai: "อักษรต่ำ",
    initial: "h",
    final: "-",
    obsolete: false,
    funFact: "The 44th and final Thai consonant! Looks like อ with a curly owl crown tuft top!",
    tracingGuide: "Head loop top left, drop down, bottom right, straight up, form top loop knot tuft."
  }
];
