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
export type FaCutProps = typeof __propDef.props;
export type FaCutEvents = typeof __propDef.events;
export type FaCutSlots = typeof __propDef.slots;
export default class FaCut extends SvelteComponentTyped<FaCutProps, FaCutEvents, FaCutSlots> {
}
export {};
