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
export type MdPieChartProps = typeof __propDef.props;
export type MdPieChartEvents = typeof __propDef.events;
export type MdPieChartSlots = typeof __propDef.slots;
export default class MdPieChart extends SvelteComponentTyped<MdPieChartProps, MdPieChartEvents, MdPieChartSlots> {
}
export {};
