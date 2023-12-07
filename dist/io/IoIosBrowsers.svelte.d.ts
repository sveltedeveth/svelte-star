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
export type IoIosBrowsersProps = typeof __propDef.props;
export type IoIosBrowsersEvents = typeof __propDef.events;
export type IoIosBrowsersSlots = typeof __propDef.slots;
export default class IoIosBrowsers extends SvelteComponentTyped<IoIosBrowsersProps, IoIosBrowsersEvents, IoIosBrowsersSlots> {
}
export {};
