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
export type GiKidneysProps = typeof __propDef.props;
export type GiKidneysEvents = typeof __propDef.events;
export type GiKidneysSlots = typeof __propDef.slots;
export default class GiKidneys extends SvelteComponentTyped<GiKidneysProps, GiKidneysEvents, GiKidneysSlots> {
}
export {};
