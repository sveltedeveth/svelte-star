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
export type IoIosAlertProps = typeof __propDef.props;
export type IoIosAlertEvents = typeof __propDef.events;
export type IoIosAlertSlots = typeof __propDef.slots;
export default class IoIosAlert extends SvelteComponentTyped<IoIosAlertProps, IoIosAlertEvents, IoIosAlertSlots> {
}
export {};
