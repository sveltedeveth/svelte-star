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
export type IoIosBoatProps = typeof __propDef.props;
export type IoIosBoatEvents = typeof __propDef.events;
export type IoIosBoatSlots = typeof __propDef.slots;
export default class IoIosBoat extends SvelteComponentTyped<IoIosBoatProps, IoIosBoatEvents, IoIosBoatSlots> {
}
export {};
