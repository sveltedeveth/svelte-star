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
export type IoIosMedalProps = typeof __propDef.props;
export type IoIosMedalEvents = typeof __propDef.events;
export type IoIosMedalSlots = typeof __propDef.slots;
export default class IoIosMedal extends SvelteComponentTyped<IoIosMedalProps, IoIosMedalEvents, IoIosMedalSlots> {
}
export {};
