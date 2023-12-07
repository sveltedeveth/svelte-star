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
export type IoMdMailUnreadProps = typeof __propDef.props;
export type IoMdMailUnreadEvents = typeof __propDef.events;
export type IoMdMailUnreadSlots = typeof __propDef.slots;
export default class IoMdMailUnread extends SvelteComponentTyped<IoMdMailUnreadProps, IoMdMailUnreadEvents, IoMdMailUnreadSlots> {
}
export {};
