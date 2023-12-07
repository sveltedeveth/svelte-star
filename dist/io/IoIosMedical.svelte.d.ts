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
export type IoIosMedicalProps = typeof __propDef.props;
export type IoIosMedicalEvents = typeof __propDef.events;
export type IoIosMedicalSlots = typeof __propDef.slots;
export default class IoIosMedical extends SvelteComponentTyped<IoIosMedicalProps, IoIosMedicalEvents, IoIosMedicalSlots> {
}
export {};
