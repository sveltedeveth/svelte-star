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
export type FaChildProps = typeof __propDef.props;
export type FaChildEvents = typeof __propDef.events;
export type FaChildSlots = typeof __propDef.slots;
export default class FaChild extends SvelteComponentTyped<FaChildProps, FaChildEvents, FaChildSlots> {
}
export {};
