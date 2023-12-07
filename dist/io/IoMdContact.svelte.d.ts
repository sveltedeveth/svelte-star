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
export type IoMdContactProps = typeof __propDef.props;
export type IoMdContactEvents = typeof __propDef.events;
export type IoMdContactSlots = typeof __propDef.slots;
export default class IoMdContact extends SvelteComponentTyped<IoMdContactProps, IoMdContactEvents, IoMdContactSlots> {
}
export {};
