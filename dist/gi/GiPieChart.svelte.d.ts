import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiPieChartProps = typeof __propDef.props;
export type GiPieChartEvents = typeof __propDef.events;
export type GiPieChartSlots = typeof __propDef.slots;
export default class GiPieChart extends SvelteComponentTyped<GiPieChartProps, GiPieChartEvents, GiPieChartSlots> {
}
export {};
