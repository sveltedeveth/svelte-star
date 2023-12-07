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
export type GiFoodChainProps = typeof __propDef.props;
export type GiFoodChainEvents = typeof __propDef.events;
export type GiFoodChainSlots = typeof __propDef.slots;
export default class GiFoodChain extends SvelteComponentTyped<GiFoodChainProps, GiFoodChainEvents, GiFoodChainSlots> {
}
export {};
