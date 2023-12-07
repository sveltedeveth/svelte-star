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
export type IoIosMoreProps = typeof __propDef.props;
export type IoIosMoreEvents = typeof __propDef.events;
export type IoIosMoreSlots = typeof __propDef.slots;
export default class IoIosMore extends SvelteComponentTyped<IoIosMoreProps, IoIosMoreEvents, IoIosMoreSlots> {
}
export {};
