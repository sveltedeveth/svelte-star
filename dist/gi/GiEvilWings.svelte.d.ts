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
export type GiEvilWingsProps = typeof __propDef.props;
export type GiEvilWingsEvents = typeof __propDef.events;
export type GiEvilWingsSlots = typeof __propDef.slots;
export default class GiEvilWings extends SvelteComponentTyped<GiEvilWingsProps, GiEvilWingsEvents, GiEvilWingsSlots> {
}
export {};
