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
export type IoMdDiscProps = typeof __propDef.props;
export type IoMdDiscEvents = typeof __propDef.events;
export type IoMdDiscSlots = typeof __propDef.slots;
export default class IoMdDisc extends SvelteComponentTyped<IoMdDiscProps, IoMdDiscEvents, IoMdDiscSlots> {
}
export {};
