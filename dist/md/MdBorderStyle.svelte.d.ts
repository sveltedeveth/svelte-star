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
export type MdBorderStyleProps = typeof __propDef.props;
export type MdBorderStyleEvents = typeof __propDef.events;
export type MdBorderStyleSlots = typeof __propDef.slots;
export default class MdBorderStyle extends SvelteComponentTyped<MdBorderStyleProps, MdBorderStyleEvents, MdBorderStyleSlots> {
}
export {};
