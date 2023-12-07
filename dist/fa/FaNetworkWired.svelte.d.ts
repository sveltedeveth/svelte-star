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
export type FaNetworkWiredProps = typeof __propDef.props;
export type FaNetworkWiredEvents = typeof __propDef.events;
export type FaNetworkWiredSlots = typeof __propDef.slots;
export default class FaNetworkWired extends SvelteComponentTyped<FaNetworkWiredProps, FaNetworkWiredEvents, FaNetworkWiredSlots> {
}
export {};
