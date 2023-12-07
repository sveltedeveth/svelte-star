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
export type GiBalloonsProps = typeof __propDef.props;
export type GiBalloonsEvents = typeof __propDef.events;
export type GiBalloonsSlots = typeof __propDef.slots;
export default class GiBalloons extends SvelteComponentTyped<GiBalloonsProps, GiBalloonsEvents, GiBalloonsSlots> {
}
export {};
