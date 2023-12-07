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
export type GiSaloonDoorsProps = typeof __propDef.props;
export type GiSaloonDoorsEvents = typeof __propDef.events;
export type GiSaloonDoorsSlots = typeof __propDef.slots;
export default class GiSaloonDoors extends SvelteComponentTyped<GiSaloonDoorsProps, GiSaloonDoorsEvents, GiSaloonDoorsSlots> {
}
export {};
