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
export type IoMdAtProps = typeof __propDef.props;
export type IoMdAtEvents = typeof __propDef.events;
export type IoMdAtSlots = typeof __propDef.slots;
export default class IoMdAt extends SvelteComponentTyped<IoMdAtProps, IoMdAtEvents, IoMdAtSlots> {
}
export {};
