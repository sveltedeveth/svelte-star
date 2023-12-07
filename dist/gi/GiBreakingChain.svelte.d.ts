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
export type GiBreakingChainProps = typeof __propDef.props;
export type GiBreakingChainEvents = typeof __propDef.events;
export type GiBreakingChainSlots = typeof __propDef.slots;
export default class GiBreakingChain extends SvelteComponentTyped<GiBreakingChainProps, GiBreakingChainEvents, GiBreakingChainSlots> {
}
export {};
