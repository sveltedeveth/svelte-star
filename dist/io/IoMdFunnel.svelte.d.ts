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
export type IoMdFunnelProps = typeof __propDef.props;
export type IoMdFunnelEvents = typeof __propDef.events;
export type IoMdFunnelSlots = typeof __propDef.slots;
export default class IoMdFunnel extends SvelteComponentTyped<IoMdFunnelProps, IoMdFunnelEvents, IoMdFunnelSlots> {
}
export {};
