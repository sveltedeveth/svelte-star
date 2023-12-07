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
export type IoMdTimeProps = typeof __propDef.props;
export type IoMdTimeEvents = typeof __propDef.events;
export type IoMdTimeSlots = typeof __propDef.slots;
export default class IoMdTime extends SvelteComponentTyped<IoMdTimeProps, IoMdTimeEvents, IoMdTimeSlots> {
}
export {};
