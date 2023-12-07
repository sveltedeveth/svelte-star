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
export type FaNodeProps = typeof __propDef.props;
export type FaNodeEvents = typeof __propDef.events;
export type FaNodeSlots = typeof __propDef.slots;
export default class FaNode extends SvelteComponentTyped<FaNodeProps, FaNodeEvents, FaNodeSlots> {
}
export {};
