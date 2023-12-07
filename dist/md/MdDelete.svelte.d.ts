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
export type MdDeleteProps = typeof __propDef.props;
export type MdDeleteEvents = typeof __propDef.events;
export type MdDeleteSlots = typeof __propDef.slots;
export default class MdDelete extends SvelteComponentTyped<MdDeleteProps, MdDeleteEvents, MdDeleteSlots> {
}
export {};
