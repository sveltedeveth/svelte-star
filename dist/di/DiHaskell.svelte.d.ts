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
export type DiHaskellProps = typeof __propDef.props;
export type DiHaskellEvents = typeof __propDef.events;
export type DiHaskellSlots = typeof __propDef.slots;
export default class DiHaskell extends SvelteComponentTyped<DiHaskellProps, DiHaskellEvents, DiHaskellSlots> {
}
export {};
