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
export type GiCigaleProps = typeof __propDef.props;
export type GiCigaleEvents = typeof __propDef.events;
export type GiCigaleSlots = typeof __propDef.slots;
export default class GiCigale extends SvelteComponentTyped<GiCigaleProps, GiCigaleEvents, GiCigaleSlots> {
}
export {};
