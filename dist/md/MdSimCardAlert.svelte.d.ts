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
export type MdSimCardAlertProps = typeof __propDef.props;
export type MdSimCardAlertEvents = typeof __propDef.events;
export type MdSimCardAlertSlots = typeof __propDef.slots;
export default class MdSimCardAlert extends SvelteComponentTyped<MdSimCardAlertProps, MdSimCardAlertEvents, MdSimCardAlertSlots> {
}
export {};
