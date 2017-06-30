// db: database of skill choices using the single-character
// keys used by the Battle.net calculator
// Base type is an array so it's easy to iterate; elements are
// objects containing a collection of strings and arrays.
var db = [{
    'tag': 'barbarian',
        'passive': 'aZbYcXdWeVfUgThSiRj',
        'active': ['abWg', 'ZcehQ', 'YXUi', 'dVSl', 'fRk', 'TjP'],
        'no_left': 'UidVfRKP',
        'only_one': '',
}, {
    'tag': 'crusader',
        'passive': 'aZbYcXdWeVfUgThSiR',
        'active': ['abWU', 'ZceSk', 'YXgR', 'dViP', 'fTj', 'hQlO'],
        'no_left': 'XgifTjQ',
        'only_one': 'fTj',
}, {
    'tag': 'demon-hunter',
        'passive': 'aZbYcXdWeVfUgThSiRj',
        'active': ['abWUg', 'ZceR', 'YXT', 'dVSj', 'fhkO', 'iQPl'],
        'no_left': 'YXTVSfO',
        'only_one': '',
}, {
    'tag': 'monk',
        'passive': 'aZbYcXdWeVfUgThSi',
        'active': ['abWU', 'Zce', 'YXgR', 'dVS', 'fTjP', 'hiQk'],
        'no_left': 'YXgRSjPhiQk',
        'only_one': 'hiQk',
}, {
    'tag': 'witch-doctor',
        'passive': 'aZbYcXdWeVfUgThSiRj',
        'active': ['abWS', 'Zceh', 'YXUi', 'dVj', 'fgRkl', 'TQP'],
        'no_left': 'XUid',
        'only_one': '',
}, {
    'tag': 'wizard',
        'passive': 'aZbYcXdWeVfUgThSiR',
        'active': ['abWU', 'ZceR', 'YXgQ', 'dViPl', 'fTSjO', 'hkmN'],
        'no_left': 'YXfTSjOh',
        'only_one': '',
}, ];
// en: US English text strings for skills, runes, etc.
// object keyed by the 'tags' from the db array entries.
// rurl is for the rune url identifier
var en = {
    'barbarian': {
        'name': 'Barbarian',
            'group': ['Primary', 'Secondary', 'Defensive', 'Might', 'Tactics', 'Rage'],
            'active': {
            'a': {
                'skill': 'Bash',
                    'rune': ['Frostbite', 'Onslaught', 'Punish', 'Instigation', 'Pulverize'],
                    'rurl': 'cabde',
            },
                'Z': {
                'skill': 'Hammer of the Ancients',
                    'rune': ['Rolling Thunder', 'Smash', 'The Devil\'s Anvil', 'Thunderstrike', 'Birthright'],
                    'rurl': 'baced',
            },
                'b': {
                'skill': 'Cleave',
                    'rune': ['Rupture', 'Reaping Swing', 'Scattering Blast', 'Broad Sweep', 'Gathering Storm'],
                    'rurl': 'edcab',
            },
                'Y': {
                'skill': 'Ground Stomp',
                    'rune': ['Deafening Crash', 'Wrenching Smash', 'Trembling Stomp', 'Foot of the Mountain', 'Jarring Slam'],
                    'rurl': 'ebadc',
            },
                'c': {
                'skill': 'Rend',
                    'rune': ['Ravage', 'Blood Lust', 'Lacerate', 'Mutilate', 'Bloodbath'],
                    'rurl': 'bdace',
            },
                'X': {
                'skill': 'Leap',
                    'rune': ['Iron Impact', 'Launch', 'Toppling Impact', 'Call of Arreat', 'Death from Above'],
                    'rurl': 'dcbae',
            },
                'd': {
                'skill': 'Overpower',
                    'rune': ['Storm of Steel', 'Killing Spree', 'Crushing Advance', 'Momentum', 'Revel'],
                    'rurl': 'baedc',
            },
                'W': {
                'skill': 'Frenzy',
                    'rune': ['Sidearm', 'Berserk', 'Vanguard', 'Smite', 'Maniac'],
                    'rurl': 'becda',
            },
                'e': {
                'skill': 'Seismic Slam',
                    'rune': ['Stagger', 'Shattered Ground', 'Rumble', 'Strength from Earth', 'Permafrost'],
                    'rurl': 'cabde',
            },
                'V': {
                'skill': 'Revenge',
                    'rune': ['Blood Law', 'Best Served Cold', 'Retribution', 'Grudge', 'Provocation'],
                    'rurl': 'deacb',
            },
                'f': {
                'skill': 'Threatening Shout',
                    'rune': ['Intimidate', 'Falter', 'Grim Harvest', 'Demoralize', 'Terrify'],
                    'rurl': 'bdcae',
            },
                'U': {
                'skill': 'Sprint',
                    'rune': ['Rush', 'Run Like the Wind', 'Marathon', 'Gangway', 'Forced March'],
                    'rurl': 'bcaed',
            },
                'g': {
                'skill': 'Weapon Throw',
                    'rune': ['Mighty Throw', 'Ricochet', 'Throwing Hammer', 'Stupefy', 'Balanced Weapon'],
                    'rurl': 'abced',
            },
                'T': {
                'skill': 'Earthquake',
                    'rune': ['Giant\'s Stride', 'Chilling Earth', 'The Mountain\'s Call', 'Molten Fury', 'Cave-In'],
                    'rurl': 'bcdae',
            },
                'h': {
                'skill': 'Whirlwind',
                    'rune': ['Dust Devils', 'Hurricane', 'Blood Funnel', 'Wind Shear', 'Volcanic Eruption'],
                    'rurl': 'bceda',
            },
                'S': {
                'skill': 'Furious Charge',
                    'rune': ['Battering Ram', 'Merciless Assault', 'Stamina', 'Cold Rush', 'Dreadnought'],
                    'rurl': 'aedcb',
            },
                'i': {
                'skill': 'Ignore Pain',
                    'rune': ['Bravado', 'Iron Hide', 'Ignorance is Bliss', 'Mob Rule', 'Contempt for Weakness'],
                    'rurl': 'dbeca',
            },
                'R': {
                'skill': 'Battle Rage',
                    'rune': ['Marauder\'s Rage', 'Ferocity', 'Swords to Ploughshares', 'Into the Fray', 'Bloodshed'],
                    'rurl': 'abcde',
            },
                'j': {
                'skill': 'Call of the Ancients',
                    'rune': ['The Council Rises', 'Duty to the Clan', 'Ancients\' Blessing', 'Ancients\' Fury', 'Together as One'],
                    'rurl': 'bdace',
            },
                'Q': {
                'skill': 'Ancient Spear',
                    'rune': ['Ranseur', 'Harpoon', 'Jagged Edge', 'Boulder Toss', 'Rage Flip'],
                    'rurl': 'dacbe',
            },
                'k': {
                'skill': 'War Cry',
                    'rune': ['Hardened Wrath', 'Charge!', 'Invigorate', 'Veteran\'s Warning', 'Impunity'],
                    'rurl': 'adebc',
            },
                'P': {
                'skill': 'Wrath of the Berserker',
                    'rune': ['Arreat\'s Wail', 'Insanity', 'Slaughter', 'Striding Giant', 'Thrive on Chaos'],
                    'rurl': 'baecd',
            },
                'l': {
                'skill': 'Avalanche',
                    'rune': ['Lahar', 'Snow-Capped Mountain', 'Tectonic Rift', 'Glacier', 'Volcano'],
                    'rurl': 'dbeac',
            },
        }, // end of 'active'
        'passive': {
            'a': 'Pound of Flesh',
                'Z': 'Ruthless',
                'b': 'Nerves of Steel',
                'Y': 'Weapons Master',
                'c': 'Inspiring Presence',
                'X': 'Berserker Rage',
                'd': 'Bloodthirst',
                'W': 'Animosity',
                'e': 'Superstition',
                'V': 'Tough as Nails',
                'f': 'No Escape',
                'U': 'Relentless',
                'g': 'Brawler',
                'T': 'Juggernaut',
                'h': 'Unforgiving',
                'S': 'Boon of Bul-Kathos',
                'i': 'Earthen Might',
                'R': 'Sword and Board',
                'j': 'Rampage',
        }, // end of 'passive'
    },
        'crusader': {
        'name': 'Crusader',
            'group': ['Primary', 'Secondary', 'Defensive', 'Utility', 'Laws', 'Conviction'],
            'active': {
            'a': {
                'skill': 'Punish',
                    'rune': ['Roar', 'Celerity', 'Rebirth', 'Retaliate', 'Fury'],
                    'rurl': 'dbcae',
            },
                'Z': {
                'skill': 'Shield Bash',
                    'rune': ['Shattered Shield', 'One on One', 'Shield Cross', 'Crumble', 'Pound'],
                    'rurl': 'becad',
            },
                'b': {
                'skill': 'Slash',
                    'rune': ['Electrify', 'Carve', 'Crush', 'Zeal', 'Guard'],
                    'rurl': 'bdcae',
            },
                'Y': {
                'skill': 'Shield Glare',
                    'rune': ['Divine Verdict', 'Uncertainty', 'Zealous Glare', 'Emblazoned Shield', 'Subdue'],
                    'rurl': 'abdce',
            },
                'c': {
                'skill': 'Sweep Attack',
                    'rune': ['Blazing Sweep', 'Trip Attack', 'Holy Shock', 'Gathering Sweep', 'Inspiring Sweep'],
                    'rurl': 'bdcae',
            },
                'X': {
                'skill': 'Iron Skin',
                    'rune': ['Reflective Skin', 'Steel Skin', 'Explosive Skin', 'Charged Up', 'Flash'],
                    'rurl': 'dbcae',
            },
                'd': {
                'skill': 'Provoke',
                    'rune': ['Cleanse', 'Flee Fool', 'Too Scared to Run', 'Charged Up', 'Hit Me'],
                    'rurl': 'abcde',
            },
                'W': {
                'skill': 'Smite',
                    'rune': ['Shatter', 'Shackle', 'Surge', 'Reaping', 'Shared Fate'],
                    'rurl': 'cbeda',
            },
                'e': {
                'skill': 'Blessed Hammer',
                    'rune': ['Burning Wrath', 'Thunderstruck', 'Limitless', 'Brute Force', 'Dominion'],
                    'rurl': 'abcde',
            },
                'V': {
                'skill': 'Steed Charge',
                    'rune': ['Spiked Barding', 'Nightmare', 'Rejuvenation', 'Endurance', 'Draw and Quarter'],
                    'rurl': 'adcbe',
            },
                'f': {
                'skill': 'Laws of Valor',
                    'rune': ['Invincible', 'Frozen in Terror', 'Critical', 'Unstoppable Force', 'Answered Prayer'],
                    'rurl': 'abcde',
            },
                'U': {
                'skill': 'Justice',
                    'rune': ['Burst', 'Crack', 'Hammer of Pursuit', 'Sword of Justice', 'Holy Bolt'],
                    'rurl': 'dbcae',
            },
                'g': {
                'skill': 'Consecration',
                    'rune': ['Bathed in Light', 'Bed of Nails', 'Aegis Purgatory', 'Shattered Ground', 'Fearful'],
                    'rurl': 'cbade',
            },
                'T': {
                'skill': 'Laws of Justice',
                    'rune': ['Protect the Innocent', 'Immovable Object', 'Faith\'s Armor', 'Decaying Strength', 'Bravery'],
                    'rurl': 'abcde',
            },
                'h': {
                'skill': 'Falling Sword',
                    'rune': ['Superheated', 'Part the Clouds', 'Rise Brothers', 'Rapid Descent', 'Flurry'],
                    'rurl': 'abcde',
            },
                'S': {
                'skill': 'Blessed Shield',
                    'rune': ['Staggering Shield', 'Combust', 'Divine Aegis', 'Shattering Throw', 'Piercing Shield'],
                    'rurl': 'abcde',
            },
                'i': {
                'skill': 'Condemn',
                    'rune': ['Vacuum', 'Unleashed', 'Eternal Retaliation', 'Shattering Explosion', 'Reciprocate'],
                    'rurl': 'becda',
            },
                'R': {
                'skill': 'Judgment',
                    'rune': ['Penitence', 'Mass Verdict', 'Deliberation', 'Resolved', 'Debilitate'],
                    'rurl': 'abcde',
            },
                'j': {
                'skill': 'Laws of Hope',
                    'rune': ['Wings of Angels', 'Eternal Hope', 'Hopeful Cry', 'Faith\'s Reward', 'Promise of Faith'],
                    'rurl': 'abcde',
            },
                'Q': {
                'skill': 'Akarat\'s Champion',
                    'rune': ['Fire Starter', 'Embodiment of Power', 'Rally', 'Prophet', 'Hasteful'],
                    'rurl': 'abcde',
            },
                'k': {
                'skill': 'Fist of the Heavens',
                    'rune': ['Divine Well', 'Heaven\'s Tempest', 'Fissure', 'Reverberation', 'Retribution'],
                    'rurl': 'dacbe',
            },
                'P': {
                'skill': 'Phalanx',
                    'rune': ['Bowmen', 'Shield Charge', 'Stampede', 'Shield Bearers', 'Bodyguard'],
                    'rurl': 'abcde',
            },
                'l': {
                'skill': 'Heaven\'s Fury',
                    'rune': ['Blessed Ground', 'Ascendancy', 'Split Fury', 'Thou Shalt Not Pass', 'Fires of Heaven'],
                    'rurl': 'bacde',
            },
                'O': {
                'skill': 'Bombardment',
                    'rune': ['Barrels of Spikes', 'Annihilate', 'Mine Field', 'Impactful Bombardment', 'Targeted'],
                    'rurl': 'abcde',
            },
        }, // end of 'active' 
        'passive': {
            'a': 'Heavenly Strength',
                'Z': 'Fervor',
                'b': 'Vigilant',
                'Y': 'Righteousness',
                'c': 'Insurmountable',
                'X': 'Fanaticism',
                'd': 'Indestructible',
                'W': 'Holy Cause',
                'e': 'Wrathful',
                'V': 'Divine Fortress',
                'f': 'Lord Commander',
                'U': 'Hold Your Ground',
                'g': 'Long Arm of the Law',
                'T': 'Iron Maiden',
                'h': 'Renewal',
                'S': 'Finery',
                'i': 'Blunt',
                'R': 'Towering Shield',
        }, // end of 'passive'
    },
        'demon-hunter': {
        'name': 'Demon Hunter',
            'group': ['Primary', 'Secondary', 'Defensive', 'Hunting', 'Devices', 'Archery'],
            'active': {
            'a': {
                'skill': 'Hungering Arrow',
                    'rune': ['Puncturing Arrow', 'Serrated Arrow', 'Shatter Shot', 'Devouring Arrow', 'Spray of Teeth'],
                    'rurl': 'dabce',
            },
                'Z': {
                'skill': 'Impale',
                    'rune': ['Impact', 'Chemical Burn', 'Overpenetration', 'Ricochet', 'Grievous Wounds'],
                    'rurl': 'bcade',
            },
                'b': {
                'skill': 'Entangling Shot',
                    'rune': ['Chain Gang', 'Shock Collar', 'Heavy Burden', 'Justice is Served', 'Bounty Hunter'],
                    'rurl': 'bcade',
            },
                'Y': {
                'skill': 'Caltrops',
                    'rune': ['Hooked Spines', 'Torturous Ground', 'Jagged Spikes', 'Carved Stakes', 'Bait the Trap'],
                    'rurl': 'bcade',
            },
                'c': {
                'skill': 'Rapid Fire',
                    'rune': ['Withering Fire', 'Frost Shots', 'Fire Support', 'High Velocity', 'Bombardment'],
                    'rurl': 'decba',
            },
                'X': {
                'skill': 'Smoke Screen',
                    'rune': ['Displacement', 'Lingering Fog', 'Healing Vapors', 'Special Recipe', 'Vanishing Powder'],
                    'rurl': 'ebcda',
            },
                'd': {
                'skill': 'Vault',
                    'rune': ['Action Shot', 'Rattling Roll', 'Tumble', 'Acrobatics', 'Trail of Cinders'],
                    'rurl': 'cedba',
            },
                'W': {
                'skill': 'Bolas',
                    'rune': ['Volatile Explosives', 'Thunder Ball', 'Freezing Strike', 'Bitter Pill', 'Imminent Doom'],
                    'rurl': 'acbde',
            },
                'e': {
                'skill': 'Chakram',
                    'rune': ['Twin Chakrams', 'Serpentine', 'Razor Disk', 'Boomerang', 'Shuriken Cloud'],
                    'rurl': 'acdbe',
            },
                'V': {
                'skill': 'Preparation',
                    'rune': ['Invigoration', 'Punishment', 'Battle Scars', 'Focused Mind', 'Backup Plan'],
                    'rurl': 'badce',
            },
                'f': {
                'skill': 'Fan of Knives',
                    'rune': ['Pinpoint Accuracy', 'Bladed Armor', 'Knives Expert', 'Fan of Daggers', 'Assassin\'s Knives'],
                    'rurl': 'deacb',
            },
                'U': {
                'skill': 'Evasive Fire',
                    'rune': ['Hardened', 'Parting Gift', 'Covering Fire', 'Focus', 'Surge'],
                    'rurl': 'acbed',
            },
                'g': {
                'skill': 'Grenade',
                    'rune': ['Tinkerer', 'Cluster Grenades', 'Grenade Cache', 'Stun Grenade', 'Cold Grenade'],
                    'rurl': 'dbcea',
            },
                'T': {
                'skill': 'Shadow Power',
                    'rune': ['Night Bane', 'Blood Moon', 'Well of Darkness', 'Gloom', 'Shadow Glide'],
                    'rurl': 'aedcb',
            },
                'h': {
                'skill': 'Spike Trap',
                    'rune': ['Echoing Blast', 'Sticky Trap', 'Long Fuse', 'Lightning Rod', 'Scatter'],
                    'rurl': 'bcaed',
            },
                'S': {
                'skill': 'Companion',
                    'rune': ['Spider Companion', 'Bat Companion', 'Boar Companion', 'Ferret Companion', 'Wolf Companion'],
                    'rurl': 'adbec',
            },
                'i': {
                'skill': 'Strafe',
                    'rune': ['Icy Trail', 'Drifting Shadow', 'Stinging Steel', 'Rocket Storm', 'Demolition'],
                    'rurl': 'bdeca',
            },
                'R': {
                'skill': 'Elemental Arrow',
                    'rune': ['Ball Lightning', 'Frost Arrow', 'Immolation Arrow', 'Lightning Bolts', 'Nether Tentacles'],
                    'rurl': 'baced',
            },
                'j': {
                'skill': 'Marked for Death',
                    'rune': ['Contagion', 'Valley of Death', 'Grim Reaper', 'Mortal Enemy', 'Death Toll'],
                    'rurl': 'bcade',
            },
                'Q': {
                'skill': 'Multishot',
                    'rune': ['Fire at Will', 'Wind Chill', 'Suppression Fire', 'Full Broadside', 'Arsenal'],
                    'rurl': 'dbeac',
            },
                'k': {
                'skill': 'Sentry',
                    'rune': ['Spitfire Turret', 'Impaling Bolt', 'Chain of Torment', 'Polar Station', 'Guardian Turret'],
                    'rurl': 'cbade',
            },
                'P': {
                'skill': 'Cluster Arrow',
                    'rune': ['Dazzling Arrow', 'Shooting Stars', 'Maelstrom', 'Cluster Bombs', 'Loaded for Bear'],
                    'rurl': 'ebdca',
            },
                'l': {
                'skill': 'Rain of Vengeance',
                    'rune': ['Dark Cloud', 'Shade', 'Stampede', 'Anathema', 'Flying Strike'],
                    'rurl': 'baecd',
            },
                'O': {
                'skill': 'Vengeance',
                    'rune': ['Personal Mortar', 'Dark Heart', 'Side Cannons', 'Seethe', 'From the Shadows'],
                    'rurl': 'cbdea',
            },
        }, // end of 'active' 
        'passive': {
            'a': 'Thrill of the Hunt',
                'Z': 'Tactical Advantage',
                'b': 'Blood Vengeance',
                'Y': 'Steady Aim',
                'c': 'Cull the Weak',
                'X': 'Night Stalker',
                'd': 'Brooding',
                'W': 'Hot Pursuit',
                'e': 'Archery',
                'V': 'Numbing Traps',
                'f': 'Perfectionist',
                'U': 'Custom Engineering',
                'g': 'Grenadier',
                'T': 'Sharpshooter',
                'h': 'Ballistics',
                'S': 'Leech',
                'i': 'Ambush',
                'R': 'Awareness',
                'j': 'Single Out',
        }, // end of 'passive'
    },
        'monk': {
        'name': 'Monk',
            'group': ['Primary', 'Secondary', 'Defensive', 'Techniques', 'Focus', 'Mantras'],
            'active': {
            'a': {
                'skill': 'Fists of Thunder',
                    'rune': ['Thunderclap', 'Wind Blast', 'Static Charge', 'Quickening', 'Bounding Light'],
                    'rurl': 'aecdb',
            },
                'Z': {
                'skill': 'Lashing Tail Kick',
                    'rune': ['Vulture Claw Kick', 'Sweeping Armada', 'Spinning Flame Kick', 'Scorpion Sting', 'Hand of Ytar'],
                    'rurl': 'adbec',
            },
                'b': {
                'skill': 'Deadly Reach',
                    'rune': ['Piercing Trident', 'Searing Grasp', 'Scattered Blows', 'Strike from Beyond', 'Foresight'],
                    'rurl': 'becda',
            },
                'Y': {
                'skill': 'Blinding Flash',
                    'rune': ['Self Reflection', 'Mystifying Light', 'Replenishing Light', 'Crippling Light', 'Faith in the Light'],
                    'rurl': 'dcbea',
            },
                'c': {
                'skill': 'Tempest Rush',
                    'rune': ['Northern Breeze', 'Tailwind', 'Flurry', 'Electric Field', 'Bluster'],
                    'rurl': 'dbeca',
            },
                'X': {
                'skill': 'Breath of Heaven',
                    'rune': ['Circle of Scorn', 'Circle of Life', 'Blazing Wrath', 'Infused with Light', 'Zephyr'],
                    'rurl': 'abcde',
            },
                'd': {
                'skill': 'Dashing Strike',
                    'rune': ['Way of the Falling Star', 'Blinding Speed', 'Quicksilver', 'Radiance', 'Barrage'],
                    'rurl': 'bcdea',
            },
                'W': {
                'skill': 'Crippling Wave',
                    'rune': ['Mangle', 'Concussion', 'Rising Tide', 'Tsunami', 'Breaking Wave'],
                    'rurl': 'acdbe',
            },
                'e': {
                'skill': 'Wave of Light',
                    'rune': ['Wall of Light', 'Explosive Light', 'Empowered Wave', 'Shattering Light', 'Pillar of the Ancients'],
                    'rurl': 'abdec',
            },
                'V': {
                'skill': 'Exploding Palm',
                    'rune': ['The Flesh is Weak', 'Strong Spirit', 'Shocking Grasp', 'Impending Doom', 'Essence Burn'],
                    'rurl': 'cdabe',
            },
                'f': {
                'skill': 'Cyclone Strike',
                    'rune': ['Eye of the Storm', 'Implosion', 'Sunburst', 'Wall of Wind', 'Soothing Breeze'],
                    'rurl': 'dbaec',
            },
                'U': {
                'skill': 'Way of the Hundred Fists',
                    'rune': ['Hands of Lightning', 'Blazing Fists', 'Fists of Fury', 'Assimilation', 'Windforce Flurry'],
                    'rurl': 'bcade',
            },
                'g': {
                'skill': 'Serenity',
                    'rune': ['Peaceful Repose', 'Unwelcome Disturbance', 'Tranquility', 'Ascension', 'Instant Karma'],
                    'rurl': 'aedcb',
            },
                'T': {
                'skill': 'Seven-Sided Strike',
                    'rune': ['Sudden Assault', 'Incinerate', 'Pandemonium', 'Sustained Attack', 'Fulminating Onslaught'],
                    'rurl': 'abcde',
            },
                'h': {
                'skill': 'Mantra of Salvation',
                    'rune': ['Agility', 'Divine Protection', 'Hard Target', 'Perseverance', 'Wind through the Reeds'],
                    'rurl': 'aecbd',
            },
                'S': {
                'skill': 'Sweeping Wind',
                    'rune': ['Master of Wind', 'Blade Storm', 'Fire Storm', 'Inner Storm', 'Cyclone'],
                    'rurl': 'eabdc',
            },
                'i': {
                'skill': 'Mantra of Retribution',
                    'rune': ['Retaliation', 'Transgression', 'Indignation', 'Against All Odds', 'Collateral Damage'],
                    'rurl': 'abcde',
            },
                'R': {
                'skill': 'Inner Sanctuary',
                    'rune': ['Sanctified Ground', 'Safe Haven', 'Temple of Protection', 'Intervene', 'Forbidden Palace'],
                    'rurl': 'bdcae',
            },
                'j': {
                'skill': 'Mystic Ally',
                    'rune': ['Water Ally', 'Fire Ally', 'Air Ally', 'Enduring Ally', 'Earth Ally'],
                    'rurl': 'badec',
            },
                'Q': {
                'skill': 'Mantra of Healing',
                    'rune': ['Sustenance', 'Circular Breathing', 'Boon of Inspiration', 'Heavenly Body', 'Time of Need'],
                    'rurl': 'adbce',
            },
                'k': {
                'skill': 'Mantra of Conviction',
                    'rune': ['Overawe', 'Intimidation', 'Dishearten', 'Annihilation', 'Submission'],
                    'rurl': 'aecdb',
            },
                'P': {
                'skill': 'Epiphany',
                    'rune': ['Desert Shroud', 'Ascendance', 'Soothing Mist', 'Insight', 'Inner Fire'],
                    'rurl': 'aebcd',
            },
        }, // end of 'active' 
        'passive': {
            'a': 'Resolve',
                'Z': 'Fleet Footed',
                'b': 'Exalted Soul',
                'Y': 'Transcendence',
                'c': 'Chant of Resonance',
                'X': 'Seize the Initiative',
                'd': 'The Guardian\'s Path',
                'W': 'Sixth Sense',
                'e': 'Determination',
                'V': 'Relentless Assault',
                'f': 'Beacon of Ytar',
                'U': 'Alacrity',
                'g': 'Harmony',
                'T': 'Combination Strike',
                'h': 'Near Death Experience',
                'S': 'Unity',
                'i': 'Momentum',
                'R': 'Mythic Rhythm',
        }, // end of 'passive'
    },
        'witch-doctor': {
        'name': 'Witch Doctor',
            'group': ['Primary', 'Secondary', 'Defensive', 'Terror', 'Decay', 'Voodoo'],
            'active': {
            'a': {
                'skill': 'Poison Dart',
                    'rune': ['Splinters', 'Numbing Dart', 'Spined Dart', 'Flaming Dart', 'Snake to the Face'],
                    'rurl': 'bcdae',
            },
                'Z': {
                'skill': 'Grasp of the Dead',
                    'rune': ['Unbreakable Grasp', 'Groping Eels', 'Death Is Life', 'Desperate Grasp', 'Rain of Corpses'],
                    'rurl': 'caedb',
            },
                'b': {
                'skill': 'Corpse Spiders',
                    'rune': ['Leaping Spiders', 'Spider Queen', 'Widowmakers', 'Medusa Spiders', 'Blazing Spiders'],
                    'rurl': 'cbdea',
            },
                'Y': {
                'skill': 'Summon Zombie Dogs',
                    'rune': ['Rabid Dogs', 'Chilled to the Bone', 'Life Link', 'Burning Dogs', 'Leeching Beasts'],
                    'rurl': 'cdbae',
            },
                'c': {
                'skill': 'Firebats',
                    'rune': ['Dire Bats', 'Vampire Bats', 'Plague Bats', 'Hungry Bats', 'Cloud of Bats'],
                    'rurl': 'adcbe',
            },
                'X': {
                'skill': 'Horrify',
                    'rune': ['Phobia', 'Stalker', 'Face of Death', 'Frightening Aspect', 'Ruthless Terror'],
                    'rurl': 'cebad',
            },
                'd': {
                'skill': 'Soul Harvest',
                    'rune': ['Swallow Your Soul', 'Siphon', 'Languish', 'Soul to Waste', 'Vengeful Spirit'],
                    'rurl': 'dacbe',
            },
                'W': {
                'skill': 'Plague of Toads',
                    'rune': ['Explosive Toads', 'Piercing Toads', 'Rain of Toads', 'Addling Toads', 'Toad Affinity'],
                    'rurl': 'acbed',
            },
                'e': {
                'skill': 'Haunt',
                    'rune': ['Consuming Spirit', 'Resentful Spirits', 'Lingering Spirit', 'Poisoned Spirit', 'Draining Spirit'],
                    'rurl': 'aebcd',
            },
                'V': {
                'skill': 'Sacrifice',
                    'rune': ['Black Blood', 'Next of Kin', 'Pride', 'For the Master', 'Provoke the Pack'],
                    'rurl': 'cedba',
            },
                'f': {
                'skill': 'Zombie Charger',
                    'rune': ['Pile On', 'Undeath', 'Lumbering Cold', 'Explosive Beast', 'Zombie Bears'],
                    'rurl': 'cdbea',
            },
                'U': {
                'skill': 'Spirit Walk',
                    'rune': ['Jaunt', 'Honored Guest', 'Umbral Shock', 'Severance', 'Healing Journey'],
                    'rurl': 'bdcae',
            },
                'g': {
                'skill': 'Spirit Barrage',
                    'rune': ['The Spirit Is Willing', 'Well of Souls', 'Phantasm', 'Phlebotomize', 'Manitou'],
                    'rurl': 'dbcae',
            },
                'T': {
                'skill': 'Gargantuan',
                    'rune': ['Humongoid', 'Restless Giant', 'Wrathful Protector', 'Big Stinker', 'Bruiser'],
                    'rurl': 'badce',
            },
                'h': {
                'skill': 'Locust Swarm',
                    'rune': ['Pestilence', 'Devouring Swarm', 'Cloud of Insects', 'Diseased Swarm', 'Searing Locusts'],
                    'rurl': 'bdcea',
            },
                'S': {
                'skill': 'Firebomb',
                    'rune': ['Flash Fire', 'Roll the Bones', 'Fire Pit', 'Pyrogeist', 'Ghost Bomb'],
                    'rurl': 'ebcda',
            },
                'i': {
                'skill': 'Hex',
                    'rune': ['Hedge Magic', 'Jinx', 'Angry Chicken', 'Toad of Hugeness', 'Unstable Form'],
                    'rurl': 'debac',
            },
                'R': {
                'skill': 'Acid Cloud',
                    'rune': ['Acid Rain', 'Lob Blob Bomb', 'Slow Burn', 'Kiss of Death', 'Corpse Bomb'],
                    'rurl': 'bcdea',
            },
                'j': {
                'skill': 'Mass Confusion',
                    'rune': ['Unstable Realm', 'Devolution', 'Mass Hysteria', 'Paranoia', 'Mass Hallucination'],
                    'rurl': 'debac',
            },
                'Q': {
                'skill': 'Big Bad Voodoo',
                    'rune': ['Jungle Drums', 'Rain Dance', 'Slam Dance', 'Ghost Trance', 'Boogie Man'],
                    'rurl': 'bdace',
            },
                'k': {
                'skill': 'Wall of Death',
                    'rune': ['Ring of Poison', 'Wall of Zombies', 'Surrounded by Death', 'Fire Wall', 'Communing with Spirits'],
                    'rurl': 'bdaec',
            },
                'P': {
                'skill': 'Fetish Army',
                    'rune': ['Fetish Ambush', 'Devoted Following', 'Legion of Daggers', 'Tiki Torchers', 'Head Hunters'],
                    'rurl': 'adbce',
            },
                'l': {
                'skill': 'Piranhas',
                    'rune': ['Bogadile', 'Zombie Piranhas', 'Piranhado', 'Wave of Mutilation', 'Frozen Piranhas'],
                    'rurl': 'abcde',
            },
        }, // end of 'active' 
        'passive': {
            'a': 'Jungle Fortitude',
                'Z': 'Circle of Life',
                'b': 'Spiritual Attunement',
                'Y': 'Gruesome Feast',
                'c': 'Blood Ritual',
                'X': 'Bad Medicine',
                'd': 'Zombie Handler',
                'W': 'Pierce the Veil',
                'e': 'Spirit Vessel',
                'V': 'Fetish Sycophants',
                'f': 'Rush of Essence',
                'U': 'Vision Quest',
                'g': 'Fierce Loyalty',
                'T': 'Grave Injustice',
                'h': 'Tribal Rites',
                'S': 'Confidence Ritual',
                'i': 'Creeping Death',
                'R': 'Swampland Attunement',
                'j': 'Midnight Feast',
        }, // end of 'passive'
    },
        'wizard': {
        'name': 'Wizard',
            'group': ['Primary', 'Secondary', 'Defensive', 'Force', 'Conjuration', 'Mastery'],
            'active': {
            'a': {
                'skill': 'Magic Missile',
                    'rune': ['Charged Blast', 'Glacial Spike', 'Split', 'Seeker', 'Conflagrate'],
                    'rurl': 'adbec',
            },
                'Z': {
                'skill': 'Ray of Frost',
                    'rune': ['Cold Blood', 'Numb', 'Black Ice', 'Sleet Storm', 'Snow Blast'],
                    'rurl': 'dceba',
            },
                'b': {
                'skill': 'Shock Pulse',
                    'rune': ['Explosive Bolts', 'Fire Bolts', 'Piercing Orb', 'Power Affinity', 'Living Lightning'],
                    'rurl': 'eacdb',
            },
                'Y': {
                'skill': 'Frost Nova',
                    'rune': ['Shatter', 'Cold Snap', 'Frozen Mist', 'Deep Freeze', 'Bone Chill'],
                    'rurl': 'bdcea',
            },
                'c': {
                'skill': 'Arcane Orb',
                    'rune': ['Obliteration', 'Arcane Orbit', 'Spark', 'Scorch', 'Frozen Orb'],
                    'rurl': 'acbde',
            },
                'X': {
                'skill': 'Diamond Skin',
                    'rune': ['Crystal Shell', 'Prism', 'Sleek Shell', 'Enduring Skin', 'Diamond Shards'],
                    'rurl': 'cdabe',
            },
                'd': {
                'skill': 'Wave of Force',
                    'rune': ['Impactful Wave', 'Debilitating Force', 'Arcane Attunement', 'Static Pulse', 'Heat Wave'],
                    'rurl': 'aedbc',
            },
                'W': {
                'skill': 'Spectral Blade',
                    'rune': ['Flame Blades', 'Siphoning Blade', 'Thrown Blade', 'Barrier Blades', 'Ice Blades'],
                    'rurl': 'adbec',
            },
                'e': {
                'skill': 'Arcane Torrent',
                    'rune': ['Flame Ward', 'Death Blossom', 'Arcane Mines', 'Static Discharge', 'Cascade'],
                    'rurl': 'aecdb',
            },
                'V': {
                'skill': 'Energy Twister',
                    'rune': ['Mistral Breeze', 'Gale Force', 'Raging Storm', 'Wicked Wind', 'Storm Chaser'],
                    'rurl': 'dabec',
            },
                'f': {
                'skill': 'Ice Armor',
                    'rune': ['Chilling Aura', 'Crystallize', 'Jagged Ice', 'Ice Reflect', 'Frozen Storm'],
                    'rurl': 'bdaec',
            },
                'U': {
                'skill': 'Electrocute',
                    'rune': ['Chain Lightning', 'Forked Lightning', 'Lightning Blast', 'Surge of Power', 'Arc Lightning'],
                    'rurl': 'beadc',
            },
                'g': {
                'skill': 'Slow Time',
                    'rune': ['Time Shell', 'Exhaustion', 'Time Warp', 'Point of No Return', 'Stretch Time'],
                    'rurl': 'cdabe',
            },
                'T': {
                'skill': 'Storm Armor',
                    'rune': ['Reactive Armor', 'Power of the Storm', 'Thunder Storm', 'Scramble', 'Shocking Aspect'],
                    'rurl': 'cdabe',
            },
                'h': {
                'skill': 'Explosive Blast',
                    'rune': ['Unleashed', 'Flash', 'Short Fuse', 'Obliterate', 'Chain Reaction'],
                    'rurl': 'dcabe',
            },
                'S': {
                'skill': 'Magic Weapon',
                    'rune': ['Electrify', 'Force Weapon', 'Conduit', 'Ignite', 'Deflection'],
                    'rurl': 'bcdae',
            },
                'i': {
                'skill': 'Hydra',
                    'rune': ['Arcane Hydra', 'Lightning Hydra', 'Blazing Hydra', 'Frost Hydra', 'Mammoth Hydra'],
                    'rurl': 'ebcad',
            },
                'R': {
                'skill': 'Disintegrate',
                    'rune': ['Convergence', 'Volatility', 'Entropy', 'Chaos Nexus', 'Intensify'],
                    'rurl': 'becda',
            },
                'j': {
                'skill': 'Familiar',
                    'rune': ['Sparkflint', 'Icicle', 'Ancient Guardian', 'Arcanot', 'Cannoneer'],
                    'rurl': 'acedb',
            },
                'Q': {
                'skill': 'Teleport',
                    'rune': ['Safe Passage', 'Wormhole', 'Reversal', 'Fracture', 'Calamity'],
                    'rurl': 'cedba',
            },
                'k': {
                'skill': 'Mirror Image',
                    'rune': ['Simulacrum', 'Duplicates', 'Mocking Demise', 'Extension of Will', 'Mirror Mimics'],
                    'rurl': 'cbeda',
            },
                'P': {
                'skill': 'Meteor',
                    'rune': ['Thunder Crash', 'Star Pact', 'Comet', 'Meteor Shower', 'Molten Impact'],
                    'rurl': 'edcba',
            },
                'l': {
                'skill': 'Blizzard',
                    'rune': ['Lightning Storm', 'Frozen Solid', 'Snowbound', 'Apocalypse', 'Unrelenting Storm'],
                    'rurl': 'cedba',
            },
                'O': {
                'skill': 'Energy Armor',
                    'rune': ['Absorption', 'Pinpoint Barrier', 'Energy Tap', 'Force Armor', 'Prismatic Armor'],
                    'rurl': 'debca',
            },
                'm': {
                'skill': 'Archon',
                    'rune': ['Combustion', 'Teleport', 'Pure Power', 'Slow Time', 'Improved Archon'],
                    'rurl': 'ecdba',
            },
                'N': {
                'skill': 'Black Hole',
                    'rune': ['Supermassive', 'Absolute Zero', 'Event Horizon', 'Blazar', 'Spellsteal'],
                    'rurl': 'aebcd',
            },
        }, // end of 'active' 
        'passive': {
            'a': 'Power Hungry',
                'Z': 'Blur',
                'b': 'Evocation',
                'Y': 'Glass Cannon',
                'c': 'Prodigy',
                'X': 'Astral Presence',
                'd': 'Illusionist',
                'W': 'Cold Blooded',
                'e': 'Conflagration',
                'V': 'Paralysis',
                'f': 'Galvanizing Ward',
                'U': 'Temporal Flux',
                'g': 'Dominance',
                'T': 'Arcane Dynamo',
                'h': 'Unstable Anomaly',
                'S': 'Unwavering Will',
                'i': 'Audacity',
                'R': 'Elemental Exposure',
        }, // end of 'passive'
    },
        'paragon': [ 
            { 'category': 'Core',
             'choice': [ 'Primary Stat', 'Vitality', 'Movement Speed', 'Resource' ] },
            { 'category': 'Offensive',
             'choice': [ 'Attack Speed', 'Cooldown Reduction', 'Critical Hit Chance', 'Critical Hit Damage' ] },
            { 'category': 'Defensive',
             'choice': [ 'Life', 'Armor', 'Resist All', 'Life Regeneration' ] },
            { 'category': 'Utility',
             'choice': [ 'Area Damage', 'Resourc Cost Reduction', 'Life on Hit', 'Gold Find' ] },
            ]
};

