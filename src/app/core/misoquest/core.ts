export const Sounds = {// 28 sounds total, answer pleasant (0) to unpleasant (100) using a slider
    TRIGGERS: {
        BLOWING_NOSE: 'blowing_nose',
        BREATH_RUNNING: 'breath_running',
        CHEWING_1: 'chewing_1',
        CHEWING_2: 'chewing_2',
        COUGH: 'cough',
        GARGLING: 'gargling',
        HARD_BREATHING: 'hard_breathing',
        KEYBOARD: 'keyboard',
        PEN_CLICKING: 'pen_clicking',
        SLURPING: 'slurping',
        SNIFFING: 'sniffing',
        SNORING: 'snoring',
        SWALLOWING: 'swallowing',
        THROAT_CLEARING: 'throat_clearing',
        VOMIT: 'vomit',
        WHEEZING: 'wheezing',
    },
    UNPLEASENT: {
        CLAPPING: 'clapping',
        DISTORTED_GUITAR_DISSONANCE: 'distorted_guitar_dissonance',
        FINGERNAILS_ON_CHALKBOARD: 'fingernails_on_chalkboard',
        FORK_SCRATCH_PLATE: 'fork_scratch_plate',
        KNIFE_HIT_GLASS: 'knife_hit_glass',
        SCREAM: 'scream',
    },
    PLEASENT: {
        BIRDS: 'birds',
        FOUNTAIN: 'fountain',
        HARP: 'harp',
        LAKE: 'lake',
        LAUGTH: 'laugh',
        UNDERWATER: 'underwater',
    },
    ADDITIONAL: {
        WHITE_NOISE: 'white_noise',
    },
}

export const SoundsToAssetPath = {
    TRIGGERS: {
        [Sounds.TRIGGERS.BLOWING_NOSE]: 'assets/audio/triggers/blowing_nose.mp3',
        [Sounds.TRIGGERS.BREATH_RUNNING]: 'assets/audio/triggers/breath_running.wav',
        [Sounds.TRIGGERS.CHEWING_1]: 'assets/audio/triggers/chewing_1.wav',
        [Sounds.TRIGGERS.CHEWING_2]: 'assets/audio/triggers/chewing_2.wav',
        [Sounds.TRIGGERS.COUGH]: 'assets/audio/triggers/cough.wav',
        [Sounds.TRIGGERS.GARGLING]: 'assets/audio/triggers/gargling.wav',
        [Sounds.TRIGGERS.HARD_BREATHING]: 'assets/audio/triggers/hard_breathing.wav',
        [Sounds.TRIGGERS.KEYBOARD]: 'assets/audio/triggers/keyboard.mp3',
        [Sounds.TRIGGERS.PEN_CLICKING]: 'assets/audio/triggers/pen_clicking.wav',
        [Sounds.TRIGGERS.SLURPING]: 'assets/audio/triggers/slurping.wav',
        [Sounds.TRIGGERS.SNIFFING]: 'assets/audio/triggers/sniffing.wav',
        [Sounds.TRIGGERS.SNORING]: 'assets/audio/triggers/snoring.wav',
        [Sounds.TRIGGERS.SWALLOWING]: 'assets/audio/triggers/swallowing.wav',
        [Sounds.TRIGGERS.THROAT_CLEARING]: 'assets/audio/triggers/throat_clearing.wav',
        [Sounds.TRIGGERS.VOMIT]: 'assets/audio/triggers/vomit.wav',
        [Sounds.TRIGGERS.WHEEZING]: 'assets/audio/triggers/wheezing.wav',
    },
    UNPLEASENT: {
        [Sounds.UNPLEASENT.CLAPPING]: 'assets/audio/unpleasant/clapping.wav',
        [Sounds.UNPLEASENT.DISTORTED_GUITAR_DISSONANCE]: 'assets/audio/unpleasant/distorted_guitar_dissonance.wav',
        [Sounds.UNPLEASENT.FINGERNAILS_ON_CHALKBOARD]: 'assets/audio/unpleasant/fingernails_on_chalkboard.wav',
        [Sounds.UNPLEASENT.FORK_SCRATCH_PLATE]: 'assets/audio/unpleasant/fork_scratch_plate.wav',
        [Sounds.UNPLEASENT.KNIFE_HIT_GLASS]: 'assets/audio/unpleasant/knife_hit_glass.wav',
        [Sounds.UNPLEASENT.SCREAM]: 'assets/audio/unpleasant/scream.wav',
    },
    PLEASENT: {
        [Sounds.PLEASENT.BIRDS]: 'assets/audio/pleasant/birds.wav',
        [Sounds.PLEASENT.FOUNTAIN]: 'assets/audio/pleasant/fountain.wav',
        [Sounds.PLEASENT.HARP]: 'assets/audio/pleasant/harp.wav',
        [Sounds.PLEASENT.LAKE]: 'assets/audio/pleasant/lake.wav',
        [Sounds.PLEASENT.LAUGTH]: 'assets/audio/pleasant/laugh.wav',
        [Sounds.PLEASENT.UNDERWATER]: 'assets/audio/pleasant/underwater.wav',
    },
    ADDITIONAL: {
        [Sounds.ADDITIONAL.WHITE_NOISE]: 'assets/audio/additional/white_noise.wav',
    },
}

const misophonicCutoffBySoundGroup = {
    MOUTH: 37.67,
    BREATHING_SLASH_NOSE: 18.85,
    THROAT: 14.88,
    REPETITIVE: 8.78,
    TOTAL: 22.67,
};

