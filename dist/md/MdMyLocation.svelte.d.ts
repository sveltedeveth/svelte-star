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
export type MdMyLocationProps = typeof __propDef.props;
export type MdMyLocationEvents = typeof __propDef.events;
export type MdMyLocationSlots = typeof __propDef.slots;
export default class MdMyLocation extends SvelteComponentTyped<MdMyLocationProps, MdMyLocationEvents, MdMyLocationSlots> {
}
export {};
