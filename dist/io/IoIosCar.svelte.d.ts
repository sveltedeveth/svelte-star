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
export type IoIosCarProps = typeof __propDef.props;
export type IoIosCarEvents = typeof __propDef.events;
export type IoIosCarSlots = typeof __propDef.slots;
export default class IoIosCar extends SvelteComponentTyped<IoIosCarProps, IoIosCarEvents, IoIosCarSlots> {
}
export {};