// Array shuffle from http://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Wrapper to allow array shuffle to be used on strings
function shuffle_string(string) {
    var array = shuffle(string.split(""));
    return array.join('');
}

// Debug messages; set as a function in order to call from
// many different places and output at each message.
// Automatically adds a <br /> tag.
function d_msg() {
    var log = document.getElementById("debug").innerHTML;
    // This probably incurs too much overhead
    for (var i=0; i<arguments.length; i++) {
        log += arguments[i];
    }
    log += "<br />\n";
    document.getElementById("debug").innerHTML = log;
}

// Swaps two characters in string
// i & j are the indices of the characters to be swapped
function swapChars(string, i, j) {
    if ( (i>=0) && (j>=0) && (i<string.length) && (j<string.length) && (i!=j) ) {
        var a = string.split("");
        var temp = a[i];
        a[i]=a[j];
        a[j]=temp;
        return a.join('');
    }
    return string;
}

// Creates random build using elective mode (active skills only.)
// c: array index for which class to use.
function electiveBuild(c, forcePrimary) {
    var all_skills = db[c].active.join('');
    var build_ok = false;
    var tries_left = 20; // Max # of attempts before giving up
    d_msg("Rolling Elective build for class ", c, " (", en[db[c].tag].name,")");
    d_msg("forcePrimary is ", forcePrimary);

    while (!build_ok && tries_left > 0) {
        all_skills = shuffle_string(all_skills);
        tries_left--;
        d_msg("<br />Skills: ", all_skills, "; ", tries_left, " tries left");
        // Check for left click problems or forced primaries
        // Since all primaries are allowed on left-click, the
        // forcePrimary option supercedes left-click checks.
        // Chances range from ~17% for WD to 50% for Monk
        for (var i=0; i<6; i++) {
            if (forcePrimary) {
                if (db[c].active[0].indexOf(all_skills[i]) > -1) {
                    d_msg("* Found primary skill in slot ", i);
                    all_skills = swapChars(all_skills,0,i);
                    build_ok = true;
                    break;
                }
            } else {
                if (db[c].no_left.indexOf(all_skills[i]) == -1) {
                    d_msg("* Found left-click skill in slot ", i);
                    all_skills = swapChars(all_skills,0,i);
                    build_ok = true;
                    break;
                }
            }
        }
        if (!build_ok) {
            d_msg("* Build has no Primary/Left-Click skill.");
        }
        // check for exclusion (e.g. can only have 1 mantra)
        // Chances are ~14% for Crusader, ~29% for Monk
        var n = 0;
        for (var j = 0; j < db[c].only_one.length; j++) {
            var where = all_skills.indexOf(db[c].only_one[j]);
            if ((where > -1) && (where < 6)) n++;
        }
        if (n > 1) {
            build_ok = false;
            d_msg("* Exclusion problem detected (found ", n, " skills from exclusion group).");
        }
    }
    if (tries_left < 1) {
        d_msg("* Ran out of tries! Build may still not work.");
    }
    d_msg("<br />Final skill roll: ", all_skills);
    return all_skills.substring(0, 6);
}

