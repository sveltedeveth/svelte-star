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
export type IoIosContactProps = typeof __propDef.props;
export type IoIosContactEvents = typeof __propDef.events;
export type IoIosContactSlots = typeof __propDef.slots;
export default class IoIosContact extends SvelteComponentTyped<IoIosContactProps, IoIosContactEvents, IoIosContactSlots> {
}
export {};
