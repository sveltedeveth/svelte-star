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
export type IoIosBaseballProps = typeof __propDef.props;
export type IoIosBaseballEvents = typeof __propDef.events;
export type IoIosBaseballSlots = typeof __propDef.slots;
export default class IoIosBaseball extends SvelteComponentTyped<IoIosBaseballProps, IoIosBaseballEvents, IoIosBaseballSlots> {
}
export {};
