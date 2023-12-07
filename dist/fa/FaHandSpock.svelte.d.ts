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
export type FaHandSpockProps = typeof __propDef.props;
export type FaHandSpockEvents = typeof __propDef.events;
export type FaHandSpockSlots = typeof __propDef.slots;
export default class FaHandSpock extends SvelteComponentTyped<FaHandSpockProps, FaHandSpockEvents, FaHandSpockSlots> {
}
export {};
