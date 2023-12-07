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
export type IoMdCreateProps = typeof __propDef.props;
export type IoMdCreateEvents = typeof __propDef.events;
export type IoMdCreateSlots = typeof __propDef.slots;
export default class IoMdCreate extends SvelteComponentTyped<IoMdCreateProps, IoMdCreateEvents, IoMdCreateSlots> {
}
export {};
