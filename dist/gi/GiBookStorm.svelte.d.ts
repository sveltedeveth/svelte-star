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
export type GiBookStormProps = typeof __propDef.props;
export type GiBookStormEvents = typeof __propDef.events;
export type GiBookStormSlots = typeof __propDef.slots;
export default class GiBookStorm extends SvelteComponentTyped<GiBookStormProps, GiBookStormEvents, GiBookStormSlots> {
}
export {};
