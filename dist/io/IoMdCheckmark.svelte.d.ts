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
export type IoMdCheckmarkProps = typeof __propDef.props;
export type IoMdCheckmarkEvents = typeof __propDef.events;
export type IoMdCheckmarkSlots = typeof __propDef.slots;
export default class IoMdCheckmark extends SvelteComponentTyped<IoMdCheckmarkProps, IoMdCheckmarkEvents, IoMdCheckmarkSlots> {
}
export {};
