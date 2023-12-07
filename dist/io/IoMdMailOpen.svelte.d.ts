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
export type IoMdMailOpenProps = typeof __propDef.props;
export type IoMdMailOpenEvents = typeof __propDef.events;
export type IoMdMailOpenSlots = typeof __propDef.slots;
export default class IoMdMailOpen extends SvelteComponentTyped<IoMdMailOpenProps, IoMdMailOpenEvents, IoMdMailOpenSlots> {
}
export {};
