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
export type GiFunnelProps = typeof __propDef.props;
export type GiFunnelEvents = typeof __propDef.events;
export type GiFunnelSlots = typeof __propDef.slots;
export default class GiFunnel extends SvelteComponentTyped<GiFunnelProps, GiFunnelEvents, GiFunnelSlots> {
}
export {};
