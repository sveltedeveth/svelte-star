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
export type GiMetroidProps = typeof __propDef.props;
export type GiMetroidEvents = typeof __propDef.events;
export type GiMetroidSlots = typeof __propDef.slots;
export default class GiMetroid extends SvelteComponentTyped<GiMetroidProps, GiMetroidEvents, GiMetroidSlots> {
}
export {};
