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
export type IoMdAlertProps = typeof __propDef.props;
export type IoMdAlertEvents = typeof __propDef.events;
export type IoMdAlertSlots = typeof __propDef.slots;
export default class IoMdAlert extends SvelteComponentTyped<IoMdAlertProps, IoMdAlertEvents, IoMdAlertSlots> {
}
export {};
