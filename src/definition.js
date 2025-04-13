import availableMetrics from '@/assets/metric/metrics_description.json';
import {decodeBase64, encodeBase64} from "@/base64.js";

export function updateMetric(container, index, target) {
    let targetMetric = availableMetrics[target];

    let finalMetric = target;
    if(targetMetric.props) {
        const props = {};
        for (const key in targetMetric.props) {
            props[key] = "";
        }

        finalMetric = {
            metric: target,
            props: props
        };
    }

    console.log(finalMetric);
    container[index] = finalMetric;
}

export function readDefinition(str) {
    const json = decodeBase64(str);
    return JSON.parse(json);
}

export function writeDefinition(definition) {
    return encodeBase64(JSON.stringify(definition));
}