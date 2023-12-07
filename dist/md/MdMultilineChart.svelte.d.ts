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
export type MdMultilineChartProps = typeof __propDef.props;
export type MdMultilineChartEvents = typeof __propDef.events;
export type MdMultilineChartSlots = typeof __propDef.slots;
export default class MdMultilineChart extends SvelteComponentTyped<MdMultilineChartProps, MdMultilineChartEvents, MdMultilineChartSlots> {
}
export {};
