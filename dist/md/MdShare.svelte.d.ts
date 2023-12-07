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
export type MdShareProps = typeof __propDef.props;
export type MdShareEvents = typeof __propDef.events;
export type MdShareSlots = typeof __propDef.slots;
export default class MdShare extends SvelteComponentTyped<MdShareProps, MdShareEvents, MdShareSlots> {
}
export {};
