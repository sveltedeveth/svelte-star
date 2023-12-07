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
export type MdBusinessProps = typeof __propDef.props;
export type MdBusinessEvents = typeof __propDef.events;
export type MdBusinessSlots = typeof __propDef.slots;
export default class MdBusiness extends SvelteComponentTyped<MdBusinessProps, MdBusinessEvents, MdBusinessSlots> {
}
export {};
