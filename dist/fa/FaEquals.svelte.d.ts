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
export type FaEqualsProps = typeof __propDef.props;
export type FaEqualsEvents = typeof __propDef.events;
export type FaEqualsSlots = typeof __propDef.slots;
export default class FaEquals extends SvelteComponentTyped<FaEqualsProps, FaEqualsEvents, FaEqualsSlots> {
}
export {};
