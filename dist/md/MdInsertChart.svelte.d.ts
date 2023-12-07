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
export type MdInsertChartProps = typeof __propDef.props;
export type MdInsertChartEvents = typeof __propDef.events;
export type MdInsertChartSlots = typeof __propDef.slots;
export default class MdInsertChart extends SvelteComponentTyped<MdInsertChartProps, MdInsertChartEvents, MdInsertChartSlots> {
}
export {};
