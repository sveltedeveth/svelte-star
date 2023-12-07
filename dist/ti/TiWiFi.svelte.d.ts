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
export type TiWiFiProps = typeof __propDef.props;
export type TiWiFiEvents = typeof __propDef.events;
export type TiWiFiSlots = typeof __propDef.slots;
export default class TiWiFi extends SvelteComponentTyped<TiWiFiProps, TiWiFiEvents, TiWiFiSlots> {
}
export {};
