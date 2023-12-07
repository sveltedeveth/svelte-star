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
export type IoIosFlameProps = typeof __propDef.props;
export type IoIosFlameEvents = typeof __propDef.events;
export type IoIosFlameSlots = typeof __propDef.slots;
export default class IoIosFlame extends SvelteComponentTyped<IoIosFlameProps, IoIosFlameEvents, IoIosFlameSlots> {
}
export {};
