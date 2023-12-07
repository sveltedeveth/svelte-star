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
export type GiFlameTunnelProps = typeof __propDef.props;
export type GiFlameTunnelEvents = typeof __propDef.events;
export type GiFlameTunnelSlots = typeof __propDef.slots;
export default class GiFlameTunnel extends SvelteComponentTyped<GiFlameTunnelProps, GiFlameTunnelEvents, GiFlameTunnelSlots> {
}
export {};
