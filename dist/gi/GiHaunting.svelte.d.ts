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
export type GiHauntingProps = typeof __propDef.props;
export type GiHauntingEvents = typeof __propDef.events;
export type GiHauntingSlots = typeof __propDef.slots;
export default class GiHaunting extends SvelteComponentTyped<GiHauntingProps, GiHauntingEvents, GiHauntingSlots> {
}
export {};
