// Helper: canonical keys for the 4 constellations supported right now
export const CARDINAL_SIGNS = ["aries", "cancer", "libra", "capricorn"];

/*
  Category keys - UI labels for buttons:
  mythology   - "Mythology"
  astralLore  - "Astral Lore"
  esotericism - "Esotericism"
  alchemy     - "Alchemy"
  sacredRites - "Sacred Rites"
*/

export const CONSTELLATION_LORE = {

  // ARIES – THE RAM
 
  aries: {
    label: "Aries",
    element: "Fire",
    quality: "Cardinal",

    mythology: [
      {
        culture: "Greek",
        title: "The Golden Fleece and the Flight of Phrixus",
        period: "Classical Greece (~1200–146 BCE)",
        summary:
          "King Athamas’ children, Phrixus and Helle, were marked for death by their step-mother Ino. " +
          "Their mother Nephele sent a winged Golden-Fleeced Ram to rescue them. Helle fell into the sea " +
          "(the Hellespont), but Phrixus reached Colchis, sacrificed the Ram to Zeus, and dedicated the Golden Fleece, " +
          "after which the Ram was placed among the stars as Aries.",
        sources: [
          "Apollodorus, Library",
          "Apollonius of Rhodes, Argonautica"
        ]
      },
      {
        culture: "Akkadian / Babylonian",
        title: "The Ram of the Spring Equinox",
        period: "Old–Neo-Babylonian (~2300–539 BCE)",
        summary:
          "In Mesopotamian star catalogues, the Ram (often linked with the name Gugalanna) marked the region of the sky " +
          "associated with the spring equinox and the beginning of the year. Its heliacal rising was a royal omen, " +
          "signaling agricultural renewal and the proper timing of state rituals.",
        sources: ["MUL.APIN star catalogue", "Astrolabe tablets"]
      }
    ],

    astralLore: [
      {
        culture: "Babylonian",
        title: "Marker of the New Year",
        summary:
          "Aries’ region of the sky served as a celestial marker for the beginning of the agricultural year. " +
          "The Ram’s rising near the spring equinox was read as a sign of cosmic re-ordering and seasonal renewal.",
        notes: [
          "Used to anchor the lunisolar calendar.",
          "Associated with royal omens for prosperity and stability."
        ]
      }
    ],

    esotericism: [
      {
        system: "Western Esoteric / Qabalistic",
        title: "The Initiator and the Path of Will",
        summary:
          "Aries is the primal spark and Initiator: the raw Will that begins the cycle. In some Tree of Life models, " +
          "it is linked to the path that projects active force from pure Wisdom into formative Understanding, " +
          "symbolizing the first focused intention that will later manifest as form.",
        keywords: [
          "Will",
          "Initiation",
          "Projection of intent",
          "Cardinal Fire"
        ]
      },
      {
        system: "Astrological Magic",
        title: "Cardinal Ingress – Gate of Initiation",
        summary:
          "When the Sun enters Aries, practitioners of astrological magic treat this ingress as a powerful time " +
          "to begin new workings, oaths, and initiations, especially those involving leadership, courage, " +
          "and the launching of bold projects.",
        references: [
          "Heinrich Cornelius Agrippa, Three Books of Occult Philosophy",
          "Golden Dawn & later Western magical tradition"
        ]
      }
    ],

    alchemy: [
      {
        principle: "Sulfur (Active / Masculine)",
        stage: "Calcination – Ignition of the Work",
        summary:
          "Aries corresponds to the Calcination stage, where base matter (and ego) is subjected to intense fire. " +
          "This burning away of dross represents the first decisive act of transformation, fueled by focused Will. " +
          "The Ram’s horns echo the horns of the altar, where the prima materia is first offered to the flame.",
        invisibleCollegeRole: "The Initiate / The Will – the one who decides to start the Work."
      }
    ],

    sacredRites: [
      {
        culture: "Greek",
        title: "Ram Sacrifices to Zeus and Ares",
        summary:
          "Rams, echoing the celestial Ram of Aries, were common sacrificial animals to Olympian gods like Zeus " +
          "and Ares. They were offered at mountain altars, before battles, and during oaths of loyalty, " +
          "linking martial courage and kingship with the fiery current of Aries.",
        notes: ["Connected symbolically to the Golden Fleece myth."]
      }
    ]
  },

  // ♋ CANCER – THE CRAB / SCARAB
 
  cancer: {
    label: "Cancer",
    element: "Water",
    quality: "Cardinal",

    mythology: [
      {
        culture: "Greek",
        title: "Karkinos and the Hydra",
        period: "Classical Greece (~1200–146 BCE)",
        summary:
          "During Heracles’ second Labour, the slaying of the Lernaean Hydra, Hera sent a giant crab, Karkinos, " +
          "to harry the hero. The crab bit at Heracles’ foot, but was crushed for its trouble. " +
          "Hera rewarded its loyalty by placing it in the sky as the constellation Cancer.",
        sources: ["Hyginus, Fabulae", "Labours of Heracles traditions"]
      },
      {
        culture: "Egyptian",
        title: "Khepri, the Solar Scarab",
        period: "From Old Kingdom to Ptolemaic (~3100–30 BCE)",
        summary:
          "In Egypt, this region of the sky was associated with the dung beetle, Khepri, a form of the sun god Ra. " +
          "As the scarab rolls its ball across the ground, so Khepri pushes the sun across the horizon at dawn. " +
          "Cancer’s sector became linked with rebirth, sunrise, and the soul’s emergence from the underworld.",
        sources: ["Pyramid Texts", "Book of the Dead hymns"]
      }
    ],

    astralLore: [
      {
        culture: "Hermetic / Esoteric",
        title: "The Gate of Rebirth",
        summary:
          "In late antiquity and medieval esoteric astronomy, Cancer was sometimes called the 'Gate of Men' " +
          "or 'Gate of Rebirth'—the portal through which souls descend from the heavens into incarnation. " +
          "It balances Capricorn’s 'Gate of the Gods,' where souls ascend after completing their cycle.",
        notes: ["Linked to lunar cycles, gestation, and incarnation myths."]
      }
    ],

    esotericism: [
      {
        system: "Western Esoteric / Qabalistic",
        title: "The Womb and the Path of Containment",
        summary:
          "Cancer represents the receptive Womb: the vessel that holds and nurtures the initiated spark. " +
          "On the Tree of Life it is associated with paths that bind emotional intensity to structure, " +
          "allowing raw force to be safely contained, nourished, and matured.",
        keywords: [
          "Receptivity",
          "Containment",
          "Psychic sensitivity",
          "Cardinal Water"
        ]
      },
      {
        system: "Astrological Magic / Occult",
        title: "Lunar Current and the Magical Home",
        summary:
          "Because Cancer is ruled by the Moon, many traditions time workings for intuition, dream-work, and " +
          "protection of home and family to lunar phases while the Moon is in Cancer. " +
          "Rites may focus on building a 'magical home' or temple, both physically and psychically."
      }
    ],

    alchemy: [
      {
        principle: "Mercury (Fluid / Feminine)",
        stage: "Dissolution – The Great Solvent",
        summary:
          "Cancer corresponds to Dissolution: calcined ash is dissolved in the alchemical Waters. " +
          "This stage releases the spiritual essence from rigid forms and invites deep introspection. " +
          "It resonates with the idea of the Philosopher’s Water or nocturnal 'dew' used in classic recipes.",
        invisibleCollegeRole:
          "The Receptor / The Womb – the keepers of secret meeting spaces and archives, where knowledge is held and softened."
      }
    ],

    sacredRites: [
      {
        culture: "Egyptian",
        title: "Dawn Hymns to Ra as Khepri",
        summary:
          "Each dawn, priests and laypeople alike offered hymns and incense to Ra in his scarab form, Khepri. " +
          "These rites asked for safe passage through the Duat (underworld) and for renewed life with each sunrise.",
        references: ["Morning hymns in the Book of the Dead"]
      }
    ]
  },

  // LIBRA – THE SCALES
  
  libra: {
    label: "Libra",
    element: "Air",
    quality: "Cardinal",

    mythology: [
      {
        culture: "Greek / Roman",
        title: "Astraea and the Scales of Justice",
        period: "Classical world (~1200 BCE – early Imperial Rome)",
        summary:
          "Astraea, the virgin Goddess of Justice, lived among humans in the Golden Age. As humanity declined into " +
          "violence and corruption, she departed, ascending to the heavens as Virgo, while her Scales became Libra. " +
          "Together they remain a celestial reminder of lost justice and fair measure.",
        sources: ["Hesiod, Works and Days", "Virgil, Georgics (later associations)"]
      },
      {
        culture: "Babylonian",
        title: "The Claws of the Scorpion",
        period: "Old–Neo-Babylonian (~2300–539 BCE)",
        summary:
          "In early Mesopotamian sky lore, the stars now in Libra were considered the claws of the Scorpion (Scorpius), " +
          "emphasizing continuity between the sign of the Scorpion and the region of balance later identified as Libra. " +
          "Only later did this star group become an independent set of Scales linked to seasonal balance.",
        sources: ["MUL.APIN", "Mesopotamian star lists"]
      }
    ],

    astralLore: [
      {
        culture: "Babylonian / Hellenistic",
        title: "The Autumnal Equinox and the Scales",
        summary:
          "Libra came to symbolize the Autumnal Equinox—the point where day and night are of equal length. " +
          "This made the Scales a literal measure of celestial balance and a key marker for agricultural " +
          "and legal calendars.",
        notes: [
          "Used to track seasonal transitions and harvest timings.",
          "Links heavenly order with human law."
        ]
      }
    ],

    esotericism: [
      {
        system: "Western Esoteric / Qabalistic",
        title: "The Balancer of Heart and Desire",
        summary:
          "Libra mediates between the solar heart (Beauty) and emotional drive (Victory) on the Tree of Life. " +
          "It demands ethical balance between what the heart knows is right and what desire craves, " +
          "making it a sign of covenants, oaths, and karmic equilibrium.",
        keywords: [
          "Equilibrium",
          "Judgment",
          "Covenant",
          "Cardinal Air"
        ]
      },
      {
        system: "World Soul / Anima Mundi",
        title: "Perfect Patterning of Form",
        summary:
          "In some esoteric readings, Libra’s Scales represent the geometric pattern necessary for spirit " +
          "to take on form without imbalance—an echo of the 'World Soul' weighing possibilities before incarnation."
      }
    ],

    alchemy: [
      {
        principle: "Air (Volatile / Mediating)",
        stage: "Separation – Refining the Pure from the Impure",
        summary:
          "Libra corresponds to the Separation stage, where thought and analysis (Air) sift the noble from the base. " +
          "Alchemically, it is about creating the right atmosphere—literally the right inner 'air' in the athanor—" +
          "so subtle reactions can proceed without distortion.",
        invisibleCollegeRole:
          "The Regulator / The Idea – those who debate, peer-review, and ethically balance discoveries before publication."
      }
    ],

    sacredRites: [
      {
        culture: "Egyptian (Funerary)",
        title: "The Weighing of the Heart",
        summary:
          "In the Hall of Ma’at, the heart of the deceased is weighed against the Feather of Truth. " +
          "If lighter or equal, the soul gains eternal life with Osiris; if heavier, it is devoured by Ammit. " +
          "Libra’s Scales echo this psychostasia, the weighing of the soul.",
        sources: ["Book of the Dead – Spell 125 (Negative Confession)"]
      },
      {
        culture: "Babylonian",
        title: "Equinox and Judicial Review",
        summary:
          "Around the autumn equinox, kings and priests reviewed legal matters and agricultural plans, " +
          "relying on celestial balance to mirror earthly justice and fair distribution of grain.",
        references: ["Calendar tablets", "Omen series Enūma Anu Enlil"]
      }
    ]
  },

  // CAPRICORN – THE SEA-GOAT
  
  capricorn: {
    label: "Capricorn",
    element: "Earth",
    quality: "Cardinal",

    mythology: [
      {
        culture: "Greek",
        title: "Pan, the Nile, and the Sea-Goat",
        period: "Classical Greece (~1200–146 BCE)",
        summary:
          "During the battle against the monster Typhon, the gods fled in animal forms. " +
          "Pan leapt into a river (often the Nile), partially transforming—goat above, fish below. " +
          "This strange hybrid helped signal danger to the other gods. Zeus later placed this Sea-Goat in the sky " +
          "as Capricorn, honoring Pan’s quick warning.",
        sources: ["Ovid, Metamorphoses", "Hyginus, Fabulae"]
      },
      {
        culture: "Akkadian / Babylonian",
        title: "Suḫurmašu, the Goat-Fish of Ea",
        period: "Old–Neo-Babylonian (~2300–539 BCE)",
        summary:
          "The Goat-Fish, Suḫurmašu, is the emblem of the god Ea (Enki), lord of sweet waters, magic, and creation. " +
          "Seals and boundary stones depict the Goat-Fish as a guardian of oaths and land, linking Capricorn " +
          "with deep wisdom arising from the primeval waters.",
        sources: ["Boundary stones (kudurru)", "Cult iconography of Ea / Enki"]
      }
    ],

    astralLore: [
      {
        culture: "Mesopotamian / Hellenistic",
        title: "Gate of the Gods",
        summary:
          "In late antique esoteric astronomy, Capricorn is sometimes called the 'Gate of the Gods'—the portal " +
          "through which perfected souls ascend back to subtler realms. " +
          "It stands opposite Cancer’s 'Gate of Men', forming an axis of incarnation and return.",
        notes: ["Linked strongly with Saturn, boundaries, and karmic ascent."]
      }
    ],

    esotericism: [
      {
        system: "Western Esoteric / Qabalistic",
        title: "The Mountain of Mastery and Return",
        summary:
          "Capricorn represents disciplined ascent: the soul climbing from dense matter toward the Crown. " +
          "On the Tree of Life it is linked with the high paths of mastery and the confrontation with Saturnian limits—" +
          "the tests that ensure only what is truly refined can ascend.",
        keywords: [
          "Discipline",
          "Structure",
          "Mastery",
          "Cardinal Earth"
        ]
      },
      {
        system: "Invisible College / Early Science",
        title: "From Invisible Fellowship to Royal Society",
        summary:
          "The 'Invisible College'—a 17th-century circle of experimenters mentioned by Robert Boyle—" +
          "prefigured the Royal Society. It blended Baconian reform, alchemical curiosity, and Rosicrucian secrecy, " +
          "moving occult and experimental practice into formal scientific structures: a Capricornian act of " +
          "crystallizing hidden work into institutions."
      },
      {
        system: "Astrological Magic",
        title: "Cardinal Cross and Timing of Great Works",
        summary:
          "Together with Aries, Cancer, and Libra, Capricorn forms the cardinal cross. " +
          "Magicians time workings of mastery, structure, initiation into Orders, and the founding of institutions " +
          "to significant Capricorn transits."
      }
    ],

    alchemy: [
      {
        principle: "Salt (Fixed / Neutral)",
        stage: "Coagulation – The Philosopher’s Stone",
        summary:
          "Capricorn corresponds to Coagulation: the perfected essence is fixed into durable form. " +
          "This is the stage of crystallization and of building an enduring vessel for wisdom—" +
          "the 'Stone' or completed Work. The Sea-Goat’s climb from sea to mountain mirrors the ascent from " +
          "chaos to solid enlightenment.",
        invisibleCollegeRole:
          "The Manifestor / The Structure – creating lasting frameworks like academies, Orders, or societies."
      }
    ],

    sacredRites: [
      {
        culture: "Babylonian",
        title: "Rites of the Apsû to Ea / Enki",
        summary:
          "Rituals of purification, healing, and counter-magic invoked Ea, lord of the Apsû (the subterranean fresh waters). " +
          "Priests used consecrated water drawn from sacred sources, appealing to the Goat-Fish deity " +
          "to cleanse, protect, and restore cosmic order.",
        references: ["Maqlû and Šurpu incantation series"]
      },
      {
        culture: "Greek / Roman",
        title: "Rustic Rites of Pan",
        summary:
          "Though later known as Lupercalia in Rome, the cult of Pan centered on wild grottoes, music, dance, and " +
          "unrestrained fertility. Goat imagery, caves, and ecstatic celebration fold into Capricorn’s symbolism " +
          "of primal nature being structured—but never completely tamed—by civilization."
      }
    ]
  }
};

// Map from pretty button label -> key in CONSTELLATION_LORE
export const LORE_CATEGORIES = {
  Mythology: "mythology",
  "Astral Lore": "astralLore",
  Esotericism: "esotericism",
  Alchemy: "alchemy",
  "Sacred Rites": "sacredRites"
};
