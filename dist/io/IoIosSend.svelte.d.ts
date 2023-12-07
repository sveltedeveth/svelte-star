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
export type IoIosSendProps = typeof __propDef.props;
export type IoIosSendEvents = typeof __propDef.events;
export type IoIosSendSlots = typeof __propDef.slots;
export default class IoIosSend extends SvelteComponentTyped<IoIosSendProps, IoIosSendEvents, IoIosSendSlots> {
}
export {};
