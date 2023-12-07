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
export type GiChaingunProps = typeof __propDef.props;
export type GiChaingunEvents = typeof __propDef.events;
export type GiChaingunSlots = typeof __propDef.slots;
export default class GiChaingun extends SvelteComponentTyped<GiChaingunProps, GiChaingunEvents, GiChaingunSlots> {
}
export {};
