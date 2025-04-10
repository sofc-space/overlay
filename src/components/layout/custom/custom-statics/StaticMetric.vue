<script setup>
import Metric from "@/components/metric/Metric.vue";

const props = defineProps(["params"])
</script>

<template>
<Metric :label="props.params.label" :value="props.params.value" :text="props.params.color" />
</template>