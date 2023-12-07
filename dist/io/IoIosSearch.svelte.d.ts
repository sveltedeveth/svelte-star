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
export type IoIosSearchProps = typeof __propDef.props;
export type IoIosSearchEvents = typeof __propDef.events;
export type IoIosSearchSlots = typeof __propDef.slots;
export default class IoIosSearch extends SvelteComponentTyped<IoIosSearchProps, IoIosSearchEvents, IoIosSearchSlots> {
}
export {};
