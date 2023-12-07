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
export type IoMdUnlockProps = typeof __propDef.props;
export type IoMdUnlockEvents = typeof __propDef.events;
export type IoMdUnlockSlots = typeof __propDef.slots;
export default class IoMdUnlock extends SvelteComponentTyped<IoMdUnlockProps, IoMdUnlockEvents, IoMdUnlockSlots> {
}
export {};
