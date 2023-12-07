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
export type IoMdCafeProps = typeof __propDef.props;
export type IoMdCafeEvents = typeof __propDef.events;
export type IoMdCafeSlots = typeof __propDef.slots;
export default class IoMdCafe extends SvelteComponentTyped<IoMdCafeProps, IoMdCafeEvents, IoMdCafeSlots> {
}
export {};
