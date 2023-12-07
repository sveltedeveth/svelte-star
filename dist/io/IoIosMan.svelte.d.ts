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
export type IoIosManProps = typeof __propDef.props;
export type IoIosManEvents = typeof __propDef.events;
export type IoIosManSlots = typeof __propDef.slots;
export default class IoIosMan extends SvelteComponentTyped<IoIosManProps, IoIosManEvents, IoIosManSlots> {
}
export {};