// Creates random build using standard mode (active skills only.)
// c: array index for which class to use.
function standardBuild(c) {
    var build = "";
    d_msg("Rolling Standard build...");
    for (var j = 0; j < 6; j++) {
        var x = Math.floor(db[c].active[j].length * Math.random());
        build += db[c].active[j].charAt(x);
        d_msg("Group ", j, ": Rolled ", x, " and picked ", db[c].active[j].charAt(x), " from ", db[c].active[j]);
    }
    return build;
}

// Rolls 4 random passives for a build.
// c: array index for which class to use.
function rollPassives(c) {
    var passives = shuffle_string(db[c].passive);
    d_msg("Passives: ", passives);
    return passives.substring(0, 4);
}

// Rolls 6 random rune selections.
// allowNone: Boolean determining whether "No Rune" can be chosen.
function rollRunes(allowNone) {
    var build = "";
    var runes = "aZbYc";
    if (allowNone) {
        runes += ".";
    }
    for (var j = 0; j < 6; j++) {
        var x = Math.floor(runes.length * Math.random());
        build += runes.charAt(x);
    }
    d_msg("Runes: ", build, " chosen from ", runes);
    return build;
}

// Main build creator; reads form inputs, calls appropriate build
// functions, and outputs text summary & links.
function makeBuild(e) {
    if (e.preventDefault) e.preventDefault();

    var theResults = document.getElementById('results');
    var theClass = document.getElementById('theMenu').selectedIndex - 1;
    if (theClass == -1) {
        theClass = Math.floor(db.length * Math.random());
    }
    var out = "",
        build = "",
        type = "",
        tag = db[theClass].tag;
    
    // Clear debug "log"
    document.getElementById('debug').innerHTML = "";
    
    if (document.getElementById('wizExclusion').checked) {
        d_msg("Adding Wizard armor exclusion");
        // a bit of a hack; hardcoding index & skills here in code
        db[5].only_one = 'fTO';
    } else {
        d_msg("Clearing Wizard armor exclusion");
        // necessary in case option unchecked on later build run
        db[5].only_one = '';
    }
    
    if (document.getElementById('useElective').checked) {
        build = electiveBuild(theClass, document.getElementById('forcePrimary').checked);
        type = "elective mode";
    } else {
        build = standardBuild(theClass);
        type = "standard mode";
    }
    var passives = rollPassives(theClass);
    var runes = rollRunes(document.getElementById('allowNoRune').checked);
    // Runes are stored as arrays in the data, so here we create
    // mapping between hash key and array index
		var runekey = {
      '.': -1,
      'a': 0,
      'Z': 1,
      'b': 2,
      'Y': 3,
      'c': 4,
    };
        
    build = build.concat("!", passives, "!", runes);
    out = out.concat("<h3><a href=\"https://us.battle.net/d3/en/calculator/", db[theClass].tag, "#", build, "\"  target=\"_blank\">Random ", en[tag].name, " Build</a> (", type, ")</h3>");

    out += "<p>Skills:</p>\n<ul>\n";
    var base_url = 'https://us.battle.net/d3/en/class/' + db[theClass].tag + '/';
		for (var i = 0; i < runes.length; i++) {
        var s = build[i];
        var r = runes[i];
        var runename = 'No Rune';
        var runetag = '';
        if (r != '.') {
        	runename = en[tag].active[s].rune[runekey[r]];
          runetag = '#' + en[tag].active[s].rurl[runekey[r]] + '+';
        }
        var skillname = en[tag].active[s].skill;
        var skilltag = fixTooltips(skillname);
        out = out.concat("<li>(",
          en[tag].group[en[tag].active[s].group],
          ') <a href="', base_url, "active/", skilltag, 
          runetag, '">',
          skillname, " -- ", runename,
          "</a></li>\n");
    }
    out = out.concat("</ul>\n<p>Passives:</p>\n<ul>\n");
    for (var i = 0; i < passives.length; i++) {
    		var skillname = en[tag].passive[passives[i]];
        var skilltag = fixTooltips(skillname);
        out = out.concat('<li><a href="', base_url, "passive/",
        skilltag, '">', skillname, "</a></li>\n");
    }
    /*
    out = out.concat("</ul>\n<p>Paragon:</p>\n<ul>\n");
    for (var i=0; i<en.paragon.length; i++) {
        out = out.concat("<li>", en.paragon[i].category, "<ol>\n");
        var choices = shuffle(en.paragon[i].choice);
        for (var j=0; j< choices.length; j++) {
            out = out.concat("<li>", choices[j], "</li>\n");
        }
        out = out.concat("</ol>\n");
    }
    */
    out = out.concat("</ul>\n");

	theResults.innerHTML = out;
  return false;
}

