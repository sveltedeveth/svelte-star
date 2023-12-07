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
export type GiGemChainProps = typeof __propDef.props;
export type GiGemChainEvents = typeof __propDef.events;
export type GiGemChainSlots = typeof __propDef.slots;
export default class GiGemChain extends SvelteComponentTyped<GiGemChainProps, GiGemChainEvents, GiGemChainSlots> {
}
export {};
