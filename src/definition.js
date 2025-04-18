import availableMetrics from '@/assets/metric/metrics_description.json';
import {decodeBase64, encodeBase64} from "@/base64.js";

export function updateMetric(container, index, target) {
    let metricArr = target.split(".");

    let targetMetric = availableMetrics[metricArr[0]][metricArr[1]];

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
    const definitionObject = JSON.parse(json);
    for(const containers of definitionObject.containers) {
        for(const metricOrGroupKey in containers.content) {
            const isGroup = Array.isArray(containers.content[metricOrGroupKey]);
            if(!isGroup) {
                if(typeof containers.content[metricOrGroupKey] !== "object") {
                    containers.content[metricOrGroupKey] = {
                        metric: containers.content[metricOrGroupKey],
                    };
                }
                continue;
            }

            for (const groupMetricKey in containers.content[metricOrGroupKey]) {
                if(typeof containers.content[metricOrGroupKey][groupMetricKey] !== "object") {
                    containers.content[metricOrGroupKey][groupMetricKey] = {
                        metric: containers.content[metricOrGroupKey][groupMetricKey],
                    };
                }
            }
        }
    }
    return definitionObject;
}

export function writeDefinition(definition) {
    return encodeBase64(JSON.stringify(definition));
}