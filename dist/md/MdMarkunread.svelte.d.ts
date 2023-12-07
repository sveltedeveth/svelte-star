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
export type MdMarkunreadProps = typeof __propDef.props;
export type MdMarkunreadEvents = typeof __propDef.events;
export type MdMarkunreadSlots = typeof __propDef.slots;
export default class MdMarkunread extends SvelteComponentTyped<MdMarkunreadProps, MdMarkunreadEvents, MdMarkunreadSlots> {
}
export {};
