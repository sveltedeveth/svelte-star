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
export type MdAddAlertProps = typeof __propDef.props;
export type MdAddAlertEvents = typeof __propDef.events;
export type MdAddAlertSlots = typeof __propDef.slots;
export default class MdAddAlert extends SvelteComponentTyped<MdAddAlertProps, MdAddAlertEvents, MdAddAlertSlots> {
}
export {};