// URL adjustsments to skill names. Make all lower case,
// dashes and apostrophes are removed, spaces become dashes
function fixTooltips(name) {
	return name.toLowerCase().replace(/['-]/g,"").replace(/ /g,"-");
}

// Temporary nonsense to check tooltip links for runes and skills
function skillDump() {
	var html = "";
  var default_runes = "abcde".split("");
	for (var i = 0; i < db.length; i++) {
		var tag = db[i].tag;
		html += "<h2>" + en[tag].name + "</h2><ol>";
	  for (var j = 0; j < db[i].active.length; j++) {
      var skills = db[i].active[j].split("");
      for (var k = 0; k < skills.length; k++) {
        //en[db[i].tag].active[skills[k]].group = j;
        var skillname = en[db[i].tag].active[skills[k]].skill;
        var skilltag = fixTooltips(skillname);
        var url = 'https://us.battle.net/d3/en/class/' + tag + '/active/' + skilltag;
        html += '<li><a href="' + url + '">' + skillname + "</a> : ";
				var runes = default_runes;
				if ('rurl' in en[db[i].tag].active[skills[k]]) {
        	// override generic rune list if we have correct order
        	runes = en[db[i].tag].active[skills[k]].rurl.split("");
        }
				for (var l = 0; l < runes.length; l++) {
          var r = runes[l];
        	html += '[<a href="' + url + '#' + r + '">' + //r + " " + 
          en[db[i].tag].active[skills[k]].rune[l] + "</a>] ";
        }
				html += "</li>";
      } // k
  	} // j active
    html += "</ol><ol>";
	  for (var j = 0; j < db[i].passive.length; j++) {
      var skills = db[i].passive[j].split("");
      for (var k = 0; k < skills.length; k++) {
        var skillname = en[db[i].tag].passive[skills[k]];
        var skilltag = fixTooltips(skillname);
        var url = 'https://us.battle.net/d3/en/class/' + tag + '/passive/' + skilltag;
        html += '<li><a href="' + url + '">' + skillname + "</a></li>";
			} // k
		} // j passive
    html += "</ol>";
	}
	var theResults = document.getElementById('results');
  theResults.innerHTML = html;
}

// Actual onLoad processing starts here.
// Skill group information is stored in the db, but we would like
// easy access to it in en too for the text translation. So here
// we make those additions
function ready() {
	for (var i = 0; i < db.length; i++) {
  	  for (var j = 0; j < db[i].active.length; j++) {
        var skills = db[i].active[j].split("");
        for (var k = 0; k < skills.length; k++) {
          en[db[i].tag].active[skills[k]].group = j;
        }
    	}
	}
	// Add submit handling to the form
	var theForm = document.getElementById("theForm");
	if (theForm.attachEvent) {
    theForm.attachEvent("submit", makeBuild);
	} else {
    theForm.addEventListener("submit", makeBuild);
	}
	// Dynamically populate form menu
	var theMenu = document.getElementById("theMenu");
	var theOption = document.createElement("option");
	theOption.value = 'random';
	theOption.innerHTML = '(Random)';
	theMenu.appendChild(theOption);
	for (var i = 0; i < db.length; i++) {
    theOption = document.createElement("option");
    theOption.value = db[i].tag;
    theOption.innerHTML = en[db[i].tag].name;
    theMenu.appendChild(theOption);
	}
  //skillDump();
}
document.addEventListener( "DOMContentLoaded", ready, false )