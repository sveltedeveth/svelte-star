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
export type MdMailProps = typeof __propDef.props;
export type MdMailEvents = typeof __propDef.events;
export type MdMailSlots = typeof __propDef.slots;
export default class MdMail extends SvelteComponentTyped<MdMailProps, MdMailEvents, MdMailSlots> {
}
export {};
