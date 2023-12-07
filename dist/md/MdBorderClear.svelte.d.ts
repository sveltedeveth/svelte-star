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
export type MdBorderClearProps = typeof __propDef.props;
export type MdBorderClearEvents = typeof __propDef.events;
export type MdBorderClearSlots = typeof __propDef.slots;
export default class MdBorderClear extends SvelteComponentTyped<MdBorderClearProps, MdBorderClearEvents, MdBorderClearSlots> {
}
export {};
