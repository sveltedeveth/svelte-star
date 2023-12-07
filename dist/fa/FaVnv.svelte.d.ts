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
export type FaVnvProps = typeof __propDef.props;
export type FaVnvEvents = typeof __propDef.events;
export type FaVnvSlots = typeof __propDef.slots;
export default class FaVnv extends SvelteComponentTyped<FaVnvProps, FaVnvEvents, FaVnvSlots> {
}
export {};
