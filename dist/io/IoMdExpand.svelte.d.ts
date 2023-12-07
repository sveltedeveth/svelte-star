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
export type IoMdExpandProps = typeof __propDef.props;
export type IoMdExpandEvents = typeof __propDef.events;
export type IoMdExpandSlots = typeof __propDef.slots;
export default class IoMdExpand extends SvelteComponentTyped<IoMdExpandProps, IoMdExpandEvents, IoMdExpandSlots> {
}
export {};
