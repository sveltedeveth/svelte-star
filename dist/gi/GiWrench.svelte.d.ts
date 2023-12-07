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
export type GiWrenchProps = typeof __propDef.props;
export type GiWrenchEvents = typeof __propDef.events;
export type GiWrenchSlots = typeof __propDef.slots;
export default class GiWrench extends SvelteComponentTyped<GiWrenchProps, GiWrenchEvents, GiWrenchSlots> {
}
export {};
