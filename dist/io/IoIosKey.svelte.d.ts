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
export type IoIosKeyProps = typeof __propDef.props;
export type IoIosKeyEvents = typeof __propDef.events;
export type IoIosKeySlots = typeof __propDef.slots;
export default class IoIosKey extends SvelteComponentTyped<IoIosKeyProps, IoIosKeyEvents, IoIosKeySlots> {
}
export {};
