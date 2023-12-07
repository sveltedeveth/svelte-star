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
export type FaRegChartBarProps = typeof __propDef.props;
export type FaRegChartBarEvents = typeof __propDef.events;
export type FaRegChartBarSlots = typeof __propDef.slots;
export default class FaRegChartBar extends SvelteComponentTyped<FaRegChartBarProps, FaRegChartBarEvents, FaRegChartBarSlots> {
}
export {};
