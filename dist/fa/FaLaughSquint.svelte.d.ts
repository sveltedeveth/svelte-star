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
export type FaLaughSquintProps = typeof __propDef.props;
export type FaLaughSquintEvents = typeof __propDef.events;
export type FaLaughSquintSlots = typeof __propDef.slots;
export default class FaLaughSquint extends SvelteComponentTyped<FaLaughSquintProps, FaLaughSquintEvents, FaLaughSquintSlots> {
}
export {};
