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
export type FaPagerProps = typeof __propDef.props;
export type FaPagerEvents = typeof __propDef.events;
export type FaPagerSlots = typeof __propDef.slots;
export default class FaPager extends SvelteComponentTyped<FaPagerProps, FaPagerEvents, FaPagerSlots> {
}
export {};
