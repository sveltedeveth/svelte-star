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
export type MdBorderLeftProps = typeof __propDef.props;
export type MdBorderLeftEvents = typeof __propDef.events;
export type MdBorderLeftSlots = typeof __propDef.slots;
export default class MdBorderLeft extends SvelteComponentTyped<MdBorderLeftProps, MdBorderLeftEvents, MdBorderLeftSlots> {
}
export {};
