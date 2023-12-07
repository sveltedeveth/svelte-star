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
export type FaAtProps = typeof __propDef.props;
export type FaAtEvents = typeof __propDef.events;
export type FaAtSlots = typeof __propDef.slots;
export default class FaAt extends SvelteComponentTyped<FaAtProps, FaAtEvents, FaAtSlots> {
}
export {};
