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
export type IoIosWomanProps = typeof __propDef.props;
export type IoIosWomanEvents = typeof __propDef.events;
export type IoIosWomanSlots = typeof __propDef.slots;
export default class IoIosWoman extends SvelteComponentTyped<IoIosWomanProps, IoIosWomanEvents, IoIosWomanSlots> {
}
export {};
