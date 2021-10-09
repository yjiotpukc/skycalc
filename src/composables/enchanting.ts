import {computed, ref} from "vue";

export const unofficialPatch = ref(true);
export const baseMagnitude = ref('0');
export const baseSkill = ref('100');
export const enchanterPerkMultiplier = ref(2);
export const possibleEnchanterPerkLevels = [
    {
        id: 'enchanter-perk-level-0',
        value: 1,
        label: '0',
    },
    {
        id: 'enchanter-perk-level-1',
        value: 1.2,
        label: '1',
    },
    {
        id: 'enchanter-perk-level-2',
        value: 1.4,
        label: '2',
    },
    {
        id: 'enchanter-perk-level-3',
        value: 1.6,
        label: '3',
    },
    {
        id: 'enchanter-perk-level-4',
        value: 1.8,
        label: '4',
    },
    {
        id: 'enchanter-perk-level-5',
        value: 2,
        label: '5',
    },
];
export const specificPerk = ref(true);
export const potionEffectPercent = ref('44');
export const ahzidalGenius = ref(true);
export const seekerOfSorcery = ref(true);
export const soulMultiplier = ref(1);
export const possibleSouls = [
    {
        id: 'petty',
        label: 'Petty',
        value: 1 / 12,
    },
    {
        id: 'lesser',
        label: 'Lesser',
        value: 1 / 6,
    },
    {
        id: 'common',
        label: 'Common',
        value: 1 / 3,
    },
    {
        id: 'greater',
        label: 'Greater',
        value: 2 / 3,
    },
    {
        id: 'grand',
        label: 'Grand',
        value: 1,
    },
];

export const potionEffectMultiplier = computed(() => 1 + Number(potionEffectPercent.value) / 100);
export const skillLevel = computed(() => Number(baseSkill.value) + (ahzidalGenius.value ? 10 : 0));
export const skillMultiplier = computed(() => {
    let skillModifier = skillLevel.value / 100;
    if (!unofficialPatch.value) {
        skillModifier *= potionEffectMultiplier.value;
    }

    return 1 + (skillModifier * (skillModifier - 0.14) / 3.4)
});
export const specificPerkMultiplier = computed(() => specificPerk.value ? 1.25 : 1);
export const seekerOfSorceryMultiplier = computed(() => seekerOfSorcery.value ? 1.1 : 1);
export const commonEnchantmentMultiplier = computed(() => {
    let multiplier = skillMultiplier.value * enchanterPerkMultiplier.value * specificPerkMultiplier.value * seekerOfSorceryMultiplier.value;
    if (unofficialPatch.value) {
        multiplier *= potionEffectMultiplier.value;
    }

    return multiplier;
});
