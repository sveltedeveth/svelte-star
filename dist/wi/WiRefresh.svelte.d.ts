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
export type WiRefreshProps = typeof __propDef.props;
export type WiRefreshEvents = typeof __propDef.events;
export type WiRefreshSlots = typeof __propDef.slots;
export default class WiRefresh extends SvelteComponentTyped<WiRefreshProps, WiRefreshEvents, WiRefreshSlots> {
}
export {};