const soundsToGroups = {
    [Sounds.TRIGGERS.BLOWING_NOSE]: 'BREATHING_SLASH_NOSE',
    [Sounds.TRIGGERS.BREATH_RUNNING]: 'BREATHING_SLASH_NOSE',
    [Sounds.TRIGGERS.CHEWING_1]: 'MOUTH',
    [Sounds.TRIGGERS.CHEWING_2]: 'MOUTH',
    [Sounds.TRIGGERS.COUGH]: 'BREATHING_SLASH_NOSE',
    [Sounds.TRIGGERS.GARGLING]: 'MOUTH',
    [Sounds.TRIGGERS.HARD_BREATHING]: 'BREATHING_SLASH_NOSE',
    [Sounds.TRIGGERS.KEYBOARD]: 'REPETITIVE',
    [Sounds.TRIGGERS.PEN_CLICKING]: 'REPETITIVE',
    [Sounds.TRIGGERS.SLURPING]: 'MOUTH',
    [Sounds.TRIGGERS.SNIFFING]: 'BREATHING_SLASH_NOSE',
    [Sounds.TRIGGERS.SNORING]: 'BREATHING_SLASH_NOSE',
    [Sounds.TRIGGERS.SWALLOWING]: 'THROAT',
    [Sounds.TRIGGERS.THROAT_CLEARING]: 'THROAT',
    [Sounds.TRIGGERS.VOMIT]: 'MOUTH',
    [Sounds.TRIGGERS.WHEEZING]: 'BREATHING_SLASH_NOSE',
};

// Other sounds 75th percentile was 100 (not at all unpleasant) which means they were not included in the calculation
const SoundsToCalculateCDS = [
    {
        sound: Sounds.TRIGGERS.CHEWING_1,
        controlGroup75thPercentile: 89.6666666666667,
    },
    {
        sound: Sounds.TRIGGERS.CHEWING_2,
        controlGroup75thPercentile: 89,
    },
    {
        sound: Sounds.TRIGGERS.SLURPING,
        controlGroup75thPercentile: 79.3333333333333
    },
    {
        sound: Sounds.TRIGGERS.BREATH_RUNNING,
        controlGroup75thPercentile: 59.3333333333333
    },
    {
        sound: Sounds.TRIGGERS.SNIFFING,
        controlGroup75thPercentile: 72
    },
    {
        sound: Sounds.TRIGGERS.SNORING,
        controlGroup75thPercentile: 92.6666666666667
    },
    {
        sound: Sounds.TRIGGERS.PEN_CLICKING,
        controlGroup75thPercentile: 60.3333333333333
    },
    {
        sound: Sounds.TRIGGERS.KEYBOARD,
        controlGroup75thPercentile: 56.3333333333333
    },
    {
        sound: Sounds.TRIGGERS.THROAT_CLEARING,
        controlGroup75thPercentile: 59.6666666666667
    },
    {
        sound: Sounds.TRIGGERS.SWALLOWING,
        controlGroup75thPercentile: 71.3333333333333
    },
];

const relevantSounds75hPercentileRatings = new Map(
    SoundsToCalculateCDS.map(sound => [sound.sound, sound.controlGroup75thPercentile])
);

const calcSoundDistance = (sound: { name: string, rating: number }): number => {
    const controlGroup75thPercentile = relevantSounds75hPercentileRatings.get(sound.name);
    if (controlGroup75thPercentile === undefined) {
        throw new Error('Sound not found');
    }

    let nomitator = sound.rating - controlGroup75thPercentile;
    // calc only positive differences
    if (nomitator < 0) {
        nomitator = 0;
    }

    if (controlGroup75thPercentile === 100) {
        // unnecessary check because we already filter out sounds with 100 rating
        return 0;
    }


    return nomitator / (100 - controlGroup75thPercentile) * 100;
}

const calcGroupTotalCDS = (sounds: { name: string, rating: number }[]): number => {
    let score = 0;
    let count = 0;
    for (const sound of sounds) {
        const distance = calcSoundDistance(sound);
        score += distance;
        count++;
    }

    if (count === 0) {
        throw new Error('No relevant sounds found');
    }

    return score / count;
}


export const calcByGroupCDS = (ratedSounds: { name: string, rating: number }[]) => {
    // filter out sounds that are not for calculation
    const soundsToCalc = ratedSounds.filter(sound => relevantSounds75hPercentileRatings.has(sound.name));

    // distribute sounds into groups
    const groups: {
        [key: string]: { name: string, rating: number }[],
    } = {
        MOUTH: [],
        BREATHING_SLASH_NOSE: [],
        THROAT: [],
        REPETITIVE: [],
    };
    for (const sound of soundsToCalc) {
        const groupName = soundsToGroups[sound.name];
        groups[groupName].push(sound);
    }

    // calculate CDS for each group
    const scores: { [key: string]: number } = {};
    for (const group in groups) {
        const soundsOfGroup = groups[group];
        scores[group] = calcGroupTotalCDS(soundsOfGroup)
    }

    // calculate total with no group
    const total = calcGroupTotalCDS(soundsToCalc);
    scores['TOTAL'] = total;

    // add CDS cutoffs to scores
    const scoresWithCutoffs: { [key: string]: { score: number, cutoff: number, isBelowCutoff: boolean } } = {};
    for (const group in scores) {
        scoresWithCutoffs[group] = {
            score: scores[group],
            // @ts-ignore
            cutoff: misophonicCutoffBySoundGroup[group],
            // @ts-ignore
            isAboveCutoff: scores[group] > misophonicCutoffBySoundGroup[group],
        };
    }

    return scoresWithCutoffs;
}
