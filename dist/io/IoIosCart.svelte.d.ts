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
export type IoIosCartProps = typeof __propDef.props;
export type IoIosCartEvents = typeof __propDef.events;
export type IoIosCartSlots = typeof __propDef.slots;
export default class IoIosCart extends SvelteComponentTyped<IoIosCartProps, IoIosCartEvents, IoIosCartSlots> {
}
export {};
