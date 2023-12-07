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
export type FaOsiProps = typeof __propDef.props;
export type FaOsiEvents = typeof __propDef.events;
export type FaOsiSlots = typeof __propDef.slots;
export default class FaOsi extends SvelteComponentTyped<FaOsiProps, FaOsiEvents, FaOsiSlots> {
}
export {};
