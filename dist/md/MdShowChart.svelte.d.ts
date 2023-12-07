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
export type MdShowChartProps = typeof __propDef.props;
export type MdShowChartEvents = typeof __propDef.events;
export type MdShowChartSlots = typeof __propDef.slots;
export default class MdShowChart extends SvelteComponentTyped<MdShowChartProps, MdShowChartEvents, MdShowChartSlots> {
}
export {};
