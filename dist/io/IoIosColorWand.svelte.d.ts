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
export type IoIosColorWandProps = typeof __propDef.props;
export type IoIosColorWandEvents = typeof __propDef.events;
export type IoIosColorWandSlots = typeof __propDef.slots;
export default class IoIosColorWand extends SvelteComponentTyped<IoIosColorWandProps, IoIosColorWandEvents, IoIosColorWandSlots> {
}
export {};
