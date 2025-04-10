<script setup>
import Metric from "@/components/metric/Metric.vue";

const props = defineProps(["label", "value", "color"])
</script>

<template>
<Metric :label="props.label" :value="props.value" :text="props.color" />
</template>