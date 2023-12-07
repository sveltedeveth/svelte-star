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
export type IoMdMoveProps = typeof __propDef.props;
export type IoMdMoveEvents = typeof __propDef.events;
export type IoMdMoveSlots = typeof __propDef.slots;
export default class IoMdMove extends SvelteComponentTyped<IoMdMoveProps, IoMdMoveEvents, IoMdMoveSlots> {
}
export {};
