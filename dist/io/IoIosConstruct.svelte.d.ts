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
export type IoIosConstructProps = typeof __propDef.props;
export type IoIosConstructEvents = typeof __propDef.events;
export type IoIosConstructSlots = typeof __propDef.slots;
export default class IoIosConstruct extends SvelteComponentTyped<IoIosConstructProps, IoIosConstructEvents, IoIosConstructSlots> {
}
export {};
