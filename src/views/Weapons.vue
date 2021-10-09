<template>
  <div class="pure-g">
    <div class="pure-u-md-1-2 calculation-variables">
      <h2>Variables</h2>
      <form class="pure-form pure-form-aligned">
        <fieldset>
          <Checkbox
            id="unofficial-patch"
            v-model="unofficialPatch"
            name="Unofficial Patch"
          />
          <TextField
            id="enchantment-base-magnitude"
            v-model="baseMagnitude"
            name="Enchantment Base Magnitude"
          />
          <TextField
            id="enchanting-skill-level"
            v-model="baseSkill"
            name="Enchanting skill level"
          />
          <Radiobutton
            v-model="enchanterPerkMultiplier"
            name="Enchanter perk level"
            :possible-values="possibleEnchanterPerkLevels"
          />
          <Checkbox
            id="specific-perk"
            v-model="specificPerk"
            name="Specific perk"
          />
          <TextField
            id="potion-effect"
            v-model="potionEffectPercent"
            name="Potion effect (%)"
          />
          <Checkbox
            id="ahzidal-genius"
            v-model="ahzidalGenius"
            name="Ahzidal's genius"
            description="4 items from Ahzidal's set"
          />
          <Checkbox
            id="seeker-of-sorcery"
            v-model="seekerOfSorcery"
            name="Seeker of sorcery"
            description="Black Book: The Sallow Regent"
          />
          <Radiobutton
            v-model="elementalDestruction"
            name="Elemental Destruction"
            :possible-values="possibleElementalPerks"
            description="Perks in Destruction skill tree"
          />
        </fieldset>
      </form>
    </div>

    <div class="pure-u-md-1-2 calculation-result">
      <div class="calculation-result--total">
        <h2>Result</h2>

        <h3>Enchantment Magnitude = {{ enchantmentMagnitude }}</h3>

        <p>FLOOR(FLOOR(Enchantment Base Magnitude * Enchantment Multiplier) * Elemental Destruction Multiplier)</p>
      </div>

      <div class="calculation-result--specifics">
        <h2>Specifics</h2>

        <h3>Enchantment Multiplier = {{ enchantmentMultiplier }}</h3>

        <p>
          Skill Multiplier * Enchanter Perk Multiplier * Specific Perk Multiplier * Seeker of Sorcery Multiplier
          * Potion Effect Multiplier
        </p>

        <h3>Skill Multiplier = {{ skillMultiplier }}</h3>

        <p>1 + Skill level / 100 * (Skill level / 100 - 0,14) / 3,4</p>

        <h3>Skill Level = {{ skillLevel }}</h3>

        <p>Base skill level + Ahzidal's genius</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from "../components/fields/TextField.vue";
import Radiobutton from "../components/fields/Radiobutton.vue";
import Checkbox from "../components/fields/Checkbox.vue";
import {computed, ref} from "vue";
import {
  unofficialPatch,
  baseMagnitude,
  baseSkill,
  enchanterPerkMultiplier,
  possibleEnchanterPerkLevels,
  specificPerk,
  potionEffectPercent,
  ahzidalGenius,
  seekerOfSorcery,
  skillLevel,
  skillMultiplier,
  commonEnchantmentMultiplier,
} from "../composables/enchanting";

baseMagnitude.value = '10';

let elementalDestruction = ref(2);
let possibleElementalPerks = [
  {
    id: '0',
    label: '0',
    value: 0,
  },
  {
    id: '1',
    label: '1',
    value: 1,
  },
  {
    id: '2',
    label: '2',
    value: 2,
  },
];
let elementalDestructionMultiplier = computed(() => elementalDestruction.value * 0.25 + 1);
let enchantmentMultiplier = commonEnchantmentMultiplier;
let enchantmentMagnitude = computed(() => Math.floor(Math.floor(Number(baseMagnitude.value) * enchantmentMultiplier.value)) * elementalDestructionMultiplier.value);
</script>

<style>
.calculation-variables {
  padding-top: 1em;
}

.calculation-result {
  border-left: solid 1px lightgray;
  box-sizing: border-box;
}

.calculation-result--total {
  padding: 1em 4em 1em 3em;
  border-bottom: solid 1px lightgray;
}

.calculation-result--specifics {
  padding: 1em 4em 1em 3em;
}
</style>
