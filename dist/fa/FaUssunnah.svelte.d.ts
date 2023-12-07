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
export type FaUssunnahProps = typeof __propDef.props;
export type FaUssunnahEvents = typeof __propDef.events;
export type FaUssunnahSlots = typeof __propDef.slots;
export default class FaUssunnah extends SvelteComponentTyped<FaUssunnahProps, FaUssunnahEvents, FaUssunnahSlots> {
}
export {};
