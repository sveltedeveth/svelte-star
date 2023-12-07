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
export type GiSaphirProps = typeof __propDef.props;
export type GiSaphirEvents = typeof __propDef.events;
export type GiSaphirSlots = typeof __propDef.slots;
export default class GiSaphir extends SvelteComponentTyped<GiSaphirProps, GiSaphirEvents, GiSaphirSlots> {
}
export {};
