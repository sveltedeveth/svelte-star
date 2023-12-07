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
export type IoIosHomeProps = typeof __propDef.props;
export type IoIosHomeEvents = typeof __propDef.events;
export type IoIosHomeSlots = typeof __propDef.slots;
export default class IoIosHome extends SvelteComponentTyped<IoIosHomeProps, IoIosHomeEvents, IoIosHomeSlots> {
}
export {};
