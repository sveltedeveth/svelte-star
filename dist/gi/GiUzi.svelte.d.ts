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
export type GiUziProps = typeof __propDef.props;
export type GiUziEvents = typeof __propDef.events;
export type GiUziSlots = typeof __propDef.slots;
export default class GiUzi extends SvelteComponentTyped<GiUziProps, GiUziEvents, GiUziSlots> {
}
export {};
