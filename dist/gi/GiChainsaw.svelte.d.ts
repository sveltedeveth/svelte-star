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
export type GiChainsawProps = typeof __propDef.props;
export type GiChainsawEvents = typeof __propDef.events;
export type GiChainsawSlots = typeof __propDef.slots;
export default class GiChainsaw extends SvelteComponentTyped<GiChainsawProps, GiChainsawEvents, GiChainsawSlots> {
}
export {};
