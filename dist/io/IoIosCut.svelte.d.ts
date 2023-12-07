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
export type IoIosCutProps = typeof __propDef.props;
export type IoIosCutEvents = typeof __propDef.events;
export type IoIosCutSlots = typeof __propDef.slots;
export default class IoIosCut extends SvelteComponentTyped<IoIosCutProps, IoIosCutEvents, IoIosCutSlots> {
}
export {};
