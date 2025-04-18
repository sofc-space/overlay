<script setup>
import Metric from "@/components/metric/Metric.vue";
import {ref} from "vue";
import { useI18n } from 'vue-i18n';
const { t, n } = useI18n();

const props = defineProps(["value", "description", "apiResult", "group"]);

function findValue() {
  let obj = props.apiResult;
  for(let pointer of props.description.path.split(".")) {
    obj = obj[pointer];
    if(obj == null) {
      return;
    }
  }
  return obj;
}

function convertValue(value) {
  if(value == null)
    return;
  let returnValue = value;
  let format = getProp(props.description, "number_format");
  if(format === 'decimal')
    returnValue = n(value, 'twoFractionNumber');
  if(format === 'dollar')
    returnValue = n(value, 'dollar');
  if(format === 'percent')
    returnValue = n(value, 'percent', { minimumFractionDigits: 2 });

  let suffix = getProp(props.description, "suffix");
  if(suffix)
    returnValue = returnValue + " " + suffix;

  return returnValue;
}

function getColor() {
  let color = getProp(props.value, "color");

  if(!color && Array.isArray(props.description.color)) {
    let color = props.description.color[0].color;
    const value = findValue();
    for(let c of props.description.color) {
      if(value < c.value)
        break;
      color = c.color;
    }
    return color;
  }
  return color ? color : props.description.color;
}

function getLabelColor() {
  let color = getProp(props.value, "label_color");
  return color ? color : props.description.label_color;
}

function getLabel() {
  let label = getProp(props.value, "label");
  return label ? label : t("metrics." + props.group + "." + getProp(props.description, "label"));
}

function getProp(obj, key) {
  if (typeof obj === 'object') {
    if (obj[key] != null) {
      return obj[key];
    }
  }
  return null;
}
</script>

<template>
  <Metric :label="getLabel()" :text="getColor()" :value="convertValue(findValue())" :labelColor="getLabelColor()" />
</template>