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
export type MdAccessAlarmsProps = typeof __propDef.props;
export type MdAccessAlarmsEvents = typeof __propDef.events;
export type MdAccessAlarmsSlots = typeof __propDef.slots;
export default class MdAccessAlarms extends SvelteComponentTyped<MdAccessAlarmsProps, MdAccessAlarmsEvents, MdAccessAlarmsSlots> {
}
export {};
