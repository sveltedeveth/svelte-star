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
export type GiClosedDoorsProps = typeof __propDef.props;
export type GiClosedDoorsEvents = typeof __propDef.events;
export type GiClosedDoorsSlots = typeof __propDef.slots;
export default class GiClosedDoors extends SvelteComponentTyped<GiClosedDoorsProps, GiClosedDoorsEvents, GiClosedDoorsSlots> {
}
export {};
