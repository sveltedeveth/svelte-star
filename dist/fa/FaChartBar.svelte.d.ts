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
export type FaChartBarProps = typeof __propDef.props;
export type FaChartBarEvents = typeof __propDef.events;
export type FaChartBarSlots = typeof __propDef.slots;
export default class FaChartBar extends SvelteComponentTyped<FaChartBarProps, FaChartBarEvents, FaChartBarSlots> {
}
export {};
