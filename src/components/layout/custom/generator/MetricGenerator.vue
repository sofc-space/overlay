<script setup>
import PremierCurrentMetric from "@/components/layout/custom/custom-metrics/PremierCurrentMetric.vue";
import PremierStartMetric from "@/components/layout/custom/custom-metrics/PremierStartMetric.vue";
import StaticMetric from "@/components/layout/custom/custom-statics/StaticMetric.vue";
import DelimiterMetric from "@/components/layout/custom/custom-statics/DelimiterMetric.vue";
import metrics from "@/assets/metric/metrics_description.json";
import DescribedMetricGenerator from "@/components/layout/custom/generator/DescribedMetricGenerator.vue";

const props = defineProps(["value", "apiResult"]);

const isObject = typeof props.value === "object";
const metricPointer = isObject ? props.value.metric : props.value;
const metricArr = metricPointer.split(".");
const group = metricArr[0];
const metric = metricArr[1];

</script>

<template>
  <PremierCurrentMetric :apiResult="apiResult" v-if="metricPointer === 'session.premier_current'" />
  <PremierStartMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.premier_start'" />
  <StaticMetric :params="props.value.props" v-else-if="metricPointer === 'static.static'" />
  <DelimiterMetric :params="props.value.props" v-else-if="metricPointer === 'static.delimiter'" />
  <DescribedMetricGenerator :value="value" :description="metrics[group][metric]" :apiResult="apiResult" :group="group" v-else-if="metrics[group] && metrics[group][metric] && metrics[group][metric].label" />
  <div v-else>{{ metricPointer }}</div>
</template>