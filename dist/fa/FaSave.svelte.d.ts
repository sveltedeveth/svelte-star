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
export type FaSaveProps = typeof __propDef.props;
export type FaSaveEvents = typeof __propDef.events;
export type FaSaveSlots = typeof __propDef.slots;
export default class FaSave extends SvelteComponentTyped<FaSaveProps, FaSaveEvents, FaSaveSlots> {
}
export {};
