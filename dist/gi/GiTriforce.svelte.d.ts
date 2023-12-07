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
export type GiTriforceProps = typeof __propDef.props;
export type GiTriforceEvents = typeof __propDef.events;
export type GiTriforceSlots = typeof __propDef.slots;
export default class GiTriforce extends SvelteComponentTyped<GiTriforceProps, GiTriforceEvents, GiTriforceSlots> {
}
export {};
