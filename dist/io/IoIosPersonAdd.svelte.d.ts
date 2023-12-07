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
export type IoIosPersonAddProps = typeof __propDef.props;
export type IoIosPersonAddEvents = typeof __propDef.events;
export type IoIosPersonAddSlots = typeof __propDef.slots;
export default class IoIosPersonAdd extends SvelteComponentTyped<IoIosPersonAddProps, IoIosPersonAddEvents, IoIosPersonAddSlots> {
}
export {};
