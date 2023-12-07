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
export type GiGiantProps = typeof __propDef.props;
export type GiGiantEvents = typeof __propDef.events;
export type GiGiantSlots = typeof __propDef.slots;
export default class GiGiant extends SvelteComponentTyped<GiGiantProps, GiGiantEvents, GiGiantSlots> {
}
export {};
