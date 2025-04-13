<script setup>
import {onMounted, ref} from "vue";
import {colorScheme, scaling} from "@/layoutChooser.js";
import getParameterValue from "@/parameter.js";
import MContainerGenerator from "@/components/layout/custom/generator/MContainerGenerator.vue";
import CustomFooter from "@/components/layout/custom/custom-layout/CustomFooter.vue";
import {decodeBase64} from "@/base64.js";

const props = defineProps(["apiResult"]);

const definition = ref({
  showTimeRange: false,
  containers: []
});

onMounted(() => {
  colorScheme(getParameterValue("scheme", "regular"));
  scaling(getParameterValue("scaling", 1));
  const definitionValue = getParameterValue("definition", "e30=");
  const decoded = decodeBase64(definitionValue);
  definition.value = JSON.parse(decoded);
  //json.value = JSON.parse(decodeBase64(getParameterValue("definition", "e30="))); // e.g. eyJjb250YWluZXJzIjpbeyJzY2hlbWUiOiJkYXJrIiwiY29udGVudCI6WyJhZHIiXX0seyJzY2hlbWUiOiJkYXJrZXIiLCJjb250ZW50IjpbImFkciJdfSx7InNjaGVtZSI6ImRhcmtlc3QiLCJjb250ZW50IjpbImFkciJdfSx7InNjaGVtZSI6InRoZWRhcmsiLCJjb250ZW50IjpbImFkciJdfSx7InNjaGVtZSI6InNlbWkiLCJjb250ZW50IjpbImFkciJdfSx7InNjaGVtZSI6InRyYW5zcGFyZW50IiwiY29udGVudCI6W1sia2lsbCIsInRpZSIsImRlYXRoIl0sWyJjdXJyZW50X3NlYXNvbl93aW4iLHsibWV0cmljIjoiZGVsaW1pdGVyIiwicHJvcHMiOnsiY2hhciI6Ii8ifX0seyJtZXRyaWMiOiJzdGF0aWMiLCJwcm9wcyI6eyJsYWJlbCI6InZvbiIsInZhbHVlIjoiMTI1IiwiY29sb3IiOiJhdmVyYWdlIn19XV19XSwgInNob3dUaW1lUmFuZ2UiOiB0cnVlfQ==
})
</script>

<template>
  <MContainerGenerator :layoutJson="definition.containers" :apiResult="apiResult" />
  <CustomFooter :apiResult="apiResult" :showRange="definition.showTimeRange" />
</template>
