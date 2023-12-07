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
export type FaGrinSquintProps = typeof __propDef.props;
export type FaGrinSquintEvents = typeof __propDef.events;
export type FaGrinSquintSlots = typeof __propDef.slots;
export default class FaGrinSquint extends SvelteComponentTyped<FaGrinSquintProps, FaGrinSquintEvents, FaGrinSquintSlots> {
}
export {};
