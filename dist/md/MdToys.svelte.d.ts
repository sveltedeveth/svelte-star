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
export type MdToysProps = typeof __propDef.props;
export type MdToysEvents = typeof __propDef.events;
export type MdToysSlots = typeof __propDef.slots;
export default class MdToys extends SvelteComponentTyped<MdToysProps, MdToysEvents, MdToysSlots> {
}
export {};
