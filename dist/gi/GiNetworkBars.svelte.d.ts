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
export type GiNetworkBarsProps = typeof __propDef.props;
export type GiNetworkBarsEvents = typeof __propDef.events;
export type GiNetworkBarsSlots = typeof __propDef.slots;
export default class GiNetworkBars extends SvelteComponentTyped<GiNetworkBarsProps, GiNetworkBarsEvents, GiNetworkBarsSlots> {
}
export {};
