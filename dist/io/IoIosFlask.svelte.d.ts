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
export type IoIosFlaskProps = typeof __propDef.props;
export type IoIosFlaskEvents = typeof __propDef.events;
export type IoIosFlaskSlots = typeof __propDef.slots;
export default class IoIosFlask extends SvelteComponentTyped<IoIosFlaskProps, IoIosFlaskEvents, IoIosFlaskSlots> {
}
export {};
