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
export type IoIosMailProps = typeof __propDef.props;
export type IoIosMailEvents = typeof __propDef.events;
export type IoIosMailSlots = typeof __propDef.slots;
export default class IoIosMail extends SvelteComponentTyped<IoIosMailProps, IoIosMailEvents, IoIosMailSlots> {
}
export {};
