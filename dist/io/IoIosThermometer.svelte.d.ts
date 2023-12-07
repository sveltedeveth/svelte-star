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
export type IoIosThermometerProps = typeof __propDef.props;
export type IoIosThermometerEvents = typeof __propDef.events;
export type IoIosThermometerSlots = typeof __propDef.slots;
export default class IoIosThermometer extends SvelteComponentTyped<IoIosThermometerProps, IoIosThermometerEvents, IoIosThermometerSlots> {
}
export {};
