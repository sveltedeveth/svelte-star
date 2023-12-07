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
export type MdBubbleChartProps = typeof __propDef.props;
export type MdBubbleChartEvents = typeof __propDef.events;
export type MdBubbleChartSlots = typeof __propDef.slots;
export default class MdBubbleChart extends SvelteComponentTyped<MdBubbleChartProps, MdBubbleChartEvents, MdBubbleChartSlots> {
}
export {};
