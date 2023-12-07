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
export type GiMarblesProps = typeof __propDef.props;
export type GiMarblesEvents = typeof __propDef.events;
export type GiMarblesSlots = typeof __propDef.slots;
export default class GiMarbles extends SvelteComponentTyped<GiMarblesProps, GiMarblesEvents, GiMarblesSlots> {
}
export {};
