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
export type MdAccessTimeProps = typeof __propDef.props;
export type MdAccessTimeEvents = typeof __propDef.events;
export type MdAccessTimeSlots = typeof __propDef.slots;
export default class MdAccessTime extends SvelteComponentTyped<MdAccessTimeProps, MdAccessTimeEvents, MdAccessTimeSlots> {
}
export {};
