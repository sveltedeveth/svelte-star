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
export type FaAdversalProps = typeof __propDef.props;
export type FaAdversalEvents = typeof __propDef.events;
export type FaAdversalSlots = typeof __propDef.slots;
export default class FaAdversal extends SvelteComponentTyped<FaAdversalProps, FaAdversalEvents, FaAdversalSlots> {
}
export {};
