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
export type IoMdMailProps = typeof __propDef.props;
export type IoMdMailEvents = typeof __propDef.events;
export type IoMdMailSlots = typeof __propDef.slots;
export default class IoMdMail extends SvelteComponentTyped<IoMdMailProps, IoMdMailEvents, IoMdMailSlots> {
}
export {};
