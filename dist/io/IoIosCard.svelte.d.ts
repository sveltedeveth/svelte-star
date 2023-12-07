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
export type IoIosCardProps = typeof __propDef.props;
export type IoIosCardEvents = typeof __propDef.events;
export type IoIosCardSlots = typeof __propDef.slots;
export default class IoIosCard extends SvelteComponentTyped<IoIosCardProps, IoIosCardEvents, IoIosCardSlots> {
}
export {};
