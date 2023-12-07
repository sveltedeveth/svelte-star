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
export type FaReplydProps = typeof __propDef.props;
export type FaReplydEvents = typeof __propDef.events;
export type FaReplydSlots = typeof __propDef.slots;
export default class FaReplyd extends SvelteComponentTyped<FaReplydProps, FaReplydEvents, FaReplydSlots> {
}
export {};
