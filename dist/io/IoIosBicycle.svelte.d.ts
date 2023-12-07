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
export type IoIosBicycleProps = typeof __propDef.props;
export type IoIosBicycleEvents = typeof __propDef.events;
export type IoIosBicycleSlots = typeof __propDef.slots;
export default class IoIosBicycle extends SvelteComponentTyped<IoIosBicycleProps, IoIosBicycleEvents, IoIosBicycleSlots> {
}
export {};
