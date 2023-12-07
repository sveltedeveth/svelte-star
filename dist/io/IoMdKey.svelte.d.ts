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
export type IoMdKeyProps = typeof __propDef.props;
export type IoMdKeyEvents = typeof __propDef.events;
export type IoMdKeySlots = typeof __propDef.slots;
export default class IoMdKey extends SvelteComponentTyped<IoMdKeyProps, IoMdKeyEvents, IoMdKeySlots> {
}
export {};
