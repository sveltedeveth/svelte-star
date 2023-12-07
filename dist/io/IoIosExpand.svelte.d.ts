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
export type IoIosExpandProps = typeof __propDef.props;
export type IoIosExpandEvents = typeof __propDef.events;
export type IoIosExpandSlots = typeof __propDef.slots;
export default class IoIosExpand extends SvelteComponentTyped<IoIosExpandProps, IoIosExpandEvents, IoIosExpandSlots> {
}
export {};
