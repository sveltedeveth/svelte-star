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
export type GiWormsProps = typeof __propDef.props;
export type GiWormsEvents = typeof __propDef.events;
export type GiWormsSlots = typeof __propDef.slots;
export default class GiWorms extends SvelteComponentTyped<GiWormsProps, GiWormsEvents, GiWormsSlots> {
}
export {};
