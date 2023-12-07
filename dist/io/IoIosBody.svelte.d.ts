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
export type IoIosBodyProps = typeof __propDef.props;
export type IoIosBodyEvents = typeof __propDef.events;
export type IoIosBodySlots = typeof __propDef.slots;
export default class IoIosBody extends SvelteComponentTyped<IoIosBodyProps, IoIosBodyEvents, IoIosBodySlots> {
}
export {};
