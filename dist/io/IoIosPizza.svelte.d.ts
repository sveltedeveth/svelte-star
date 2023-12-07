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
export type IoIosPizzaProps = typeof __propDef.props;
export type IoIosPizzaEvents = typeof __propDef.events;
export type IoIosPizzaSlots = typeof __propDef.slots;
export default class IoIosPizza extends SvelteComponentTyped<IoIosPizzaProps, IoIosPizzaEvents, IoIosPizzaSlots> {
}
export {};
